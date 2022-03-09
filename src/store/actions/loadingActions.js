import * as types from '../types/ActionTypes'

export function onLoadingAction() {
    return { type: types.ON_LOADING }
}

export function offLoadingAction() {
    return { type: types.OFF_LOADING }
}
