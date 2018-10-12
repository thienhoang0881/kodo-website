import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import CountUp from 'react-countup';
import { fromEvent } from 'rxjs';
class CounterParallax extends Component {

  render() {
    const { isCount } = this.state;
    return (
      <Parallax bgImage='assets/images/photos/parallax.jpg' strength={600}>
        <section className="parallax">
          <div className="parallax-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="count-item">
                    {isCount ? <strong>
                      <CountUp
                        start={1}
                        end={16}
                        duration={2.75}
                        className="count-up-item"
                      >
                      </CountUp>
                    </strong>
                      : <strong>
                        16
										</strong>
                    }
                    <span>Mobile App<br />Complete</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="count-item">
                    {isCount ? <strong>
                      <CountUp
                        start={1}
                        end={9}
                        duration={2.75}
                        className="count-up-item"
                      >
                      </CountUp>
                    </strong>
                      : <strong>
                        9
										</strong>
                    }
                    <span>Happy<br />Customer</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="count-item">
                    {isCount ? <strong>
                      <CountUp
                        start={1}
                        end={186}
                        duration={2.75}
                        className="count-up-item"
                      >
                      </CountUp>
                    </strong>
                      : <strong>
                        186
										</strong>
                    }
                    <span>App<br />Version</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
    )
  }
  constructor(props) {
    super(props);
    this.state = {
      isCount: false
    }
  }
  componentDidMount() {
    fromEvent(window, 'scroll').subscribe(e => {
      if (window.scrollY > 2850) {
        this.setState({
          isCount: true
        })

      }
      else {
        this.setState({
          isCount: false
        })
      }
    })
  }
}

export default CounterParallax
