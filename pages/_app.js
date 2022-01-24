import App from "next/app"
import Head from "next/head"
import Layout from "../components/Layout"
import AuthContext from "../contexts/AuthContext"
import { getCategories, getLibraries } from "../utils/api"
import { DefaultSeo } from "next-seo"
import { parseCookies } from "nookies"

import "../styles/index.css"
import "../styles/globals.css"

import SEO from "../next-seo.config"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      {/* <AuthContext> */}
      <Layout categories={pageProps.categories} libraries={pageProps.libraries}>
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
    </>
  )
}

function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location })
    ctx.res.end()
  } else {
    Router.push(location)
  }
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Checks cookies for authentication
  const jwt = parseCookies(ctx).jwt
  // If the user is on the orders page and is not authenticated, then push user to login page.
  if (!jwt) {
    if (ctx.pathname === "/orders") {
      redirectUser(ctx, "/login")
    }
  }

  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const categories = await getCategories()
  const libraries = await getLibraries()
  //   console.log(categories)
  // Pass the data to our page via props
  return {
    ...appProps,
    pageProps: { categories, libraries, path: ctx.pathname },
  }
}

export default MyApp
