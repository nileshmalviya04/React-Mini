import React from 'react'
import ReactDOM from 'react-dom/client'
import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider} from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import Layout from './Layout'
import LoginPage from './components/LoginPage/LoginPage'

const router = createBrowserRouter(
 createRoutesFromElements(
  
 <Route path='' element={<LoginPage />} />
 )
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
)
