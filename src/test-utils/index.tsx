import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";
import Provider from "./Provider";

const customRender = (ui: React.ReactNode, options?: Omit<RenderOptions, "queries">) => {
  const actualOptions = options ?? {};
  return render(ui, { wrapper: Provider , ...actualOptions });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
