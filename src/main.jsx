import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Notfound404 from './components/Notfound404.jsx';
import AboutPage from './pages/AboutPage.jsx';
import LocationPage from './pages/LocationPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element:<LoginPage/>
      },
      {
        path: '/about',
        element:<AboutPage/>
      },
      {
        path: '/location',
        element:<LocationPage/>
      }
    ],
    errorElement: <>
       <Notfound404/>
     </>
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
