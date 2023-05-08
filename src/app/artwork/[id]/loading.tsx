import { CubeIcon } from "@heroicons/react/24/outline";

export default function Loading() {
  return (
    <div className="space-y-5">
      <h1 className="text-center text-3xl">Loading</h1>
      <CubeIcon className="h-10 w-10 text-teal-500 animate-spin mx-auto" />
    </div>
  );
}
