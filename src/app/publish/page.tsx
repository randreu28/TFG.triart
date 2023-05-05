import { Database } from "@/utils/db.types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";
import Publish from "@/components/Publish";

export default async function PublishPage() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <Publish session={session} />
    </div>
  );
}
