import DashboardWrapper from "../components/layouts/DashboardWrapper";
import Dashboard from "../pages/dashboard";
import PrivateRoutes from "./AuthGuard";


const AdminRouter = [
    {
      path: "/admin/",
      element: <PrivateRoutes />,
          children: [{
            path: "dashboard",
            element: <DashboardWrapper childComponent={<Dashboard />} />,
          },
      ]
    },
  
  ];
  
  export default AdminRouter;