import React,{lazy} from "react";
import Login from "../pages/login";
import Register from "../pages/register";

const CommonRouter = [
    {
      path: "/",
      element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
      },
  ];
  
  export default CommonRouter;