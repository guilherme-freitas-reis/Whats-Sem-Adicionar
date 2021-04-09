import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <script
            data-ad-client="ca-pub-4785613682714050"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js"></script>
          <script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-analytics.js"></script>
          <script src="/scripts/firebase.js"></script>
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
