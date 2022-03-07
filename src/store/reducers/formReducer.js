
const CHANGE_EMAIL = 'CHANGE_EMAIL';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

const CORRECT_LOGIN = 'CORRECT_LOGIN';
const INCORRECT_LOGIN = 'INCORRECT_LOGIN';

const defaultState = {
    correct: true,
    email: 'tulyavkoilya@yandex.ru',
    password: 'test123123',
}

// let action = { type: "", payload: '' }
export const formReducer = (state = defaultState, action) => {
    switch (action.type) {

        case CHANGE_EMAIL:
            return { ...state, email: action.payload }
        case CHANGE_PASSWORD:
            return { ...state, password: action.payload }

        case CORRECT_LOGIN:
            return { ...state, correct: true }
        case INCORRECT_LOGIN:
            return { ...state, correct: false }

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

export function correctLoginAction() {
    return { type: CORRECT_LOGIN }
}
export function incorrectLoginAction() {
    return { type: INCORRECT_LOGIN }
}

