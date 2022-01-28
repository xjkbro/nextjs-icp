import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div>{children}</div>
            <div
                hidden
                id="snipcart"
                data-config-modal-style="side"
                data-api-key="NTUyOWExN2QtY2Q4Mi00M2YwLWJlYjgtYWQwZWExZmM4ZWM0NjM3Nzg0MDA1Mjg3ODgzMzg1"
            />
            <Footer />
        </>
    )
}

export default Layout
