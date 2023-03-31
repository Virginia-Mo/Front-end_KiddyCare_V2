/* eslint-disable no-restricted-globals */
import { useDispatch ,useSelector} from 'react-redux'
import { useEffect, React } from 'react'
import { useParams } from 'react-router-dom'
// components
import SecondHeader from '../../SecondHeader'
import NavBarAdmin from '../NavBarAdmin'
import FormFieldArticle from './FormFieldArticle'
// actions
import { getTags } from '../../../actions/tags'
import { changeInputValue} from '../../../actions/formFields'
import { getArticles, saveSingleArticle, updateArticle} from '../../../actions/articles'
// selector
import { findItem } from '../../../selectors/getItemById'
import './style.scss'

function SingleArticleAdmin() {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getArticles());
        dispatch(getTags());
      }, [dispatch]);

    const tags = useSelector((state) => state.tags.tags);
    const articles = useSelector((state) => state.articles.articles);
    
    const singleArticle =  useSelector(() => (
            findItem(articles, id)
        ));
    dispatch(saveSingleArticle(singleArticle))
    const article = useSelector((state) => state.articles.singleArticle);

    const handleChange = (event) => {
        dispatch(changeInputValue("tag", event.target.value));
      };

      const handleSubmit = (event) => {
            event.preventDefault();
            console.log(event)
            dispatch(updateArticle())
      }
  return (
    <>
    <SecondHeader mainTitle='Welcome' />
    <div className="adminContainer">
        <NavBarAdmin />  
    <div className="backoffice backOffice--formArticle">
    <h2 className="backOffice__title">Update an article</h2>
  
   <div className="backOffice__div">

    <div className="backOffice__mainContainer">

    <form action="" method="POST" encType="multipart/form-data" className="formArticle" onSubmit={handleSubmit}>
      <div> <FormFieldArticle
            name="maintitle"
            type="text"
            label="Main Title"
            defaultValue={article.maintitle}
            placeholder={article.maintitle}
            className="bookingform__input--contact" />
        <FormFieldArticle
            name="main_img"
            type="text"
            label="Main Image"
            defaultValue={article.main_img}
            placeholder={article.main_img}
            className="bookingform__input--contact" />
        <FormFieldArticle
            name="introduction"
            type="text"
            label="Introduction"
            defaultValue={article.introduction}
            placeholder={article.introduction}
            className="bookingform__input--contact" />
        <FormFieldArticle
            name="title1"
            type="text"
            label="First Title"
            defaultValue={article.title1}
            placeholder={article.title1}
            className="bookingform__input--contact" />
        <FormFieldArticle
            name="img1"
            type="text"
            label="First image"
            defaultValue={article.img1}
            placeholder={article.img1}
            className="bookingform__input--contact" />
        <FormFieldArticle
            name="description1"
            type="text"
            label="First Description"
            defaultValue={article.description1}
            placeholder={article.description1}
            className="bookingform__input--contact" />
        <FormFieldArticle
            name="title2"
            type="text"
            label="Second Title"
            defaultValue={article.title2}
            placeholder={article.title2}
            className="bookingform__input--contact" />
            </div>
            <div>
        <FormFieldArticle
            name="img2"
            type="text"
            label="Second image"
            defaultValue={article.img2}
            placeholder={article.img2}
            className="bookingform__input--contact" />
        <FormFieldArticle
            name="description2"
            type="text"
            label="Second Description"
            defaultValue={article.description2}
            placeholder={article.description2}
            className="bookingform__input--contact" />
            <p>Category</p>
        <select name="tag" id="tag" className="bookingform__input bookingform__input--select" onChange={handleChange}>
            {   tags &&
                tags.map((data) => (
                <option value={data.id} key={data.id}>{data.name}</option>
                    )) 
                        }
        </select>
        <FormFieldArticle
            name="author_img"
            type="text"
            label="Your photo"
            defaultValue={article.author_img}
            placeholder={article.author_img}
            className="bookingform__input--contact" />
        <FormFieldArticle
            name="name"
            type="text"
            label="Your name"
            defaultValue={article.authorname}
            placeholder={article.name}
            className="bookingform__input--contact" />
        <FormFieldArticle
            name="job"
            type="text"
            label="Your job"
            defaultValue={article.authorjob}
            placeholder={article.job}
            className="bookingform__input--contact" />
            </div>   </form>
   <div className="buttonDiv" ><button type="submit" className="createButton">Create</button></div>

    </div>
</div>
</div>
</div>
</>
  );
}

export default SingleArticleAdmin;