import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import AuthProvider from "./Providers/AuthProvider";
import Details from "./Pages/Home/HeaderSection/Details";
import College from "./Pages/College/College";
import CollegeDetails from "./Pages/College/CollegeDetails";
import Admission from "./Pages/Admission/Admission";
import AdmitDetail from "./Pages/Admission/AdmitDetail";
import MyCollege from "./Pages/MyCollege/MyCollege";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/Profile/EditProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },

      {
        path:"/colleges",
        element:<College></College>
      },
      {
        path:"/admission",
        element:<Admission></Admission>
      },
      {
        path:"/mycollege",
        element:<MyCollege></MyCollege>
      },
      {
        path:"/profile",
        element:<Profile></Profile>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      
        {
          path:'/viewdetails/:id',
          element:<Details></Details>,
          loader:({params})=>fetch(`https://collegeine-backend.vercel.app/postdata/${params.id}`)
        },
        {
          path:'/details/:id',
          element:<CollegeDetails></CollegeDetails>,
          loader:({params})=>fetch(`https://collegeine-backend.vercel.app/postdata/${params.id}`)
        },
        {
          path:'/admit/:id',
          element:<AdmitDetail></AdmitDetail>,
          loader:({params})=>fetch(`https://collegeine-backend.vercel.app/postdata/${params.id}`)
        },
        {
          path:'/editprofile/:id',
          element:<EditProfile></EditProfile>,
          loader:({params})=>fetch(`https://collegeine-backend.vercel.app/studentdata/${params.id}`)
        },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
