import { Testimonial } from "@/domain/testimonial";
import TestimonialCard from "./TestimonialCard";

const testimonials: Testimonial[] = [
  {
    id: Math.random().toString(),
    author: {
      id: Math.random().toString(),
      name: "Alex",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    },
    rating: 5,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta.",
  },
  {
    id: Math.random().toString(),
    author: {
      id: Math.random().toString(),
      name: "Alex 2",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    },
    rating: 4,
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: Math.random().toString(),
    author: {
      id: Math.random().toString(),
      name: "Alex 3",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    },
    rating: 4,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta.",
  },
  {
    id: Math.random().toString(),
    author: {
      id: Math.random().toString(),
      name: "Alex 4",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    },
    rating: 4,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta.",
  },
];

export default function Testimonials() {
  return (
    <section className="flex justify-center bg-dark-green-1">
      <div className="w-desktop py-12 flex gap-8 items-stretch">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex-1">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </section>
  );
}
