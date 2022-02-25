
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

// let action = { type: "", payload: '' }
const defaultState = {
    isAuth: false,
    user: {}
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, isAuth: true, user: action.payload, }
        case LOGOUT_USER:
            return { ...state, isAuth: false, user: {}, }
        default:
            return state
    }
}

export function loginUserAction(payload) {
    return { type: LOGIN_USER, payload }
}

export function logoutUserAction(payload) {
    return { type: LOGOUT_USER, payload }
}
