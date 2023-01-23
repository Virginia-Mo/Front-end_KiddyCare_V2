import "./style.scss"
import { NavLink } from "react-router-dom"
import { MdKeyboardArrowDown } from "react-icons/md";

import "animate.css"

function NavBar() {
  return (
    <ul>
      <li className="header__li">
        <NavLink to="/" className="header__li__navlink">
          Home
        </NavLink>
      </li>
      <li className="header__li">
        <NavLink to="/aboutus" className="header__li__navlink">
          About us
        </NavLink>
      </li>
      <li className="header__li">
        <NavLink to="/classes" className="header__li__navlink">
          Classes
        </NavLink>
      </li>
      <li className="header__li">
        <NavLink to="/teachers" className="header__li__navlink">
          Teachers
        </NavLink>
      </li>
      <li className="header__li">
        <NavLink to="/gallery" className="header__li__navlink">
          Gallery
        </NavLink>
      </li>
      <li className="header__li header__blog">
        <NavLink to="/" className="header__li__navlink ">
          Blog
          <MdKeyboardArrowDown />
        </NavLink>
        <div className="header__ul">
            <NavLink to="/articles" className="header__li__navlink header__li--underlist animate__animated animate__zoomIn">
              Articles
            </NavLink>
            <NavLink to="/articles/:id" className="header__li__navlink header__li--underlist animate__animated animate__zoomIn">
              Last Article
            </NavLink>
        </div>
      </li>
      <li className="header__li">
        <NavLink to="/" className="header__li__navlink">
          Contact
        </NavLink>
      </li>
    </ul>
  )
}

export default NavBar
