import * as types from '../types/ActionTypes'

// let action = { type: "", payload: '' }
const defaultState = {
    user: {}
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.GET_USER:
            localStorage.setItem('auth', 'true');
            return { ...state, user: action.payload, }
        case types.DELETE_USER:
            localStorage.setItem('auth', 'false');
            return { ...state, user: {}, }
        default:
            return state
    }
}
