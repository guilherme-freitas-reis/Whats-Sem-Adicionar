import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <title>Whats Sem Adicionar</title>
          <meta name="title" content="Whats Sem Adicionar" />
          <meta
            name="description"
            content="Inicie conversas no whatsapp sem adicionar aos contatos."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://whatssemadicionar.vercel.app/"
          />
          <meta property="og:title" content="Whats Sem Adicionar" />
          <meta
            property="og:description"
            content="Inicie conversas no whatsapp sem adicionar aos contatos."
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://whatssemadicionar.vercel.app/"
          />
          <meta property="twitter:title" content="Whats Sem Adicionar" />
          <meta
            property="twitter:description"
            content="Inicie conversas no whatsapp sem adicionar aos contatos."
          />
          <link rel="shortcut icon" href="/favicon.png" />
          <script
            data-ad-client="ca-pub-4785613682714050"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <meta
            name="google-site-verification"
            content="Vny8a2HsVLMIljSHxHCM4BAyFS7khyc3hNu7NlG-rvA"
          />
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

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
