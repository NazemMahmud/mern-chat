import { io } from 'socket.io-client';
import { store } from "../redux/store";
import {setOnlineUsers} from "../redux/friends";


const connectWithSocketServer = () => {
    const socket = io(process.env.REACT_APP_SOCKET_SERVER_URL)

    socket.on("connect", () => {
        console.log(
            `Successfully connected to socket.io server. Connected socket.id: ${socket.id}`
        );
        console.log('socket info: ', socket)
    });

    socket.on("online-users", (data) => {
        console.log("socker online users: ", data);
        store.dispatch(setOnlineUsers(data));
    });

};

export { connectWithSocketServer };
