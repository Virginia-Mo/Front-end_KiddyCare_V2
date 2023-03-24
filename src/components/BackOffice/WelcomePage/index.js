import SecondHeader from '../../SecondHeader';
import NavBarAdmin from '../NavBarAdmin';
import './style.scss'

function WelcomeAdmin() {
    const userName = localStorage.getItem('userName')
  return (
      <>
       <SecondHeader mainTitle='Welcome' />
       <div className="adminContainer">
       <NavBarAdmin />
       <div className="backoffice">
      <h1 className="adminPage__title">Welcome {userName} </h1>
      <p className="adminPage__text">Feel free to update the school blog when you want ! </p>
      </div>
      </div>
      </>
  );
}

export default WelcomeAdmin;
