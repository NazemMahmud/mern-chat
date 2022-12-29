import { io } from 'socket.io-client';
import { store } from "../redux/store";
import { setOnlineUsers } from "../redux/friends";


const connectWithSocketServer = (accessToken) => {
    const socket = io(process.env.REACT_APP_SOCKET_SERVER_URL, {
        auth: { token: accessToken }
    })

    socket.on("connect", () => {
        console.log('socket info: ', socket)
    });

    socket.on("online-users", (data) => {
        console.log("socket online users: ", data);
        store.dispatch(setOnlineUsers(data));
    });

};

export { connectWithSocketServer };
