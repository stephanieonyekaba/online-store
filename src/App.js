import './App.css';
import Header from './Header.js';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer'; 

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
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
