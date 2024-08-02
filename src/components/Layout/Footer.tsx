import { Link } from "@tanstack/react-router";
import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import logo from "/footer-logo.svg";

export default function Footer() {
  return (
    <footer className="w-full py-12 flex justify-center bg-primary-dark-green text-white">
      <ul className="w-desktop flex gap-8">
        <li>
          <img src={logo} alt="little lemon logo" className="w-20" />
        </li>
        <li className="flex-1 flex flex-col gap-4">
          <h3 className="font-bold">Navigation</h3>
          <ul className="flex flex-col">
            <li>
              <Link className="hover:text-primary-yellow transition-all" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary-yellow transition-all" to="/" hash="about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary-yellow transition-all" to="/" hash="menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary-yellow transition-all" to="/reservations">
                Reservations
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary-yellow transition-all" to="/" hash="order-online">
                Order Online
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary-yellow transition-all" to="/" hash="login">
                Login
              </Link>
            </li>
          </ul>
        </li>
        <li className="flex-1 grow flex flex-col gap-4">
          <h3 className="font-bold">Contact</h3>
          <ul className="flex flex-col">
            <li>123 An Example Street, Chicago, IL 60647, US</li>
            <li>
              <a className="hover:text-primary-yellow transition-all" href="tel:(+1) 234. 567. 89">
                (+1) 234. 567. 89
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary-yellow transition-all"
                href="mailto:littlelemon@example.com"
              >
                littlelemon@example.com
              </a>
            </li>
          </ul>
        </li>
        <li className="flex-1 grow flex flex-col gap-4">
          <h3 className="font-bold">Social Media</h3>
          <ul className="flex items-center gap-4">
            <li>
              <a
                aria-label="facebook"
                className="hover:text-primary-yellow transition-all"
                href="https://facebook.com"
              >
                <SiFacebook />
              </a>
            </li>
            <li>
              <a
                aria-label="instagram"
                className="hover:text-primary-yellow transition-all"
                href="https://instagram.com"
              >
                <SiInstagram />
              </a>
            </li>
            <li>
              <a
                aria-label="x"
                className="hover:text-primary-yellow transition-all"
                href="https://x.com"
              >
                <SiX />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}
