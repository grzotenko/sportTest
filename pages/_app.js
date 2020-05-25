// import App from 'next/app'
// import '../assets/scss/style.scss'
import withReduxSaga from 'next-redux-saga'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import createStore from '../store/store'

const MyApp = (props) => {
  // eslint-disable-next-line react/prop-types
  const { Component, pageProps, store } = props
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

// MyApp.defaultProps = defaultProps
// MyApp.propTypes = propTypes

export default withRedux(createStore)(withReduxSaga(MyApp))
