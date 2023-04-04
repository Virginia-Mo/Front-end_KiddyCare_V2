/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react"
import { Link } from "react-router-dom"
import { MdOutlineAccountCircle} from "react-icons/md";
import NavBar from "../NavBar";
import BurgerIcon from "./BurgerIcon"

import 'animate.css';
import "./style.scss"

function MenuBurger() {
    const [open, setOpen] = useState(false)
  return (
    <div className={open? "menuburger opened animate__animated animate__fadeInDown" : "menuburger closed"}>
    <div className="burgerContainer" onClick={() => {setOpen(!open)}}>
    <BurgerIcon open={open} /></div>
    { open && 
    <nav className="menuburger__nav">
    <NavBar />
    <Link to="/login" className="header__account">
         <p>
            <MdOutlineAccountCircle className="header__account__icon" />
        </p>
             <p className="header__account__login">Log in</p>
    </Link>
    </nav>
        
    }
    </div>
  )
}

export default MenuBurger
