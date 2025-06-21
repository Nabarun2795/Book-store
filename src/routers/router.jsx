
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/homes.jsx"
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import CartPage from "../pages/Books/CartPage.jsx";
import SingleBook from "../pages/Books/SingleBook.jsx";
import CheckoutPage from "../pages/Books/CheckoutPage.jsx";
import OrderPage from "../pages/Books/OrderPage.jsx";
import AdminRoute from "./AdminRoute.jsx";
import AdminLogin from "../components/AdminLogin.jsx";
import DashboardLayout from "../pages/dashboard/DashboardLayout.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Privateroute from "./Privateroute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:"/",
            element:<h1><Home/></h1>,
        },
        {
            path:"/about",
            element:<h1>About</h1>
        },
        {
            path:"/orders",
            element:<Privateroute><OrderPage/></Privateroute>
        },
         {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"/cart",
            element:<CartPage/>
        },
         {
            path:"/books/:id",
            element:<SingleBook/>
        },
        {
            path:"/checkout",
            element:<Privateroute><CheckoutPage/></Privateroute>
        }
    ]
  },
  {
      path: "/admin",
      element: <AdminLogin/>
    },

    {
      path: "/dashboard",
      element: <AdminRoute>
        <DashboardLayout/>
      </AdminRoute>,
      children:[
        {
          path: "",
          element: <AdminRoute><Dashboard/></AdminRoute>
        },
        {
          path: "add-new-book",
          element: <AdminRoute>
            <div>Add new book</div>
          </AdminRoute>
        },
        {
          path: "edit-book/:id",
          element: <AdminRoute>
            <div>Edit Book</div>
          </AdminRoute>
        },
        {
          path: "manage-books",
          element: <AdminRoute>
            <div>Manage book</div>
          </AdminRoute>
        }
      ]
    }
]);

export default router;
