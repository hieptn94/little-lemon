import { render, screen } from "@/test-utils";

import Footer from "../Footer";

describe("<Footer />", () => {
  it("should render correctly", () => {
    render(<Footer />);

    const headings = [/^navigation$/i, /^contact$/i, /^social media$/i];
    headings.forEach((heading) =>
      expect(
        screen.getByRole("heading", {
          name: heading,
        }),
      ).toBeVisible(),
    );

    const navLinks = [
      /^home$/i,
      /^about$/i,
      /^menu$/i,
      /^reservations$/i,
      /^order online$/i,
      /^login$/i,
    ];
    navLinks.forEach((link) => expect(screen.getByRole("link", { name: link })).toBeVisible());

    const mediaLinks = [/^facebook$/i, /^instagram$/i, /^x$/i];
    mediaLinks.forEach((link) => expect(screen.getByRole("link", { name: link })).toBeVisible());
  });
});
