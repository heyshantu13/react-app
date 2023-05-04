import React,{lazy} from "react";
import Login from "../components/pages/login";
import Register from "../components/pages/register";

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