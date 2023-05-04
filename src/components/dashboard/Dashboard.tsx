"use client";

import Rows from "@/components/dashboard/Rows";
import {
  artworksAtom,
  errorAtom,
  paginationAtom,
} from "@/utils/dashboard.store";
import { Database } from "@/utils/db.types";
import { getPagination } from "@/utils/utils";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ArrowUpTrayIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { PostgrestError, Session } from "@supabase/supabase-js";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useSupabase } from "../SupabaseProvider";

type Props = {
  session: Session;
};

export type Artworks = Database["public"]["Tables"]["artwork"]["Row"][];

export default function Dashboard({ session }: Props) {
  const { supabase } = useSupabase();

  const [artworks, setArtworks] = useAtom(artworksAtom);
  const [pagination, setPagination] = useAtom(paginationAtom);
  const [error, setError] = useAtom(errorAtom);

  async function getArtworks() {
    setArtworks(undefined); // loading
    const { from, to } = getPagination(pagination);
    const { data, error } = await supabase
      .from("artwork")
      .select()
      .eq("user_id", session.user.id)
      .range(from, to)
      .order("created_at");

    if (data) {
      setError(undefined);
      setArtworks(data);
    } else {
      setError(error);
    }
  }

  useEffect(() => {
    getArtworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  return (
    <>
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
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-700 md:rounded-lg">
              <table className="w-full divide-y divide-gray-700 table-fixed">
                <thead className="bg-black/50">
                  <tr>
                    <th
                      scope="col"
                      className="p-4 text-sm font-normal text-left text-gray-400 w-2/5"
                    >
                      <div className="flex items-center gap-x-3">
                        <input type="checkbox" className="accent-teal-500" />
                        <span>File name</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-sm font-normal text-left text-gray-400 w-1/5"
                    >
                      Artwork title
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-sm font-normal text-left text-gray-400"
                    >
                      Date uploaded
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-sm font-normal text-left text-gray-400"
                    >
                      Visibility
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-sm font-normal text-left text-gray-400"
                    >
                      Views
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700 bg-black/25">
                  <Rows error={error} artworks={artworks} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
}
