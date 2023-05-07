import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginRegister from "../components/LoginRegister";
import Profile from "../components/Profile";
import Layout from "./Layout";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        exact: true,
        element: <App />,
      },
      {
        path: "/auth",
        element: <LoginRegister />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/users",
        component: () => <div>Users</div>,
      },
    ],
  },
]);

export default routes;
