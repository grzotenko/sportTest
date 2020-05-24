export const actionTypes = {
  FAILURE: 'FAILURE',
  LOAD_LEAGUES: 'LOAD_LEAGUES',
  LOAD_LEAGUES_SUCCESS: 'LOAD_LEAGUES_SUCCESS',
  LOAD_SEASONS: 'LOAD_SEASONS',
  LOAD_SEASONS_SUCCESS: 'LOAD_SEASONS_SUCCESS',
  LOAD_FIXTURES_SUCCESS: 'LOAD_FIXTURES_SUCCESS',
  LOAD_FIXTURES: 'LOAD_FIXTURES',
  LOAD_LINEUP_SUCCESS: 'LOAD_LINEUP_SUCCESS',
  LOAD_LINEUP: 'LOAD_LINEUP',
}

export const failure = (error) => {
  return {
    type: actionTypes.FAILURE,
    error,
  }
}

export const loadLeagues = () => {
  return { type: actionTypes.LOAD_LEAGUES }
}

export const loadSeasons = (id) =>{
  return {
    type: actionTypes.LOAD_SEASONS,
    payload: id,
  }
}

export const loadLineup = (id) =>{
  return {
    type: actionTypes.LOAD_LINEUP,
    payload: id,
  }
}

export const loadFixtures = (leagueId, id) =>{
  return {
    type: actionTypes.LOAD_FIXTURES,
    payload: {
      "idLeague": leagueId,
      "yearSeason": id,
    },
  }
}

export const loadLeaguesSuccess = (data) => {
  return {
    type: actionTypes.LOAD_LEAGUES_SUCCESS,
    data,
  }
}

export const loadLineupSuccess = (data) => {
  return {
    type: actionTypes.LOAD_LINEUP_SUCCESS,
    data,
  }
}

export const loadSeasonsSuccess = (data) => {
  return {
    type: actionTypes.LOAD_SEASONS_SUCCESS,
    data,
  }
}

export const loadFixturesSuccess = (data) => {
  return {
    type: actionTypes.LOAD_FIXTURES_SUCCESS,
    data,
  }
}