import React from 'react'
import { connect } from 'react-redux'
import { loadLeagues } from '../actions'
import League from '../components/League'

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx
    if (!store.getState().leaguesData) {
      store.dispatch(loadLeagues())
    }
    return { isServer }
  }

  render() {
    return <League title="Leagues" />
  }
}

export default connect()(Index)
