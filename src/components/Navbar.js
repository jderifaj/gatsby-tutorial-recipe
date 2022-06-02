import React, {useState} from 'react'
import {Link} from 'gatsby'
import  {FiAlignJustify} from 'react-icons/fi'
import logo from '../assets/images/logo.svg'
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className='navbar'>
      <div className="nav-center">


      <div className="nav-header">
        <Link to='/'>
        <img src={logo} alt="Simply Recipes" />
        </Link>
         <button className="nav-btn" onClick={() => setShow(!show)}>
           <FiAlignJustify />
         </button>
      </div>
      <div className={show ? "nav-links show-links" : 'nav-links'} >
        <Link className="nav-link" to='/' activeClassName='active-link' onClick={() => setShow(false)}>Home</Link>
        <Link className="nav-link" to='/recipes' activeClassName='active-link' onClick={() => setShow(false)}>recipes</Link>
        <Link className="nav-link" to='/about' activeClassName='active-link' onClick={() => setShow(false)}>about</Link>
        <Link className="nav-link" to='/tags' activeClassName='active-link' onClick={() => setShow(false)}>tags</Link>
        <div className="nav-link contact-link">
          <Link className="btn" to='/contact' onClick={() => setShow(false)}>Contact</Link>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar