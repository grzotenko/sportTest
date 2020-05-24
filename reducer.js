import { actionTypes } from './actions'

export const exampleInitialState = {
  leaguesData: null,
  seasonsData: null,
  fixtureData: null,
  lineupData: null,
  error: false,
}

function reducer(state = exampleInitialState, action) {

  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case actionTypes.LOAD_LEAGUES_SUCCESS:
      return {
        ...state,
        ...{ leaguesData: action.data },
      }

    case actionTypes.LOAD_FIXTURES_SUCCESS:
      return {
        ...state,
        ...{ fixtureData: action.data },
      }

    case actionTypes.LOAD_LINEUP_SUCCESS:
      return {
        ...state,
        ...{ lineupData: action.data },
      }

    case actionTypes.LOAD_SEASONS_SUCCESS:
      return {
        ...state,
        ...{ seasonsData: action.data },
      }
    
    default:
      return state
  }
}

export default reducer
