import { createContext, ReactNode, useEffect, useRef } from 'react';

interface WsProviderProps {
  children: ReactNode;
}

const WS_URL = 'wss://socketsbay.com/wss/v2/1/demo/';

export const WsContext = createContext({});

const WsProvider = ({ children }: WsProviderProps) => {
  const wsRef = useRef<WebSocket>();

  useEffect(() => {
    const socket = new WebSocket(WS_URL);

    socket.onopen = (e) => {
      console.log('open', e);
    };
    socket.onmessage = (e) => {
      console.log('onmessage', e);
    };
    socket.onerror = (e) => {
      console.log('error', e);
    };
    socket.onclose = (e) => {
      console.log(wsRef);
      console.log('close', e);
    };

    wsRef.current = socket;

    return () => {
      socket.close();
    };
  }, []);

  const ret = {
    ws: wsRef.current,
  };

  return <WsContext.Provider value={ret}>{children}</WsContext.Provider>;
};

export default WsProvider;
