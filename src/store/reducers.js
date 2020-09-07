import { ADD_SCORE, SET_ACCOUNT } from './ActionTypes'

const initState = {
    account: {
        username: '',
        name: ''
    },
    score: 0
}

export default (state = initState, action) => {
    const { payload } = action
    switch (action.type) {
        case ADD_SCORE: {
            return { ...state, score: state.score + payload }
        }
        case SET_ACCOUNT: {
            return { ...state, account: payload }
        }
        default: {
            return state
        }
    }
}