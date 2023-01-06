import { io } from 'socket.io-client';
import { store } from "../redux/store";
import { setOnlineUsers } from "../redux/friends";

let socket ;

const createConnection = (accessToken) => {
    socket = io(process.env.REACT_APP_SOCKET_SERVER_URL, {
        auth: { token: accessToken }
    });
};

const connectWithSocketServer = (accessToken) => {
    createConnection(accessToken);

    socket.on("connect", () => {
        console.log('socket info: ', socket)
    });

    socket.on("online-users", (data) => {
        console.log("socket online users: ", data);
        store.dispatch(setOnlineUsers(data));
    });

};

const fetchChatHistory = ({ receiverId }) => {
    socket.emit('get-direct-chat-history', { receiverId })
}

const sendDirectMessage = (data =  {message: "", receiverUserId: ""}) => {
    socket.emit("direct-message", data)
}

export { connectWithSocketServer, fetchChatHistory, sendDirectMessage };
