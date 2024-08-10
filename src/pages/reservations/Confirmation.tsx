import { Link } from "@tanstack/react-router";
import { BookingInformation, ContactInformation } from "./schema";
import { Button } from "@/components/ui";

type Props = {
  bookingInformation: BookingInformation;
  contactInformation: ContactInformation;
};

function getPronoun(pronoun: ContactInformation["pronoun"]) {
  switch (pronoun) {
    case "mr": {
      return "Mr. ";
    }
    case "mrs": {
      return "Mrs. ";
    }
  }
}

export default function Confirmation({
  bookingInformation,
  contactInformation,
}: Props) {
  return (
    <section className="flex flex-col items-center text-dark-green-1 gap-6">
      <h1 className="font-bold text-2xl">Thank you!</h1>
      <p className="text-center">
        Dear {getPronoun(contactInformation.pronoun)}
        {contactInformation.name},<br />
        Your reservation for {bookingInformation.numberOfGuests} guests on{" "}
        {bookingInformation.date} at {bookingInformation.time} is confirmed.
      </p>
      <p className="text-center">
        We look forward to welcoming you to Little Lemon and hope you enjoy your
        meal.
      </p>
      <footer>
        <Link to="/">
          <Button variant="primary">Explore more</Button>
        </Link>
      </footer>
    </section>
  );
}
