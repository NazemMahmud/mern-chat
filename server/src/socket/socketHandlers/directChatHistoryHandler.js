import { Conversation } from "../../models/conversation/conversation.data.js";
import { updateChatHistory } from "./notifyConnectedSocketsHandler.js";


const directChatHistoryHandler = async (socket, receiverId) => {

    try {
        const senderId = socket.user.id;

        // get the conversation between the sender(logged in user) and receiver
        const conversation = await Conversation.findOne(receiverId, senderId);

        if (!conversation) {
            return;
        }

        // update the chat history of the connecting user
        await updateChatHistory(conversation._id.toString(), socket.id);
    } catch(err){
        console.log(err);
    }

}


export default directChatHistoryHandler;
