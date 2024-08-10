import { render } from "@/test-utils";
import Confirmation from "../Confirmation";

describe("<Confirmation />", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Confirmation
        bookingInformation={{
          date: "2024-08-11",
          time: "17:30",
          numberOfGuests: 4,
        }}
        contactInformation={{
          pronoun: "mr",
          name: "Alex",
          phone: "0123456789",
        }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
