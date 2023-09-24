import AppointMent from "../Pages/AppointMent/AppointMent";
import Login from "../Pages/LogIn/Login";
import Signup from "../Pages/SignUp/Signup";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/Home/Contactus/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Home/Services/Services";

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
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);
