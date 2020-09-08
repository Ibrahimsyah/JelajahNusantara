import { SET_ACCOUNT } from './ActionTypes'

export const setAccount = account => {
    return {
        type: SET_ACCOUNT,
        payload: account
    }
}