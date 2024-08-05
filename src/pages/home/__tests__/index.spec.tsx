import { render, screen } from "@/test-utils";
import Home from "../index";

describe("<Home />", () => {
  it("should render correctly", () => {
    render(<Home />);

    expect(screen).toMatchSnapshot();
  });
});
