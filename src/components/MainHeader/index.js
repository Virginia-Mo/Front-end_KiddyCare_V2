import { Link } from "react-router-dom"
import logo from "../../assets/imgs/people.png"
// component
import NavBar from "../NavBar"
// actions

import "./style.scss"
import MenuBurger from "../MenuBurger"
import LoginIcon from "../Login/LoginIcon"

function Header() {
return (
    <nav className="header">
      <div className="header__logo">
      <Link to='/'>
        <img src={logo} alt="kiddycare logo" />
        <p>KiddyCare</p>
      </Link>
      </div>
      <div className="header__navbar">
        <MenuBurger className="menuBurger__component"/>
        <div className="navBar__component"> <NavBar /></div>
      </div>
      <div className="loginIconDiv">
      <LoginIcon />
      </div>
    </nav>
  )
}

export default Header
