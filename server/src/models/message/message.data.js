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
}


export const Message = {
    model: MessageModel,
    create,
};
