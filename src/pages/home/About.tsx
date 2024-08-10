import photo1 from "./mario-and-adrian-a.jpg";
import photo2 from "./mario-and-adrian-b.jpg";

export default function About() {
  return (
    <section id="about" className="flex justify-center">
      <div className="w-desktop py-12 flex gap-16 items-stretch">
        <article className="flex flex-col gap-8 flex-1 justify-center">
          <header>
            <h1 className="text-4xl">Little Lemon</h1>
            <h2 className="text-2xl">Chicago</h2>
          </header>
          <main>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </main>
        </article>
        <div className="h-96 flex-1 relative">
          <img
            className="rounded-lg absolute w-80 left-0 bottom-0"
            src={photo2}
          />
          <img
            className="rounded-lg absolute w-80 top-0 right-0"
            src={photo1}
          />
        </div>
      </div>
    </section>
  );
}
