import { Testimonial } from "@/domain/testimonial";
import Star from "./star.svg?react";

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
  const { rating, author, content } = testimonial;
  const { avatar, name } = author;
  return (
    <article className="h-full flex flex-col bg-white shadow-lg">
      <header className="flex items-center gap-2 p-4 shrink-0">
        {range(rating).map((val) => (
          <Star key={val} className="w-5 h-5 text-yellow-1" />
        ))}
      </header>
      <main className="p-4 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img className="w-12 rounded-full" src={avatar} alt={name} />
          <h2 className="text-lg font-bold">{name}</h2>
        </div>
        <p>{content}</p>
      </main>
    </article>
  );
}

function range(max: number): number[] {
  const result: number[] = [];
  for (let i = 0; i < max; i++) {
    result.push(i);
  }
  return result;
}
