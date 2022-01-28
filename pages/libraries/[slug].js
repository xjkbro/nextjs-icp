import Head from "next/head"
import { useRouter } from "next/router"
import styled from "styled-components"
import CategoryButtons from "../../components/CategoryButtons"
import { Container } from "../../components/Container"
import LibraryButtons from "../../components/LibraryButtons"

import LibraryList from "../../components/LibraryList"
import {
    getCategories,
    getLibraries,
    getLibrary,
    getLibraryMediaSourceBySlug,
} from "../../utils/api"


const LibraryPage = ({ library, categories, libraries }) => {
    // console.log(library)
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading Library...</div>
    }

    return (
        <div>
            <Head>
                <title>{library.attributes.title}</title>
            </Head>
            <Container>
                <CategoryButtons categories={categories} />
                <LibraryButtons libraries={libraries} />
                <div className="my-10 w-full flex flex-col justify-center items-center mx-auto">
                    <div className="font-bold text-2xl">{library.attributes.title}</div>
                    <div className="self-start">{library.attributes.description}</div>
                </div>
                <LibraryList media={library.attributes.media_source} />
            </Container>
        </div>
    )
}

export default LibraryPage

export async function getStaticProps({ params }) {
    const library = await getLibraryMediaSourceBySlug(params.slug)
    // Fetch global site settings from Strapi
    const categories = await getCategories()
    const libraries = await getLibraries()

    return { props: { library, categories, libraries } }
}

export async function getStaticPaths() {
    const libraries = await getLibraries()
    return {
        paths: libraries.map((_library) => {
            return {
                params: { slug: _library.attributes.slug },
            }
        }),
        fallback: true,
    }
}
