import React, {useState} from 'react'
import map from 'lodash/map'
import {useSelector, useDispatch} from 'react-redux'
import SeasonFixture from './SeasonFixture'
import { loadFixtures } from '../actions'
import seasonTempData from '../temp/tempData'

const LeagueSeasons = ({leagueId, title}) => {
    const dispatch = useDispatch()
    const [seasonsData, setSeasonsData] = useState(useSelector(state => state.seasonsData))
    if (seasonsData === null){
      setSeasonsData(seasonTempData)
    }
    
    const [seasonStatus, setSeasonStatus] = useState(false)
    const [seasonId, setSeasonId] = useState(null)
    
    const seasonLink = (id) => {  
      if (id != seasonId) {
        dispatch(loadFixtures(leagueId, id))
        setSeasonStatus(true)
        setSeasonId(id)
      }
    }

    return (
      <div className="main">
        <div>
          <h1>{title}</h1>
          <div className="all_tournaments">
            {seasonsData && map(seasonsData, (item, key) => {
                return <a key={key} onClick={() => seasonLink(item.year)} >{item.year}</a>;
              })
            }
          </div>
        </div>
          
        {seasonStatus && (
          <SeasonFixture seasonId = {seasonId} title="Matches"/>
        )}
      </div>
    )
  }
export default LeagueSeasons
