import Head from "next/head"
import { useRouter } from "next/router"
import { marked } from "marked"
import LoadImage from "../../components/LoadImage"
import Image from "next/image"
import { getProducts, getProduct } from "../../utils/api"
import { getStrapiMedia } from "../../utils/medias"
import Script from "next/script"
import styled from "styled-components"
import $ from "jquery"
import { tableStyles } from "../../utils/Pages/Products.js"
import { useState, useEffect, useContext } from "react"

import {CartContext} from "../../contexts/CartContext";

const ProductPage = ({ product }) => {
    /**
     * UseEffect allows us to run jQuery scripts that need to run when document loads.
     */
    useEffect(() => {
        tableStyles() //imported product scripts
    }, [])
    const [quantity, setQuantity] = useState(1)
    const [productImage, setImage] = useState(0)
    const { cart, setCart } = useContext(CartContext)

    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading product...</div>
    }

    const addToCartHandler = (id, qty, name, price) => {
        // Finds index of item in cart if exists.
        const foundIndex = cart.findIndex((cartItem) => cartItem.id == id );
        let newItem = { id, price, name, quantity: qty }
        // If item is not in cart, add to the cart array
        // Else get cart to a variable, get item, update item, update cart variable, then update state;
        if(foundIndex == -1)
            setCart([...cart, newItem])
        else {
            let newCart = [...cart];
            let updateItem = cart[foundIndex];
            updateItem.quantity = updateItem.quantity + quantity;
            newCart[foundIndex] = updateItem;
            setCart([...newCart])
        }
    }
    return (
        <>
            <Head>
                <title>{product.attributes.title}</title>
            </Head>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div>
                            <div
                                className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4"
                                style={{ position: "relative" }}
                            >
                                <Image
                                    src={
                                        "https://www.testing.icpdas-usa.com" +
                                        product?.attributes?.product_imgs.data[productImage]
                                            .attributes.url
                                    }
                                    alt="prod img"
                                    layout="fill"
                                    objectFit="contain"
                                    priority
                                />
                            </div>
                            <div className="flex -mx-2 mb-4">
                                {product?.attributes?.product_imgs.data.map((img, i) => (
                                    <div key={img.id} className="flex-1 px-2">
                                        <button
                                            className="ring-2 ring-indigo-300 ring-inset focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center"
                                            onClick={() => setImage(i)}
                                        >
                                            <div
                                                className="w-full h-full"
                                                style={{ position: "relative" }}
                                            >
                                                <Image
                                                    src={getStrapiMedia(img.attributes.url, 0)}
                                                    alt="prod img"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    priority
                                                />
                                            </div>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                            {product.attributes.title}
                        </h2>
                        <p className="text-gray-500 text-sm">
                            By{" "}
                            <a href="#" className="text-indigo-600 hover:underline">
                                ICPDAS USA Inc
                            </a>
                        </p>
                        <div className="flex items-center space-x-4 my-4">
                            <div>
                                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                                    <span className="text-indigo-400 mr-1 mt-1">$</span>
                                    <span className="font-bold text-indigo-600 text-3xl">
                                        {product.attributes.price}
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-green-500 text-xl font-semibold">Save 12%</p>
                                <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                                {/* We ship via UPS and fastest delivery is with Next Day Air. UPS Next Day Air Early typically gets their product to them as early as 8am, Next Day Air gets their product typically there by 10:30am and Next Day Air Saver typically by 3pm. We ship same day for in stock items and the lead time is up to one week for out of stock items. Delivery is dependent on UPS and your shipping method. */}
                            </div>
                        </div>
                        <p className="text-gray-500">{product.attributes.short_desc}</p>
                        <div className="flex py-4 space-x-4">
                            <div className="relative">
                                {/* <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                                    Qty
                                </div> */}
                                {/* <div className="h-4">
                                    <input
                                        type="number"
                                        value={quantity}
                                        className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1"
                                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    />
                                </div> */}

                                <div className="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
                                    <button  onClick={() => { quantity > 1 ? setQuantity(quantity-1) : setQuantity(1) }} className="font-semibold border-r bg-primary-700 hover:bg-primary-600 text-white border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer">
                                        <span className="m-auto">-</span>
                                    </button>
                                    <input
                                        type="hidden"
                                        className="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center"
                                        readOnly
                                        name="custom-input-number"
                                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    />
                                    <div className="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default">
                                        <span>{quantity}</span>
                                    </div>

                                    <button onClick={() => setQuantity(quantity+1)} className="font-semibold border-l  bg-primary-700 hover:bg-primary-600 text-white border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer">
                                        <span className="m-auto">+</span>
                                    </button>
                                    {/* <div className="absolute flex flex-col p-2 w-32 md:w-full mt-6 md:mt-8 mt-10 flex items-start justify-center">
                                        <svg
                                            width="10"
                                            height="10"
                                            className="fill-current ml-5 md:mx-auto"
                                        >
                                            <polygon points="0 10, 10 10, 5 0" />
                                        </svg>
                                        <span className="text-xs block w-48 flex flex-wrap justify-center bg-black p-3 h-auto rounded-lg text-white">
                                            Input validation message
                                        </span>
                                    </div> */}
                                </div>

                                {/* <svg
                                    className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                    />
                                </svg> */}
                            </div>
                            <button
                                type="button"
                                className="snipcart-add-item h-14 px-6 py-2 font-semibold rounded-xl bg-primary-600 hover:bg-primary-500 text-white"
                                data-item-id={product.id}
                                data-item-price={product.attributes.price}
                                data-item-url={router.asPath}
                                data-item-description={product.attributes.title}
                                data-item-image={getStrapiMedia(
                                    product?.image?.formats?.thumbnail?.url
                                )}
                                data-item-name={product.attributes.title}
                                v-bind="customFields"
                                data-item-quantity={quantity}
                                onClick={() => addToCartHandler(product.id,quantity,product.attributes.title,product.attributes.price)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                    Features of {product.attributes.title}
                </h2>
                <div
                    className="mt-1 text-gray-600"
                    dangerouslySetInnerHTML={{
                        __html: marked.parse(
                            marked(product.attributes.description, {
                                baseUrl: "https://testing.icpdas-usa.com",
                            })
                        ),
                    }}
                ></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                    Specifications of {product.attributes.title}
                </h2>
                <div
                    className="mt-1 text-gray-600"
                    dangerouslySetInnerHTML={{
                        __html: product.attributes.specifications,
                    }}
                ></div>
            </div>
        </>
    )
}
export default ProductPage
export async function getStaticProps({ params }) {
    const product = await getProduct(params.slug)
    //   console.log(product)
    return { props: { product } }
}
export async function getStaticPaths() {
    const products = await getProducts()
    return {
        paths: products.map((_product) => {
            return {
                params: { slug: _product.attributes.slug },
            }
        }),
        fallback: true,
    }
}
