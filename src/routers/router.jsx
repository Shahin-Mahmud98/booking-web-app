import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/Home"
import Login from "../components/Login"
import Register from "../components/Register"
import CartPage from "../pages/books/CartPage"
import CheckoutPage from "../pages/books/CheckoutPage"
import OrderPage from "../pages/books/OrderPage"
import SingleBook from "../pages/books/SingleBook"
import PrivateRoute from "./PrivateRoute"
import AdminLogin from "../components/AdminLogin"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>,

            },
            {
              path:"/orders",
              element:<PrivateRoute>
                <OrderPage></OrderPage>
              </PrivateRoute>
            },
            {
                path:"/orders",
                element:<div>
                    Aboout
                </div>
            },
            {
                path: "/login",
                element: <Login/>,
              },
            {
                path: "/register",
                element: <Register/>,
              },
              {
                path: "/cart",
                element: <CartPage/>,
              },
              {
                path: "/checkout",
                element: <PrivateRoute>
                  <CheckoutPage/>
                </PrivateRoute>,
              },
              {
                path: "/books/:id",
                element: <SingleBook/>,
              }
        ]
    },
    {
      path:"/admin",
      element:<div><AdminLogin/></div>
    },
    {
      path:"/dashboard",
      element:<div>Dashboard</div>,
      children:[
        {
          path:"",
          element:<div>Dashboard home</div>
        },
        {
          path:"add-new-book",
          element:<div>Add New Book</div>
        },
        {
          path:"edit-book/:id",
          element:<div>Edit Book</div>
        },
        {
          path:"manage-book",
          element:<div>Manage Book</div>
        },
      ]
    }

])
  
export default router
