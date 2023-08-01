import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header>
        <nav class="navbar-raj">
          <div className='nav-logo-raj'>ConnCare</div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/MedSearch'>Medicine</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/SymptomSelector'>Symptoms</Link></li>

            <div class="search-raj">
              <Link to='/Register'><input type="button" value='SignIn' /></Link>
            </div>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar