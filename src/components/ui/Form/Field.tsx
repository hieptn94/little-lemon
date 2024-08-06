import * as React from "react";
import { FieldIDContext } from "./context";

export default function Field(props: React.HTMLAttributes<HTMLDivElement>) {
  const id = React.useId();
  return (
    <FieldIDContext.Provider value={id}>
      <div {...props} className="flex flex-col gap-2" />
    </FieldIDContext.Provider>
  );
}
