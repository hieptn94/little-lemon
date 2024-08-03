import { Link } from "@tanstack/react-router";

import logo from "/logo.svg";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="w-full h-20 flex justify-center">
      <div className="w-desktop flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="little lemon logo" />
        </Link>
        <Nav />
      </div>
    </header>
  );
}
