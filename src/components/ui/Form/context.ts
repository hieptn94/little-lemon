import * as React from "react";

export const FieldIDContext = React.createContext<string | null>(null);

export function useFieldID() {
  const ctx = React.useContext(FieldIDContext);
  if (ctx === null) {
    throw new Error(
      "cannot use `useFieldID()` outside of `<FieldIDContext />`",
    );
  }
  return ctx;
}
