import {
  Steps,
  Step,
  StepNumber,
  StepLabel,
  Field,
  FieldLabel,
  DateInput,
  TextInput,
  SelectInput,
} from "@/components/ui";

export default function Reservations() {
  return (
    <>
      <section className="pt-20 flex justify-center">
        <div className="w-desktop py-12 px-40 flex flex-col gap-16">
          <Steps>
            <Step isActive>
              <StepNumber>1</StepNumber>
              <StepLabel>Booking Information</StepLabel>
            </Step>
            <Step>
              <StepNumber>2</StepNumber>
              <StepLabel>Contact Information</StepLabel>
            </Step>
            <Step>
              <StepNumber>3</StepNumber>
              <StepLabel>Confirmation</StepLabel>
            </Step>
          </Steps>
          <form className="flex flex-col gap-10">
            <h1 className="text-xl text-dark-green-1 text-center font-bold">Booking Information</h1>
            <Field>
              <FieldLabel>Select your date</FieldLabel>
              <DateInput />
            </Field>
            <Field>
              <FieldLabel>Select your time</FieldLabel>
              <SelectInput />
            </Field>
            <Field>
              <FieldLabel>Number of Guests</FieldLabel>
              <TextInput type="number" />
            </Field>
          </form>
        </div>
      </section>
    </>
  );
}
