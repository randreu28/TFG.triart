import { paginationAtom } from "@/utils/dashboard.store";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { useAtom } from "jotai";

export default function Pagination() {
  const [pagination, setPagination] = useAtom(paginationAtom);
  return (
    <div className="flex items-center justify-between mt-6">
      <button
        disabled={pagination === 0}
        onClick={() => setPagination(pagination - 1)}
        className="flex items-center text-sm gap-3 justify-center border-teal-500 border bg-teal-950 px-5 py-2 rounded transition-colors hover:bg-teal-800 focus:outline-none focus:ring-4 duration-300"
      >
        <ArrowLongLeftIcon className="w-5 h-5" />
        <span>Previous</span>
      </button>
      <div className="items-center hidden md:flex gap-x-3">
        <button
          onClick={() => setPagination(pagination - 3)}
          disabled={pagination - 3 < 0}
          className="px-2 py-1 text-sm rounded-md hover:bg-teal-950 text-gray-300"
        >
          {pagination - 3}
        </button>
        <button
          onClick={() => setPagination(pagination - 2)}
          disabled={pagination - 2 < 0}
          className="px-2 py-1 text-sm rounded-md hover:bg-teal-950 text-gray-300"
        >
          {pagination - 2}
        </button>
        <button
          onClick={() => setPagination(pagination - 1)}
          disabled={pagination - 1 < 0}
          className="px-2 py-1 text-sm rounded-md hover:bg-teal-950 text-gray-300"
        >
          {pagination - 1}
        </button>
        <button className="px-2 py-1 text-sm rounded-md bg-teal-950 text-gray-300 border-teal-500 border">
          {pagination}
        </button>
        <button
          onClick={() => setPagination(pagination + 1)}
          className="px-2 py-1 text-sm rounded-md hover:bg-teal-950 text-gray-300"
        >
          {pagination + 1}
        </button>
        <button
          onClick={() => setPagination(pagination + 2)}
          className="px-2 py-1 text-sm rounded-md hover:bg-teal-950 text-gray-300"
        >
          {pagination + 2}
        </button>
        <button
          onClick={() => setPagination(pagination + 3)}
          className="px-2 py-1 text-sm rounded-md hover:bg-teal-950 text-gray-300"
        >
          {pagination + 3}
        </button>
      </div>
      <button
        onClick={() => setPagination(pagination + 1)}
        className="flex items-center  text-sm gap-3 justify-center border-teal-500 border bg-teal-950 px-5 py-2 rounded transition-colors hover:bg-teal-800 focus:outline-none focus:ring-4 duration-300"
      >
        <span>Next</span>
        <ArrowLongRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
