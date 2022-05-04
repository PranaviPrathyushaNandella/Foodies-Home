import React , {useState , useEffect} from "react";
import {useDispatch , useSelector} from 'react-redux'
import { registerUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";


export default function Registerscreen() {
    const[name , setname] = useState('')
    const[email,setemail] = useState('')
    const[password , setpassword] = useState('') 
    const[cpassword , setcpassword] = useState('')
    const registerstate = useSelector(state => state.registerUserReducer)
    const {error , loading , success} = registerstate
    const dispatch = useDispatch();

    function register(){

        if(password!=cpassword){
            alert("Passwords mismatched")
        }
        else{
            const user = {
                name,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
            {loading && (<Loading/>)}
            {success && (<Success success='User registered successfully'/>)}
            {error && <Error error='Email already registered'/>}
          <h2 className="m-2" style={{ fontSize: "35px" }}>
            {" "}
            Register{" "}
          </h2>
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              className="form-control"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control"
              required
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Type Password"
              className="form-control"
              required
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Re-Type Password"
              className="form-control"
              required
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />

            <button className="Button mt-5 mb-3" onClick={register}>
              Register
            </button>
              <br/>
            <a href="/login" style={{color:'black'}}>Click here to Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
