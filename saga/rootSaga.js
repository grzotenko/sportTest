import { all } from 'redux-saga/effects'

import playersDatatable from './playersDatatable'
import sortFilter from './sortFilter'
import countryList from './countryList'
import confederations from './confederations'
import playersDatatableColumns from './playersDatatableColumns'
import competitions from './competitions'
import teamCompositions from './teamCompositions'
import playerProfile from './playerProfile'
import playerMatches from './playerMatches'

function* rootSaga() {
  yield all([
    playersDatatableColumns(),
    playersDatatable(),
    sortFilter(),
    countryList(),
    confederations(),
    competitions(),
    teamCompositions(),
    playerProfile(),
    playerMatches(),
  ])
}

export default rootSaga
