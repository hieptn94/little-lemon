import { render, screen, waitFor } from "@testing-library/react";
import ContactInformationForm from "../ContactInformationForm";
import userEvent from "@testing-library/user-event";

describe("<ContactInformationForm />", () => {
  it("should render correctly", async () => {
    const handleSubmit = vi.fn();
    const handleBack = vi.fn();
    render(
      <ContactInformationForm
        onSubmit={handleSubmit}
        onBack={handleBack}
        isSubmitting={false}
        contactInformation={{
          pronoun: "mr",
          name: "Alex",
          phone: "0123456789",
        }}
      />,
    );

    expect(screen.getByLabelText(/^pronoun$/i)).toBeVisible();
    expect(screen.getByLabelText(/^name/i)).toBeVisible();
    expect(screen.getByLabelText(/^phone/i)).toBeVisible();

    userEvent.click(
      screen.getByRole("button", {
        name: /^back$/i,
      }),
    );

    await waitFor(() => expect(handleBack).toBeCalled());
  });
});
