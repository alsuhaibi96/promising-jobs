import Logo from '../assets/Screenshot_from_2024-05-29_02-22-25-removebg-preview.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const activeClass = ({ isActive }) =>
        isActive ? "bg-black text-white bg-yellow-400 hover:bg-yellow-500 hover:text-white rounded-md px-3 py-2" : "text-white hover:bg-yellow-500 hover:text-white rounded-md px-3 py-2"

    return (
        <div>
            <nav className="bg-blue-700 border-b border-blue-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:justify-start">
                            {/* Logo */}
                            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                                <img
                                    className="h-14 w-auto"
                                    src={Logo}
                                    alt="Promising Jobs"
                                />
                                <span className="hidden sm:block text-white text-2xl font-bold ml-2"
                                >Promising Jobs</span
                                >
                            </NavLink>
                            {/* Hamburger Menu - visible on smaller screens */}
                            <div className="sm:hidden flex items-center">
                                <button className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200">
                                    {/* Icon for menu (using heroicons, for example) */}
                                    <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5h14v2H3V5zm0 6h14v2H3v-2zm0 6h14v2H3v-2z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            {/* Navigation Links */}
                            <div className="hidden sm:block md:ml-auto">
                                <div className="flex space-x-2">
                                    <NavLink to="/" className={activeClass}>Home</NavLink>
                                    <NavLink to="/jobs" className={activeClass}>Jobs</NavLink>
                                    <NavLink to="/contact" className={activeClass}>Contact us</NavLink>
                                    <NavLink to="/add-job" className={activeClass}>Add Job</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
