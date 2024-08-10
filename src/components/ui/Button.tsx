import clsx from "clsx";

type Props = {
  variant: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ variant, className, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={clsx(
        "transition-colors rounded h-10 px-4 shadow-lg disabled:cursor-none",
        {
          "bg-dark-green-1 text-white hover:bg-dark-green-2 active:bg-dark-green-3 disabled:bg-gray-50":
            variant === "primary",
          "text-dark-green-1 border-2 border-dark-green-1 hover:text-dark-green-2 hover:border-dark-green-2 active:text-dark-green-3 active:border-dark-green-3 disabled:bg-gray-50":
            variant === "secondary",
        },
        className,
      )}
    />
  );
}
