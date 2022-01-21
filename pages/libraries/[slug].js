import Head from "next/head"
import { useRouter } from "next/router"
import LibraryList from "../../components/LibraryList"
import { getLibraries, getLibrary, getLibraryMediaSourceBySlug } from "../../utils/api"
import styled from 'styled-components';


const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    align-content: center;
    padding: 10px;
`;
const LibraryPage = ({ library }) => {
    console.log(library)
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading Library...</div>
  }

  return (
    <div>
      <Head>
        <title>{library.attributes.title}</title>
      </Head>
      <Title>{library.attributes.title}</Title>
      <LibraryList media={library.attributes.media_source} />
    </div>
  )
}

export default LibraryPage

export async function getStaticProps({ params }) {
  const library = await getLibraryMediaSourceBySlug(params.slug)
  return { props: { library } }
}

export async function getStaticPaths() {
  const libraries = await getLibraries()
  console.log(libraries)
  return {
    paths: libraries.map((_library) => {
      return {
        params: { slug: _library.attributes.slug },
      }
    }),
    fallback: true,
  }
}
