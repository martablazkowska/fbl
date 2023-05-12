import { Providers } from './providers';
import Header from '../components/common/Header/Header';

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
