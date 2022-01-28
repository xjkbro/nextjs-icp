import Head from "next/head"
import { Home } from "../components/Home"
import ProductsList from "../components/ProductsList"
import { getProducts } from "../utils/api"

const HomePage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Strapi Next.js E-commerce</title>
      </Head>
      {/* <ProductsList products={products} /> */}
      <Home />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  return { props: { products }, revalidate: 10 }
}

export default HomePage
