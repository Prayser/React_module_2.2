import axios from "axios";

export const baseURL = 'https://api.englishpatient.org';

export default class UserService {
    static async postUser(email, password) {
        const response = axios.post(baseURL + '/login', {
            email,
            password,
        })
        return response;
    }

    static async getUser(token) {
        const response = await axios.get(baseURL + '/users/me', {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
        return response.data;

    }

}