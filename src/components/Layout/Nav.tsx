import { Link } from "@tanstack/react-router";

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center gap-6 text-lg">
        <li>
          <Link className="hover:text-dark-green-1 transition-all" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-dark-green-1 transition-all"
            to="/"
            hash="about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-dark-green-1 transition-all"
            to="/"
            hash="menu"
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-dark-green-1 transition-all"
            to="/reservations"
          >
            Reservations
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-dark-green-1 transition-all"
            to="/"
            hash="order-online"
          >
            Order Online
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-dark-green-1 transition-all"
            to="/"
            hash="login"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
