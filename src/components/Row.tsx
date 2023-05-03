import { CubeIcon } from "@heroicons/react/24/outline";

type Props = {
  fileName: string;
  fileSize: number;
  title: string;
  dateUploaded: string /* Date? */;
  visibility: string /* Enum? */;
  viewCount: number;
};

export default function Row({
  dateUploaded,
  fileName,
  fileSize,
  title,
  viewCount,
  visibility,
}: Props) {
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <input type="checkbox" className="accent-teal-500" />
          <div className="flex items-center gap-x-2">
            <div className="flex items-center justify-center w-8 h-8 text-teal-500 rounded-full bg-teal-950">
              <CubeIcon className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-normal text-white ">{fileName}</h2>
              <p className="text-xs font-normal text-gray-400">{fileSize} KB</p>
            </div>
          </div>
        </div>
      </td>
      <td className="px-12 py-4 text-sm font-normal text-gray-300 whitespace-nowrap">
        {title}
      </td>
      <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
        {dateUploaded}
      </td>
      <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
        {visibility}
      </td>
      <td className="px-4 py-4 text-sm text-gray-300 whitespace-nowrap">
        {viewCount}
      </td>
    </tr>
  );
}
