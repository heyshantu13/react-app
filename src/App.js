import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CommonRouter from './routes/common.routes';
import AdminRouter from "./routes/admin.routes";


const router  = createBrowserRouter([...AdminRouter,...CommonRouter])
function App() {
  return (
   <>
     <RouterProvider router={router} />
   </>
  );
}

export default App;
