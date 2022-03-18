import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ACTIONS from "config/actions";

export interface CounterState {
  roomName: string;
  userName: string;
}

const initialState: CounterState = {
  roomName: '',
  userName: '',
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    joinRoom: (state, action: PayloadAction<any>) => {
      state.roomName = action.payload.roomName;
      state.userName = action.payload.userName;
      localStorage.setItem('roomName', action.payload.roomName);
      localStorage.setItem('userName', action.payload.userName);
      localStorage.setItem('name', action.payload.userName);
      location.href="https://cool-server-app.herokuapp.com/rooms";
      // document.socket.emit(ACTIONS.JOIN, {roomId: -1, user: { name: state.userName, roomName: state.roomName}});
    },
  },
});

export const { joinRoom } = chatSlice.actions;

export default chatSlice.reducer;
