import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import logo from '../../assets/logo2.svg'
import search from '../../assets/search_icon.svg'
import Avatar from '../../components/Avatar/Avatar'
// import Button from '../../components/Button/Button'
import '../Navbar/Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
  const dispatch = useDispatch()
  var User = useSelector((state)=> (state.currentUserReducer))
  
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT'}); //these words have to be in caps.
    navigate('/')
    dispatch(setCurrentUser(null))
}

useEffect(() => {
  const token = User?.token 
  if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()){
        handleLogout()
      }
  }
  dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
},[User?.token, dispatch])
  /*we just going to multiply the expiry time of the decoder token by 1000, 
  if that value is less than the present time[getTime], we call the handleLogOut function.*/

  return (
    <nav className='main-nav'>
        <div className='navbar'>
          <Link to='/' className ='nav-item nav-logo'>
            <img src={logo} alt= 'logo' />
          </Link>
          <Link to = '/' className='nav-item nav-btn' >About</Link>
          <Link to = '/' className='nav-item nav-btn' >Products</Link>
          <Link to = '/' className='nav-item nav-btn' >For Teams</Link>
          <a href="https://stackoverflowpayment.netlify.app/" className="nav-item nav-btn">
            Plans
          </a>
          <form >
            <input type="text" placeholder='Search...' />
            <img src={search} alt="search" width={18} className='search-icon'/>
          </form>
            { User === null ? 
              <Link to = '/Auth' className= 'nav-item nav-link' >Log in</Link>:
              <>
                  <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius ="50%" color="white"><Link to = {`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:"none"}} > {User.result.name.charAt(0).toUpperCase()} </Link></Avatar>
                  <button className='nav-item nav-link' onClick={handleLogout}> Log out </button>
              </>
            
            } 
        </div>
    </nav>
  )
}

export default Navbar