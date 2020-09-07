import { ADD_SCORE, SET_ACCOUNT } from './ActionTypes'

export const addScore = score => {
    return {
        type: ADD_SCORE,
        payload: score
    }
}

export const setAccount = account => {
    return {
        type: SET_ACCOUNT,
        payload: account
    }
}