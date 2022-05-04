import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap'
import Navbar from './components/Navbar';
import Homepage from './screens/Homepage';
import {BrowserRouter , Route , Link , Switch } from 'react-router-dom' 

//import options from './components/axios';
import React from 'react';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';



function App() {
  return (
    <div className="App">
      <Navbar />
      
        <BrowserRouter>
            <Route path="/" exact component={Homepage } />
            <Route path="/cart" exact component={Cartscreen } />
            <Route path="/register" exact component={Registerscreen } />
            <Route path="/login" exact component={Loginscreen} />
            <Route path="/orders" exact component={Ordersscreen } />
            <Route path="/admin" component={Adminscreen } />
          
        </BrowserRouter>
      

      {/* <Homepage /> */}
    </div>
  );
}

export default App;
