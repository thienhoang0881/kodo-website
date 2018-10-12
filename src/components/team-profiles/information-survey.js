import React from 'react'

const InformationSurvey = () => (
  <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="offset-lg-2 col-lg-8 col-md-12 col-sm-12">
            <h5 className="mbottom-30">Get in touch</h5>
            <div className="contact-text">
              <p>Tell us a little bit about yourself and your project.</p>
            </div>
          </div>
          <div className="">
            <div className="row">
              <div className="offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                <form action="https://send.pageclip.co/8kxYnfuyL5mn8IKCMFJzhjFDqhe1LvbT/Contactform" className="pageclip-form" method="post">
                  <div className="contact-form">
                    <input placeholder="Your name" type="text" name="name" required />
                  </div>
                  <div className="contact-form">
                    <input placeholder="Your email" type="text" name="email" required />
                  </div>
                  <div>
                    <label>The project involves</label>
                  </div>
                  <div className="row mbottom-30">
                    <div className="col-lg-6 col-md-16 col-sm-12">
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="project" className="form-check-input" type="checkbox" value="web" />
                          Websites & web software
                          </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="project" className="form-check-input" type="checkbox" value="mobile" />
                          Mobile or tablet apps
                          </label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-16 col-sm-12">
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="project" className="form-check-input" type="checkbox" value="service" />
                          Services & integrations
                          </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="project" className="form-check-input" type="checkbox" value="hardware" />
                          Hardware integration
                          </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label>What are you planning?</label>
                  </div>
                  <div className="row mbottom-30">
                    <div className="col-lg-6 col-md-16 col-sm-12">
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="planning" className="form-check-input" type="checkbox" value="build_a_product" />
                          We need to build a product
                          </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="planning" className="form-check-input" type="checkbox" value="rethink_a_product" />
                          We need to rethink a product
                          </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="planning" className="form-check-input" type="checkbox" value="launch_web_app" />
                          We need to launch a website/app
                          </label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-16 col-sm-12">
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="planning" className="form-check-input" type="checkbox" value="redesign_web_app" />
                          We need to redesign a website/app
                          </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="planning" className="form-check-input" type="checkbox" value="add_capacity" />
                          We need additional capacity
                          </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="planning" className="form-check-input" type="checkbox" value="advice_direction" />
                          We need advice & direction
                          </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label>Do you have a deadline?</label>
                  </div>
                  <div className="row mbottom-30">
                    <div className="col-lg-6 col-md-16 col-sm-12">
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="deadline" className="form-check-input" type="checkbox" value="asap" />
                          ASAP (Urgent)
                            </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="deadline" className="form-check-input" type="checkbox" value="3_6" />
                          3 - 6 months
                            </label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-16 col-sm-12">
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="deadline" className="form-check-input" type="checkbox" value="6_12" />
                          6 - 12 months
                            </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="deadline" className="form-check-input" type="checkbox" value="no" />
                          No deadline
                            </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label>What budget are you considering?</label>
                  </div>
                  <div className="row mbottom-30">
                    <div className="col-lg-6 col-md-16 col-sm-12">
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="budget" className="form-check-input" type="checkbox" value="not_sure" />
                          Not sure
                            </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="budget" className="form-check-input" type="checkbox" value="1_5" />
                          $1k - $5k
                            </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="budget" className="form-check-input" type="checkbox" value="5_10" />
                          $5k - $10k
                            </label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-16 col-sm-12">
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="budget" className="form-check-input" type="checkbox" value="10_20" />
                          $10k - $20k
                            </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="budget" className="form-check-input" type="checkbox" value="20_30" />
                          $20k - $30k
                            </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label contact-text">
                          <input name="budget" className="form-check-input" type="checkbox" value="30+" />
                          $30k+
                            </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label>Project details</label>
                  </div>
                  <div className="contact-form">
                    <textarea name="detail" required></textarea>
                  </div>
                  <button className="pageclip-form__submit btn-primary-line" type="submit">
                    <span>Submit</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default InformationSurvey
