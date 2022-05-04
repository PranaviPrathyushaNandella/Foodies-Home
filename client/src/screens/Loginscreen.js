import React, { useState , useEffect  } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function Loginscreen() {
  //const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  //const [cpassword, setcpassword] = useState("");
  const loginstate = useSelector(state=>state.loginUserReducer)
  const {loading , error} = loginstate
  const dispatch = useDispatch();

  

  useEffect(()=>{
      if(localStorage.getItem('currentUser'))
      window.location.href ='/'
  }, [])



  function login() {
    const user = {email , password}
    dispatch(loginUser(user))   
 }

 return (
   <div>
     <div className="row justify-content-center mt-5">
       <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
         {loading && <Loading />}
         {error && <Error error="Invalid credentials" />}
         <h2 className="m-2" style={{ fontSize: "35px" }}>
           Login
         </h2>

         <div>
           <input
             type="email"
             placeholder="email"
             className="form-control"
             value={email}
             onChange={(e) => {
               setemail(e.target.value);
             }}
           />
           <input
             type="password"
             placeholder="password"
             className="form-control"
             value={password}
             required
             onChange={(e) => {
               setpassword(e.target.value);
             }}
           /><br/>
           <button onClick={login} className="Button mb-3">
             LOGIN
           </button>
           <br />
           <a style={{ color: "black" }} className="mt-2" href="/register">
             Click here to Register
           </a>
         </div>
       </div>
     </div>
   </div>
 );
}
