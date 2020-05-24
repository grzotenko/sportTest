import Link from 'next/link'
import React, {useState} from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import LeagueSeasons from './LeagueSeasons'
import {loadSeasons} from '../actions'
import FixtureLineup from './FixtureLineup'
const League = ({error, leaguesData, title, dispatch}) => {

  const [leagueStatus, setLeagueStatus] = useState(false)
  const [leagueId, setLeagueId] = useState(null)

  const leagueLink = (id) => {
    if (id != leagueId) {
      dispatch(loadSeasons(id))
      setLeagueStatus(true)
      setLeagueId(id)
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
      {/* <FixtureLineup fixtureId = {5}/>
      {leagueStatus && (
         <LeagueSeasons leagueId = {leagueId} title="Seasons"/>
      )} */}
    </div>
  )
}

export default connect((state) => state)(League)
