import apiClient from '../lib/api-client'

const getConfederationsAll = params =>
  apiClient.get('/confederations', {
    params,
  })
const getCountryAll = params =>
  apiClient.get('/countries', {
    params,
  })

const getCompetitionAll = params =>
  apiClient.get('/competitions', {
    // params: { country_id }
    params,
  })

const getTeamsAll = params =>
  apiClient.get('/competitions_soccer_teams', {
    params,
  })

const getTeamCompositions = params =>
  apiClient.get('/team_compositions', {
    params,
  })
const getSessions = params =>
  apiClient.get('/seasons', {
    params,
  })

export default {
  getConfederationsAll,
  getCountryAll,
  getCompetitionAll,
  getTeamsAll,
  getTeamCompositions,
  getSessions,
}
