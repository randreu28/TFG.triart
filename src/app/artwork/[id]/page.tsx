import Scene from "@/components/Scene";
import { Database } from "@/utils/db.types";
import { parseDate } from "@/utils/utils";
import { EyeIcon } from "@heroicons/react/24/outline";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/dist/client/components/headers";

type Props = {
  params: { id: string };
};

export default async function Artwork({ params: { id } }: Props) {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase.from("artwork").select().eq("id", id);

  if (error) {
    throw Error(error.message);
  }

  if (data.length === 0) {
    throw Error("No artwork found with id " + id);
  }

  if (data[0].visiblity === "private" && data[0].user_id !== session?.user.id) {
    throw Error("You don't have permission to see this artwork");
  }

  await supabase
    .from("artwork")
    .update({ views: data[0].views + 1 })
    .eq("id", id);

  return (
    <>
      <div className="absolute top-24 right-5 z-20 space-y-3">
        <h1 className="text-3xl">{data[0].title}</h1>
        <p className="float-right text-gray-300">
          {parseDate(data[0].created_at)}
        </p>
        <br />
        <p className="float-right text-gray-300 flex gap-2">
          <EyeIcon className="h-5 w-5" />
          {data[0].views} views
        </p>
      </div>

      <Scene url={data[0].url} />
    </>
  );
}
