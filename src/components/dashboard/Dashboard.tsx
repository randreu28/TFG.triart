"use client";

import { useSupabase } from "@/components/SupabaseProvider";
import Options from "@/components/dashboard/Options";
import Pagination from "@/components/dashboard/Pagination";
import Rows from "@/components/dashboard/Rows";
import {
  artworksAtom,
  errorAtom,
  paginationAtom,
} from "@/utils/dashboard.store";
import { Database } from "@/utils/db.types";
import { getPagination } from "@/utils/utils";
import { Session } from "@supabase/supabase-js";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";

type Props = {
  session: Session;
};

export type Artworks = Database["public"]["Tables"]["artwork"]["Row"][];

export default function Dashboard({ session }: Props) {
  const { supabase } = useSupabase();

  const [artworks, setArtworks] = useAtom(artworksAtom);
  const pagination = useAtomValue(paginationAtom);
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
      <Options />
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
                      File name
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
      <Pagination />
    </>
  );
}
