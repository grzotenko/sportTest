import {
  FETCH_TEAM_COMPOSITION_REQUESTED,
  FETCH_TEAM_COMPOSITION_SUCCEEDED,
  FETCH_TEAM_COMPOSITION_FAILED,
} from './actionTypes'

export function fetchTeamCompositionRequested(params) {
  return {
    type: FETCH_TEAM_COMPOSITION_REQUESTED,
    payload: {
      params,
    },
  }
}

export function fetchTeamCompositionSucceeded(team_compositions = []) {
  return {
    type: FETCH_TEAM_COMPOSITION_SUCCEEDED,
    payload: {
      team_compositions,
    },
  }
}
export function fetchTeamCompositionFailed(error) {
  return {
    type: FETCH_TEAM_COMPOSITION_FAILED,
    payload: error,
    error: true,
  }
}
