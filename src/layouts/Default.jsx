import { Outlet } from "react-router-dom"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Default = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Default