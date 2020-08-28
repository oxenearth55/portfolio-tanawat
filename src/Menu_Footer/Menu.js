import React from 'react';


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
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/experiance">Experiences</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/works">Works</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/blogs">Blogs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Resume</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    )

}
export default Menu;