import * as React from "react";
import { createRouter, RouterContextProvider } from "@tanstack/react-router";
import { render, RenderOptions } from "@testing-library/react";
import { routeTree } from "@/routeTree.gen";

const customRender = (ui: React.ReactNode, options?: Omit<RenderOptions, "queries">) => {
  const router = createRouter({
    routeTree,
  });
  const actualOptions = options ?? {};
  return {
    ...render(ui, {
      wrapper: ({ children }) => (
        <RouterContextProvider router={router}>{children}</RouterContextProvider>
      ),
      ...actualOptions,
    }),
    router,
  };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
