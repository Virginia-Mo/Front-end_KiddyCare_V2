import { MdOutlineAccountCircle } from "react-icons/md"
import "./style.scss"
import logo from "../../assets/imgs/people.png"
import NavBar from "../NavBar"

function Header() {
  return (
    <nav className="header">
      <div className="header__logo">
        <img src={logo} alt="kiddycare logo" />
        <p>KiddyCare</p>
      </div>
      <div className="header__navbar">
        <NavBar />
      </div>
      <div className="header__account">
        <p>
          <MdOutlineAccountCircle className="header__account__icon"/>
        </p>
        <p className="header__account__login">Log in</p>
      </div>
    </nav>
  )
}

export default Header
