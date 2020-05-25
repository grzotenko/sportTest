import { call, put, takeEvery } from 'redux-saga/effects'

import { FETCH_TEAM_COMPOSITION_REQUESTED } from '../store/teamCompositions/actionTypes'
import {
  fetchTeamCompositionFailed,
  fetchTeamCompositionSucceeded,
} from '../store/teamCompositions/action'
import apiClient from '../lib/api-client'

const _getTeamCompositionsRequested = ({ params }) =>
  apiClient
    .get('/team_compositions', {
      params,
    })
    .then((response) => {
      console.log('<<<<<<', '_getTeamCompositionsRequested', response)
      return response
    })
    .catch((e) => e.response)

function* fetchTeamCompositions(actions) {
  try {
    const response = yield call(_getTeamCompositionsRequested, actions.payload)
    console.log('<<<<<<', 'fetchTeamCompositions', response)
    yield put(fetchTeamCompositionSucceeded(response.data.team_compositions))
  } catch (error) {
    yield put(fetchTeamCompositionFailed(error))
  }
}

function* teamCompositionsSaga() {
  yield takeEvery(FETCH_TEAM_COMPOSITION_REQUESTED, fetchTeamCompositions)
}

export default teamCompositionsSaga
