/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react"
import NavBar from "../NavBar";
import BurgerIcon from "./BurgerIcon"

import 'animate.css';
import "./style.scss"
import LoginIcon from "../Login/LoginIcon";

function MenuBurger() {
    const [open, setOpen] = useState(false)
  return (
    <div className={open? "menuburger opened animate__animated animate__fadeInDown" : "menuburger closed"}>
   <div className="menuburger__div">
   <div className="menuburger__loginIcon">
    <LoginIcon />
    </div>
    <div className="burgerContainer" onClick={() => {setOpen(!open)}}>
    <BurgerIcon open={open} /></div>
    </div>
    { open && 
    <nav className="menuburger__nav">
    <NavBar />
    </nav>
    }
    </div>
  )
}

export default MenuBurger
