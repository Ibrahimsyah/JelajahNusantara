import { combineReducers } from 'redux'
import AccountReducer from './account.reducer'
import SavegameReducer from './savegame.reducer'

export default combineReducers({
    account: AccountReducer,
    savegame: SavegameReducer
})
