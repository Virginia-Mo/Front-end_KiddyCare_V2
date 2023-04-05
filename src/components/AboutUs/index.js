import "./style.scss"
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Image from "../../assets/imgs/about-1.jpg"

function AboutUs() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <section className="school-description" data-aos="zoom-in" data-aos-duration="2000">
    <div className="school-description__img">
        <img src={Image} alt="about" className="school-description__image" />
    </div>
    <article className="aboutus" >
        <h3 className="content__subtitle">Learn about us</h3>
        <h2 className="content__title">Best School For Your Kids</h2>
        <p className="aboutus__content">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor
            lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut
            sed diam sea ipsum est dolor</p>
        <p className="aboutus__content">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor
            lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut
            sed diam sea ipsum est dolor</p>
       
        <span><a href="/about" className="aboutus__linkinfos">Learn More</a></span>
    </article>
</section>
  )
}

export default AboutUs
