import * as types from '../types/ActionTypes'

const defaultState = {
    correct: true,
    email: 'tulyavkoilya@yandex.ru',
    password: 'test123123',
}

// let action = { type: "", payload: '' }
export const formReducer = (state = defaultState, action) => {
    switch (action.type) {

        case types.CHANGE_EMAIL:
            return { ...state, email: action.payload }
        case types.CHANGE_PASSWORD:
            return { ...state, password: action.payload }

        case types.CORRECT_LOGIN:
            return { ...state, correct: true }
        case types.INCORRECT_LOGIN:
            return { ...state, correct: false }

        default:
            return state
    }
}
