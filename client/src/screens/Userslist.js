import React,{useEffect , useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, registerUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { getAllUsersReducer } from "../reducers/userReducer";
import Filter from "../components/Filter";


export default function Userslist() {
  const dispatch = useDispatch();

  const usersstate = useSelector((state) => state.getAllUsersReducer);

  const { loading ,users, error } = usersstate;

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {loading && (<Loading />)}
      {error && <Error error='Something is wrong' />}
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email Id</th>
            <th>User Id</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {users && 
            users.map((user) => {
              return (
                
                <tr>
                  
                  <td>{user.name}</td>
                  <td>
                    {user.email}
                  </td>
                   <td>{user._id}</td> 
                   
                   {/* <td>{user.isAdmin}</td>  */}
                  {/* <td> */}
                    {/* <i
                      className="fa fa-trash m-1"
                      onClick={() => {
                        dispatch(deletePizza(pizza._id));
                      }}
                    ></i>
                    <Link to={`/admin/editpizza/${pizza._id}`}>
                      <i className="fa fa-edit m-1"></i>
                    </Link>
                    </td> */}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
