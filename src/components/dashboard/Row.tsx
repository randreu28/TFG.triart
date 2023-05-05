import { selectionAtom } from "@/utils/dashboard.store";
import { Database } from "@/utils/db.types";
import { CubeIcon } from "@heroicons/react/24/outline";
import { useAtom } from "jotai";

type Props = Database["public"]["Tables"]["artwork"]["Row"];

export function Row({
  created_at,
  file_name,
  title,
  views,
  visiblity,
  id,
  size,
}: Props) {
  const date = new Intl.DateTimeFormat("en-EN", { dateStyle: "long" }).format(
    new Date(Date.parse(created_at))
  );

  const [selection, setSelection] = useAtom(selectionAtom);

  return (
    <tr className="h-[70px]">
      <td className="p-4 text-sm font-medium whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <input
            onChange={(e) => {
              e.target.checked
                ? setSelection([...selection, id])
                : setSelection(
                    selection.filter((selectionId) => selectionId !== id)
                  );
            }}
            type="checkbox"
            className="accent-teal-500"
          />
          <div className="flex items-center gap-x-2">
            <div className="flex items-center justify-center w-8 h-8 min-w-[2rem] text-teal-500 rounded-full bg-teal-950">
              <CubeIcon className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-normal text-white whitespace-normal line-clamp-1">
                {file_name}
              </h2>
              <p className="text-xs font-normal text-gray-400">
                {size / 1000} KB
              </p>
            </div>
          </div>
        </div>
      </td>
      <td className="p-4 text-sm font-normal text-gray-300 line-clamp-1">
        {title}
      </td>
      <td className="p-4 text-sm text-gray-300 whitespace-nowrap">{date}</td>
      <td className="p-4 text-sm whitespace-nowrap capitalize">
        <span
          className={
            visiblity === "public"
              ? "bg-teal-950 border-teal-500 border px-5 py-1 rounded-full"
              : "bg-gray-950 border-gray-500 border px-5 py-1 rounded-full"
          }
        >
          {visiblity}
        </span>
      </td>
      <td className="p-4 text-sm text-gray-300 whitespace-nowrap">{views}</td>
    </tr>
  );
}

export function LoadingRow() {
  return (
    <tr className="h-[70px]">
      <td className="p-4">
        <div className="inline-flex items-center gap-x-3">
          <input type="checkbox" className="accent-teal-500" />
          <div className="flex items-center gap-x-2">
            <div className="flex items-center justify-center w-8 h-8 text-teal-500 rounded-full bg-teal-950 animate-pulse">
              <div className="h-5 w-5" />
            </div>
            <div className="animate-pulse space-y-2">
              <h2 className="font-normal text-white bg-teal-950 h-2 w-32 rounded" />
              <p className="text-xs font-normal text-gray-400 bg-teal-950 h-2 w-12 rounded" />
            </div>
          </div>
        </div>
      </td>
      <td className="p-4">
        <div className="bg-teal-950 h-2 rounded animate-pulse w-32" />
      </td>
      <td className="p-4">
        <div className="bg-teal-950 h-2 rounded animate-pulse w-32" />
      </td>
      <td className="p-4">
        <div className="bg-teal-950 h-6 rounded-full animate-pulse w-20" />
      </td>
      <td className="p-4">
        <div className="bg-teal-950 h-2 rounded animate-pulse w-5" />
      </td>
    </tr>
  );
}
