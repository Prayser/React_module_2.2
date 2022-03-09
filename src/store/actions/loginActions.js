import * as types from '../types/ActionTypes'

export function loginUserAction(payload) {
    return { type: types.LOGIN_USER, payload }
}

export function logoutUserAction() {
    return { type: types.LOGOUT_USER }
}
