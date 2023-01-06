import { Message } from "../../models/message/message.data.js";
import { Conversation } from "../../models/conversation/conversation.data.js";

const directMessageHandler = async (socket, data) => {
    console.log('data send: ', data);
    const { receiverId, message } = data;
    const senderId = socket.user.id;

    // TODO: create new message
    const createNewMessage = await Message.create(senderId, message);

    // TODO: create new conversation
    const conversation = await Conversation.findOne(receiverId, senderId);
    if (conversation) {
        /**
         * update chat history with latest conversation data
         */
        console.log('conversation exists');
    }
    else {
        /**
         * create new conversation and
         * update chat history
         */
        console.log("creating a new conversation");
    }
};

export { directMessageHandler };
