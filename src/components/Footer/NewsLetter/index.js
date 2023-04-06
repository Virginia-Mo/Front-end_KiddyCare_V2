import { useDispatch, useSelector } from "react-redux"
// component
import FormField from "../../FormField"
// actions
import { postNewsletter } from "../../../actions/newsletter"
import "./style.scss"
import useEraseMessage from "../../../selectors/eraseMessage"

function NewsLetter() {
  const dispatch = useDispatch()
  const messageApi = useSelector((state) => state.message.messageApi)

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postNewsletter())
  }
  useEraseMessage()
  return (
    <div className="footer__container-box">
      <h2 className="footer__title">Newsletter</h2>
      <div>
      { !messageApi && 
       <p>{messageApi}</p> 
      }
      { messageApi && (
          <form method="POST" className="newsletterform" onSubmit={handleSubmit}>
        <div>
        <FormField
                name="nameRequest"
                type="text"
                label="Name"
                placeholder="Your Name"
                className="" />
        </div>
        <div>
        <FormField
                name="emailRequest"
                type="email"
                label="E-mail"
                placeholder="Your Email"
                 />    
                </div>
          <button type="submit" className="button--blue requestNL btnSubmit">
            Submit Now
          </button>
        </form>
      )
      }
      
      </div>
    </div>
  )
}

export default NewsLetter
