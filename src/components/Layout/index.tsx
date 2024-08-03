import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";

type Props = React.PropsWithChildren;
export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
