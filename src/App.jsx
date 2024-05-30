
import NavBar from './components/NavBar'
import CardWrapper from './components/CardWrapper'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

import './App.css'

function App() {
  const router = createBrowserRouter([
    { 
      path: '/',
      element: <><NavBar/><CardWrapper/></>
    },
    {
      path: '/cart',
      element: <><NavBar/><Cart/></>
    }
  ])

  return (
    <>
      <Toaster/>
      <RouterProvider router={router} />
      <Footer/>
    </>
  )
}

export default App
