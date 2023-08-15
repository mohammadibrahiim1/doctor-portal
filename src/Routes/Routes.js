import AppointMent from "../Pages/AppointMent/AppointMent";
import Login from "../Pages/LogIn/Login";
import Signup from "../Pages/SignUp/Signup";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/appointment",
        element: <AppointMent></AppointMent>,
      },
    ],
  },
]);
