import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router ,  Routes , Route ,Link } from 'react-router-dom';
//import { Link} from 'react-router-dom'
import {Switch} from 'react-router' 


import Addpizza from './Addpizza';
import Orderslist from './Orderslist';
import Pizzaslist from './Pizzaslist';
import Userslist from './Userslist';
import Editpizza from './Editpizza';


export default function Adminscreen(){
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!currentUser.isAdmin){
            window.location.href="/";
        }
    },[]);
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

            <ul className="adminfunctions">
              <li>
                <Link to={"/admin/userslist"} style={{ color: "black" }}>
                  Users List
                </Link>
              </li>
              <li>
                <Link to={"/admin/pizzaslist"}>Pizzas List</Link>
              </li>
              <li>
                <Link to={"/admin/addpizza"}>Add Pizzas</Link>
              </li>
              <li>
                <Link to={"/admin/orderslist"}>Orders List</Link>
              </li>
            </ul>
            {/* <Routes>
                <Route path="/admin" exact element={Userslist} />
                <Route path="/admin/userslist" exact element={Userslist} />
                <Route path="/admin/orderslist" exact element={Orderslist} />
                <Route path="/admin/pizzaslist" exact element={Pizzaslist} />
                <Route path="/admin/addpizza" exact element={AddPizza} />
              </Routes> */}

            <Switch>
              <Route path="/admin" exact component={Userslist} />
              <Route path="/admin/userslist" exact component={Userslist} />
              <Route path="/admin/orderslist" exact component={Orderslist} />
              <Route path="/admin/pizzaslist" exact component={Pizzaslist} />
              <Route path="/admin/addpizza" exact component={Addpizza} />
              <Route path="/admin/editpizza/:pizzaid" exact component={Editpizza} />
            </Switch>
          </div>
        </div>
      </div>
    );
}