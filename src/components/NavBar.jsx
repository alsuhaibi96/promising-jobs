import Logo from '../assets/Screenshot_from_2024-05-29_02-22-25-removebg-preview.png'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    const activeClass=({isActive})=>
        isActive ?"bg-black text-white bg-yellow-500 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" :"text-white bg-yellow-500hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"

    return (
        <div>
            <nav className="bg-blue-700 border-b border-blue-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div
                            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                        >
                            {/* <!-- Logo --> */}
                            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                                <img
                                    className="h-14 w-auto"
                                    src={Logo}
                                    alt="Promising Jobs"
                                />
                                <span className="hidden md:block text-white text-2xl font-bold ml-2"
                                >Promising Jobs</span
                                >
                            </NavLink>
                            <div className="md:ml-auto">
                                <div className="flex space-x-2">
                                    <NavLink
                                        to="/"
                                        className={activeClass}
                                    >Home</NavLink
                                    >
                                    <NavLink
                                        to="/jobs"
                                        className={activeClass}
                                    >Jobs</NavLink
                                    >
                                    <NavLink
                                        to="/add-job"
                                        className={activeClass}
                                    >Add Job</NavLink
                                    >
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