import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJob from './components/AppliedJob/AppliedJob';
import Blog from './components/Blog/Blog';
// import Jobs from './components/Jobs/Jobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
// import FeatureJobs from './components/FeatureJobs/FeatureJobs';
import Details from './components/Details/Details';
import FeatureJob from './components/FeatureJob/FeatureJob';


const router= createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element:<Home></Home>,
       
        // loader:()=>fetch('https://run.mocky.io/v3/f70daafe-ad8c-4d72-89e5-925916b41b6c'),

      },
      {
        path: '/statistics',
        element:<Statistics></Statistics>
      },
      {
        path: '/appliedjob',
        element:<AppliedJob></AppliedJob>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      // {
      //   path: '/jobs',
      //   element:<Jobs></Jobs>,
      //   loader:(()=>fetch('/fakedb.json'))
        
      // },
      {
        path: '/featureJob',
        element:<FeatureJob></FeatureJob>,
        
      },
      {
        path: '/details',
        element:<Details></Details>,
        loader:({params})=>fetch('https://run.mocky.io/v3/f70daafe-ad8c-4d72-89e5-925916b41b6c'),
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
