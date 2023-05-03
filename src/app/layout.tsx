import NavBar from "@/components/NavBar";
import "./globals.css";
import SupabaseProvider from "@/components/SupabaseProvider";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/utils/db.types";
import { cookies, headers } from "next/dist/client/components/headers";

export const metadata = {
  title: "TriArt",
  description:
    "A 3D art sharing space where you can promote your work to the world",
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className="font-groteske">
        <SupabaseProvider>
          <NavBar session={session} />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
