import DashboardWrapper from "../components/layouts/DashboardWrapper";
import Choose from "../pages/choose";
import Dashboard from "../pages/dashboard";
import Roles from "../pages/dashboard/Roles";
import Users from "../pages/dashboard/Users";
import PrivateRoutes from "./AuthGuard";


const AdminRouter = [
    {
      path: "/admin/",
      element: <PrivateRoutes />,
          children: [
            {
              path: "select",
              element: <Choose />,
            },
            {
            path: "dashboard",
            element: <DashboardWrapper childComponent={<Dashboard />} />,
          },
          {
            path: "roles",
            element: <DashboardWrapper childComponent={<Roles />} />,
          },
          {
            path: "users",
            element: <DashboardWrapper childComponent={<Users />} />,
          },
          {
            path: "role-mapping",
            element: <DashboardWrapper childComponent={<Users />} />,
          },
          
      ]
    },
  
  ];
  
  export default AdminRouter;