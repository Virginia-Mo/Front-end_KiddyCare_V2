import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { HiOutlineTrash } from "react-icons/hi";
// components
import SecondHeader from '../../SecondHeader';
import NavBarAdmin from '../NavBarAdmin';
// actions
import { deleteNewsletterRequest, getNewsletterRequest } from '../../../actions/newsletter';
import { saveId } from '../../../actions/formFields';
import './style.scss'

function NewsletterRequestAdmin() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewsletterRequest())
    }, [dispatch])

    const newsletterRequest = useSelector((state) => state.newsletter.newsletterRequest)
    const handleClick = (event, id) => {
        event.preventDefault();
        dispatch(saveId(id))
        dispatch(deleteNewsletterRequest())
        dispatch(getNewsletterRequest())
    }
  return (
      <>
    <SecondHeader mainTitle='Welcome' />
    <div className="adminContainer">
        <NavBarAdmin />  
    <div className="backoffice">
    <h2 className="backoffice__title">Newsletter Request</h2>
   <div className="backoffice__div">
    <div className="backOffice__mainContainer">
{ !newsletterRequest && (
    <h3>No newsletter requested</h3>
)}
{ newsletterRequest && (
       <div className="backOffice__table">
       <table className="backOffice__table--table">
       <thead className="backOffice__table--thead">
     <tr>
         <th>Request N°</th> 
         <th>Name</th>
          <th>Email</th>
          <th>Date</th>
     </tr>
</thead>
<tbody className="backOffice__table--tbody">
 { newsletterRequest.map(request => (
   <tr key={request.id}>
   <td className="backOffice__table--td">
            <button type='button' onClick={event => handleClick(event,request.id)}> <HiOutlineTrash /> </button>
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
            <p> {request.createdAt} </p> </td>
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

export default NewsletterRequestAdmin;