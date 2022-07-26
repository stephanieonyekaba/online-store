import './App.css';
import Header from './Header.js';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer'; 
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {

const [{}, dispatch] = useStateValue();

//this function will only run once the app component loads 
//similar to an if statement 

useEffect(()=> {
//on AuthStateChanged is a listener that is always fired when we log in / out
  auth.onAuthStateChanged(authUser => {
    console.log("THE USER IS ", authUser)
    if(authUser) {
      //there was or is a user loged in and it will authomatically log you back in 
      //if you refresh th epage 
      dispatch({
        type: 'SET_USER',
        user: authUser
      })

    }
    else {
      //the user is logged out 
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  })

}, [])






  return (
    //BEM
    
  <BrowserRouter>
    <div className="App">
      <Routes>

      <Route exact path="/" element={
        <>
          <Header/>
          <Home/> 
          <Footer />
        </>
      }/>

      <Route exact path="/checkout" element={
        <>
          <Header/>
          <Checkout />
          <Footer />
        </>
      }/>


      <Route exact path="/login" element={
        <>
        <Login />
        <Footer />
 
        </>
      }/>









      </Routes>
    </div>
  </BrowserRouter>
    
  );
}

export default App;
