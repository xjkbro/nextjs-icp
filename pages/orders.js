import Head from "next/head"
import OrderList from "../components/auth/OrderList"
import { getStrapiURL } from "../utils/api"
import { parseCookies } from "nookies"
import { Container } from "../components/Container"

const Orders = ({ orders }) => {
    return (
        <div>
            <Head>
                <title>Orders</title>
            </Head>
            <Container>
                <OrderList orders={orders.data} />
            </Container>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const { jwt } = parseCookies(ctx)

    const res = await fetch(getStrapiURL("/api/orders?populate[0]=products"), {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    })
    const orders = await res.json()
    return {
        props: {
            orders,
        },
    }
}

export default Orders
