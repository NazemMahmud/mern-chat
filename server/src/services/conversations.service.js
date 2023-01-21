import { User } from "../models/user/user.data.js";
import {Conversation} from "../models/conversation/conversation.data.js";
import {Message} from "../models/message/message.data.js";

const UserModel = User;


export const getLastConversationWithMessage = async loggedInUserId => {
    const users = await UserModel.getUsersNotLoggedIn(loggedInUserId);
    for(let user of users) {
        const conversation = await Conversation.findOne(user._id, loggedInUserId);
        if (conversation) {
            user.conversation = await Message.findLastConversationMessage(conversation.messages);
        }
    }
    return users;
};
