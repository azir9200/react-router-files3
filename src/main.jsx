import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home .jsx';
import About from './Components/About/About.jsx';
import Header from './Components/Header/Header.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [

      {
        path: '/contact',
        element: <Contact></Contact>
      },

      {
        path: '/header',
        element: <Header></Header>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      }
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
