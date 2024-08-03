import { render, screen, within } from "@/test-utils";
import Header from "../Header";

describe("<Header />", () => {
  it("should render correctly", () => {
    render(<Header />);

    expect(
      within(
        screen.getByRole("link", {
          name: /^little lemon logo$/i,
        }),
      ).getByRole("img", {
        name: /^little lemon logo$/i,
      }),
    ).toBeInTheDocument();

    const navigation = screen.getByRole("navigation");
    const navLinks = [
      /^home$/i,
      /^about$/i,
      /^menu$/i,
      /^reservations$/i,
      /^order online$/i,
      /^login$/i,
    ];
    navLinks.forEach((link) =>
      expect(
        within(navigation).getByRole("link", {
          name: link,
        }),
      ).toBeInTheDocument(),
    );
  });
});
