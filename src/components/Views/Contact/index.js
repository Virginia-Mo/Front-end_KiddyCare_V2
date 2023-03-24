import {MdLocationOn} from "react-icons/md"
import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
// components
import ContactForm from '../../ContactForm';
import SecondHeader from '../../SecondHeader';
import './style.scss'

function ContactPage() {
  return (
    <><SecondHeader mainTitle='Contact Us' />
    <main>
      <div className="container">
        <section className="contactcontent">
            <h3 className="content__subtitle content__subtitle--border">GET IN TOUCH</h3>
            <h2 className="content__title content__title--size">Contact Us For Any Query</h2>
        </section>
        <section className="contact__book">
    <div className="contact__container">
    <ContactForm />
        <article className="contact__infos">
         <p className="contact_p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, tempore modi, omnis voluptate dicta iure cum incidunt nostrum necessitatibus cumque quas facilis, voluptatum id magni adipisci harum quis unde? Cum?</p>
         <div className="footer__contact-content">
             <div className="contact__contact-img"><MdLocationOn alt="map pin" class=" contact--image" /></div>
             <div className="details-container"><span className="footer__contact--details contact__details">Address</span> <span
                 className="schooladdress">123 Street, New York, USA</span></div>
             </div>
         <div className="footer__contact-content">
             <div className="contact__contact-img"><BsFillEnvelopeFill alt="email" class=" contact--image" /></div>
             <div className="details-container"> <span className="footer__contact--details contact__details">Email</span><span
                 className="schoolemail">info@example.com</span></div>
             </div>
         <div className="footer__contact-content">
             <div className="contact__contact-img"><BsFillTelephoneFill alt="phone" class=" contact--image" /></div>
             <div className="details-container"><span className="footer__contact--details contact__details">Phone</span><span
                 className="schoolphone">+012 345 67890</span></div>
     </div>
     <div className="footer__contact-content">
         <div className="contact__contact-img"><AiOutlineClockCircle alt="phone" class=" contact--image" /></div>
         <div className="details-container"><span className="footer__contact--details contact__details">Opening Hours</span>
             <strong className="bold">Sunday - Friday:</strong><span
             className="schoolhours">08:00AM - 05:00PM</span></div>
 </div>
</article> 
     </div>
 </section>
</div>
    </main>
    </>
  );
}


export default ContactPage;
