import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
      <div className='header'>
        <div className='header-title'>
          <img src='/eezer_small.png' alt='Eezer logo' />
          <p className='small-left-padding'>BACK OFFICE</p>
        </div>
        <ul className='nav'>
          <li>
            <NavLink exact activeClassName='active' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/users'>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/vehicles'>
              Vehicles
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/transports'>
              Transports
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/reports'>
              Reports
            </NavLink>
          </li>
        </ul>
      </div>
    );
}

export default Nav;
