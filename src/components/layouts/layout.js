import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import WellComeArea from './welcome-area'
import Header from './header'
import Footer from './footer'
import './../../assets/css/bootstrap.min.css'
import './../../assets/css/font-awesome.min.css'
import './../../assets/css/style.css'
import './index.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { charset: 'UTF-8' },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { name: "description", content: "Kodoteam is a Mobile App Development Agency." },
            { name: "keywords", content: "kodoteam, mobile app, agency, development, react, react native, graphql, apollo" },
            { name: 'author', content: "kodoteam" }
          ]}

        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <WellComeArea />
        <div
        >
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
