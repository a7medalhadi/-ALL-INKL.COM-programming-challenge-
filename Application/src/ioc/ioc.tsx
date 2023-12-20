import React, { useContext, useMemo } from "react";
import { Container, interfaces } from "inversify";

const InversifyContext = React.createContext<{ container: Container | null }>({
  container: null
});

type InversifyContextType = {
  container: Container;
};

export const Injector = ({
  container,
  children
}: React.PropsWithChildren<InversifyContextType>) => {
  const value = useMemo<InversifyContextType>(() => ({ container }), [container]);

  return <InversifyContext.Provider value={value}>{children}</InversifyContext.Provider>;
};

export function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>): T {
  const { container } = useContext(InversifyContext);
  if (!container) {
    throw new Error();
  }
  return container.get<T>(identifier);
}
