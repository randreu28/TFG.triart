import NavBar from "@/components/NavBar";
import "./globals.css";
import SupabaseProvider from "@/components/SupabaseProvider";

export const metadata = {
  title: "TriArt",
  description:
    "A 3D art sharing space where you can promote your work to the world",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="font-groteske">
        <SupabaseProvider>
          <NavBar />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
