import { combineReducers } from 'redux'
import { errorReducer } from '@reducers/errorReducer'

export const rootReducer = combineReducers({
  errorHandler: errorReducer
})
