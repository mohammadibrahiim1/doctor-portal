import AppointMent from "../Pages/AppointMent/AppointMent";
import Login from "../Pages/LogIn/Login";
import Signup from "../Pages/SignUp/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../Layout/Root/Root");
const { default: Home } = require("../Pages/Home/Home");

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
