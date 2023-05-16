import React,{useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from 'formik'
import { httpUpdateUserAfterRegister, httpUserRegister } from "../../http/user.service";
import toast,{ Toaster } from 'react-hot-toast';



function Register() {
  const navigate = useNavigate()
    const [state,setState] = useState({
        userName: '',
        password : '',
        enabled : true,
        disabled: false,
    });
    
    const handleInputChange = (e) => {
      setState((previousState) => ({
        ...previousState,
        [e.target.name] :  e.target.value
      }))
    }
    const handleRegisterForm = async (e) => {
      e.preventDefault();
      setState((prevState) => ({
        ...prevState,
        disabled: true,
      }))
      try{
        const httpRespons = await httpUserRegister(state);
        if(httpRespons.data.status === 201){
            const responseAfterRegister = await httpUpdateUserAfterRegister(
              state.userName
            )
          if(responseAfterRegister){
            toast.success("User Created Succesfully")
          }else{
            toast.error("Some error occurred");
          }
          setTimeout(() => {
            navigate("/admin/select")
          },2000)
        }
      }catch(error){
        toast.error("Something Went Wrong!");
        setState((prevState) => ({
          ...prevState,
          disabled: false,
        }))
      }
    }

  return (
    <>
    <Toaster   position="bottom-center" />
      <div className="signin-wrapper">
        <div className="signin-box signup">
          <h2 className="slim-logo">
            <a href="">
            CATELOG APP<span>.</span>
            </a>
          </h2>
          <h3 className="signin-title-primary">Create New Account!</h3>
      <form action="" onSubmit={handleRegisterForm}>
          <div className="row row-xs mg-b-10">
            <div className="col-sm">
              <input
                type="text"
                name="userName"
                className="form-control"
                placeholder="Username"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-sm mg-t-10 mg-sm-t-0">
            <input
            name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button className="btn btn-primary btn-block btn-signin" type="submit" disabled={state.disabled}>
            Sign Up
          </button>
          </form>

         

          <p className="mg-t-40 mg-b-0">
            Already have an account? <NavLink  to='/'>Sign In </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
