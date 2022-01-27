import Link from "next/link"
import LoadImage from "./LoadImage"
import { parseCookies, destroyCookie } from "nookies"
import Router from "next/router"
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"

const Navbar = () => {
    const { user_id, username } = parseCookies()
    const {user,setUser} = useContext(AuthContext);
    const handleLogOut = () => {
        destroyCookie(null, "jwt")
        destroyCookie(null, "user_id")
        destroyCookie(null, "username")
        destroyCookie(null, "user_email")
        setUser({})
        Router.push("/")
    }
    const displayUser = () => {
        if (username) {
            return (
                <div className="flex items-center">
                    <span className="mr-3 font-semibold text-sm text-indigo-500">
                        <Link href="/orders">{username}</Link>
                    </span>
                    <span className="mr-3 font-semibold text-sm text-indigo-500">
                        {" | "}
                    </span>
                    <span className="font-semibold text-sm text-indigo-500">
                        <a href="#" onClick={handleLogOut}>
                            Log Out
                        </a>
                    </span>
                </div>
            )
        } else {
            return (
                <div className="flex items-center">
                    <span className="mr-3 font-semibold text-sm text-indigo-500">
                        <Link href="/login">Login</Link>
                    </span>
                    <span className="mr-3 font-semibold text-sm text-indigo-500">
                        {" | "}
                    </span>
                    <span className="font-semibold text-sm text-indigo-500">
                        <Link href="/register">Register</Link>
                    </span>
                </div>
            )
        }
    }
    return (
        //     <div className="flex justify-between ml-6 mr-6 mt-4">
        //         <Link href="/">
        //             <a>
        //                 <LoadImage
        //                     src="/strapi.png"
        //                     alt="home"
        //                     className="logo"
        //                     height="44"
        //                     width="150"
        //                 />
        //             </a>
        //         </Link>
        //         {displayUser()}
        //         {/* <button className="snipcart-checkout flex items-center">
        //     <LoadImage height="30" width="30" src="/cart.svg" alt="Cart" />
        //     <span className="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"></span>
        //   </button> */}
        //         <div className="flex items-center"><span className="mr-3 font-semibold text-sm text-indigo-500"><i className="fas fa-shopping-cart"></i> <Link href="/cart">Cart</Link></span>
        //         </div>
        //     </div>

        <section className="relative mx-auto">
            {/* NavBar */}
            <nav className="flex justify-between bg-dark-500 text-white w-screen">
                <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                    <a className="text-3xl font-bold font-heading" href="#">
                        {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
                        Logo Here.
                    </a>
                    {/* NavLinks */}
                    <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                        <li><a className="hover:text-gray-400" href="#">Home</a></li>
                        <li><a className="hover:text-gray-400" href="#">Catagory</a></li>
                        <li><a className="hover:text-gray-400" href="#">Collections</a></li>
                        <li><a className="hover:text-gray-400" href="#">Contact Us</a></li>
                    </ul>
                    {/* Header Icons */}
                    <div className="hidden xl:flex items-center space-x-5 items-center">
                        {/* <a className="hover:text-gray-200" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </a> */}
                        {/* Sign In / Register  */}
                        <Link href="/orders">
                            <a className="flex items-center hover:text-gray-200" href="#">
                                    {/* {username?  (<span>Welcome, {username} </span>) :  ("")} */}
                                    <div className="px-3">
                                        {displayUser()}
                                    </div>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg> */}
                            </a>
                        </Link>
                        <Link href="/cart">
                            <a className="flex items-center hover:text-gray-200" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                {/* <span className="flex absolute -mt-5 ml-4">
                                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                    </span>
                                </span> */}
                            </a>
                        </Link>

                    </div>
                </div>
                {/* Responsive Navbar */}
                <a className="xl:hidden flex mr-6 items-center" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="flex absolute -mt-5 ml-4">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                        </span>
                    </span>
                </a>
                <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </a>
            </nav>

        </section>
    )
}

export default Navbar
