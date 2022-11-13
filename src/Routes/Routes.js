import AppointMent from "../Pages/AppointMent/AppointMent";
import Login from "../Pages/LogIn/Login";

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
        path: "/appointment",
        element: <AppointMent></AppointMent>,
      },
    ],
  },
]);
