import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root'
import ErrorPage from './ErrorPage';
import Home from './routes/Home';
import PortfolioItem from './routes/PortfolioItem';
import { loader as portfolioItemLoader } from './routes/PortfolioItem';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio-item/:id",
        element: <PortfolioItem />,
        loader: portfolioItemLoader,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
