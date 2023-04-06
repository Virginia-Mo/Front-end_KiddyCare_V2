import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// component
import FormField from "../FormField";
// actions
import { postMessage, eraseMessageApi } from "../../actions/message";
import './style.scss'

function ContactForm() {
    const dispatch = useDispatch()
    const messageApi = useSelector((state) => state.message.messageApi)

    useEffect(() => {
        setTimeout(()=> {
          dispatch(eraseMessageApi())
        },3000)
    }, [dispatch, messageApi])

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postMessage())
    }

  return (
     <article className="contact__formcontainer contact__formcontainer--lastPage">
        { !messageApi && (
            <p> { messageApi }</p>
        )}
        { messageApi && (
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
        )}

     </article>

  );
}

export default ContactForm;
