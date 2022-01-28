import Head from "next/head"
import CategoryButtons from "../../components/CategoryButtons"
import { Container } from "../../components/Container"
import { Home } from "../../components/Home"
import LibraryButtons from "../../components/LibraryButtons"
import ProductsList from "../../components/ProductsList"
import { getProducts, getCategories, getLibraries } from "../../utils/api"

const Catagories = ({ products, categories, libraries }) => {
    return (
        <div>
            <Head>
                <title>Categories</title>
            </Head>
            <Container>
                <CategoryButtons categories={categories} />
                <LibraryButtons libraries={libraries} />
                <ProductsList products={products} />
            </Container>
        </div>
    )
}

export async function getStaticProps() {
    // Fetch global site settings from Strapi
    const categories = await getCategories()
    const libraries = await getLibraries()
    const products = await getProducts()
    return { props: { products, categories, libraries }, revalidate: 10 }
}

export default Catagories
