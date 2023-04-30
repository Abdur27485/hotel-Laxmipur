import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main.jsx'
import Home from './pages/Home/Home.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'
import CheckOut from './Components/CheckOut/CheckOut.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
    ]
  },
  {
    path:'/checkout',
    element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
