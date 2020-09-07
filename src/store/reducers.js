import { ADD_SCORE, SET_ACCOUNT } from './ActionTypes'
import account from '../providers/account'

const initState = {
    account: null,
    score: 0
}

export default (state = initState, action) => {
    const { payload } = action
    switch (action.type) {
        case ADD_SCORE: {
            return { ...state, score: state.score + payload }
        }
        case SET_ACCOUNT: {
            account.saveAccount(payload)
            return { ...state, account: payload }
        }
        default: {
            return state
        }
    }
}