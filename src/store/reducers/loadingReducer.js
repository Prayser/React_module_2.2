import * as types from '../types/ActionTypes'

// let action = { type: "", payload: '' }
const defaultState = {
    loading: false,
}

export const loadingReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.ON_LOADING:
            return { loading: true, }
        case types.OFF_LOADING:
            return { loading: false, }
        default:
            return state
    }
}
