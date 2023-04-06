import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import SecondHeader from '../../SecondHeader';
import Testimonial from "../../Testimonial"
// actions
import { getTeachers } from '../../../actions/teachers';
import './style.scss'
import 'animate.css'
import Loader from '../../BackOffice/Loader';

function AboutPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  const teachers = useSelector((state) => state.teachers.teachers);

  return (
    <><SecondHeader mainTitle='Our Teachers' />
    <main>
    <section className="teacherslist">
            <h3 className="content__subtitle content__subtitle--border">Our teachers</h3>
            <h2 className="content__title content__title--center">Meet Our Teachers</h2>
            <div className="teachers__container  ">
            { !teachers && (
              <Loader />
            )}
            { teachers && (
              teachers.map((data) => (
                <div className="teachers animate__animated animate__fadeInUp animate__slow " key={data.id}>
                <img src={data.img} alt="teacher" className="teachers__image" />
                <span className="teachers__name">{data.name}</span>
                <span className="teachers__spe">{data.job}</span>
            </div>
              ))
            )
            }
            </div>
        </section>
       <Testimonial />
      </main>
      </>
  );
}

export default AboutPage;
