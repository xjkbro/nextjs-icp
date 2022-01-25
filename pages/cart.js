import Head from "next/head"
import styled from "styled-components"
import { getProducts } from "../utils/api"

import { CartContext } from "../contexts/CartContext"

import { useContext } from "react"

const Cart = ({ products }) => {
  const { items, setItems } = useContext(CartContext)
//   console.log(items)
  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>
      <Wrapper>
        {items.map((item) => {
          return (<div
            key={item.id}
            className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
          >
            <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
              <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                Title: {item.product}
              </h4>
            </div>
          </div>)
        })}
      </Wrapper>
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  return { props: { products } }
}

export default Cart

const Wrapper = styled.div`
//   min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
