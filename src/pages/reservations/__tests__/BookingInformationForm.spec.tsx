import { MockedFunction } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@/test-utils";
import BookingInformationForm from "../BookingInformationForm";
import { fetchAPI } from "../api";

vi.mock("../api");
const mockFetchAPI = fetchAPI as MockedFunction<typeof fetchAPI>;

describe("<BookingInformationForm />", () => {
  it("should perform validation", async () => {
    mockFetchAPI.mockResolvedValue([]);
    const handleSubmit = vi.fn();
    render(
      <BookingInformationForm
        bookingInformation={{
          date: "",
          time: "",
          numberOfGuests: 0,
        }}
        onSubmit={handleSubmit}
      />,
    );

    userEvent.click(
      screen.getByRole("button", {
        name: /^next$/i,
      }),
    );

    expect(await screen.findByText(/^invalid date$/i)).toBeVisible();
    expect(
      await screen.findByText(/^invalid time format. expected hh:mm$/i),
    ).toBeVisible();

    expect(
      await screen.findByText(/^number must be greater than or equal to 1$/i),
    ).toBeVisible();

    userEvent.type(await screen.findByLabelText(/^number of guests$/i), "9");

    expect(
      await screen.findByText(/^number must be less than or equal to 8$/i),
    ).toBeVisible();
  });
});
