import Link from "next/link"
import LoadImage from "./LoadImage"
import { parseCookies, destroyCookie } from "nookies"
import Router from "next/router"
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"

const Navbar = () => {
    const { user_id, username } = parseCookies()
    const { user, setUser } = useContext(AuthContext);
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
                    <span className="mr-3 font-semibold text-sm text-white">
                        <Link href="/orders">{username}</Link>
                    </span>
                    <span className="mr-3 font-semibold text-sm text-white">
                        {" | "}
                    </span>
                    <span className="font-semibold text-sm text-white">
                        <a href="#" onClick={handleLogOut}>
                            Log Out
                        </a>
                    </span>
                </div>
            )
        } else {
            return (
                <div className="flex items-center">
                    <span className="mr-3 font-semibold text-sm text-white">
                        <Link href="/login">Login</Link>
                    </span>
                    <span className="mr-3 font-semibold text-sm text-white">
                        {" | "}
                    </span>
                    <span className="font-semibold text-sm text-white">
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
        //     <span className="snipcart-total-price ml-3 font-semibold text-sm text-white"></span>
        //   </button> */}
        //         <div className="flex items-center"><span className="mr-3 font-semibold text-sm text-white"><i className="fas fa-shopping-cart"></i> <Link href="/cart">Cart</Link></span>
        //         </div>
        //     </div>
        <>
            <section className="hidden lg:block container mx-auto">
                <nav className="flex justify-around bg-grey-200 text-white w-100">
                    <div className="px-5 xl:px-5 py-2 flex w-full items-center">
                        <ul className="hidden md:flex font-semibold font-heading space-x-6">
                            <li><a className="text-dark-500">Click to Chat</a></li>
                            <li><a className="text-dark-500">888-971-9888</a></li>
                            <li><a className="text-dark-500">Contact Us</a></li>
                            <li><a className="text-dark-500">Cage/NCage Code: 3FNF0</a></li>
                        </ul>
                    </div>
                    <div className="px-5 xl:px-5 py-2 flex justify-end w-full items-center">
                        <ul className="hidden md:flex font-semibold font-heading space-x-6">
                            <li><a className="text-dark-500">Request A Quote</a></li>
                            <li><a className="text-dark-500">My Account</a></li>
                        </ul>
                    </div>
                </nav>
            </section>
            <section className="hidden md:block bg-gray-200">
                <div className="container flex flex-around">
                    <div className="flex items-center p-6 space-x-6 ">
                        <Link href="/">
                            <a>
                                <LoadImage
                                    src="/strapi.png"
                                    alt="home"
                                    className="logo"
                                    height="44"
                                    width="150"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center p-6 space-x-6 w-2/3">
                        <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                            <span>All category</span>

                            <span className="h-6 w-6 pl-2"><i className="fas fa-caret-down "></i></span>
                        </div>
                        <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
                            <span className="h-6 w-6 opacity-30"><i className="fas fa-search"></i></span>
                            <input className="bg-gray-100 outline-none" type="text" placeholder="Article name or keyword..." />
                        </div>
                        <div className="bg-secondary-500 hover:bg-secondary-400 py-3 px-5 text-white font-semibold rounded-md hover:shadow-lg transition duration-3000 cursor-pointer">
                            <span>Search</span>
                        </div>
                    </div>

                    <div className="flex items-center p-6 space-x-6 ">
                        <button className="bg-secondary-500 text-gray-200 font-bold px-6 py-6 hover:bg-secondary-400"> Cart </button>
                        <button className="bg-secondary-500 text-gray-200 font-bold px-6 py-6 hover:bg-secondary-400"> Checkout </button>
                    </div>
                </div>
            </section>
            <section className="relative mx-auto">
                {/* NavBar */}
                <nav className="flex justify-between bg-dark-500 text-white w-screen">
                    <div className="px-5 xl:px-12 py-4 flex w-full items-center">
                        <Link href="/"><a className="text-3xl font-bold font-heading">
                            {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
                            Logo Here.
                        </a></Link>
                        {/* NavLinks */}
                        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                            <li><Link href="/"><a className="hover:text-gray-400">Home</a></Link></li>
                            <li><Link href="/categories"><a className="hover:text-gray-400">Catagory</a></Link></li>
                            <li><Link href="/libraries"><a className="hover:text-gray-400">Library</a></Link></li>
                            <li><Link href="/contact"><a className="hover:text-gray-400">Contact Us</a></Link></li>
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
        </>
    )
}

export default Navbar
