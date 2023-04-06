import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { HiOutlineTrash } from "react-icons/hi";
import { TbTrashOff } from "react-icons/tb";
// components
import SecondHeader from '../../SecondHeader';
import NavBarAdmin from '../NavBarAdmin';
// actions
import {  deleteComment, getComments } from '../../../actions/comments';
import { saveId } from '../../../actions/formFields';
import './style.scss'

function CommentsAdmin() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])

    const comments = useSelector((state) => state.comments.comments)
    const handleClick = (event, id) => {
        event.preventDefault();
        dispatch(saveId(id))
        dispatch(deleteComment())
        dispatch(getComments())
    }
  return (
      <>
    <SecondHeader mainTitle='Welcome' />
    <div className="adminContainer">
        <NavBarAdmin />  
    <div className="backoffice">
    <h2 className="backOffice__title">Comments</h2>
   <div className="backoffice__div">
    <div className="backOffice__mainContainer">
{ !comments && (
    <h3>No Comment</h3>
)}
{ comments && (
       <div className="backOffice__table">
       <table className="backOffice__table--table">
       <thead className="backOffice__table--thead">
     <tr>
     <th /> 
         <th>N°</th> 
         <th>Name</th>
          <th>Email</th>
          <th>Comment</th>
          <th>Date</th>
     </tr>
</thead>
<tbody className="backOffice__table--tbody">
 { comments.map(request => (
   <tr key={request.id}>
   {(request.id >=1 && request.id <= 7) && (
       <td className="backOffice__table--td">
             <button type='button' className='backOffice__button'> <TbTrashOff /> </button>
         </td>
   )}
   {(request.id >= 8 ) && (
       <td className="backOffice__table--td">
             <button type='button' className='backOffice__button' onClick={event => handleClick(event,request.id)}> <HiOutlineTrash /> </button>
         </td>
   )}
        <td className="backOffice__table--td">
             <p> {request.id}   </p>
         </td>
        <td className="backOffice__table--td">
            <p> {request.name} </p> 
        </td>
        <td className="backOffice__table--td">
            <p> {request.email} </p> </td>
        <td className="backOffice__table--td">
            <p>  {request.message} </p> </td>
        <td className="backOffice__table--td">
            <p>  {request.createdAt} </p> </td>
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

export default CommentsAdmin;