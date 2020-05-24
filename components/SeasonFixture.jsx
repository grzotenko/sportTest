import React, {useState} from 'react'
import map from 'lodash/map'
import {useSelector, useDispatch} from 'react-redux'
import FixtureLineup from './FixtureLineup'
import { loadLineup } from '../actions'
import fixtureTempData from '../temp/tempData'

const SeasonFixture = ({seasonId, title}) => {
    const dispatch = useDispatch()
    const [fixtureData, setFixtureData] = useState(useSelector(state => state.fixtureData))
    if (fixtureData === null){
      setFixtureData(fixtureTempData)
    }

    const [fixtureStatus, setFixtureStatus] = useState(false)
    const [fixtureId, setFixtureId] = useState(null)
    
    const fixtureLink = (id) => {
      if (id != fixtureId) {
        dispatch(loadLineup(id))
        setFixtureStatus(true)
        setFixtureId(id)
      }
    }

    return (
      <div className="m-l-250">
          <div>
            <h1>{title}</h1>
            <div className="all_tournaments">
                {fixtureData && map(fixtureData, (item, key) => {
                    return <a key={key} onClick={() => fixtureLink(item.fixture.id)} >{item.teams.home.name} : {item.teams.away.name}</a>;
                })
                }
            </div>
          </div>
          {fixtureStatus && (
            <FixtureLineup fixtureId = {fixtureId}/>
          )}
      </div>
    )
  }
export default SeasonFixture
