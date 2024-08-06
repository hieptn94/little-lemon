import clsx from "clsx";
import { useIsActive } from "./context";

export default function StepNumber(props: React.HTMLAttributes<HTMLSpanElement>) {
  const isActive = useIsActive();
  return (
    <span
      {...props}
      className={clsx(
        "w-8 h-8 rounded-full border-2 border-dark-green-1 flex items-center justify-center",
        {
          "text-white bg-dark-green-1": isActive,
        },
      )}
    />
  );
}
