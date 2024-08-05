import * as React from "react";
import clsx from "clsx";
import { Link } from "@tanstack/react-router";

import logo from "/logo.svg";
import Nav from "./Nav";

export default function Header() {
  const [hide, setHide] = React.useState(false);
  React.useEffect(() => {
    let prevScrollPosition = window.scrollY;
    function handleScroll() {
      const currentScrollPosition = window.scrollY;
      if (prevScrollPosition > currentScrollPosition) {
        prevScrollPosition = currentScrollPosition;
        setHide(false);
        return;
      }
      prevScrollPosition = currentScrollPosition;
      setHide(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={clsx(
        "w-full h-20 flex justify-center fixed z-10 bg-white top-0 transition-all duration-500",
        {
          "top-0": !hide,
          "-top-[1000px]": hide,
        },
      )}
    >
      <div className="w-desktop flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="little lemon logo" />
        </Link>
        <Nav />
      </div>
    </header>
  );
}
