import * as React from "react";
import clsx from "clsx";
import { useFieldID } from "./context";

type Props = {
  hasError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const DateInput = React.forwardRef(function DateInput(
  { hasError, ...rest }: Props,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const id = useFieldID();
  return (
    <input
      {...rest}
      ref={ref}
      id={id}
      type="date"
      className={clsx(
        "bg-gray-200 border-2 border-gray-200 rounded h-10 px-2 transition-all outline-none",
        {
          "border-dark-green-1 hover:border-dark-green-1 active:border-dark-green-1 focus:border-dark-green-1":
            !hasError,
          "border-red-500 hover:border-red-500 active:border-red-500 focus:border-red-500":
            hasError,
        },
      )}
    />
  );
});

export default DateInput;
