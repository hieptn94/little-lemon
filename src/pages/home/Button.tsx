import clsx from "clsx";

export default function Button({
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={clsx(
        "transition-colors rounded h-10 px-4 shadow-lg bg-yellow-1 text-gray-900 hover:bg-yellow-2 active:bg-yellow-3",
        className,
      )}
    />
  );
}
