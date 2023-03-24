import { useDispatch } from "react-redux"
// component
import FormField from "../../FormField"
// actions
import { postNewsletter } from "../../../actions/newsletter"
import "./style.scss"

function NewsLetter() {
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postNewsletter())
  }
  return (
    <div className="footer__container-box">
      <h2 className="footer__title">Newsletter</h2>
      <div>
        <form method="POST" className="newsletterform" onSubmit={handleSubmit}>
        <FormField
                name="nameRequest"
                type="text"
                label="Name"
                placeholder="Your Name"
                className="bookingform__input bookingform__input--newsletter" />
        <FormField
                name="emailRequest"
                type="email"
                label="E-mail"
                placeholder="Your Email"
                className="bookingform__input bookingform__input--newsletter" />    

          <button type="submit" className="button--blue requestNL btnSubmit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewsLetter
