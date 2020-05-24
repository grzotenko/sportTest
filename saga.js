import { all, call, delay, put, take, takeLatest, takeEvery } from 'redux-saga/effects'
import es6promise from 'es6-promise'

import { actionTypes, failure, loadLeaguesSuccess, loadSeasonsSuccess, loadFixturesSuccess, loadLineupSuccess } from './actions'

es6promise.polyfill()

function* loadLeaguesSaga() {
  try {
    const res = yield fetch('https://v3.football.api-sports.io/leagues', {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "fe8f598e638e3949c854bfc4f5ca5d8b"
      }
    })
    const data = yield res.json()

    yield put(loadLeaguesSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* loadSeasonsSaga(action) {
  try {
    const res = yield fetch('https://v3.football.api-sports.io/leagues?id=' + action.payload, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "fe8f598e638e3949c854bfc4f5ca5d8b",
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      }
    })
    const data = yield res.json()
    yield put(loadSeasonsSuccess(data))
    
  } catch (err) {
    yield put(failure(err))
  }
}

function* loadFixturesSaga(action) {
  try {
    const res = yield fetch('https://v3.football.api-sports.io/fixtures?league=' + action.payload.idLeague + '&season=' + action.payload.yearSeason, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "fe8f598e638e3949c854bfc4f5ca5d8b",
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      }
    })
    const data = yield res.json()
    yield put(loadFixturesSuccess(data))
    
  } catch (err) {
    yield put(failure(err))
  }
}


function* loadLineupSaga(action) {
  try {
    const res = yield fetch('https://v3.football.api-sports.io/fixtures/lineups?fixture=' + action.payload, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "fe8f598e638e3949c854bfc4f5ca5d8b",
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      }
    })
    const data = yield res.json()
    yield put(loadLineupSuccess(data))
    
  } catch (err) {
    yield put(failure(err))
  }
}


function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOAD_LEAGUES, loadLeaguesSaga),
    takeEvery(actionTypes.LOAD_SEASONS, loadSeasonsSaga),
    takeEvery(actionTypes.LOAD_FIXTURES, loadFixturesSaga),
    takeEvery(actionTypes.LOAD_LINEUP, loadLineupSaga)
  ])
}

export default rootSaga
