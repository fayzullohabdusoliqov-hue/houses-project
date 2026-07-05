import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import Logout from './pages/Logout/Logout'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import Table from './pages/Table/Table'
import Profile from './pages/Profile/Profile'
import { useState } from 'react'
import TableDetail from './pages/TableDetaild/TableDetail'

function App() {
  const [mode, setMode] = useState(false)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/logout"/>
    },
    {
      path: "logout",
      element: <Logout/>
    },
    {
      path: "layout",
      element: <Layout setMode={setMode} mode={mode}/>,
      children: [
        {
          index: true,
          element: <Navigate to="dashboard"/>
        },
        {
          path: "dashboard",
          element: <Home/>
        },
        {
          path: "table",
          element: <Table/>
        },
        {
          path: "tableDetail/:firebaseKey",
          element: <TableDetail/>
        },
        {
          path: "profile",
          element: <Profile/>
        },
      ]
    }
  ])
  return (<div className={mode? "" : "dark"}>
     <RouterProvider router={router}/>
  </div>)
}

export default App
