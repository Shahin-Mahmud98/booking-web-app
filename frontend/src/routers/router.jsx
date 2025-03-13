import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import OrderPage from "../pages/books/OrderPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import adminRoute from "./adminRoute";  // Assuming you have this component
import AdminLogin from "../components/AdminLogin";
// import Dashboard from "../pages/dashboard/Dashboard";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";

// import AddBook from "../pages/dashboard/addbook/Addbook";

//import AddBook from "../pages/dashboard/addbook/Addbook";

import ManageRoomBooking from "../pages/dashboard/managebookroom/ManageRoomBooking";
import UpdateBookingRoom from "../pages/dashboard/editroom/UpdateBookingRoom";
import UserDashboard from "../pages/dashboard/users/UserDashboard";
import AddBook from "../pages/dashboard/addbook/AddBook";
// import UserDashboard from "../pages/dashboard/users/UserDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
    ],
  },
  {
    path: "/user-dashboard",
    element: (
      <PrivateRoute>
        <UserDashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <adminRoute>
        <DashboardLayout />
      </adminRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <adminRoute>
            <Dashboard />
            
          </adminRoute>
        ),
      },
      {
        path: "add-new-book",
        element:<adminRoute>
          <AddBook/>
        </adminRoute>
      },
      {
        path: "edit-book/:id",
        element: <adminRoute>
          <UpdateBookingRoom/>
        </adminRoute>,
      },
      {
        path: "manage-books",
        element: <adminRoute>
          <ManageRoomBooking/>
        </adminRoute>
      },
    ],
  },
]);

export default router;
