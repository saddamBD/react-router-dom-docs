import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorPage from './error-page';
import Contact from './routes/contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root,{loader as rootLoader} from './routes/root';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact/>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
