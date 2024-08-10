import { render, screen } from "@testing-library/react";
import TestimonialCard from "../TestimonialCard";

describe("<TestimonialCard />", () => {
  it("should render correctly", () => {
    const testimonial = {
      id: Math.random().toString(),
      author: {
        id: Math.random().toString(),
        name: "Alex",
        avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
      },
      rating: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta.",
    };
    render(<TestimonialCard testimonial={testimonial} />);

    expect(
      screen.getByRole("heading", {
        name: testimonial.author.name,
      }),
    ).toBeVisible();
    expect(
      screen.getByRole("img", { name: testimonial.author.name }),
    ).toHaveAttribute("src", testimonial.author.avatar);
    expect(screen.getByText(testimonial.content)).toBeVisible();
  });
});
