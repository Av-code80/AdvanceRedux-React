import { Fragment } from 'react';
import { useSelector } from 'react-redux';
//36) need to tap our store 

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';



function App() {      //37)create useSelector for Auth here
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (                //28)infering components here  //29) => to index js for auth component
<Fragment>          
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}     
       <Counter />
    </Fragment>
  );                      //35)render Auth component if we're not authenticated & render user profil if authenticated
}                       //38 and check them => 39)Header.js



export default App;
