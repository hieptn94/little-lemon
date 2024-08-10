import * as React from "react";

export default function FieldLabel(
  props: React.HTMLAttributes<HTMLSpanElement>,
) {
  return <span {...props} className="text-red-500" />;
}
