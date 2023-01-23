import { BsPatchCheck } from "react-icons/bs";
import SecondHeader from '../../SecondHeader';
import Cards from '../../Cards';
import image from "../../../assets/imgs/about-1.jpg";
import image2 from "../../../assets/imgs/about-2.jpg";
import './style.scss'

function AboutPage() {
  return (
    <><SecondHeader mainTitle='About Us' /><main>
          <div className="container">
              <Cards />
              <section>
              <article className="school-description">
                  <div>
                      <img src={image} alt="about" className="school-description__image" />
                     </div>
                  <div className="aboutus">
                      <h3 className="content__subtitle">Learn about us</h3>
                      <h2 className="content__title">Best School For Your Kids</h2>
                      <p className="aboutus__content">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor
                          lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut
                          sed diam sea ipsum est dolor, Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor
                          lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut
                          sed diam sea ipsum est dolor</p>
                      <p className="aboutus__content">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor
                          lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut
                          sed diam sea ipsum est dolor, Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor
                          lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut
                          sed diam sea ipsum est dolor</p>
                          <p className="aboutus__content">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor
                          lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut
                          sed diam sea ipsum est dolor, Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor
                          lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut
                          sed diam sea ipsum est dolor</p>

                  </div>
              </article> 
            <article className="aboutus__checkpoint">
                          <div>
                          <img src={image2} alt="about2" className="schooldescription__image"/>
                          </div>
                          <div className="aboutus__goals">
                              <p className="aboutus__goals-span">
                              <span >
                                <BsPatchCheck className="check" />
                              </span>Labore eos amet dolor amet diam, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                              <p className="aboutus__goals-span">
                              <span >
                                <BsPatchCheck className="check" />
                              </span>Labore eos amet dolor amet diam, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                              <p className="aboutus__goals-span">
                              <span >
                                <BsPatchCheck className="check" />
                              </span>Labore eos amet dolor amet diam, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          </div>

                      </article>
          </section>
         </div>
      </main></>
  );
}


export default AboutPage;
