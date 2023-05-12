import { Providers } from './providers';
import Header from '../components/common/Header/Header';
import Pwa from './pwa';

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <div>{children}</div>
        </Providers>
        <Pwa />
      </body>
    </html>
  );
}
