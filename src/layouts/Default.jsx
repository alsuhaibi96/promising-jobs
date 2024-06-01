import { Outlet } from "react-router-dom"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const Default = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default Default