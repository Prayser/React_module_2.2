
const ON_LOADING = 'ON_LOADING';
const OFF_LOADING = 'OFF_LOADING';

// let action = { type: "", payload: '' }
const defaultState = {
    loading: false,
}

export const loadingReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ON_LOADING:
            return { loading: true, }
        case OFF_LOADING:
            return { loading: false, }
        default:
            return state
    }
}

export function onLoadingAction() {
    return { type: ON_LOADING }
}

export function offLoadingAction() {
    return { type: OFF_LOADING }
}
