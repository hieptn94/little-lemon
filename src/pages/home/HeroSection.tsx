import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui";
import restaurantFoodPhoto from "./restauranfood.jpg";

export default function HeroSection() {
  return (
    <div className="flex justify-center bg-dark-green-1">
      <div className="relative flex w-desktop py-12">
        <section className="w-1/4">
          <h1 className="text-yellow-1 text-4xl">Little Lemon</h1>
          <h2 className="text-white text-2xl">Chicago</h2>
          <p className="text-white mt-6">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit.
          </p>
          <Link to="/reservations">
            <Button variant="yellow" className="mt-8">
              Reserve a Table
            </Button>
          </Link>
        </section>
        <img
          className="absolute rounded-xl shadow-lg w-52 right-0"
          src={restaurantFoodPhoto}
          alt="little lemon restaurant"
        />
      </div>
    </div>
  );
}
