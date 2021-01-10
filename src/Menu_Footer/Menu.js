import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () =>{
    return(
        <nav className="navbar menu fixed-top navbar-expand-lg navbar-light bg-">
  <a classNameName="navbar-brand">Portfolio</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse mx-3" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <Link to = '/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to ='/experience' className="nav-link">Experiences</Link>
      </li>
      <li className="nav-item">
        <Link to ='/works' className="nav-link" >Works</Link>
      </li>
      <li className="nav-item">
        <Link to ='/blogs' className="nav-link" >Blogs</Link>
      </li>
      <li className="nav-item">
        <Link to ='#!' className="nav-link" >Resume</Link>
      </li>
      <li className="nav-item">
        <Link to ='#!' className="nav-link" href="#">Contact</Link>
      </li>
      {/* <li className="nav-item dropdown">
        <Link to ='#!' className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to ='#!' className="dropdown-item" href="#">Action</Link>
          <Link to ='#!' className="dropdown-item" href="#">Another action</Link>
          <Link to ='#!' className="dropdown-item" href="#">Something else here</Link>
        </div>
      </li> */}
    </ul>
  </div>
</nav>
    )

}
export default Menu;