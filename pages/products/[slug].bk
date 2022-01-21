import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

import { twoDecimals } from "../../utils/format";


export default function Product({ product }) {
  console.log(product);
  return (
    <div className={styles.container}>

    <main className={styles.main}>
      <div>
        <Link href="/">
          <a>Go Home</a>
        </Link>
        <div>
        <Image
          src={`https://testing.icpdas-usa.com${product?.attributes?.product_imgs?.data[0]?.attributes?.url}`}
          alt="Vercel Logo"
          width={300}
          height={300}
        />
        </div>
        <h1 className={styles.title}>{product?.attributes?.title}</h1>
        <h4>${twoDecimals(product?.attributes?.price)}</h4>
        <p className={styles.description}>
          Description
          <p>
          <code className={styles.code}>
            {product?.attributes?.description}
          </code>
          </p>
        </p>
        <p className={styles.description}>
          Specification
          <div
            dangerouslySetInnerHTML={{
              __html: product?.attributes?.specifications,
            }}
          ></div>
        </p>

        
      </div>
    </main>
    </div>
  );
}

// tell next.js how many products there are
export async function getStaticPaths() {
  const res = await fetch("https://testing.icpdas-usa.com/api/products");
  const products = await res.json();

  const paths = products.data.map((product) => ({
    params: { slug: product.attributes?.slug, id: product?.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {
  const { slug, id } = params;

  const res = await fetch(
    `https://testing.icpdas-usa.com/api/products?filters[slug][$eq]=${slug}&populate=product_imgs`
  );
  const data = await res.json();
  const product = data.data[0];
  //   console.log(product)

  return {
    props: { product },
  };
}
