import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper purple lighten-3">
      <div className="container">
        <Link className="brand-logo" to="/">Hack Week</Link>
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/mario'>Mario Kart</NavLink></li>
          <li><NavLink to='/css'>CSS Tricks</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar)