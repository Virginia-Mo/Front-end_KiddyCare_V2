/* eslint-disable camelcase */
import './style.scss'
import PropTypes from 'prop-types';
import image from "../../assets/imgs/class-1.jpg"

function Class({id,name,short_description,age,seats,hours,price}) {
  return (
    <article className="classescontent" key={id}>
        <img src={image} alt="class1" className="classescontent__image" />
            <h3 className="classescontent__name">{name}</h3>
                <p className="classescontent__description">{short_description}</p>
                <table className="classescontent__table">
                    <tr className="table__tr">
                        <th className="table__th">Age Of Kids</th>
                        <td className="table__td">{age} years</td>
                    </tr>
                    <tr className="table__tr">
                        <th className="table__th">Total Seats</th>
                        <td className="table__td">{seats} Seats</td>
                    </tr>
                    <tr className="table__tr">
                        <th className="table__th">Class Time</th>
                        <td className="table__td">{hours}</td>
                    </tr>
                    <tr className="table__tr">
                        <th className="table__th">Tution Fee</th>
                        <td className="table__td">${price} / Month</td>
                    </tr>
                </table>
                <a href="/classes" className="joinclass__btn joinclass__btn--center">Join Now</a>  
            </article> 
  );
}


Class.propTypes = {
    id : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    short_description : PropTypes.string.isRequired,
    age : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    hours : PropTypes.string.isRequired,
    seats : PropTypes.number.isRequired,
}


export default Class;

