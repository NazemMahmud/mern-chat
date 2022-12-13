import {authInstance as axios} from "../utility/axios";

// get active users
export const getUsers = async () => {
    return axios.get('/users');
}
