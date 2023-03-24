import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { HiOutlineTrash } from "react-icons/hi";
// components
import SecondHeader from '../../SecondHeader';
import NavBarAdmin from '../NavBarAdmin';
// actions
import { deleteMessage, getMessage } from '../../../actions/message';
import { saveId } from '../../../actions/formFields';
import './style.scss'

function MessageAdmin() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMessage())
    }, [dispatch])

    const messages = useSelector((state) => state.message.message)
    const handleClick = (event, id) => {
        event.preventDefault();
        dispatch(saveId(id))
        dispatch(deleteMessage())
        dispatch(getMessage())
    }
  return (
      <>
    <SecondHeader mainTitle='Welcome' />
    <div className="adminContainer">
        <NavBarAdmin />  
    <div className="backoffice">
    <h2 className="backoffice__title">Messages</h2>
   <div className="backoffice__div">
    <div className="backOffice__mainContainer">
    { (messages.length ===0) && (
        <h3> No message</h3>
    )}
    { messages && (         
       <div className="backOffice__table">
       <table className="backOffice__table--table">
       <thead className="backOffice__table--thead">
     <tr>
         <th>Message N°</th> 
         <th>Name</th>
         <th>Email</th> 
          <th>Subject</th>
          <th>Message</th>
          <th>Date</th>
     </tr>
</thead>
<tbody className="backOffice__table--tbody">
 { messages.map(message => (
   <tr key={message.id}>
   <td className="backOffice__table--td">
             <button type='button' onClick={event => handleClick(event,message.id)}> <HiOutlineTrash /> </button>
         </td>
        <td className="backOffice__table--td">
             <p> {message.id}   </p>
         </td>
        <td className="backOffice__table--td">
            <p> {message.name} </p> 
        </td>
        <td className="backOffice__table--td">
            <p> {message.email} </p> 
        </td>
        <td className="backOffice__table--td">
            <p> {message.subject} </p> </td>
        <td className="backOffice__table--td">
            <p>  {message.message} </p> </td>
        <td className="backOffice__table--td">
            <p>  {message.createdAt} </p> </td>
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

export default MessageAdmin;
