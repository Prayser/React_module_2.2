
import axios from "axios";
import * as types from '../types/ActionTypes'
import { baseURL } from '../../api/UserService';
import { offLoadingAction, onLoadingAction } from "../actions/loadingActions";




export function getUserAction(payload) {
    return { type: types.GET_USER, payload }
}

export function deleteUserAction() {
    return { type: types.DELETE_USER }
}


export function getUserSync(token) {
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