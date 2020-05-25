import '../styles/application.scss'
import PropTypes from 'prop-types'
import React from 'react'
import Head from 'next/head'

import NavHeader from './react/components/NavHeader/index'
import FooterBar from './react/components/Footer'

const defaultProps = {
  children: null,
}

const propTypes = {
  children: PropTypes.object,
}

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{'Test front'}</title>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css'
          integrity='sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk='
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/css/flag-icon.min.css'
          integrity='sha256-YjcCvXkdRVOucibC9I4mBS41lXPrWfqY2BnpskhZPnw='
          crossOrigin='anonymous'
        />
      </Head>
      <main>
        <div className='site'>
          <NavHeader />
          <main className='wrapper'>
            <div className='container-fluid'>{children}</div>
          </main>
          <FooterBar />
        </div>
      </main>
    </>
  )
}
Layout.defaultProps = defaultProps
Layout.propTypes = propTypes
export default Layout
