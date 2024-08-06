import { IsActiveContext } from "./context";

type Props = {
  isActive?: boolean;
} & React.HTMLAttributes<HTMLLIElement>;

export default function Step({ isActive, ...rest }: Props) {
  return (
    <IsActiveContext.Provider value={isActive ?? false}>
      <li
        {...rest}
        className="flex-1 flex flex-col items-center gap-4 font-bold text-sm text-dark-green-1"
      />
    </IsActiveContext.Provider>
  );
}
