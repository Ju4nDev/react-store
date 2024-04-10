import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/* COMPONENTES */
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Sobre from './routes/Sobre.jsx'
import Contato from './routes/Contato.jsx'

const routers = createBrowserRouter([
  {
    path:"/", element: <App/>,
    errorElement:<Error/>,

    children:[
      {
        path:"/", element:<Home/>,
        path:"/sobre", element:<Sobre/>,
        path:"/contato", element:<Contato/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
  </React.StrictMode>,
)
