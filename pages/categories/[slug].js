import Head from "next/head"
import { useRouter } from "next/router"
import ProductsList from "../../components/ProductsList"
import {
    getProductsFromCategory,
    getCategories,
    getCategory,
} from "../../utils/api"

const CategoryPage = ({ category, products }) => {
    // console.log(products)
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading category...</div>
    }

    return (
        <div>
            <Head>
                <title>{category.attributes.title} products</title>
            </Head>
            <div>
                <div>{category.attributes.title}</div>
                <div>{category.attributes.description}</div>
            </div>
            <ProductsList products={products} />
            
        </div>
    )
}

export default CategoryPage

export async function getStaticProps({ params }) {
    const category = await getCategory(params.slug)
    const products = await getProductsFromCategory(params.slug)
    return { props: { category, products } }
}

export async function getStaticPaths() {
    const categories = await getCategories()
    return {
        paths: categories.map((_category) => {
            return {
                params: { slug: _category.attributes.slug },
            }
        }),
        fallback: true,
    }
}
