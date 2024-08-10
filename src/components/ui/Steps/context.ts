import * as React from "react";

export const IsActiveContext = React.createContext<boolean | null>(null);

export function useIsActive() {
  const ctx = React.useContext(IsActiveContext);
  if (ctx === null) {
    throw new Error(
      "cannot use `useIsActive()` outside of `<IsActiveContext />`",
    );
  }
  return ctx;
}
