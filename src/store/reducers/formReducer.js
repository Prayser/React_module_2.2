
const CHANGE_EMAIL = 'CHANGE_EMAIL';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

// let action = { type: "", payload: '' }
const defaultState = {
    email: 'tulyavkoilya@yandex.ru',
    password: 'test123123',
}

export const formReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_EMAIL:
            return { ...state, email: action.payload }
        case CHANGE_PASSWORD:
            return { ...state, password: action.payload }
        default:
            return state
    }
}

export function changeEmailAction(payload) {
    return { type: CHANGE_EMAIL, payload }
}

export function changePasswordAction(payload) {
    return { type: CHANGE_PASSWORD, payload }
}
