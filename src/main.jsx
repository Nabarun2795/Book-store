import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import router from './routers/router.jsx'
import {Provider} from 'react-redux'
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
