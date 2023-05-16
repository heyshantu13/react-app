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
      }else{
        setTimeout(() => {
          navigate("/admin/select");
        },2400);
      }
     
    }catch(error){
      if (error.response) {
        if (error.response.status === 404) {
          toast.error("User Not Found")
        }
        else if (error.response.status === 403) {
          toast.error("Account Not Active")
        }else{
          toast.error("Unable to login")
        }
      }
    }
  }
  
  return (
    <>
      
        <Toaster/>
       
        <div className="d-md-flex flex-row-reverse">
      <div className="signin-right">

        <div className="signin-box">
          <h2 className="signin-title-primary">Welcome!</h2>
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
      <div class="signin-left">
	<div class="signin-box">
		<h2 class="slim-logo"><a href="https://altztech.com/altz-enterprise-essential">altz.enterprise.essential</a></h2>

		<p>Cloud Native Application for Big Geospatial Data Management and Intuitive Visualization on 3D Platform by leveraging AI/ML technologies for actionable analytics.</p>

		<p>Browse our site and see for yourself why you need altz.enterprise.essential</p>

		<p><a href="#" class="btn btn-outline-secondary pd-x-25">Learn More</a></p>

		<p class="tx-12">&copy; Copyright 2023 Altz Technologies - All Rights Reserved.</p>
	</div>
</div>
    </div>
    </>
  );
}

export default Login;
