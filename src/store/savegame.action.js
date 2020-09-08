import { SET_PROGRESS, GET_PROGRESS } from './ActionTypes'

export const setProgress = progress => {
    return {
        type: SET_PROGRESS,
        payload: progress
    }
}

export const getProgress = () => {
    return {
        type: getProgress,
    }
}