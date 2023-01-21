import {authInstance as axios} from "../utility/axios";


export const getUsersWithLastConversationMessage = async () => {
    return axios.get('/users/conversation-message');
}
