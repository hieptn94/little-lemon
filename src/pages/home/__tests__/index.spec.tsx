import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@/test-utils";
import Home from "../index";

describe("<Home />", () => {
  it("should render correctly", async () => {
    const { router } = render(<Home />);

    expect(screen.getByText(/^little lemon$/i)).toBeVisible();

    // Click `Reserve a table` button
    userEvent.click(
      screen.getByRole("button", {
        name: /^reserve a table$/i,
      }),
    );

    await waitFor(() => expect(router.history.location.pathname).toBe("/reservations"));
  });
});
