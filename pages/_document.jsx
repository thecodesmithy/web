import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body id="page-top">
          <Main />
          <NextScript />
          <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
          <script defer src="/js/script.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;