export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://testing.icpdas-usa.com"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getCategories() {
  const categories = await fetchAPI("/api/categories");
  return categories.data;
}

export async function getCategory(slug) {
  const categories = await fetchAPI(`/api/categories?filters[slug][$eq]=${slug}`);
  return categories?.data?.[0];
}

export async function getProducts() {
  const products = await fetchAPI("/api/products?populate=product_imgs");
  return products.data;
}

export async function getProduct(slug) {
  const products = await fetchAPI(`/api/products?filters[slug][$eq]=${slug}&populate=product_imgs`);
  return products?.data?.[0];
}
