import NavBar from "@/components/NavBar";
import "./globals.css";

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
        <NavBar />
        {children}
      </body>
    </html>
  );
}
