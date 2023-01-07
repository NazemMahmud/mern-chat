import { ConversationModel } from "./conversation.schema.js";

/**
 * get the conversation between the sender(logged in user) and receiver
 * @returns {Promise<Query<any, any, {}, any>>}
 * @param receiverId
 * @param senderId
 * @param type (DIRECT | GROUP)
 */
const findOne = async (receiverId, senderId, type = '') => {
    const condition = {
        participants: { $all: [receiverId, senderId] }
    };

    if (type === 'DIRECT') {
        condition.type = type;
    }
    return ConversationModel.findOne(condition);
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


/**
 * create new conversation
 * @param receiverId
 * @param senderId
 * @param message
 * @returns {Promise<HydratedDocument<any, {}, {}>>}
 */
const create = async (receiverId, senderId, message) => {
    return ConversationModel.create({
        participants: [senderId, receiverId],
        messages: [message._id],
    });
};


export const Conversation = {
    model: ConversationModel,
    findOne,
    findById,
    create,
};
