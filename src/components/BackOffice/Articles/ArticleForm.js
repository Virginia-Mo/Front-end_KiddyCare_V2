import { useDispatch ,useSelector} from 'react-redux'
import { useEffect } from 'react'
// components
import SecondHeader from '../../SecondHeader'
import NavBarAdmin from '../NavBarAdmin'
import FormField from '../../FormField'
// actions
import { getTags } from '../../../actions/tags'
import { changeInputValue } from '../../../actions/formFields'
import { createArticle } from '../../../actions/articles'

import './style.scss'

function ArticleForm() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTags());
      }, [dispatch]);

    const tags = useSelector((state) => state.tags.tags);

    const handleChange = (event) => {
        dispatch(changeInputValue("tag", event.target.value));
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createArticle())
      }

  return (
    <>
    <SecondHeader mainTitle='Welcome' />
    <div className="adminContainer">
        <NavBarAdmin />  
    <div className="backoffice backOffice--formArticle">
    <h2 className="backOffice__title">Create an article</h2>
  
   <div className="backoffice__div">

    <div className="backOffice__mainContainer">

    <form action="" method="POST" encType="multipart/form-data" className="formArticle" onSubmit={handleSubmit}>
        <FormField
            name="maintitle"
            type="text"
            label="Main Title"
            className="bookingform__input--contact" />
        <FormField
            name="main_img"
            type="text"
            label="Main Image"
            className="bookingform__input--contact" />
        <FormField
            name="introduction"
            type="text"
            label="Introduction"
            className="bookingform__input--contact" />
        <FormField
            name="title1"
            type="text"
            label="First Title"
            className="bookingform__input--contact" />
        <FormField
            name="img1"
            type="text"
            label="First image"
            className="bookingform__input--contact" />
        <FormField
            name="description1"
            type="text"
            label="First Description"
            className="bookingform__input--contact" />
        <FormField
            name="title2"
            type="text"
            label="Second Title"
            className="bookingform__input--contact" />
        <FormField
            name="img2"
            type="text"
            label="Second image"
            className="bookingform__input--contact" />
        <FormField
            name="description2"
            type="text"
            label="Second Description"
            className="bookingform__input--contact" />
        <select name="tag" id="tag" className="bookingform__input bookingform__input--select" onChange={handleChange}>

            {   tags &&
                tags.map((data) => (
                <option value={data.id} key={data.id}>{data.name}</option>
                    )) 
                        }
        </select>

        <FormField
            name="author_img"
            type="text"
            label="Your photo"
            className="bookingform__input--contact" />
        <FormField
            name="name"
            type="text"
            label="Your name"
            className="bookingform__input--contact" />
        <FormField
            name="job"
            type="text"
            label="Your job"
            className="bookingform__input--contact" />

   <div className="buttonDiv" ><button type="submit" className="createButton">Create</button></div>

    </form>
    </div>
</div>
</div>
</div>
</>
  );
}

export default ArticleForm;
