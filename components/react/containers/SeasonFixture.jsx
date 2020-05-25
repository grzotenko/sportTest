import React, {useState} from 'react'
import map from 'lodash/map'
import {useSelector, useDispatch} from 'react-redux'
import FixtureLineup from './FixtureLineup'
import { loadLineup } from '../../../actions'
import {fixtureTempData} from '../../../temp/tempData'

const SeasonFixture = ({seasonId, title}) => {
    const dispatch = useDispatch()
    const [fixtureData, setFixtureData] = useState(useSelector(state => state.fixtureData))
    if (fixtureData === null){
      setFixtureData(fixtureTempData)
    }
    const fixtureInfo = useSelector(state => state.fixtureInfo)
    const fixtureLink = (id) => {
      if (id != fixtureInfo.id) {
        dispatch(loadLineup(id))
      }
    }

    return (
      <div>
          <h1>{title}</h1>
          <div className="all_tournaments">
              {fixtureData && map(fixtureData, (item, key) => {
                  return <a key={key} onClick={() => fixtureLink(item.fixture.id)} >{item.teams.home.name} : {item.teams.away.name}</a>;
              })
              }
          </div>
      </div>
    )
  }
export default SeasonFixture
