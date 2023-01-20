import { Message } from "../../models/message/message.data.js";
import { Conversation } from "../../models/conversation/conversation.data.js";
import { updateChatHistory } from "./notifyConnectedSocketsHandler.js";

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
    let conversation = await Conversation.findOne(receiverId, senderId);

    /**
     * if conversation exists, add new message to that conversation & updates chat history
     * else: create new conversation and update chat history of the participants
     */
    if (conversation) {
        conversation.messages = [...conversation.messages, newMessage._id];
        await conversation.save();
    }
    else {
        conversation = await Conversation.create(receiverId, senderId, newMessage);
    }

    // update the chat history (track the message ids) of the participants
    updateChatHistory(conversation._id.toString());
};

export { directMessageHandler };
