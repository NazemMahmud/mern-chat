import { io } from 'socket.io-client';
import { store } from "../redux/store";
import { setOnlineUsers } from "../redux/friends";
import {setMessages, setTyping} from "../redux/chat";

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

    /**
     * get messages: 1. initial time, 2. after typing & send something
     * it is only for direct message, not group
     * if sender and receiver id both in the participants list, only then update the message state
     */
    socket.on("get-direct-chat-history", (data) => {
        const { messages, participants } = data;
        const receiverId = store.getState().chat.selectedChatDetails?.receiverId;
        const senderId = (store.getState().auth.userData).id;

        // only update the store with messages if the participant is the one we are currently chatting with
        const isActive = participants.includes(receiverId) && participants.includes(senderId);

        if (isActive) {
            store.dispatch(setMessages(messages));
        }
    });

    socket.on("notify-typing", (data) => {
        const selectedChatDetails = store.getState().chat.selectedChatDetails;
        store.dispatch(setTyping({...selectedChatDetails, typing: data.typing, receiverId: data.senderId}));
    });
};

const fetchChatHistory = ({ receiverId }) => {
    socket.emit('get-direct-chat-history', { receiverId });
};

const sendDirectMessage = (data =  {message: "", receiverUserId: ""}) => {
    socket.emit("new-direct-message", data);
};

const notifyTyping = (receiverId, typing) => {
    socket.emit("notify-typing", { receiverId, typing });
};

export { connectWithSocketServer, fetchChatHistory, sendDirectMessage, notifyTyping };
