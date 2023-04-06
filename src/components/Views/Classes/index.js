/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsPatchCheck } from "react-icons/bs";
// components
import SecondHeader from '../../SecondHeader'
import FormField from '../../FormField';
import Class from "../../Class"
// actions
import { getClasses, postBooking } from '../../../actions/classes';
import { changeInputValue } from '../../../actions/formFields';
import './style.scss'
import useEraseMessage from '../../../selectors/eraseMessage';
import Loader from '../../BackOffice/Loader';


function ClassesPage() {
  const dispatch = useDispatch();
  const messageApi = useSelector(state => state.message.messageApi)

  useEraseMessage()

  useEffect(() => {
    dispatch(getClasses());
  }, [dispatch]);

  const classes = useSelector((state) => state.classes.classes);
  
  const handleChange = (event) => {
    dispatch(changeInputValue("classBook", event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postBooking())
}
  return (
    <>
    <SecondHeader mainTitle='Our Classes' />
    <main>
    <section className="classes">
        <h3 className="content__subtitle content__subtitle--border">Check our Classes</h3>
        <h2 className="content__title content__title--center">Classes for Your Kids</h2> 
        { !classes && (
          <div className="classes__container">
          <Loader />
          </div>
        )}
     { classes && ( 
      <div className="classes__container">
       {
        classes.map((data) => (
         <Class {...data} key={data.id} />
          )) 
          }
          </div>
         ) 
        }
     </section>
     <section className="book">
            <div className="bookaseat">
                <h3 className="content__subtitle">Book A Seat</h3>
                <h2 className="content__title">Book a seat for your kid</h2>
                <p className="bookaseat__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                    deserunt amet id dignissimos assumenda impedit quos aperiam doloribus accusantium, fuga vel a
                    explicabo quidem atque sunt, dicta enim aspernatur minus!</p>
               <div className="goals">
               <p>
               <span className="bookaseat__goals">   
                   <BsPatchCheck className="check" /> 
                   </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   
                <p>
                <span className="bookaseat__goals">   
                <BsPatchCheck className="check" /></span>Alias nihil autem unde ab soluta architecto nam harum illum.</p>
                
                <p>
                <span className="bookaseat__goals">   
                <BsPatchCheck className="check" /></span>Diam dolor diam elitripsum vero.</p>
                    </div> 
            </div>
            <div className="formcontainer ">
                <h3 className="content__title content__subtitle--white">Book A Seat</h3>
                { !messageApi && 
                  <p>{messageApi}</p>
                }
                { messageApi && (
                  <form action="" method="POST" className="bookingform" id="joinForm" onSubmit={handleSubmit}>
            <FormField
                name="name"
                type="text"
                id="name"
                placeholder="Your Name"
                className="bookingform__input"
                label="Name" />
            <FormField
                name="email"
                type="email"
                id="email"
                placeholder="Your Email"
                className="bookingform__input"
                label="Email" />
              <span className='label'>Classes</span>
              <select name="classBooked" id="classBooked" className="bookingform__input bookingform__input--select" onChange={handleChange}>
              <option value="Category">Class of your choice</option>
                    {
                         classes.map((data) => (
                        <option value={data.id} key={data.id}>{data.name}</option>
                            )) 
                    }
                    </select>
                    <button type="submit" className="bookingform__button btnSubmit">Book Now</button>
                </form>
                )} 
                
            </div>
        </section>
    </main>
    </>
  );
}

export default ClassesPage;
