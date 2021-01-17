
import './App.css';
import Header from './cpmponents/Header/Header';
import Shop from './cpmponents/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './cpmponents/Review/Review';
import Inventory from './cpmponents/Inventory/Inventory';
import NotFound from './cpmponents/NotFound/NotFound';
import ProductDetail from './cpmponents/ProductDetail/ProductDetail';
import Shipment from './cpmponents/Shipment/Shipment';
import LogIn from './cpmponents/LogIn/LogIn';
import { createContext, useState } from 'react';
import PrivateRoute from './cpmponents/PrivateRoute/PrivateRoute';

export const UserContext=createContext();

function App(props) {

  const[loggedInUser,setLoggedInUser]=useState({});

  return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/shop">

            <Shop></Shop>

          </Route>
          <Route path="/review">

            <Review></Review>

          </Route>
        
          <PrivateRoute path="/shipment">

            <Shipment></Shipment>

          </PrivateRoute>
          <Route path="/login">

            <LogIn></LogIn>

          </Route>
          <Route path="/inventory">
           
           <Inventory></Inventory>

          </Route>
          <Route exact path="/">
            <Shop></Shop> 
          </Route>
          <Route path="/product/:ProductKey">
             <ProductDetail></ProductDetail>
          </Route>
          <Route  path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      

      
      
    </UserContext.Provider>
  );
}

export default App;
