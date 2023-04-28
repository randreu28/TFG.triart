import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export default function ErrorMessage({ children, ...props }: Props) {
  return (
    <div
      {...props}
      className="bg-red-500/25 ring-red-500 ring-1 rounded p-3 !my-5 flex gap-3"
    >
      <ExclamationCircleIcon className="w-5 h-5 min-w-fit" />
      <p>{children}</p>
    </div>
  );
}
