import { MdOutlineAccountCircle } from "react-icons/md"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logOutUser } from "../../../actions/login"

function LoginIcon() {
    const dispatch = useDispatch();
    const userRole = localStorage.getItem('userRole')
  
    const handleClick = () => {
      localStorage.clear();
      dispatch(logOutUser())
    }
  return (
      <>
    { userRole && (
        <Link to="/admin" className="header__account">
        <p>
          <MdOutlineAccountCircle className="header__account__icon"/>
        </p>
        <button type="button" className="header__account__login" onClick={handleClick}>Log out</button>
        </Link>
      )}
      { !userRole && (
        <Link to="/login" className="header__account">
        <p>
          <MdOutlineAccountCircle className="header__account__icon"/>
        </p>
        <p  className="header__account__login">Log in</p>
      </Link>
      )}
      </>
  );
}

export default LoginIcon;
