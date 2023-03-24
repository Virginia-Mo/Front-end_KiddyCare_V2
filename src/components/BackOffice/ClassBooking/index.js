import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { HiOutlineTrash } from "react-icons/hi";
// components
import SecondHeader from '../../SecondHeader';
import NavBarAdmin from '../NavBarAdmin';
// actions
import { deleteClassRequest, getClassRequest } from '../../../actions/classes';
import { saveId } from '../../../actions/formFields';
import './style.scss'

function ClassRequestAdmin() {
    const dispatch = useDispatch()
    const classRequest = useSelector((state) => state.classes.classRequest)

    useEffect(() => {
        dispatch(getClassRequest())
    }, [dispatch])
    const handleClick = (event, id) => {
        event.preventDefault();
        dispatch(saveId(id))
        dispatch(deleteClassRequest())
        dispatch(getClassRequest())
    }
  return (
      <>
    <SecondHeader mainTitle='Welcome' />
    <div className="adminContainer">
        <NavBarAdmin />  
    <div className="backoffice">
    <h2 className="backOffice__title">Classes Booking Request</h2>
  
   <div className="backoffice__div">

    <div className="backOffice__mainContainer">
{ !classRequest && (
    <h3>No Class requested</h3>
)}
{ classRequest && (
       <div className="backOffice__table">
       <table className="backOffice__table--table">
       <thead className="backOffice__table--thead">
     <tr>
         <th>Request N°</th> 
         <th>Name</th>
          <th>Email</th>
          <th>Class</th>
          <th>Date</th>
     </tr>
</thead>
<tbody className="backOffice__table--tbody">
 { classRequest.map(request => (

   <tr key={request.id}>
   <td className="backOffice__table--td">
             <button type='button' className='backOffice__button' onClick={event => handleClick(event,request.id)}> <HiOutlineTrash /> </button>
         </td>
        <td className="backOffice__table--td">
             <p> {request.id}   </p>
         </td>
        <td className="backOffice__table--td">
            <p> {request.name} </p> 
        </td>
        <td className="backOffice__table--td">
            <p> {request.email} </p> </td>
        <td className="backOffice__table--td">
            <p>  {request.class} </p> </td>
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

export default ClassRequestAdmin;