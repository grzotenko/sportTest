import React, {useState} from 'react'
import map from 'lodash/map'
import {useSelector, useDispatch} from 'react-redux'
import SeasonFixture from './SeasonFixture'
import { loadFixtures } from '../../../actions'
import {seasonTempData} from '../../../temp/tempData'

const LeagueSeasons = ({leagueId, title}) => {
    const dispatch = useDispatch()
    const [seasonsData, setSeasonsData] = useState(useSelector(state => state.seasonsData))
    if (seasonsData === null){
      setSeasonsData(seasonTempData)
    }
    const seasonInfo = useSelector(state => state.seasonInfo)
    const seasonLink = (id) => {
      if (id != seasonInfo.id) {
        dispatch(loadFixtures(leagueId, id))
      }
    }

    return (
        <div>
          <h1>{title}</h1>
          <div className="all_tournaments">
            {seasonsData && map(seasonsData, (item, key) => {
                return <a key={key} onClick={() => seasonLink(item.year)} >{item.year}</a>;
              })
            }
          </div>
        </div>
    )
  }
export default LeagueSeasons
