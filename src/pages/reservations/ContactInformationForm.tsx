import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Field,
  FieldError,
  FieldLabel,
  SelectInput,
  TextInput,
} from "@/components/ui";
import { ContactInformation, ContactInformationSchema } from "./schema";

type Props = {
  isSubmitting: boolean;
  contactInformation: ContactInformation;
  onBack: VoidFunction;
  onSubmit: (values: ContactInformation) => void;
};

export default function ContactInformationForm({
  onSubmit,
  onBack,
  contactInformation,
  isSubmitting,
}: Props) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInformation>({
    defaultValues: contactInformation,
    resolver: zodResolver(ContactInformationSchema),
  });
  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <FieldLabel>Pronoun</FieldLabel>
        <Controller
          control={control}
          name="pronoun"
          render={({ field: { value, ...rest }, formState }) => (
            <SelectInput
              {...rest}
              value={value}
              hasError={Boolean(formState.errors.pronoun)}
            >
              <option value="mr">Mr.</option>
              <option value="mrs">Mrs.</option>
            </SelectInput>
          )}
        />
        {errors.pronoun ? (
          <FieldError>{errors.pronoun.message}</FieldError>
        ) : null}
      </Field>
      <Field>
        <FieldLabel>Name</FieldLabel>
        <TextInput {...register("name")} hasError={Boolean(errors.name)} />
        {errors.name ? <FieldError>{errors.name.message}</FieldError> : null}
      </Field>
      <Field>
        <FieldLabel>Phone</FieldLabel>
        <TextInput {...register("phone")} hasError={Boolean(errors.phone)} />
        {errors.phone ? <FieldError>{errors.phone.message}</FieldError> : null}
      </Field>
      <footer className="flex items-center justify-end gap-4">
        <Button variant="secondary" onClick={onBack} disabled={isSubmitting}>
          Back
        </Button>
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          Confirm Reservation
        </Button>
      </footer>
    </form>
  );
}
