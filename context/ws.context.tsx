import { createContext, ReactNode, useEffect, useRef } from 'react';

interface WsProviderProps {
  children: ReactNode;
}

const WS_URL = 'wss://javascript.info/article/websocket/demo/hello';

export const WsContext = createContext({});

const WsProvider = ({ children }: WsProviderProps) => {
  const wsRef = useRef<WebSocket>();

  useEffect(() => {
    if (wsRef.current) return;

    const socket = new WebSocket(WS_URL);

    socket.onopen = (e) => {
      console.log('open', e);

      socket.send(JSON.stringify({ msg: 'ping' }));
    };

    socket.onmessage = function (event) {
      console.log(`[message] Data received from server: ${event.data}`);
    };

    socket.onclose = function (event) {
      if (event.wasClean) {
        console.log(
          `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
        );
      } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        console.log('[close] Connection died');
      }
    };

    wsRef.current = socket;

    return () => {
      console.log('return');
      // socket.close();
    };
  }, [WS_URL]);

  const ret = {
    ws: wsRef.current,
  };

  return <WsContext.Provider value={ret}>{children}</WsContext.Provider>;
};

export default WsProvider;
