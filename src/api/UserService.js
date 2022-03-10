import axios from "axios";

export const baseURL = 'https://api.englishpatient.org';

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});


export default class UserService {
    static async postUser(email, password) {
        const response = axios.post(baseURL + '/login', {
            email,
            password,
        })
        return response;
    }

    static async getUser() {
        const response = await axios.get(baseURL + '/users/me')
        return response.data;
    }

}