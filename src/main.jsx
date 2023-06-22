import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Countries from './component/Countries.jsx';
import CountryDetails from './component/CountryDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/countries",
        element:<Countries/>,
        loader:()=> fetch('https://restcountries.com/v3.1/all')        
      },
      {
        path: '/country/:id',
        element: <CountryDetails/>,
       loader:({params}) => fetch(`https://restcountries.com/v3.1/alpha/${params.id}`)
      },
      {
        path:"/about",
        element:<About/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
