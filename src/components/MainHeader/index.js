import { Link } from "react-router-dom"
import { MdOutlineAccountCircle } from "react-icons/md"
import { useDispatch } from "react-redux"
import logo from "../../assets/imgs/people.png"
// component
import NavBar from "../NavBar"
// actions
import { logOutUser } from "../../actions/login"
import "./style.scss"
import MenuBurger from "../MenuBurger"

function Header() {
  const dispatch = useDispatch();
  const userRole = localStorage.getItem('userRole')

  const handleClick = () => {
    localStorage.clear();
    dispatch(logOutUser())
  }
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
      { userRole && (
        <Link to="/admin" className="header__account">
        <p>
          <MdOutlineAccountCircle className="header__account__icon"/>
        </p>
        <button type="button" className="header__account__login" onClick={handleClick}>Log out</button>
        </Link>
      )}
      { !userRole && (
        <Link to="/login" className="header__account">
        <p>
          <MdOutlineAccountCircle className="header__account__icon"/>
        </p>
        <p  className="header__account__login">Log in</p>
      </Link>
      )}
    </nav>
  )
}

export default Header
