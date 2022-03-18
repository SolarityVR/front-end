import io from 'socket.io-client'

const  options = {
  'force new connection':true,
  reconnectionAttempt:'Infinity',
  timeout:10000,
  transport:['websocket'],
  rejectUnauthorized: false,
}

const socket = io.connect(process.env.SERVER_URL, options)

export default socket
