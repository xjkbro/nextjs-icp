import App from "next/app"
import Head from "next/head"
import Layout from "../components/Layout"
// import AuthContext from "../contexts/AuthContext"
import { CartProvider } from "../contexts/CartContext"
import { getCategories, getLibraries } from "../utils/api"
import { DefaultSeo } from "next-seo"
import { parseCookies } from "nookies"
import Router from "next/router"
import Script from "next/script"

import "../styles/index.css"
import "../styles/globals.css"

import SEO from "../next-seo.config"

const MyApp = ({ Component, pageProps, categories, libraries }) => {
  return (
    <CartProvider>
      {/* <AuthContext> */}
      <Layout categories={categories} libraries={libraries}>
        <DefaultSeo {...SEO} />

        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.css"
          />
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.js"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
      {/* </AuthContext> */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/scripts/products-script.js" />
            <Script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.min.js" />
    </CartProvider>
  )
}

function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location,
      "Content-Type": "text/html; charset=utf-8",
    })
    ctx.res.end()
  } else {
    Router.push(location)
  }
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  // Checks cookies for authentication
  const jwt = parseCookies(ctx).jwt

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  // If the user is on the orders page and is not authenticated, then push user to login page.
  if (!jwt) {
    if (ctx.pathname === "/orders") {
      redirectUser(ctx, "/login")
      //   pathname = "/login"
    }
  }

  // Fetch global site settings from Strapi
  const categories = await getCategories()
  const libraries = await getLibraries()

  // Pass the data to our page via props
  return {
    pageProps,
    categories,
    libraries,
  }
}

export default MyApp
