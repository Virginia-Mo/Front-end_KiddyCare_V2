import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../MainHeader';
import './style.scss'

function SecondHeader({mainTitle}) {
  return (
    <header className="banner banner--2">
    <Header />
    <div className="banner__part1 banner__part2">
        <h1 className="banner__title banner__title--2">{mainTitle}</h1>
        <p className="banner__description banner__description2"><Link to="/" className="banner__link"> Home</Link> / {mainTitle}</p>
    </div>
  </header>
  );
}

SecondHeader.propTypes = {
    mainTitle: PropTypes.string.isRequired,
}
export default SecondHeader;
