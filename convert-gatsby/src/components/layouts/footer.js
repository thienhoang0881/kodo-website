import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <img src="assets/images/logo-dark.svg" className="logo" alt="" />
            <div className="text">We deliver. Fast. We are known for our speed and fast progression. This not only makes us more cost efficient but allows you to faster evaluate concepts and shorten overall time to market. This could be testing your initial concept through a 5 day sprint, building a realistic prototype, integrating with your existing IT system, or developing a fully-fledged app. More than a decade in this industry has taught us that time to market is crucial to our clients, which is why we make delivering fast a part of our culture.</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <h5>Contact Us</h5>
            <div className="address">
              <p>06 Le Loi Street, Hue, Vietnam</p>
              <p>Phone: (+84) 945902308</p>
              <p><span>For general enquiries, contact us at </span><a href="mailto:contact@kodoteam.com" target="_top">contact@kodoteam.com</a></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="copyright">© 2018 Kodoteam. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;