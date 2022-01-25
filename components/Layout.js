import CategoryButtons from "./CategoryButtons"
import LibraryButtons from "./LibraryButtons"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children, categories, libraries}) => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen-xl flex flex-col min-h-screen w-full">
        {/* <Navbar /> */}
        <CategoryButtons categories={categories} />
        <LibraryButtons libraries={libraries} />
        <div className="flex-grow">{children}</div>
        {/* <Footer /> */}
      </div>
      <div
        hidden
        id="snipcart"
        data-config-modal-style="side" 
        data-api-key="NTUyOWExN2QtY2Q4Mi00M2YwLWJlYjgtYWQwZWExZmM4ZWM0NjM3Nzg0MDA1Mjg3ODgzMzg1"
      />
    </div>
  )
}

export default Layout
