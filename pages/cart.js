import Head from "next/head"
import styled from "styled-components"
import { getProducts } from "../utils/api"
import { CartContext } from "../contexts/CartContext"
import { useContext, useEffect, useState } from "react"
import { Container } from "../components/Container"

const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
        let subtotal = 0;
        cart.map((item) => {
            subtotal = subtotal + (item.quantity * item.price);
        })
        setTotal(subtotal)
    }, [cart]);

    return (
        <div>
            <Head>
                <title>Cart</title>
            </Head>
            <Container>
                {cart.map((item) => {
                    return (<div
                        key={item.id}
                        className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
                    >
                        <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
                            <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                                Title: {item.name} x {item.quantity}
                            </h4>
                            <p>${item.price}</p>
                        </div>
                    </div>)
                })}
                <h1>${total}</h1>
            </Container>
        </div>
    )
}

// export async function getStaticProps() {
//   const products = await getProducts()
//   return { props: { products } }
// }

export default Cart

const Wrapper = styled.div`
//   min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
