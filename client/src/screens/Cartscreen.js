import React ,{useState , Component} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addToCart} from '../actions/cartActions'
import { deleteFromCart } from '../actions/cartActions'
import Checkout from '../components/Checkout'
import TimePicker from "@mui/lab/TimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import Timepick from '../components/Timepick'
export default function Cartscreen(){


    // var today = new Date(),
    //   time = today.getHours() + ":" + today.getMinutes() ;

    // this.state={
    //   currentTime : time
    // }

    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems
    
    var subtotal = cartItems.reduce((x,item)=>x+item.price, 0)
    // const [value, setValue] = useState(new Date());
 
    //     const handleChange = (newValue) => {
    //       setValue(newValue);
    //     }
    const dispatch = useDispatch()
    return (
      <div>
        <div className="col justofy-content-center">
          <div className="row-md-4">
            <h2 style={{ fontSize: "40px" }}>My Cart</h2>

            {cartItems.map((item) => {
              return (
                <div className="flex-container">
                  <div className="text-left m-1 w-100">
                    <h1>
                      {item.name} [{item.varient}]
                    </h1>
                    <h1>
                      Price : {item.quantity} * {item.prices[0][item.varient]} ={" "}
                      {item.price}
                    </h1>
                    <h1 style={{ display: "inline" }}>Quantity : </h1>
                    <i
                      className="fa fa-plus"
                      aria-hidden="true"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity + 1, item.varient)
                        );
                      }}
                    ></i>
                    <b>{item.quantity}</b>
                    <i
                      className="fa fa-minus"
                      aria-hidden="true"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity - 1, item.varient)
                        );
                      }}
                    ></i>
                    <hr />
                  </div>
                  <div className="m-1 w-100">
                    <img
                      src={item.image}
                      style={{ height: "80px", width: "80px" }}
                    />
                  </div>
                  <div className="m-1 w-100">
                    <i
                      className="fa fa-trash mt-3"
                      aria-hidden="true"
                      onClick={() => dispatch(deleteFromCart(item))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row-md-4">
            <h1 style={{ fontsize: "45px" }}> SubTotal : {subtotal} /-</h1>
            <br />
            <br />
            {/* <h1>Choose time</h1>
            <div style={{ margin: "5% 40%" }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                
                  <TimePicker
                    label="Time"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                
              </LocalizationProvider>
            </div><br/> */}
            <Timepick/>
            <Checkout subtotal={subtotal} />
          </div>
        </div>
      </div>
    );
}