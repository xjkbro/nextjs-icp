// import LoadImage from "./LoadImage"
import Link from "next/link"


  
const OrderList = ({ orders }) => {
    function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }
  return (
    // <></>
    <div className="m-6 grid grid-cols-1 gap-4 mt-8">
      {orders.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
        >
          {/* <Link href={retrieveUrl(item)}> */}
            {/* <a> */}
              {/* <div className="w-full bg-white">
                <div className="rounded-t-lg pt-2 pb-2 w-1/2 mx-auto">
                  <LoadImage
                    src="/strapi.png"
                    alt="home"
                    className="logo"
                    height="44"
                    width="150"
                  />
                </div>
              </div> */}
              <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
                <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                  Title: {item.attributes.title}
                </h4>
                <div className="mt-1 text-sm text-gray-700">
                  Subtotal: {financial(item.attributes.subtotal)} - {financial(item.attributes.discount || 0)}
                </div>
                <div className="mt-1 text-sm text-gray-700">
                  Total: {item.attributes.total}
                </div>
                <div className="mt-1 text-sm text-gray-700">
                  {item.attributes.total == "unpaid" ? <>UNPAID</>: <>PAID</>}
                </div>
              </div>
            {/* </a> */}
          {/* </Link> */}
        </div>
      ))}
    </div>
    
  )
}

export default OrderList
