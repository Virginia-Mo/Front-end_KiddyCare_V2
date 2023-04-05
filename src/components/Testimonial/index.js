/* eslint-disable import/no-unresolved */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Keyboard, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import { getTestimonial } from '../../actions/testimonial';

import './style.scss'
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

function Testimonial() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getTestimonial())
    },[dispatch] );
  
  const testimonial = useSelector((state) => state.testimonial.testimonial);

  return (
    <section className="testimonial">
    <h3 className="content__subtitle content__subtitle--border">Testimonial</h3>
    <h2 className="content__title content__title--center">What Parents Say!</h2>
    <div className="parentsContainer">
        <div id="previous"><i className="fa-solid fa-circle-chevron-right"> </i></div>
        {testimonial && (
            <div>
            <Swiper
        loop
        grabCursor
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
          {  testimonial.map((data) => (
                <SwiperSlide key={data.id} >
  <div className="parents" >
        <div className="parents__infos">
            <div>
            <div>
                <img src={data.img} alt="Parent1" className="parents__infos-image" /></div>
                <div className="parents__infos-name"><span className="parents-name">{data.name}</span>
             </div>    
              </div> <p className="parents__speech"> {data.message}</p>
            </div>  
        </div>
        </SwiperSlide>
            ))}
            </Swiper>
            </div>
        )}

<div id="after"><i className="fa-solid fa-circle-chevron-left" /></div>
</div>

</section>
  );
}


export default Testimonial;
