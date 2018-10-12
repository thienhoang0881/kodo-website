import React, { Component } from 'react';
import { Link } from 'gatsby';
import './index.css';
import { fromEvent } from 'rxjs';
class Header extends Component {
  render() {
    const { isMin } = this.state;
    return (
      <header className={`header-area ${isMin ? 'header-sticky' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="main-nav d-flex flex-row justify-content-between align-items-center">
                <Link to="/" className="logo">
                  {isMin ?
                    <img src="./../../assets/images/logo-dark.svg" alt="Arda ICO" /> :
                    <img src="./../../assets/images/logo-white.svg" className="white-logo" alt="Arda ICO" />}
                </Link>
                <div className="d-flex flex-row">
                  <Link to="/blog/" className=" display-4">
                    <h4 className={`font-weight-bold menu-item ${isMin ? 'text-dark' : 'text-white'}`}><small>Blog</small></h4>
                  </Link>
                  <Link to="/page/" className="ml-4 text-white font-weight-bold display-4">
                    <h4 className={`font-weight-bold menu-item ${isMin ? 'text-dark' : 'text-white'}`}><small>Page</small></h4>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      isMin: false
    }
  }
  componentDidMount() {
    fromEvent(window, 'scroll').subscribe(e => {
      if (window.scrollY > 50) {
        this.setState({
          isMin: true
        })

      }
      else {
        this.setState({
          isMin: false
        })
      }
    })
  }
}

export default Header;