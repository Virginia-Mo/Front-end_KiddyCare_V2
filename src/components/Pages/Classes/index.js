/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsPatchCheck } from "react-icons/bs";
import { getClasses } from '../../../actions/classes';
import SecondHeader from '../../SecondHeader'
import Class from "../../Class"
import './style.scss'


function ClassesPage() {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClasses());
  }, [dispatch]);

const classes = useSelector((state) => state.classes.classes);

  return (
    <>
    <SecondHeader mainTitle='Our Classes' />
    <main>
    <section className="classes">
        <h3 className="content__subtitle content__subtitle--border">Check our Classes</h3>
        <h2 className="content__title content__title--center">Classes for Your Kids</h2> 
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
                <form action="" method="POST" className="bookingform" id="joinForm">
                    <input type="text" id="name" name="name" placeholder="Your Name" className="bookingform__input" required />
                    <input type="email" id="email" name="email" placeholder="Your Email" className="bookingform__input" required />
                    <select name="class" id="class" className="bookingform__input bookingform__input--select">
                    {
                         classes.map((data) => (
                        <option value={data.id} key={data.id}>{data.name}</option>
                            )) 
                    }
                    </select>
                    <button type="submit" className="bookingform__button btnSubmit">Book Now</button>
                </form>
            </div>
        </section>
    </main>
    </>
  );
}

export default ClassesPage;
