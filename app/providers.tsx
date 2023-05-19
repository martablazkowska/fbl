'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import WsProvider from '../context/ws.context';

const colors = {
  brand: {
    900: '#0b3407',
    800: '#153e75',
    700: '#285224',
  },
};

export const theme = extendTheme({ colors });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WsProvider>
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </WsProvider>
  );
}
