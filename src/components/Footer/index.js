import "./style.scss"
import { Link } from "react-router-dom"
import {FaTwitter, FaInstagram, FaSnapchatGhost} from "react-icons/fa";
import {MdLocationOn} from "react-icons/md"
import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";

import NewsLetter from "./NewsLetter"
import logo from "../../assets/imgs/people.png"

function Footer() {
  return (
<footer className="footer">
    <div className="footer__container">
    <div className="footer__maindiv">
       <div className="footer__container-box">
         <div className="footer__container-box__logo">
         <img src={logo} alt="logo" className="footer__container-box__logo__image" />
         <span className="footer__container-box__logo__title">KiddyCare</span>
         </div>
         <p className="footer__school__description">Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea
             dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr stet diam duo eos rebum ipsum diam
             ipsum elitr.
          </p>
          <p className="footer__school__description--links">
            <ul>
              <li> 
              <a href="https://twitter.com/" className="footer__school-medialink" target="blank">
              <FaTwitter />  
              </a>
              </li>
              <li>       
        <a href="https://fr-fr.facebook.com/" className="footer__school-medialink" target="blank">
          <ImFacebook />
        </a>
        
              </li>
              <li>       
        <a href="https://www.snapchat.com/" className="footer__school-medialink" target="blank">
          <FaInstagram />
        </a>
       
              </li>
              <li>      
        <a href="https://www.instagram.com/" className="footer__school-medialink" target="blank">
          <FaSnapchatGhost />
        </a>
              </li>
            </ul>
          </p>
               
        </div>
     <div className="footer__container-box">
         <h2 className="footer__title">Get in Touch</h2>
         <div className="footer__contact-content">
         <ul>
         <li>
           <div className="footer__contact-img">
            <MdLocationOn />
            </div>
            <p className="details-container">
            <span className="footer__contact--details">Address</span>
            <span
                 className="schooladdress">123 Street, New York, USA</span></p>
             
         </li>
            <li>
          <div className="footer__contact-img">
          <BsFillEnvelopeFill />
          </div>
          <p className="details-container">
          <span className="footer__contact--details">Email</span>
          <span className="schoolemail">info@example.com</span>
          </p>
            </li>
            <li>
          <div className="footer__contact-img">
         <BsFillTelephoneFill />
          </div>
          <p className="details-container">
          <span className="footer__contact--details">Phone</span>
          <span className="schoolphone">+012 345 67890</span>
          </p>
            </li>
         </ul>
   
     </div>
 </div>
     <div className="footer__container-box">
         <h2 className="footer__title">Quick Link</h2>
         <ul>
           <li>
           <Link href="/" className="footer__links"> &#8250; Home</Link></li>
           <li>
           <Link href="/about" className="footer__links" >&#8250; About Us</Link></li>
           <li>
           <Link href="/classNamees" className="footer__links">&#8250; Our classes</Link></li>
           <li>
           <Link href="/teachers" className="footer__links">&#8250; Our Teachers</Link></li>
           <li>
           <Link href="/pages" className="footer__links">&#8250; Our Blog</Link></li>
           <li>
           <Link href="/contact" className="footer__links">&#8250; Contact Us</Link></li>
         </ul>
     </div>
   <NewsLetter />
   </div>
   </div>
   <div className="footer__container">
         <div className="copyrights">
         <p> © Kiddy Care. All Rights Reserved. Designed by HTML Codex</p>
         <p>Icons found in <a href="https://www.flaticon.com/" className="copyrights__links" target="_blank" rel="noopener noreferrer">Flat Icon</a></p>
         <p>You can find all the credits to authors here : <a href="/copyrights" className="copyrights__links"> Copyrights</a></p>
         </div>
    </div>
 </footer>    
  )
}

export default Footer
