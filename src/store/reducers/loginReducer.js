import * as types from '../types/ActionTypes'

// let action = { type: "", payload: '' }
const defaultState = {
    isAuth: (localStorage.getItem('auth') === 'true') || false, // Если строка в localStorage это 'true', то вернёт true, в любом другом случае false 
    token: localStorage.getItem('token') || NaN
}

export const loginReducer = (state = defaultState, action) => {
    switch (action.type) {

        case types.LOGIN_USER:
            localStorage.setItem('token', `${action.payload}`);
            return { ...state, isAuth: true, token: action.payload, }

        case types.LOGOUT_USER:
            localStorage.setItem('token', NaN);
            return { ...state, isAuth: false, token: NaN, }

        default:
            return state
    }
}
