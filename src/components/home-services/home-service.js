import React from 'react'
import PropTypes from 'prop-types'
import OurTeamDescription from './our-team-description'
import HomeServicesItem from './home-services-item'
import FeatureSteps from './feature-steps'
import Fade from 'react-reveal/Fade'

const HomeService = () => {
  const conditions = {
    con1: "If you have a Big Idea, we can design it, build it, and ship it.",
    con2: "If you need a CTO, we can help guide your technology decisions.",
    con3: "If you already have a team, we can augment it with our experience."
  }
  return (
    <div>
      <ServiceSection>
        <div className="col-lg-5 col-md-12 col-sm-12 align-self-end">
          <OurTeamDescription
            title={"Start-to-end app development agency"}
            content={"This mobile app development agency is all in. Kodoteam is a design and development consultancy focusing on User Experience, Node.js and React. Our team of experienced, full-stack developers and designers help leading companies and funded startups build amazing products. We also lead major open-source projects contributed to and used by developers around the world, including React Boilerplate, React Native, and more."}
            conditions={conditions}
          />
        </div>
        <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-bottom">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Fade bottom>
                <HomeServicesItem
                  icon={"fa fa-clone"}
                  title={"Mobility Services Strategy"}
                  content={"We’re able to translate the market and user data into effective strategies that bring you closer to your business goals."}
                />
              </Fade>
              <Fade bottom>
                <HomeServicesItem
                  icon={"fa fa-connectdevelop"}
                  title={"React Native App Development"}
                  content={"React native development allows reuse of a single code in the various platforms resulting in faster mobile app development."}
                />
              </Fade>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Fade bottom>
                <HomeServicesItem
                  active="active"
                  icon={"fa fa-object-ungroup"}
                  title={"Design & User Experience"}
                  content={"We’ve got a user-centered mobile app design philosophy that guides our every creative move. Our app design department is specialized in decoding the user’s wants and needs, making for well-informed UI and UX decisions."}
                />
              </Fade>
              <Fade bottom>
                <HomeServicesItem
                  icon={"fa fa-line-chart"}
                  title={"Web App Development"}
                  content={"We build powerful and scalable web apps that are custom made using agile development processes leveraging the latest web technologies."}
                />
              </Fade>
            </div>
          </div>
        </div>
      </ServiceSection>
      <ServiceBackground>
        <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 align-self-center">
          <img src="./../../assets/images/mockup/home-mockup.png" className="img-fluid d-block mx-auto" alt="" />
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 align-self-center">
          <ul className="features">
            <Fade top>
              <li>
                <FeatureSteps
                  count={1}
                  title={"Design and UX that ensures your app will be loved and used"}
                  content={"The design and UX philosophy we follow is user-centric. We believe that outstanding design not only makes your app look beautiful but also creates intuitive user experiences. This ensures our solutions are easy to use and fosters repeat usage."}
                />
              </li>
            </Fade>
            <Fade top>
              <li>
                <FeatureSteps
                  count={2}
                  title={"Enterprise-grade development secures reliability and quality"}
                  content={"We are passionate about utilising the newest cutting-edge technologies and possibilities for mobile app development. But we never compromise on the reliable and time-proven development methodologies that ensure succesful, robust and scalable solutions."}
                />
              </li>
            </Fade>
            <Fade top>
              <li>
                <FeatureSteps
                  count={3}
                  title={"A proven and tested process guarantees your success"}
                  content={"Our process is centred around an agile methodology with a focus on providing you full transparency and fast progress. We are religious about quality assurance and high service levels. This is why everything is done in-house by our experienced app developers and specialists in each field."}
                />
              </li>
            </Fade>
            <Fade top>
              <li>
                <FeatureSteps
                  count={4}
                  title={"Guaranteed Support, Improvement And Maintenance"}
                  content={"Kodoteam commits to serving our customers with product maintenance and support throughout their application development and product life-cycle. When customers receive our products, they get assurance that they will be served and supported by Kodoteam throughout the life of the product."}
                />
              </li>
            </Fade>
          </ul>
        </div>
      </ServiceBackground>
    </div>
  )
}

const ServiceSection = ({ children }) => (
  <section className="section services-section pbottom-70">
    <div className="container">
      <div className="row">
        {children}
      </div>
    </div>
  </section>
)

const ServiceBackground = ({ children }) => (
  <section className="section background">
    <div className="container">
      <div className="row">
        {children}
      </div>
    </div>
  </section>
)

ServiceSection.propTypes = {
  children: PropTypes.node.isRequired,
}

ServiceBackground.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeService
