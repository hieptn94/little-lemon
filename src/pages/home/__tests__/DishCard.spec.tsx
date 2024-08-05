import { render, screen } from "@/test-utils";
import { Dish } from "@/domain/dish";
import DishCard from "../DishCard";

describe("<DishCard />", () => {
  it("should render correctly", () => {
    const dish: Dish = {
      id: Math.random().toString(),
      name: "My Dish",
      description: "This is My Dish's description",
      price: 50,
      photo: "http://localhost:3000",
    };
    render(<DishCard dish={dish} />);

    expect(
      screen.getByRole("heading", {
        name: dish.name,
      }),
    ).toBeVisible();
    expect(screen.getByText(/^\$50.00$/i)).toBeVisible();
    expect(screen.getByText(dish.description)).toBeVisible();
    expect(
      screen.getByRole("img", {
        name: dish.name,
      }),
    ).toHaveAttribute("src", dish.photo);
    expect(
      screen.getByRole("button", {
        name: /^order a delivery$/i,
      }),
    ).toBeVisible();
  });
});
