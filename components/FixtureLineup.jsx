import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import head from 'lodash/head'
import concat from 'lodash/concat'
import forEach from 'lodash/forEach'
import last from 'lodash/last'
import SoccerLineUp from 'react-soccer-lineup'
import {lineupTempData} from '../temp/tempData'

const FixtureLineup = (fixtureId) => {
    const [lineupData, setLineupData] = useState(useSelector(state => state.lineupData))
    const [homeTeam, setHomeTeam] = useState({"color": "red", "squad": { "gk": {}, "df": [], "cm": [], "fw": [] }})
    const [awayTeam, setAwayTeam] = useState({"color": "blue", "squad": { "gk": {}, "df": [], "cm": [], "fw": [] }})
    if (lineupData === null){
        setLineupData(lineupTempData)
    }
    const getStartXI = (startXI, team) => {
        forEach(startXI, item => {
            switch(item.player.pos){
                case "G":
                    team.squad.gk = item
                    break
                case "D":
                    team.squad.df = concat(team.squad.df, item)
                    break
                case "M":
                    team.squad.cm = concat(team.squad.cm, item)
                    break
                case "F":
                    team.squad.fw = concat(team.squad.fw, item)
                    break
                default:
                    break
            }
        })
        return team
    }

    useEffect(() => {
        setHomeTeam(getStartXI(head(lineupData.response).startXI, homeTeam))
        setAwayTeam(getStartXI(last(lineupData.response).startXI, awayTeam))
    }, [])
    
    return (
        <SoccerLineUp
            size={ "small" }
            color={ "lightseagreen" }
            pattern={ "circles" }
            homeTeam={ homeTeam }
            awayTeam={ awayTeam }
        />
    )

}
export default FixtureLineup