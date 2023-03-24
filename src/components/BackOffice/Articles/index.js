import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { HiOutlineTrash } from "react-icons/hi";
import { TbTrashOff } from "react-icons/tb";
import { Link } from 'react-router-dom';
// components
import SecondHeader from '../../SecondHeader';
import NavBarAdmin from '../NavBarAdmin';
// actions
import { deleteArticle, getArticles } from '../../../actions/articles';
import { saveId } from '../../../actions/formFields';
import './style.scss'

function ArticlesAdmin() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArticles())
    }, [dispatch])

    const articles = useSelector((state) => state.articles.articles)

    const handleClick = (event, id) => {
        event.preventDefault();
        dispatch(saveId(id))
        dispatch(deleteArticle())
        dispatch(getArticles())
    }
  return (
      <>
    <SecondHeader mainTitle='Welcome' />
    <div className="adminContainer">
        <NavBarAdmin />  
    <div className="backoffice">
    <h2 className="backoffice__title">Articles</h2>
  
   <div className="backoffice__div">

    <div className="backOffice__mainContainer">
{ !articles && (
    <h3>No Articles</h3>
)}
{ articles && (
       <div className="backOffice__table">
       <table className="backOffice__table--table">
       <thead className="backOffice__table--thead">
     <tr>
        <th>Article N°</th> 
        <th>Main title</th>
        <th>Introduction</th>
        <th>Date</th>
     </tr>
</thead>
<tbody className="backOffice__table--tbody">
    <tr>
    <Link to='/admin/createarticle' >
    <button type='button' className="backOffice__add" >+ Add an article</button>
    </Link>
    </tr>
 { articles.map(request => (
   <tr key={request.id}>
   {(request.id >=1 && request.id <= 7) && (
       <td className="backOffice__table--td">
             <button type='button'> <TbTrashOff /> </button>
         </td>
   )}
   {(request.id >8 ) && (
       <td className="backOffice__table--td">
             <button type='button' onClick={event => handleClick(event,request.id)}> <HiOutlineTrash /> </button>
         </td>
   )}<Link to={`/admin/article/${request.id}`} >
        <td className="backOffice__table--td">
             <p> {request.id}   </p>
         </td>
        <td className="backOffice__table--td">
            <p> {request.maintitle} </p> 
        </td>
        <td className="backOffice__table--td">
            <p> {request.introduction} </p> </td>
        <td className="backOffice__table--td">
            <p> {request.createdAt} </p> </td>
        </Link>
        </tr>  
    
 ))} 
 </tbody>
</table>
</div>
     )}
     </div>
   </div>  
 </div>
 </div>
 </>
);
}

export default ArticlesAdmin;