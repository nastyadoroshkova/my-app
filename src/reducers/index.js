import { combineReducers } from 'redux'
import { userReducer } from './user'
import { pageReducer } from './page'

export const rootReduser = combineReducers({
  page: pageReducer,
  user: userReducer,
})
