// import LoadImage from "./LoadImage"
// import Link from "next/link"

const OrderList = ({ orders }) => {
  return (
    // <></>
    <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
      {orders.map((_order) => (
        <div
          key={_order.id}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
        >
          {_order.attributes.name}
        </div>
      ))}
    </div>
  )
}

export default OrderList
