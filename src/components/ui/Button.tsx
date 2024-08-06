import clsx from "clsx";

type Props = {
  variant: "yellow" | "dark-green";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ variant, className, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={clsx(
        "transition-colors rounded h-10 px-4 shadow-lg",
        {
          "bg-yellow-1 text-gray-900 hover:bg-yellow-2 active:bg-yellow-3": variant === "yellow",
          "bg-dark-green-1 text-white hover:bg-dark-green-2 active:bg-dark-green-3":
            variant === "dark-green",
        },
        className,
      )}
    />
  );
}
