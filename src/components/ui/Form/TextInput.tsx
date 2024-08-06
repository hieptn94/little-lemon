import * as React from "react";
import clsx from "clsx";
import { useFieldID } from "./context";

type Props = {
  hasError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({ hasError, ...rest }: Props) {
  const id = useFieldID();
  return (
    <input
      {...rest}
      id={id}
      className={clsx(
        "bg-gray-200 border-2 border-gray-200 rounded h-10 px-2 transition-all outline-none",
        {
          "border-dark-green-1 hover:border-dark-green-1 active:border-dark-green-1 focus:border-dark-green-1": !hasError,
        },
      )}
    />
  );
}
