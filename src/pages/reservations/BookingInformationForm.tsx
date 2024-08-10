import * as React from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  DateInput,
  Field,
  FieldError,
  FieldLabel,
  NumberInput,
  SelectInput,
} from "@/components/ui";
import { useAPI } from "@/hooks";
import { BookingInformation, BookingInformationSchema } from "./schema";
import { fetchAPI } from "./api";

type Props = {
  bookingInformation: BookingInformation;
  onSubmit: (values: BookingInformation) => void;
};

export default function BookingInformationForm({
  bookingInformation,
  onSubmit,
}: Props) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingInformation>({
    values: bookingInformation,
    resolver: zodResolver(BookingInformationSchema),
  });

  const [response, call] = useAPI(fetchAPI);

  const times = React.useMemo(() => {
    if (response.status === "success") {
      return response.data;
    }
    return [];
  }, [response]);

  const date = useWatch({ control, name: "date" });

  React.useEffect(() => {
    call(new Date(date));
  }, [call, date]);

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-xl text-dark-green-1 text-center font-bold">
        Booking Information
      </h1>
      <Field>
        <FieldLabel>Select your date</FieldLabel>
        <DateInput
          {...register("date", {})}
          min={new Date().toISOString().split("T")[0]}
          hasError={Boolean(errors.date)}
        />
        {errors.date ? <FieldError>{errors.date.message}</FieldError> : null}
      </Field>
      <Field>
        <FieldLabel>Select your time</FieldLabel>
        <Controller
          name="time"
          control={control}
          render={({ field: { value, ...rest } }) => (
            <SelectInput
              {...rest}
              value={value}
              hasError={Boolean(errors.time)}
            >
              {times.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </SelectInput>
          )}
        />

        {errors.time ? <FieldError>{errors.time.message}</FieldError> : null}
      </Field>
      <Field>
        <FieldLabel>Number of Guests</FieldLabel>
        <Controller
          name="numberOfGuests"
          control={control}
          render={({ field: { onChange, ...rest }, formState }) => (
            <NumberInput
              {...rest}
              onChange={(value) => onChange(value)}
              hasError={Boolean(formState.errors.numberOfGuests)}
            />
          )}
        />
        {errors.numberOfGuests ? (
          <FieldError>{errors.numberOfGuests.message}</FieldError>
        ) : null}
      </Field>
      <footer className="flex justify-end">
        <Button variant="primary" type="submit">
          Next
        </Button>
      </footer>
    </form>
  );
}
