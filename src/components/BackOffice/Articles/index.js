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
import useEraseMessage from '../../../selectors/eraseMessage';

function ArticlesAdmin() {
    const dispatch = useDispatch()
    useEraseMessage()
    const articles = useSelector((state) => state.articles.articles)
    const messageApi = useSelector((state) => state.message.messageApi)

    useEffect(() => {
        dispatch(getArticles())
    }, [dispatch])

    const handleClick = (event, id) => {
        event.preventDefault();
        dispatch(saveId(id))
        dispatch(deleteArticle())
    }
  return (
      <>
    <SecondHeader mainTitle='Welcome' />
    <div className="adminContainer">
        <NavBarAdmin />  
    <div className="backoffice">
    <h2 className="backOffice__title">Articles</h2>
  
   <div className="backOffice__div">
  
    <div className="backOffice__mainContainer">

{ !articles && (
    <h3>No Articles</h3>
)}
{ articles && (
       <div className="backOffice__table"> 
        { messageApi !== "" && (
            <p> { messageApi }</p>
        )} 
    { messageApi === "" && (
       <table className="backOffice__table--table">
       <thead className="backOffice__table--thead">
     <tr>   
     <th> <Link to='/admin/createarticle' >
    <button type='button' className="backOffice__button--add" >+ Add an article</button>
    </Link></th>
        <th>N°</th> 
        <th>Main title</th>
        <th>Introduction</th>
        <th>Date</th>
     </tr>
</thead>
<tbody className="backOffice__table--tbody">
 { articles.map(request => (
   <tr key={request.id}>
   {(request.id >=1 && request.id <= 7) && (
       <td className="backOffice__table--td">
             <button className='backOffice__button' type='button'> <TbTrashOff /> </button>
         </td>
   )}
   {(request.id > 8 ) && (
       <td className="backOffice__table--td">
             <button className='backOffice__button' type='button' onClick={event => handleClick(event,request.id)}> <HiOutlineTrash /> </button>
         </td>
   )}
   
        <td className="backOffice__table--td">
            <Link to={`/admin/article/${request.id}`} > <p> {request.id}   </p>  </Link>
         </td>
        <td className="backOffice__table--td">
        <Link to={`/admin/article/${request.id}`} ><p> {request.maintitle} </p>  </Link>
        </td>
        <td className="backOffice__table--td">
        <Link to={`/admin/article/${request.id}`} ><p> {request.introduction} </p>  </Link></td>
        <td className="backOffice__table--td">
        <Link to={`/admin/article/${request.id}`} > <p> {request.createdAt} </p>  </Link></td>
      
        </tr>  
    
 ))} 
 </tbody>
</table>)}
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