import * as React from "react";
import { useFieldID } from "./context";

export default function FieldLabel(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const id = useFieldID();
  return <label {...props} htmlFor={id} className="text-dark-green-1" />;
}
