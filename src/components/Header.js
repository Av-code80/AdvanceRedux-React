import { useSelector, useDispatch } from 'react-redux'; //39 useSelector
import classes from './Header.module.css';
import { authActions } from '../store/auth';

const Header = () => {
  const dispatch = useDispatch();           //46)to get access of dispatch func => 47 to index.js to splitout index.js file into store folder
  const isAuth = useSelector((state) => state.auth.isAuthenticated);  //40) create isAuth property

  const logoutHandler = () => {         //45)to dispatch action, lougout create logout action object
    dispatch(authActions.logout()); 
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (            //41)if isAuth is truthy render nav, then wanna dispach login action if login button clicked => 42 Auth.js
       <nav>   
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button> 
            </li>
          </ul>
        </nav>
      )}
    </header>
  );//46)point at onClick
};


export default Header;
