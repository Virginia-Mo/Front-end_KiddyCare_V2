import { useDispatch } from 'react-redux';
// components
import FormField from '../FormField';
// actions
import { postComments } from '../../actions/comments';
import './style.scss'

function CommentsForm() {
const dispatch = useDispatch()

const handleSubmit = (event) => {
     event.preventDefault(); 
     dispatch(postComments())
        }
return (
    <section className="blog__messageform">
    <div className="contact__formcontainer">
        <h3 className="content__title contact__title ">Leave a comment</h3>
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
    </div>
    </section>
  );
}

export default CommentsForm;
