import Row from "@/components/Row";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ArrowUpTrayIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <>
      <section className="container px-4 mx-auto">
        <h2 className="font-medium text-4xl w-full text-left">Your artworks</h2>
        <div className="lg:flex lg:items-center lg:justify-between mt-5">
          <p className="text-gray-300">4 items selected</p>
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
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-black/50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <input type="checkbox" className="accent-teal-500" />
                          <span>File name</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left text-gray-400"
                      >
                        Artwork title
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left text-gray-400"
                      >
                        Date uploaded
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left text-gray-400"
                      >
                        Visibility
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left text-gray-400"
                      >
                        View count
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700 bg-black/25">
                    <Row
                      dateUploaded="Jan 4, 2022"
                      fileName="CoolArtwork.gltf"
                      fileSize={20}
                      title="Cool artwork"
                      viewCount={50}
                      visibility="Public"
                    />

                    <Row
                      dateUploaded="Jan 4, 2022"
                      fileName="CoolArtwork.gltf"
                      fileSize={20}
                      title="Cool artwork"
                      viewCount={50}
                      visibility="Public"
                    />

                    <Row
                      dateUploaded="Jan 4, 2022"
                      fileName="CoolArtwork.gltf"
                      fileSize={20}
                      title="Cool artwork"
                      viewCount={50}
                      visibility="Public"
                    />
                    <Row
                      dateUploaded="Jan 4, 2022"
                      fileName="CoolArtwork.gltf"
                      fileSize={20}
                      title="Cool artwork"
                      viewCount={50}
                      visibility="Public"
                    />

                    <Row
                      dateUploaded="Jan 4, 2022"
                      fileName="CoolArtwork.gltf"
                      fileSize={20}
                      title="Cool artwork"
                      viewCount={50}
                      visibility="Public"
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <a
            href="#"
            className="flex items-center text-sm gap-3 justify-center border-teal-500 border bg-teal-950 px-5 py-2 rounded transition-colors hover:bg-teal-800 focus:outline-none focus:ring-4 duration-300"
          >
            <ArrowLongLeftIcon className="w-5 h-5" />
            <span>Previous</span>
          </a>
          <div className="items-center hidden md:flex gap-x-3">
            <a
              href="#"
              className="px-2 py-1 text-sm rounded-md bg-teal-950 text-gray-300 border-teal-500 border"
            >
              1
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm rounded-md hover:bg-teal-950 text-gray-300"
            >
              2
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm rounded-md hover:bg-teal-950 text-gray-300"
            >
              3
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm rounded-md hover:bg-teal-950 text-gray-300"
            >
              ...
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm rounded-md hover:bg-teal-950 text-gray-300"
            >
              12
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm rounded-md hover:bg-teal-950 text-gray-300"
            >
              13
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm rounded-md hover:bg-teal-950 text-gray-300"
            >
              14
            </a>
          </div>
          <a
            href="#"
            className="flex items-center  text-sm gap-3 justify-center border-teal-500 border bg-teal-950 px-5 py-2 rounded transition-colors hover:bg-teal-800 focus:outline-none focus:ring-4 duration-300"
          >
            <span>Next</span>
            <ArrowLongRightIcon className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
