import { actionTypes } from './actions'

export const exampleInitialState = {
  leaguesData: null,
  seasonsData: null,
  fixtureData: null,
  lineupData: null,
  error: false,
  leagueInfo: {
    status: false,
    id: null
  },
  seasonInfo: {
    status: false,
    id: null
  },
  fixtureInfo: {
    status: false,
    id: null
  },
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
        ...{ fixtureData: action.data, seasonInfo: {status: true, id: action.payload.yearSeason } },
      }

    case actionTypes.LOAD_LINEUP_SUCCESS:
      return {
        ...state,
        ...{ lineupData: action.data, fixtureInfo: {status: true, id: action.payload } },
      }

    case actionTypes.LOAD_SEASONS_SUCCESS:
      return {
        ...state,
        ...{ seasonsData: action.data, leagueInfo: {status: true, id: action.payload } },
      }
    
    default:
      return state
  }
}

export default reducer
