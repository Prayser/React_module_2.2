import axios from "axios";
import { getUserAction } from "../store/userReducer";

export default class UserService {
    static async postUser(email, password) {
        const response = axios.post('https://api.englishpatient.org/login', {
            email,
            password,
        })
        return response;
    }

    static async getUser(token) {
        const response = await axios.get('https://api.englishpatient.org/users/me', {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
        return response.data;

    }

    static getUserSync(token) {
        return function (dispath) {
            axios.get('https://api.englishpatient.org/users/me', {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            }).then(response => dispath(getUserAction(response.data)))
        }

    }
}