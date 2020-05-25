import { call, put, takeEvery } from 'redux-saga/effects'

import { FETCH_TEAM_COMPOSITION_REQUESTED } from '../store/teamCompositions/actionTypes'
import {
  fetchTeamCompositionFailed,
  fetchTeamCompositionSucceeded,
} from '../store/teamCompositions/action'
import apiClient from '../lib/api-client'

const _getLeaguesRequested = () =>
  apiClient
    .get('/leagues')
    .then((response) => {
      console.log('<<<<<<', '_getTeamCompositionsRequested', response)
      return response
    })
    .catch((e) => e.response)

function* fetchLeagues(actions) {
  try {
    const response = yield call(_getLeaguesRequested, actions.payload)
    console.log('<<<<<<', '_getLeaguesRequested', response)
    yield put(fetchTeamCompositionSucceeded(response.data.team_compositions))
  } catch (error) {
    yield put(fetchTeamCompositionFailed(error))
  }
}

function* leaguesSaga() {
  yield takeEvery(FETCH_LOAD_LEAGUES_REQUESTED, fetchLeagues)
}

export default leaguesSaga
