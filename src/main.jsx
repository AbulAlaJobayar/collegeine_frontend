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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
          loader:({params})=>fetch(`http://localhost:5000/postdata/${params.id}`)
        },
        {
          path:'/details/:id',
          element:<CollegeDetails></CollegeDetails>,
          loader:({params})=>fetch(`http://localhost:5000/postdata/${params.id}`)
        },
        {
          path:'/admit/:id',
          element:<AdmitDetail></AdmitDetail>,
          loader:({params})=>fetch(`http://localhost:5000/postdata/${params.id}`)
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
