import { ConversationModel } from "./conversation.schema.js";


/**
 * get the conversation between the sender(logged in user) and receiver
 * @returns {Promise<Query<any, any, {}, any>>}
 * @param receiverId
 * @param senderId
 */
const findOne = async (receiverId, senderId) => {
    return ConversationModel.findOne({
        participants: { $all: [receiverId, senderId] },
        type: "DIRECT", // ??
    });
}


/**
 * get the conversation by specific id populate with message and user data
 * @param conversationId
 * @returns {Promise<Query<any, any, {}, any>>}
 */
const findById = async (conversationId) => {
    return ConversationModel.findById(conversationId).populate({
        path: "messages",
        model: "Message",
        populate: {
            path: "author",
            select: "username _id",
            model: "User"
        }
    });
};


export const Conversation = {
    model: ConversationModel,
    findOne,
    findById
};
