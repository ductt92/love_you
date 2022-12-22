import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link rel='shortcut icon' href='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script defer src="../js/ca-ngao.js" />
          <script defer src="../js/MorphSVGPlugin3.min.js" />
          <script defer src="../js/DrawSVGPlugin3.min.js" />
          <script defer src="../js/MotionPathPlugin.min.js" />
          <script defer src="../js/Physics2DPlugin3.min.js" />
          <script defer src="../js/EasePack3.min.js" />
          <script async src="../js/ngao.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
