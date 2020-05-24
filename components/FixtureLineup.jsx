import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import head from 'lodash/head'
import concat from 'lodash/concat'
import forEach from 'lodash/forEach'
import last from 'lodash/last'
import SoccerLineUp from 'react-soccer-lineup'
import lineupTempData from '../temp/tempData'

const FixtureLineup = (fixtureId) => {
    const [lineupData, setLineupData] = useState(useSelector(state => state.lineupData))
    if (lineupData === null){
        setLineupData(lineupTempData)
    }

    const homeTeam = {
        "color": "red",
        "squad": getStartXI(head(lineupData.response).startXI)
    }
    const awayTeam = {
        "color": "blue",
        "squad": getStartXI(last(lineupData.response).startXI)
    }

    const getStartXI = (startXI) => {
        let squad = { "gk": {}, "df": [], "cm": [], "fw": [] }
        forEach(startXI, item => {
            switch(item.player.pos){
                case "G":
                    squad.gk = item
                    break
                case "D":
                    squad.df = concat(squad.df, item)
                    break
                case "M":
                    squad.cm = concat(squad.cm, item)
                    break
                case "F":
                    squad.fw = concat(squad.fw, item)
                    break
                default:
                    break
            }
        })
        return squad
    }

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