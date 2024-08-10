import * as React from "react";
import clsx from "clsx";
import { useFieldID } from "./context";

type Props = {
  hasError?: boolean;
  value: number;
  onChange: (value: number) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const NumberInput = React.forwardRef(function NumberInput(
  { hasError, value, onChange, ...rest }: Props,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const id = useFieldID();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange(Number(e.target.value));
  };
  return (
    <input
      {...rest}
      ref={ref}
      type="number"
      id={id}
      className={clsx(
        "bg-gray-200 border-2 border-gray-200 rounded h-10 px-2 transition-all outline-none",
        {
          "border-dark-green-1 hover:border-dark-green-1 active:border-dark-green-1 focus:border-dark-green-1":
            !hasError,
          "border-red-500 hover:border-red-500 active:border-red-500 focus:border-red-500":
            hasError,
        },
      )}
      value={value}
      onChange={handleChange}
    />
  );
});

export default NumberInput;
