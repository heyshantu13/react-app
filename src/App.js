import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CommonRouter from './routes/common.routes';


const router  = createBrowserRouter(CommonRouter)
function App() {
  return (
   <>
     <RouterProvider router={router} />
   </>
  );
}

export default App;
