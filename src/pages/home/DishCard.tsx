import { Dish } from "@/domain/dish";

type Props = {
  dish: Dish;
};

export default function DishCard({ dish }: Props) {
  const { photo, name, description, price } = dish;
  return (
    <article className="h-full rounded-lg shadow-lg overflow-hidden transition-all cursor-pointer hover:scale-105 hover:shadow-xl flex flex-col">
      <img className="w-full h-52 shrink-0" src={photo} alt={name} />
      <header className="flex items-center justify-between p-4 shrink-0">
        <h2 className="font-bold text-lg">{name}</h2>
        <strong className="text-dark-green-1">{formatCurrency(price)}</strong>
      </header>
      <div className="flex-1 flex flex-col justify-between">
        <main className="p-4">
          <p>{description}</p>
        </main>
        <footer className="p-4">
          <button className="font-bold text-dark-green-1">
            Order a delivery
          </button>
        </footer>
      </div>
    </article>
  );
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function formatCurrency(amount: number) {
  return formatter.format(amount);
}
