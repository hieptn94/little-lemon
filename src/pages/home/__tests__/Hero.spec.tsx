import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@/test-utils";
import Hero from "../Hero";

describe("<Hero />", () => {
  it("should render correctly", async () => {
    const { router } = render(<Hero />);

    expect(screen.getByText(/^little lemon$/i)).toBeVisible();
    expect(
      screen.getByRole("img", {
        name: /^little lemon restaurant$/i,
      }),
    ).toBeVisible();

    // Click `Reserve a table` button
    userEvent.click(
      screen.getByRole("button", {
        name: /^reserve a table$/i,
      }),
    );

    await waitFor(() =>
      expect(router.history.location.pathname).toBe("/reservations"),
    );
  });
});
