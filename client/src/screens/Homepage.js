import React , {useState , useEffect, Component} from "react";
import { useDispatch , useSelector} from "react-redux";
import { Card } from "react-bootstrap";
//import pizzas from "../data";
//import image from './images/pizza.jpeg'
import FoodItem from "../components/FoodItem"
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";
import placelocation from "../components/placelocation";
// import useGeoLocation from "../components/useGeoLocation";

//import FoodItem from "../components/FoodItem";
export default function Homepage() {

    const dispatch = useDispatch()

    const pizzasstate = useSelector((state)=>state.getAllPizzaaReducer);

    const {pizzas, error, loading} = pizzasstate

    // const location = useGeoLocation()
   

    useEffect(()=>{
        dispatch(getAllPizzas())
    }, [])

    return (
      <div>
        {/* <div>
          {location.loaded ? JSON.stringify(location) : "Location data not available"}
        </div> */}
        {/* <img
          src="https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1260968.jpg&fm=jpg"
          style={{ border: 2 }}
          className="pic"
          alt="blank"
        /> */}
        <placelocation/>
        <Filter />

        <div className="row justify-content-center">
          {loading ? (
            <Loading />
          ) : error ? (
            <Error error="Something went wrong" />
          ) : (
            pizzas.map((pizza) => {
              return (
                <div className="col-md-3 m-3" key={pizza._id}>
                  <div>
                    <FoodItem pizza={pizza} />
                  </div>
                </div>
              );
            })
            // <div>
            //     <h1>{pizzas.length}</h1>
            // </div>
          )}
        </div>
      </div>
    );
    // return(
    // <div><h1>{fooditem.length}</h1></div>
    // );
}