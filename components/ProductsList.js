import LoadImage from "./LoadImage"
import Link from "next/link"
import { useRouter } from "next/router"


import { truncateString } from "../utils/format"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { getStrapiMedia } from "../utils/medias"

const ProductsList = ({ products }) => {
    const {addToCartHandler} = useContext(CartContext);
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading product...</div>
    }

    // console.log(products)
    {/* <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
    {products.map((_product) => (
      <div
        key={_product.id}
        className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
      >
        <Link href={`/products/${_product.attributes.slug}`}>
          <a>
            <div className="w-full bg-white">
              <div className="rounded-t-lg pt-2 pb-2 w-1/2 mx-auto">
                <LoadImage
                  media={_product?.attributes?.product_imgs?.data[0]}
                />
              </div>
            </div>
            <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
              <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                {_product.attributes.title} sticker
              </h4>
              <div className="mt-1 text-sm text-gray-700">
                {truncateString(_product.attributes.description, 240)}
              </div>
            </div>
          </a>
        </Link>
      </div>
    ))}
  </div> */}
    return (
        <div className="">
            {products.map((_product) => (
                <div key={_product.id} className="md:flex shadow-md hover:shadow-lg mx-6 md:mx-auto my-2 max-w-full md:max-w-full h-48">
                    {/* <img className="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6" src={"https://testing.icpdas-usa.com"+_product?.attributes?.product_imgs?.data[0].attributes.url} alt="bag" /> */}
                    <span className="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6">
                    <LoadImage
                                    src={"https://testing.icpdas-usa.com"+_product?.attributes?.product_imgs?.data[0].attributes.url}
                                    alt="home"
                                    className="logo"
                                    height="150"
                                    width="150"
                                />
                    </span>
                    <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <Link href={`/products/${_product.attributes.slug}`}>
                                    <a>
                                        <h2 className="text-xl text-gray-800 font-medium mr-auto">{_product.attributes.title}</h2>
                                    </a>
                                </Link>
                            </div>
                            <p className="text-gray-800 font-semibold tracking-tighter">
                                {/* only
                                <i className="text-gray-600 line-through">60$</i> */}
                                ${_product.attributes.price}
                            </p>
                        </div>
                        <p className="text-sm text-gray-700 mt-4">
                            {truncateString(_product.attributes.short_desc, 240)}
                            {/* {console.log(_product)} */}
                        </p>
                        <div className="flex items-center justify-end mt-4 top-auto">
                            <button className="bg-white text-red-500 px-4 py-2 rounded mr-auto hover:underline">Compare</button>
                            <button className="snipcart-add-item bg-secondary-500 hover:bg-secondary-400 text-gray-200 font-bold px-4 py-4"
                            type="button"
                            data-item-id={_product.id}
                            data-item-price={_product.attributes.price}
                            data-item-url={router.asPath}
                            data-item-description={_product.attributes.title}
                            data-item-image={getStrapiMedia(
                                _product?.image?.formats?.thumbnail?.url
                            )}
                            data-item-name={_product.attributes.title}
                            v-bind="customFields"
                            data-item-quantity={1}
                            onClick={() => addToCartHandler(_product.id,1,_product.attributes.title,_product.attributes.price)}
                        
                            
                            >Add To Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsList
