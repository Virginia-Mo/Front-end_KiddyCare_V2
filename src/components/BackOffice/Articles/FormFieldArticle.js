/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import { changeInputValue } from '../../../actions/formFields';

import './style.scss';

function FormFieldArticle({
  name,
  placeholder,
  type,
  label,
  dataName,
  defaultValue
}) 
  {
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
    const input = event.target
    const {value} = input
    dispatch(changeInputValue(name, value));
  };

  const inputId = `field__${name}`;

  return (
    <div className="field">
      <label
        className="label"
        htmlFor={inputId}
      >
      {label}
      </label>
      <input
        id={inputId}
        name={name}
        data-name={dataName}
        type={type}
        placeholder={placeholder}
        className="contactform__input"
        defaultValue={defaultValue}
        onChange={handleChange}
        required
      />

    </div>
  );
}

FormFieldArticle.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  dataName: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
};
FormFieldArticle.defaultProps = {
  placeholder: ""
};
export default FormFieldArticle;