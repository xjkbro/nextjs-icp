import Link from "next/link"
import LoadImage from "./LoadImage"
import { parseCookies, destroyCookie } from "nookies"
import Router from "next/router"

const Navbar = () => {
    const { user_id, username } = parseCookies()
    const handleLogOut = () => {
        destroyCookie(null, "jwt")
        destroyCookie(null, "user_id")
        destroyCookie(null, "username")
        destroyCookie(null, "user_email")
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
        <div className="flex justify-between ml-6 mr-6 mt-4">
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
            {displayUser()}
            {/* <button className="snipcart-checkout flex items-center">
        <LoadImage height="30" width="30" src="/cart.svg" alt="Cart" />
        <span className="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"></span>
      </button> */}
            <div className="flex items-center"><span className="mr-3 font-semibold text-sm text-indigo-500"><i className="fas fa-shopping-cart"></i> <Link href="/cart">Cart</Link></span>
            </div>
        </div>
    )
}

export default Navbar
