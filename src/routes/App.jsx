import React from "react";
import "../styles/components/App.css";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Home from '../containers/Home';
import CheckOut from '../containers/CheckOut';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from "../components/Layout";

function App() {

  const router = createBrowserRouter([
    {
      path:'', 
      element: <Layout/>, 
      children:[
        {path:'/', element: <Home/>,  errorElement:<NotFound/> },
        {path:'/checkout', element: <CheckOut/> },
        {path:'/checkout/information', element: <Information/> },
        {path:'/checkout/payment', element: <Payment/> },
        {path:'/checkout/success', element: <Success/> },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App;
