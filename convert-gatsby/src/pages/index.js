import React from 'react'
import WellcomeAre from '../components/layouts/welcome-area'
import Layout from '../components/layouts/layout'
import HomeService from '../components/home-services/home-service'
import OurTeam from '../components/team-profiles/our-team'
const IndexPage = () => (
  <Layout>
    <HomeService />
    <OurTeam />
  </Layout>
)

export default IndexPage
