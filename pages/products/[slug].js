import Link from "next/link";
import Image from "next/image";

export default function Product({ product }) {
    console.log(product)
  return (
    <div>
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <h2>{product?.attributes?.title}</h2>
      <p>
        <div>Description</div>
        <div>{product?.attributes?.description}</div>
      </p>
      <p>
        <div>Specification</div>
        <div dangerouslySetInnerHTML={{ __html: product?.attributes?.specifications }}></div>
      </p>
      
      <Image src={`https://testing.icpdas-usa.com${product?.attributes?.product_imgs?.data[0]?.attributes?.url}`} alt="Vercel Logo" width={100} height={100} />
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

  const res = await fetch(`https://testing.icpdas-usa.com/api/products?filters[slug][$eq]=${slug}&populate=product_imgs`);
  const data = await res.json();
  const product = data.data[0];
//   console.log(product)

  return {
    props: { product },
  };
}
