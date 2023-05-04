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
        <th className="text-center text-red-500 font-light flex flex-col whitespace-nowrap">
          <br />
          <span>{error.message}</span>
          <br />
        </th>
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
          <th className="text-center text-gray-300 font-light flex flex-col whitespace-nowrap">
            <br />
            <span>Wanna upload more artworks?</span>
            <a href="/publish" className="text-teal-500 hover:underline">
              Publish
            </a>
            <br />
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
