import produce from 'immer'
// import reject from 'lodash/reject'
// import isNull from 'lodash/isNull'

import {
  FETCH_TEAM_COMPOSITION_REQUESTED,
  FETCH_TEAM_COMPOSITION_SUCCEEDED,
  FETCH_TEAM_COMPOSITION_FAILED,
} from './actionTypes'

export const defaultArticleComments = {
  team_compositions: [],
}

const initialState = defaultArticleComments
/* eslint no-param-reassign: "error" */
const commentsReducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAM_COMPOSITION_REQUESTED:
      return draft

    case FETCH_TEAM_COMPOSITION_SUCCEEDED:
      draft.team_compositions = action.payload.team_compositions
      return draft

    case FETCH_TEAM_COMPOSITION_FAILED:
      draft.error = action.payload.error
      return draft

    default:
      return draft
  }
})

export default commentsReducer
