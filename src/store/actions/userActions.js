import axios from "axios";
import * as types from '../types/ActionTypes'
import { baseURL } from '../../api/UserService';
import { offLoadingAction, onLoadingAction } from "../actions/loadingActions";


export function loginUserAction(payload) {
    return { type: types.LOGIN_USER, payload }
}

export function logoutUserAction() {
    return { type: types.LOGOUT_USER }
}

export function getUserAction(payload) {
    return { type: types.GET_USER, payload }
}



export function getUserSync() {
    return function (dispath) {
        dispath(onLoadingAction())
        axios.get(baseURL + '/users/me')
            .then(response => {
                dispath(getUserAction(response.data))
                dispath(offLoadingAction());
            })
            .catch(error => {
                dispath(logoutUserAction());
                dispath(offLoadingAction());
            })
    }

}