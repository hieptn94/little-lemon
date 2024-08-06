import { render, screen } from "@/test-utils";
import { Steps, Step, StepNumber, StepLabel } from "../index";

describe("<Steps />", () => {
  it("should render correctly", () => {
    const steps = [
      {
        number: 1,
        label: "First step",
        isActive: true,
      },
      {
        number: 2,
        label: "Second step",
      },
      {
        number: 3,
        label: "Third step",
      },
    ];
    render(
      <Steps>
        {steps.map(({ number, label, isActive }) => (
          <Steps key={number}>
            <Step isActive={isActive}>
              <StepNumber>{number}</StepNumber>
              <StepLabel>{label}</StepLabel>
            </Step>
          </Steps>
        ))}
      </Steps>,
    );

    steps.forEach(({ number, label }) => {
      expect(screen.getByText(number)).toBeVisible();
      expect(screen.getByText(label)).toBeVisible();
    });
  });
});
