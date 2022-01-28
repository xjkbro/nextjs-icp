import Head from "next/head"
import CategoryButtons from "../../components/CategoryButtons"
import { Container } from "../../components/Container"
import { Home } from "../../components/Home"
import LibraryButtons from "../../components/LibraryButtons"
import { getCategories, getLibraries } from "../../utils/api"

const Libraries = ({ categories, libraries }) => {
    return (
        <div>
            <Head>
                <title>Libraries</title>
            </Head>
            <Container>
                <CategoryButtons categories={categories} />
                <LibraryButtons libraries={libraries} />
            </Container>
        </div>
    )
}

export async function getStaticProps() {
    // Fetch global site settings from Strapi
    const categories = await getCategories()
    const libraries = await getLibraries()
    return { props: { categories, libraries }, revalidate: 10 }
}

export default Libraries
