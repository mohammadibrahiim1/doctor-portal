import AppointMent from "../Pages/AppointMent/AppointMent";
import Login from "../Pages/LogIn/Login";
import Signup from "../Pages/SignUp/Signup";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/Home/Contactus/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Home/Services/Services";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import OurTeam from "../Pages/OurTeam/OurTeam";
import DoctorDetails from "../Components/DoctorsDetails/DoctorDetails";
import Blog from "../Pages/Blog/Blog";
import ArticleDetails from "../Components/ArticleDetails/ArticleDetails";
import ErrorElement from "../Components/ErrorElement/ErrorElement";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
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
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/doctor/:id",
        element: <DoctorDetails></DoctorDetails>,
      },
      {
        path: "/ourTeam",
        element: <OurTeam></OurTeam>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/articles",
        element: <Blog />,
      },
      {
        path: "/article/:id",
        element: <ArticleDetails></ArticleDetails>,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);
