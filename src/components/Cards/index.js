import { useEffect } from 'react';
import "aos/dist/aos.css";
import './style.scss'
import AOS from 'aos';
import { TbFence } from "react-icons/tb";
import { GiMusicalScore, GiPencilBrush, GiFruitBowl, GiLightBackpack } from "react-icons/gi";
import { BiBus } from "react-icons/bi";

function Cards() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <section className="school-activities" >
    <article className="card" data-aos="fade-up" data-aos-duration="1500">
        <div className="card__icon">
        <TbFence />
        </div>
        <div>
            <h3 className="card__title">Play Ground</h3>
            <p className="card__description">Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...</p>
        </div>
    </article>
    <article className="card" data-aos="fade-up" data-aos-duration="1500">
        <div className="card__icon">
        <GiMusicalScore />
        </div>
        <div>
            <h3 className="card__title">Music and Dance</h3>
            <p className="card__description">Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...</p>
        </div>
    </article>
    <article className="card" data-aos="fade-up" data-aos-duration="1500">
        <div className="card__icon">
        <GiPencilBrush />
        </div>
        <div>
            <h3 className="card__title">Arts and Crafts</h3>
            <p className="card__description">Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...</p>
        </div>
    </article>
    <article className="card" data-aos="fade-up" data-aos-duration="1500">
        <div className="card__icon">
            <BiBus />
        </div>
        <div>
            <h3 className="card__title">Safe Transportation</h3>
            <p className="card__description">Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...</p>
        </div>
    </article>
    <article className="card" data-aos="fade-up" data-aos-duration="1500">
        <div className="card__icon">
        <GiFruitBowl />
        </div>
        <div>
            <h3 className="card__title">Healthy Food</h3>
            <p className="card__description">Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...</p>
        </div>
    </article>
    <article className="card" data-aos="fade-up" data-aos-duration="1500">
        <div className="card__icon">
        <GiLightBackpack />
        </div>
        <div>
            <h3 className="card__title">Educational Tour</h3>
            <p className="card__description">Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...</p>
        </div>
    </article>
</section>
  );
}

export default Cards;
