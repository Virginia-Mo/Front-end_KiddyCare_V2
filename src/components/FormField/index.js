/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { changeInputValue } from "../../actions/formFields";

import './style.scss';

function FormField({
  name,
  placeholder,
  type,
  label
}) 
{
  const dispatch = useDispatch();
  const value = useSelector((state) => state.formFields[name]);

  const handleChange = (event) => {
    dispatch(changeInputValue(name, event.target.value));
  };

  const inputId = `field__${name}`;

  return (
      <><label
      className="label"
      htmlFor={inputId}
    >
      {label}
    </label><input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        className="contactform__input"
        value={value}
        onChange={handleChange}
        required /></>
  );
}

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
FormField.defaultProps = {
  placeholder: ""
};
export default FormField;