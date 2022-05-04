import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch, useSelector} from 'react-redux'
import { placeOrder } from '../actions/orderActions';
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";
import { deleteFromCart } from '../actions/cartActions';
import Timepick from './Timepick';

//import razorpay from 'razorpay';
//import axios from axios;
export default function Checkout({subtotal}){
    // const scr = document.createElement("script"),
    //     scr.src = "https://checkout.razorpay.com/v1/checkout.js";
    //     document.body.appendChild(scr);
    const orderstate = useSelector((state)=>state.placeOrderReducer)
    const {loading , error , success} = orderstate
    const dispatch = useDispatch()
     const cartstate = useSelector((state) => state.cartReducer);
     const cartItems = cartstate.cartItems;
     //const timestate = useSelector((state)=>state.Timepick)
     
    function tokenHandler(token){
        console.log(token);
        dispatch(placeOrder(token , subtotal))
    }

    return (
      <div>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success={alert('your order placed successfully')} />}

        <StripeCheckout
          amount={subtotal * 100}
          shippingAddress
          token={tokenHandler}
          stripeKey="pk_test_51KtcvTSHFrONo2xnjQyJw6IEeKfHLYxm05Z9Qf2rR1fwRJqhWD51q1wm5zlBUw6VyVaH8rtmoXxTWTNrQMUsqnQn00DNMVgRZM"
          currency="INR"
        >
          <button
            className="Button">
            Pay Now
          </button>
        </StripeCheckout>
      </div>
    );
}