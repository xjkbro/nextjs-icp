import Head from "next/head"
import { useRouter } from "next/router"
import CategoryButtons from "../../components/CategoryButtons"
import { Container } from "../../components/Container"
import LibraryButtons from "../../components/LibraryButtons"
import ProductsList from "../../components/ProductsList"
import {
    getProductsFromCategory,
    getCategories,
    getLibraries,
    getCategory,
} from "../../utils/api"

const CategoryPage = ({ category, products, categories, libraries }) => {
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
            
            <Container>
                <CategoryButtons categories={categories} />
                <LibraryButtons libraries={libraries} />
                <div className="my-10 w-full flex flex-col justify-center items-center mx-auto">
                    <div className="font-bold text-2xl">{category.attributes.title}</div>
                    <div className="self-start">{category.attributes.description}</div>
                </div>
                <ProductsList products={products} />
            </Container>
            
        </div>
    )
}

export default CategoryPage

export async function getStaticProps({ params }) {
    const category = await getCategory(params.slug)
    const products = await getProductsFromCategory(params.slug)

    // Fetch global site settings from Strapi
    const categories = await getCategories()
    const libraries = await getLibraries()
    
    return { props: { category, products, categories, libraries } }
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
