import { render, screen } from "@/test-utils";
import About from "../About";

describe("<About />", () => {
  it("should render correctly", () => {
    render(<About />);

    expect(screen).toMatchSnapshot();
  });
});
