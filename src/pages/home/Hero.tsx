import { Link } from "@tanstack/react-router";
import Button from "./Button";
import restaurantPhoto from "./restaurant.jpg";

export default function Hero() {
  return (
    <section className="flex justify-center bg-dark-green-1 pt-20">
      <div className="flex w-desktop py-12 gap-12">
        <article className="flex-1">
          <header>
            <h1 className="text-yellow-1 text-4xl">Little Lemon</h1>
            <h2 className="text-white text-2xl">Chicago</h2>
          </header>
          <p className="text-white mt-6">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit.
          </p>
          <footer className="mt-8">
            <Link to="/reservations">
              <Button>Reserve a Table</Button>
            </Link>
          </footer>
        </article>
        <div className="flex-1 flex justify-end">
          <img
            className="rounded-xl shadow-lg w-80"
            src={restaurantPhoto}
            alt="little lemon restaurant"
          />
        </div>
      </div>
    </section>
  );
}
