import { useDispatch } from 'react-redux';

import classes from './Auth.module.css';
import { authActions } from '../store/auth';   //44)

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {         //43)
    event.preventDefault();

    dispatch(authActions.login());       //44)wanna dispatch login action. 
                                        //why login?it's action creator, returning actual action object that should be dispatched
};                                //=>45 to Header.js

  return (        //42)For dispaching login action,onSubmit={loginHandler}>
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>   
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};


export default Auth;
