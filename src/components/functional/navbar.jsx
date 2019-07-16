import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const { logout } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to={'/'} className="navbar-brand d-flex align-items-center">
          <i className="fab fa-github mr-2"></i>
          <strong>BoBoHub</strong>
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <a className="nav-link" href="https://github.com/niyobobo" target="_new">Me</a>
          </ul>
          <button className="btn form-inline" onClick={() => logout()}>
            <i className="fas fa-sign-out-alt text-white"></i>
          </button>
        </div>
      </nav>
    );
  }
}

export default NavBar;