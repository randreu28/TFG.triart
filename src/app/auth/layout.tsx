import type { Database } from "@/utils/db.types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default async function AuthLayout({ children }: Props) {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  );
}
