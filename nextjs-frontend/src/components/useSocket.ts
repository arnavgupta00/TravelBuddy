"use client"
import { useEffect, useRef, useState } from 'react';

const useWebSocket = (url: string) => {
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);
    setWs(socket);

    return () => {
      socket.close();
    };
  }, [url]);

  return ws;
};

export default useWebSocket;
