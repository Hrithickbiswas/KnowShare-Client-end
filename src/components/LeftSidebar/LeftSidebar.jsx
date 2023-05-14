import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
// import Globe from '../../assets/globe_planet.svg'
/*difference b/w link and navlink is, navlink is used in nav bar so it's called so.*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers , faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className="side-nav-links" activeClassName='active'>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div><p>Public</p></div>
          <NavLink to="/Questions" className="side-nav-links" activeClassName='active' >
          <FontAwesomeIcon icon={ faEarthAmericas} fade />
            <p style={{paddingLeft:"10px"}}>Questions</p>
          </NavLink>
          <NavLink to="/Tags" className="side-nav-links" activeClassName='active' style={{paddingLeft:'40px'}}>
            <p>Tags</p>
          </NavLink>
          <NavLink to="/Users" className="side-nav-links" activeClassName='active' style={{paddingLeft:'40px'}}>
            <p>Users</p>
          </NavLink>
          <br></br> 
          <a href="https://knowsharecommunity.netlify.app/" className="side-nav-links">
            <FontAwesomeIcon icon={faUsers} beatFade />
            <p style={{paddingLeft:"10px" }}>Community</p> 
          </a>
        </div>
      </nav>

    </div>
  )
}

export default LeftSidebar