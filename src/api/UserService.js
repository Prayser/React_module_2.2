import axios from "axios";
import { offLoadingAction, onLoadingAction } from "../store/reducers/loadingReducer";
import { getUserAction } from "../store/reducers/userReducer";

const baseURL = 'https://api.englishpatient.org';

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

    static getUserSync(token) {
        return function (dispath) {
            dispath(onLoadingAction())
            axios.get(baseURL + '/users/me', {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                dispath(getUserAction(response.data))
                dispath(offLoadingAction());
            })
        }

    }
}