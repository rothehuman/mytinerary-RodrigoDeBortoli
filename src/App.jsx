import { RouterProvider } from "react-router-dom"
import router from "./router/router"

/* import './App.css'
import Main from './layouts/Main'
import Home from './pages/Home' */


function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
