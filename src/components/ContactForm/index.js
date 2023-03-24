import { useDispatch } from "react-redux";
// component
import FormField from "../FormField";
// actions
import { postMessage } from "../../actions/message";
import './style.scss'

function ContactForm() {
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postMessage())
    }

  return (
     <article className="contact__formcontainer contact__formcontainer--lastPage">
         <form action="" method="POST" className="contact__bookingform" onSubmit={handleSubmit}>
     <FormField
         name="name"
         type="text"
         label="Name"
         placeholder="John Doe"
         className="bookingform__input--contact" />
     <FormField
         name="email"
         type="email"
         label="Email"
         placeholder="john@doe.com"
         className="bookingform__input--contact" />
     <FormField
         name="subject"
         type="text"
         label="Subject"
         className="bookingform__input--contact" />
     <FormField
         name="contact__message"
         type="text"
         label="Message"
         id="contactmessage"
         className="bookingform__input--contact" />
             <button type="submit" className="joinclass__btn btnSubmit">Send Message</button>
         </form>
     </article>

  );
}

export default ContactForm;
