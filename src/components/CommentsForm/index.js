import { useDispatch, useSelector } from 'react-redux';
import useEraseMessage from '../../selectors/eraseMessage';
// components
import FormField from '../FormField';
// actions
import { postComments } from '../../actions/comments';
import './style.scss'

function CommentsForm() {
    const dispatch = useDispatch()
    const messageApi = useSelector(state => state.message.messageApi)
    useEraseMessage()

   const handleSubmit = (event) => {
     event.preventDefault(); 
     dispatch(postComments())}

return (
    <section className="blog__messageform">
    <div className="contact__formcontainer">
        <h3 className="content__title contact__title ">Leave a comment</h3>
        { messageApi !== "" && 
       <p>{messageApi}</p> 
      }
      { messageApi === "" && (
        <form className="contact__form--blog" onSubmit={handleSubmit} >
        <FormField
                name="name"
                type="text"
                label="Name" />
        <FormField
                name="email"
                type="text"
                label="Email" />        
        <FormField
                name="message"
                type="text"
                label="Message" />     
            <button type="submit" className="contact__btn contact__btn--comment" >Leave a comment</button>
        </form>
        )}
    </div>
    </section>
  );
}

export default CommentsForm;
