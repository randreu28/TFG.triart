import type { Artworks } from "@/components/dashboard/Dashboard";
import { PostgrestError } from "@supabase/supabase-js";
import { LoadingRow, Row } from "@/components/dashboard/Row";

type RowsProps = {
  artworks: Artworks | undefined;
  error: PostgrestError | undefined;
};

export default function Rows({ artworks, error }: RowsProps) {
  if (error) {
    <>
      <tr className="h-[70px]">
        <th />
        <th className="text-left font-light text-red-500">{error.message}</th>
        <th />
        <th />
        <th />
      </tr>
    </>;
  }
  if (!artworks) {
    return (
      <>
        {[...Array(5)].map((_, key) => (
          <LoadingRow key={key} />
        ))}
      </>
    );
  }

  if (artworks.length === 0) {
    return (
      <>
        <tr className="h-[70px]">
          <th />
          <th className="text-center text-gray-300 font-light">
            Wanna upload more artworks?
            <a href="/publish" className="text-teal-500 hover:underline">
              Publish
            </a>
          </th>
          <th />
          <th />
          <th />
        </tr>
      </>
    );
  }

  return (
    <>
      {artworks.map((artwork) => (
        <Row key={artwork.id} {...artwork} />
      ))}
    </>
  );
}
