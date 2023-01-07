import { Message } from "../../models/message/message.data.js";
import { Conversation } from "../../models/conversation/conversation.data.js";

/**
 * create new message
 * create new conversation if not exist
 * update chat history
 * @param socket
 * @param data
 * @returns {Promise<void>}
 */
const directMessageHandler = async (socket, data) => {
    const { receiverId, message } = data;
    const senderId = socket.user.id;

    const newMessage = await Message.create(senderId, message);

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
        const newConversation = await Conversation.create(receiverId, senderId, newMessage);

        // update the chat history of the participants
    }
};

export { directMessageHandler };
