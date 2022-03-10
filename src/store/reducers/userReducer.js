import * as types from '../types/ActionTypes'

const defaultState = {
    isAuth: (localStorage.getItem('auth') === 'true') || false, // Если строка в localStorage это 'true', то вернёт true, в любом другом случае false 
    token: localStorage.getItem('token') || NaN,
    user: {}
}

// let action = { type: "", payload: '' }
export const userReducer = (state = defaultState, action) => {
    switch (action.type) {

        case types.LOGIN_USER:
            localStorage.setItem('token', `${action.payload}`);
            return { ...state, isAuth: true, token: action.payload, }

        case types.GET_USER:
            localStorage.setItem('auth', 'true');
            return { ...state, user: action.payload, }

        case types.LOGOUT_USER:
            localStorage.setItem('token', NaN);
            localStorage.setItem('auth', 'false');
            return { ...state, isAuth: false, token: NaN, user: {}, }

        default:
            return state
    }
}
