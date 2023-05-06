type Props = {
  children: React.ReactNode;
};

export default function ArtworkLayout({ children }: Props) {
  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  );
}
