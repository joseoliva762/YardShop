import Document, { Html, Head, Main, NextScript } from "next/document";

class ShopDocument extends Document {
    public render() {
        return (
            <>
                <Html lang="en">
                    <Head>
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="manifest" href="./manifest.json" />
                    </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Html>
            </>
        );
    }
}

export default ShopDocument;