import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='tr'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
          />
          <link
            rel='icon'
            type='image/png'
            href='/favicon/logox.png'
            sizes='32x32'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
