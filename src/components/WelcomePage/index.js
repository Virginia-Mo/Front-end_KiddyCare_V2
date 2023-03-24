/* eslint-disable react/jsx-props-no-spreading */
import './style.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import Header from '../MainHeader';
import Cards from '../Cards';
import AboutUs from '../AboutUs';
import Class from "../Class"
import Testimonial from '../Testimonial';
// actions
import { getClasses } from '../../actions/classes';

function WelcomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClasses());
  }, [dispatch]);

  const classes = useSelector((state) => state.classes.classes);
  const selectedClasses = classes.slice(3)

  return (
    <>
      <header className="banner">
        <Header />
        <div className="banner__part1">
          <h2 className="banner__subtitle">Kids learning center</h2>
          <h1 className="banner__title">New approach to Kids Education</h1>
          <p className="banner__description">Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed sit.
            Ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed ipsum at ipsum nonumy amet. Clita
            lorem dolore sed stet et est justo dolore.
          </p>
          <a href="/about" className="banner__link-moreinfos">Learn more</a>
        </div>
      </header>
      <main className="mainContent">
        <Cards />
        <AboutUs />
      <section className="classes">
        <h3 className="content__subtitle content__subtitle--border">Some of our Classes</h3>
        <h2 className="content__title content__title--center">Classes for Your Kids</h2> 
     { classes && ( 
      <div className="classes__container">
       {
        selectedClasses.map((data) => (
         <Class {...data} key={data.id} />
          )) 
          }
          </div>
         ) 
        }
     </section>
      <Testimonial />
      </main>
    </>
  );
}

export default WelcomePage;
