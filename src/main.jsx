import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AppliedJobs from './Components/Appliedjobs/AppliedJobs';
import Statistics from './Components/Statistics/Statistics';
import Blogs from './Components/Blogs/Blogs';
import Jobs from './Components/Jobs/Jobs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/Jobs',
        element:<Jobs></Jobs>
      },
      {
        path:'/Applied',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/Statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/Blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/job/:id',
        loader:({params})=> fetch(`https://api.npoint.io/23dcad6ad92d352d9a0a/${params.id-1}`),
        // loader:({params})=> fetch(`https://api.npoint.io/23dcad6ad92d352d9a0ahttps://api.npoint.io/23dcad6ad92d352d9a0a/${params.id}`),
        element:<JobDetails></JobDetails>    
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
