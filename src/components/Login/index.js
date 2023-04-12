import { useDispatch, useSelector } from 'react-redux';
// component
import FormField from '../FormField';
import SecondHeader from '../SecondHeader';
// actions
import { handleLogin } from '../../actions/login';
import './style.scss'
import useEraseMessage from '../../selectors/eraseMessage';

function LoginPage() {
    const dispatch = useDispatch()
    const messageApi = useSelector((state) => state.message.messageApi)
 
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(handleLogin())
    }

    useEraseMessage()
  return (
    <><SecondHeader mainTitle='Log in' />
    <main className="loginContainer">
      <div className="container">
        <h2 className="adminPage__maintitle">Welcome</h2>
        { messageApi !== "" && 
       <p>{messageApi}</p> 
      }
      { messageApi === "" && (
        <form action="" method="POST" onSubmit={handleSubmit} className="loginForm">
          <div className="formArticle__div formArticle__div--login">
            <FormField
              name="email"
              type="email"
              label="Email"
              className="inputLogin" />
          </div>
          <div className="formArticle__div formArticle__div--login">
            <FormField
              name="password"
              type="password"
              label="Password"
              className="inputLogin" />
          </div>
          <div id="loginBtn">
            <button type="submit" className="loginButton">Log in</button>
          </div>
        </form>
      )}
      </div>
    </main></>
  );
}

export default LoginPage;
