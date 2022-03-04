
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

// let action = { type: "", payload: '' }
const defaultState = {
    isAuth: (localStorage.getItem('auth') === 'true') || false, // Если строка в localStorage это 'true', то вернёт true, в любом другом случае false 
    token: localStorage.getItem('token') || NaN
}

export const loginReducer = (state = defaultState, action) => {
    switch (action.type) {

        case LOGIN_USER:
            // localStorage.setItem('auth', 'true');
            localStorage.setItem('token', `${action.payload}`);
            return { ...state, isAuth: true, token: action.payload, }

        case LOGOUT_USER:
            // localStorage.setItem('auth', 'false');
            localStorage.setItem('token', NaN);
            return { ...state, isAuth: false, token: NaN, }

        default:
            return state
    }
}

export function loginUserAction(payload) {
    return { type: LOGIN_USER, payload }
}

export function logoutUserAction() {
    return { type: LOGOUT_USER }
}
