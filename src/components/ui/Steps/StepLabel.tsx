import { useIsActive } from "./context";

export default function StepLabel(
  props: React.HTMLAttributes<HTMLSpanElement>,
) {
  useIsActive();
  return <span {...props}></span>;
}
