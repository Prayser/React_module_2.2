
const GET_USER = 'GET_USER';
const DELETE_USER = 'DELETE_USER';

// let action = { type: "", payload: '' }
const defaultState = {
    user: {}
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USER:
            localStorage.setItem('auth', 'true');
            return { ...state, user: action.payload, }
        case DELETE_USER:
            localStorage.setItem('auth', 'false');
            return { ...state, user: {}, }
        default:
            return state
    }
}

export function getUserAction(payload) {
    return { type: GET_USER, payload }
}

export function deleteUserAction() {
    return { type: DELETE_USER }
}
