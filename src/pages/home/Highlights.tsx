import { Dish } from "@/domain/dish";
import DishCard from "./DishCard";
import Button from "./Button";
import greekSaladPhoto from "./greek-salad.jpg";
import bruchettaPhoto from "./bruchetta.svg";
import lemonDessertPhoto from "./lemon-dessert.jpg";

const dishes: Dish[] = [
  {
    id: Math.random().toString(),
    name: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: 12.99,
    photo: greekSaladPhoto,
  },
  {
    id: Math.random().toString(),
    name: "Bruchetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: 5.99,
    photo: bruchettaPhoto,
  },
  {
    id: Math.random().toString(),
    name: "Lemon Dessert",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: 5.0,
    photo: lemonDessertPhoto,
  },
];

export default function Highlights() {
  return (
    <section id="menu" className="flex justify-center">
      <div className="w-desktop py-12">
        <section className="flex flex-col gap-10">
          <header className="flex justify-between items-center">
            <h1 className="text-4xl">Specials</h1>
            <Button>Online Menu</Button>
          </header>
          <section className="flex gap-6 items-stretch">
            {dishes.map((dish) => (
              <div key={dish.id} className="flex-1">
                <DishCard dish={dish} />
              </div>
            ))}
          </section>
        </section>
      </div>
    </section>
  );
}
