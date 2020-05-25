import { combineReducers } from 'redux'

import teamCompositions from './teamCompositions/reducer'

const rootReducer = combineReducers({
  teamCompositions,
})

export default rootReducer
