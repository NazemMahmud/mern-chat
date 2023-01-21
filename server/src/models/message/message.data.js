import { MessageModel } from "./message.schema.js";


/**
 * create new message of a user ( who sends the message )
 * @returns {Promise<Query<any, any, {}, any>>}
 * @param senderId
 * @param message
 */
const create = async (senderId, message) => {
    return MessageModel.create({
        sender: senderId,
        content: message,
        type: "DIRECT",
    });
};


const findLastConversationMessage = async (messages) => {
    return MessageModel.findOne({
        _id: { $in: messages } }, {content: 1, createdAt: 1, _id: 0})
        .sort({ updatedAt: -1 }).lean();
};

export const Message = {
    model: MessageModel,
    create,
    findLastConversationMessage,
};
