import React from "react";
import { NavLink } from "react-router-dom";
import { httpLoginUser } from "../../http/user.service";
import toast,{ Toaster } from 'react-hot-toast';


function Login() {
  const [state,setState] = React.useState({
    username : '',
    password : ''
  });

  const handleOnchange = async (e) => {
    setState((previousValue) => ({
      ...previousValue,
      [e.target.name] : e.target.value
    }));
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const httpResult = await httpLoginUser(state);
      if(httpResult.data.info === "invalidCredentials"){
          toast.error(httpResult.data.info);
      }
    }catch(err){
      toast.error("Something Went Wrong!")
    }
  }
  
  return (
    <>
      <div className="signin-wrapper">
        <Toaster/>
        <div className="signin-box">
          <h2 className="slim-logo">
            <a href="/">
              CATELOG APP <span>.</span>
            </a>
          </h2>
          <h3 className="signin-title-secondary">Sign in to continue.</h3>
          <form onSubmit={handleLogin}>         
          <div className="form-group">
            <input
              type="text"
              name = "username"
              className="form-control"
              placeholder="Enter your username"
              onChange={handleOnchange}
              required
            />
          </div>

          <div className="form-group mg-b-50">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={handleOnchange}
              required
            />
          </div>

          <button className="btn btn-primary btn-block btn-signin">Sign In</button>
          </form>
          <p className="mg-b-0">Don't have an account? <NavLink  to='/register'>Sign Up </NavLink></p>
        </div>
      </div>
    </>
  );
}

export default Login;
