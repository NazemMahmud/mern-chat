import { Conversation } from "../../models/conversation/conversation.data.js";
import { getServerSocketInstance, getActiveConnections } from "../connectedUsers.js";


/**
 * at first get chat history from conversation populate with message and user table
 * Emit through socket, the messages and participants for specific socket id, front will receive it [initial chat history update]
 * Emit another: for all active connection of that conversation, for both side
 *
 * @param conversationId
 * @param toSpecificSocketId
 * @returns {Promise<*>}
 */
const updateChatHistory = async (conversationId, toSpecificSocketId= null) => {

    // get the conversation's chat history
    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
        return;
    }

    const io = getServerSocketInstance();

    if (toSpecificSocketId) {
        // TODO: initial chat history update
        return io.to(toSpecificSocketId).emit("get-direct-chat-history", {
            messages: conversation.messages,
            participants: conversation.participants
        });
    }

    // get the participant's active socket connections(socket ids)
    conversation.participants.forEach((participantId) => {

        const activeConnections = getActiveConnections(participantId.toString());

        // send the updated chat history to all the active connections of this user(participantId) (both sender & receiver)
        activeConnections.forEach((socketId) => {
            io.to(socketId).emit("get-direct-chat-history", {
                messages: conversation.messages,
                participants: conversation.participants
            });
        });
    })
};


export { updateChatHistory };
