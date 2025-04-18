import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github , {githubInfoLoader}from './components/GitHub/Github.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path : "",
        element: <Home/>
      },
      {
        path:"about",
        element: <About/>

      },
      {
        path:"ContactUs",
        element: <Contact/>

      } ,
      {
        path:"User/:userid",
        element: <User/>

      },
      {
        loader : githubInfoLoader,
        path:"Github",
        element: <Github/>

      } ]
       }
     ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
