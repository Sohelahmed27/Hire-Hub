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
import Jobs from './components/Jobs/Jobs';


const router= createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        loader:()=>fetch('fakedb.json')

        
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
      {
        path: '/jobs',
        element:<Jobs></Jobs>,
        
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
