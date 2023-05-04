import { artworksAtom } from "@/utils/dashboard.store";
import {
  ArrowUpTrayIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useAtomValue } from "jotai";

export default function Options() {
  const artworks = useAtomValue(artworksAtom);

  return (
    <div className="lg:flex lg:items-center lg:justify-between mt-5">
      <p className="text-gray-300">
        {artworks ? artworks.length : 0} items selected
      </p>
      <div className="flex flex-col lg:flex-row gap-2 items-center gap-x-3">
        <button className="flex items-center text-sm w-full lg:w-auto gap-3 justify-center border-red-500 border bg-red-950 px-5 py-2 rounded transition-colors hover:bg-red-800 focus:outline-none focus:ring-4 duration-300">
          <TrashIcon className="h-5 w-5" />
          <span>Delete</span>
        </button>

        <button className="flex items-center text-sm w-full lg:w-auto gap-3 justify-center border-teal-500 border bg-teal-950 px-5 py-2 rounded transition-colors hover:bg-teal-800 focus:outline-none focus:ring-4 duration-300">
          <PencilIcon className="h-5 w-5" />
          <span>Edit title</span>
        </button>

        <button className="flex items-center text-sm w-full lg:w-auto gap-3 justify-center border-teal-500 border bg-teal-950 px-5 py-2 rounded transition-colors hover:bg-teal-800 focus:outline-none focus:ring-4 duration-300">
          <EyeIcon className="h-5 w-5" />
          <span>Change visibility</span>
        </button>

        <a
          href="/publish"
          className="bg-teal-500 flex gap-3 text-sm w-full lg:w-auto justify-center px-5 py-2 text-black rounded transition-colors hover:bg-teal-300 duration-300 focus:outline-none focus:ring-4"
        >
          <ArrowUpTrayIcon className="h-5 w-5" />
          <span>Publish</span>
        </a>
      </div>
    </div>
  );
}
