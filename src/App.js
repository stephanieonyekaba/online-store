import './App.css';
import Header from './Header.js';
import Home from './Home';
import Checkout from './Checkout';
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
        </>
      }/>

      <Route exact path="/checkout" element={
        <>
          <Header/>
          <Checkout />
        </>
      }/>









      </Routes>
    </div>
  </BrowserRouter>
    
  );
}

export default App;
