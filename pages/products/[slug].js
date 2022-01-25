import Head from "next/head"
import { useRouter } from "next/router"

import LoadImage from "../../components/LoadImage"
import { getProducts, getProduct } from "../../utils/api"
import { getStrapiMedia } from "../../utils/medias"
import Script from "next/script"

const ProductPage = ({ product }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading product...</div>
    }

    return (
        <>
            <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8">
                <Head>
                    <title>{product.attributes.title} product</title>
                </Head>
                <div className="rounded-t-lg pt-2 pb-2 m-auto h-40 w-40">
                    <LoadImage
                        media={product?.attributes?.product_imgs?.data[0]}
                        size="medium"
                    />
                </div>
                <div className="w-full p-5 flex flex-col justify-between">
                    <div>
                        <h4 className="mt-1 font-semibold text-lg leading-tight truncate text-gray-700">
                            {product.attributes.title} - ${product.attributes.price}
                        </h4>
                        <div className="mt-1 text-gray-600">{product.attributes.title}</div>
                    </div>
                    {/* {product.attributes.status === "published" ? ( */}
                    <button
                        className="snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow"
                        data-item-id={product.id}
                        data-item-price={product.attributes.price}
                        data-item-url={router.asPath}
                        data-item-description={product.attributes.title}
                        data-item-image={getStrapiMedia(
                            product?.image?.formats?.thumbnail?.url
                        )}
                        data-item-name={product.attributes.title}
                        v-bind="customFields"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
            <div className="w-full p-5">
                <h3>Description</h3>
                <div
                    className="mt-1 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: product.attributes.description }}
                ></div>
            </div>
            <div className="w-full p-5">
                <h3>Specification</h3>
                <div
                    className="mt-1 text-gray-600"
                    dangerouslySetInnerHTML={{
                        __html: product.attributes.specifications,
                    }}
                ></div>
            </div>

            <Script src="/scripts/products-script.js" />
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
