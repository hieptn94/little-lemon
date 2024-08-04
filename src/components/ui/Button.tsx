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
          "bg-yellow-1 hover:bg-yellow-2 active:bg-yellow-3 text-black": variant === "yellow",
          "bg-dark-green-1": variant === "dark-green",
        },
        className,
      )}
    />
  );
}
