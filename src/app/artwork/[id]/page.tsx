import Scene from "@/components/Scene";
import { Database } from "@/utils/db.types";
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

  return <Scene url={data[0].url} />;
}
