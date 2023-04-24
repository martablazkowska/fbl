import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const { renderPage } = ctx;
    const initialProps = await Document.getInitialProps(ctx);

    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(
      (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...initialProps, ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props as any;
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="assets/apple-touch-icon.png"></link>
          <link
              href="assets/iphone5_splash.png"
              media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
              rel="apple-touch-startup-image"
          />
          <link
              href="assets/iphone6_splash.png"
              media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
              rel="apple-touch-startup-image"
          />
          <link
              href="assets/iphoneplus_splash.png"
              media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
              rel="apple-touch-startup-image"
          />
          <link
              href="assets/iphonex_splash.png"
              media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
              rel="apple-touch-startup-image"
          />
          <link
              href="assets/iphonexr_splash.png"
              media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
              rel="apple-touch-startup-image"
          />
          <link
              href="assets/iphonexsmax_splash.png"
              media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
              rel="apple-touch-startup-image"
          />
          <link
              href="assets/ipad_splash.png"
              media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
              rel="apple-touch-startup-image"
          />
          <link
              href="assets/ipadpro1_splash.png"
              media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
              rel="apple-touch-startup-image"
          />
          <link
              href="assets/ipadpro3_splash.png"
              media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
              rel="apple-touch-startup-image"
          />
          <link
              href="assets/ipadpro2_splash.png"
              media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
              rel="apple-touch-startup-image"
          />
          <meta name="theme-color" content="#ffffff" />
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
