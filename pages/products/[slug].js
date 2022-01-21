import Link from "next/link";

export default function Product({ product }) {
    var stringToHTML = function (str) {
        var dom = document.createElement('div');
        dom.innerHTML = str;
        return dom;
    };
    // console.log(product)
  return (
    <div>
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <h2>{product.attributes.title}</h2>
      <p>
        <div>Description</div>
        <div>{product.attributes.description}</div>
      </p>
      <p>
        <div>Specification</div>
        <div dangerouslySetInnerHTML={{ __html: product.attributes.specifications }}></div>
      </p>
    </div>
  );
}

// tell next.js how many products there are
export async function getStaticPaths() {
  const res = await fetch("https://testing.icpdas-usa.com/api/products");
  const products = await res.json();

  const paths = products.data.map((product) => ({
    params: { slug: product.attributes.slug, id: product.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {
  const { slug, id } = params;

  const res = await fetch(`https://testing.icpdas-usa.com/api/products?filters[slug][$eq]=${slug}`);
  const data = await res.json();
  const product = data.data[0];
  console.log(product)

  return {
    props: { product },
  };
}
