"use client";

import { useEffect, useState } from "react";

export default function withClientOnlyRender<P extends object>(
  Component: React.ComponentType<P>
) {
  return function ClientOnlyRender(props: P) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
      setIsClient(true);
    }, []);

    return isClient ? <Component {...props} /> : null;
  };
}
