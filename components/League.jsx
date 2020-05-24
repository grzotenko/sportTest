import React, {useState} from 'react'
import { connect, useSelector } from 'react-redux'
import map from 'lodash/map'
import LeagueSeasons from './LeagueSeasons'
import FixtureLineup from './FixtureLineup'
import SeasonFixture from './SeasonFixture'
import {loadSeasons, changeLeagueInfo} from '../actions'

const League = ({error, leaguesData, title, dispatch}) => {

  const leagueInfo = useSelector(state => state.leagueInfo)
  const seasonInfo = useSelector(state => state.seasonInfo)
  const fixtureInfo = useSelector(state => state.fixtureInfo)
  
  const leagueLink = (id) => {
    if (id != leagueInfo.id) {
      dispatch(loadSeasons(id))
    }
  }
  
  return (
    <div className="main">
      <div>
        <h1>{title}</h1>
        <div className="all_tournaments">
          {leaguesData && map(leaguesData.response, (item, key) => {
              return <a key={key} onClick={() => leagueLink(item.league.id)} >{item.league.name}</a>;
            })
          }
        </div>
        
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      </div>
      
      {leagueInfo.status && (
         <LeagueSeasons leagueId = {leagueInfo.id} title="Seasons"/>
      )} 

      {seasonInfo.status && (
         <SeasonFixture seasonId = {seasonInfo.id} title="Matches"/>
      )} 

      {fixtureInfo.status && (
        <FixtureLineup fixtureId = {fixtureInfo.id}/>
      )}
    </div>
  )
}

export default connect((state) => state)(League)
