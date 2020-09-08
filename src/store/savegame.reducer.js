import { SET_PROGRESS } from './ActionTypes'
import savegame from '../providers/savegame'

const initState = {
    ownedPulauId: [],
    score: 0
}

export default (state = initState, action) => {
    const { payload } = action
    switch (action.type) {
        case SET_PROGRESS: {
            savegame.saveProgress(payload)
            return { ...state, ...payload }
        }
        default: {
            return state
        }
    }
}