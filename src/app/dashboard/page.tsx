import Dashboard from "@/components/dashboard/Dashboard";
import { Database } from "@/utils/db.types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
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
    <>
      <section className="container px-4 mx-auto">
        <h2 className="font-medium text-4xl w-full text-left">Your artworks</h2>
        <Dashboard session={session} />
      </section>
    </>
  );
}
