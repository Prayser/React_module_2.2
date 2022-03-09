import * as types from '../types/ActionTypes'

export function changeEmailAction(payload) {
    return { type: types.CHANGE_EMAIL, payload }
}

export function changePasswordAction(payload) {
    return { type: types.CHANGE_PASSWORD, payload }
}

export function correctLoginAction() {
    return { type: types.CORRECT_LOGIN }
}

export function incorrectLoginAction() {
    return { type: types.INCORRECT_LOGIN }
}

