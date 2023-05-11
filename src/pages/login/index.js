import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { httpLoginUser } from "../../http/user.service";
import toast,{ Toaster } from 'react-hot-toast';


function Login() {
  const navigate = useNavigate()
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
      navigate("/admin/select");
    }catch(err){
      toast.error("Something Went Wrong!")
    }
  }
  
  return (
    <>
      
        <Toaster/>
       
        <div className="d-md-flex flex-row-reverse">
      <div className="signin-right">

        <div className="signin-box">
          <h2 className="signin-title-primary">Welcome back!</h2>
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
      <div className="signin-left">
        <div className="signin-box">
          <h2 className="slim-logo"><a href="/">slim<span>.</span></a></h2>

          <p>We are excited to launch our new company and product Slim. After being featured in too many magazines to mention and having created an online stir, we know that ThemePixels is going to be big. We also hope to win Startup Fictional Business of the Year this year.</p>

          <p>Browse our site and see for yourself why you need Slim.</p>

          {/* <p><a href="#" className="btn btn-outline-secondary pd-x-25">Learn More</a></p> */}

          {/* <p className="tx-12">&copy; Copyright 2018. All Rights Reserved.</p> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
