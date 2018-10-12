import React from 'react';
import './index.css'
import ZogopayIcon from '../icon-types/zogopay-icon'
import AppIcon from '../icon-types/app-icon'
import WhipIcon from '../icon-types/whip-icon'
const WellcomeArea = () => {
  return (
    <section className="welcome-area">
      <div className="welcome-bg" >
        <img src="./../../assets/images/bg-bottom.svg" alt="" />
      </div>

      <div className="welcome-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 align-self-center">
              <h1>Design. Build. Ship.</h1>
              <p>We design and develop mobile apps that delight your users and grow your business. Enterprise-grade development combined with outstanding design.</p>
            </div>
            <div className="offset-lg-1 col-lg-5 col-md-12 col-sm-12 col-xs-12 align-self-center">
              <div className="apps">
                <div className="container-fluid">
                  <div className="row">
                    <ZogopayIcon />
                    <AppIcon />
                    <WhipIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}


export default WellcomeArea;