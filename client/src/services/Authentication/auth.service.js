import {instance as axios} from "../../config/axios";

export const login = async data => {
    // REMINDER: no need to receive id, it will be in token
    return axios.post('/auth/login', data);
}


export const registration = data => {
    return axios.post('/auth/signup', data);
}
