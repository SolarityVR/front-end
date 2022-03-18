import { useCallback, useEffect, useRef } from 'react';
import { useStateWithCalllback } from './useStateWithCalllback';
import ACTIONS from '../config/actions';
import freeice from 'freeice';

export const useWebTRTC = (roomId, user) => {
    const [clients, setclients] = useStateWithCalllback([]);
    const audioElements = useRef({});
    const clientsRef = useRef([]);

    const connections = useRef({});
    const localMediaStream = useRef({});

    const provideRef = (instance, userId) => {
        audioElements.current[userId] = instance;
    }

    const addNewClient = useCallback((newClient, cb) => {
        window.audios = audioElements.current;
        const lookingFor = clients.find((cl) => cl.name === newClient.name);
        if (lookingFor === undefined) {
            setclients((prevClients) => [...prevClients, newClient], cb);
        }

        // eslint-disable-next-line
    }, [clients, setclients])

    // capture media
    useEffect(() => {
        const startCapture = async () => {
            localMediaStream.current = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
        }

        startCapture().then(() => {
            addNewClient({ ...user, muted: true }, () => {
                const localAudioElement = audioElements.current[user.name];
                if (localAudioElement) {
                    localAudioElement.volume = 0;
                    localAudioElement.srcObject = localMediaStream.current;
                }
            });
            window.socket.emit(ACTIONS.JOIN, { roomId, user });
        });

        return () => {
            // leaving room
            localMediaStream.current.getTracks().forEach((track) => track.stop())
            // window.socket.emit(ACTIONS.LEAVE, { roomId, user })
        }

        // eslint-disable-next-line
    }, [])
    
    useEffect(() => {
        const handelNewPeer = async ({ peerId, createOffer, user: remoteUser }) => {
            // is already connected then give warning
            if (peerId in connections.current) {
                // console.log('u are ALLLREADY CONNECTED', peerId);
                return;
            }

            connections.current[peerId] = new RTCPeerConnection({
                iceServers: freeice()
            });

            // handle new ice candidate
            connections.current[peerId].onicecandidate = (event) => {
                window.socket.emit(ACTIONS.RELAY_ICE, {
                    peerId,
                    iceCandidate: event.candidate
                });
            }
            
            // handle track on  connection
            connections.current[peerId].ontrack = ({ streams: [remoteStream] }) => {
                addNewClient({ ...remoteUser, muted: true }, () => {
                    if (audioElements.current[remoteUser.name]) {
                        audioElements.current[remoteUser.name].srcObject = remoteStream;
                    } else {
                        let settled = false;

                        const interVal = setInterval(() => {
                            if (audioElements.current(remoteUser.name)) {
                                audioElements.current[remoteUser.name].srcObject = remoteStream;
                                settled = true;
                            }

                            if (settled) {
                                clearInterval(interVal)
                            }
                        }, 1000)

                    };
                });
            };
            // add local track to remmote connections
            localMediaStream.current.getTracks().forEach(track => {
                connections.current[peerId].addTrack(track, localMediaStream.current);
            });

            // check is need to create offers
            if (createOffer) {

                // createoffer
                const offer = await connections.current[peerId].createOffer();

                await connections.current[peerId].setLocalDescription(offer);
                // send offer to another cllient
                window.socket.emit(ACTIONS.RELAY_SDP, {
                    peerId,
                    sessionDescription: offer
                });
            }
        };

        window.socket.on(ACTIONS.ADD_PEER, handelNewPeer);

        return () => {
            window.socket.off(ACTIONS.ADD_PEER);
        }

    }, []);

    // Handle ice candidate
    useEffect(() => {
        window.socket.on(ACTIONS.ICE_CANDIDATE, ({ peerId, iceCandidate }) => {
            // console.log('ices', connections.current[peerId]);
            if (iceCandidate) {
                connections.current[peerId].addIceCandidate(iceCandidate);
            }
        });

        return () => {
            window.socket.off(ACTIONS.ICE_CANDIDATE);
        };
    }, []);

    // Handle session description

    useEffect(() => {
        const setRemoteMedia = async ({
            peerId,
            sessionDescription: remoteSessionDescription,
        }) => {
            connections.current[peerId].setRemoteDescription(
                new RTCSessionDescription(remoteSessionDescription)
            );

            // If session descrition is offer then create an answer
            if (remoteSessionDescription.type === 'offer') {
                const connection = connections.current[peerId];

                const answer = await connection.createAnswer();
                connection.setLocalDescription(answer);

                window.socket.emit(ACTIONS.RELAY_SDP, {
                    peerId,
                    sessionDescription: answer,
                });
            }
        };

        window.socket.on(ACTIONS.SESSION_DESCRIPTION, setRemoteMedia);
        return () => {
            window.socket.off(ACTIONS.SESSION_DESCRIPTION);
        };
    }, []);

    // handell remover peer

    useEffect(() => {
        const handleRemovePeer = ({ peerId, name }) => {

            if (connections.current[peerId]) {
                connections.current[peerId].close();
            }

            delete connections.current[peerId];
            delete audioElements.current[peerId];
            setclients((list) => list.filter((c) => c.name !== name));
        };

        window.socket.on(ACTIONS.REMOVE_PEER, handleRemovePeer);

        return () => {
            window.socket.off(ACTIONS.REMOVE_PEER);
        };

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        clientsRef.current = clients;
    }, [clients])


    // listen  or mute and unmute
    useEffect(() => {
        window.socket.on(ACTIONS.MUTE, ({ peerId, name }) => {
            setMicToggle(true, name);
        })

        window.socket.on(ACTIONS.MUTE, ({ peerId, name }) => {
            setMicToggle(false, name);
        })

        const setMicToggle = (mute, name) => {
            const clientIdx = clientsRef.current.map((client) => client.id).indexOf(name);

            const allConnectedClients = JSON.parse(JSON.stringify(clientsRef.current));

            if (clientIdx > -1) {
                allConnectedClients[clientIdx].muted = mute;
                setclients(allConnectedClients);
            }
        }

    }, [])


    useEffect(() => {
        window.addEventListener('unload', function () {
            // window.socket.emit(ACTIONS.LEAVE, { roomId });
        });
    }, []);

    const handelMute = (isMute, name) => {
        let settled = false;
        let interVel = setInterval(() => {
            if (localMediaStream.current) {
                localMediaStream.current.getTracks()[0].enabled = !isMute;
                if (isMute) {
                    window.socket.emit(ACTIONS.MUTE, { roomId, name });
                } else {
                    window.socket.emit(ACTIONS.UNMUTE, { roomId, name });
                }
                settled = true;
            }

            if (settled) {
                clearInterval(interVel);
            }
        }, 200)
    }

    return { clients, provideRef, handelMute };
}