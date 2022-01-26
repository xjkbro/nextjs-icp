import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                    <script type="text/javascript" src="/scripts/products-script.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument
