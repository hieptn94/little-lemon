import * as React from "react";
import { createRouter, RouterContextProvider } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";

export default function Provider({ children }: React.PropsWithChildren) {
  return (
    <RouterContextProvider
      router={createRouter({
        routeTree: routeTree,
      })}
    >
      {children}
    </RouterContextProvider>
  );
}
