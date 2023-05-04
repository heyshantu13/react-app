import React from "react";
import { NavLink } from "react-router-dom";


function Login() {
  return (
    <>
      <div className="signin-wrapper">
        <div className="signin-box">
          <h2 className="slim-logo">
            <a href="/">
              NIC <span>.</span>
            </a>
          </h2>
          <h3 className="signin-title-secondary">Sign in to continue.</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group mg-b-50">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <button className="btn btn-primary btn-block btn-signin">Sign In</button>
          <p className="mg-b-0">
          Don't have an account? <NavLink  to='/register'>Sign Up </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
