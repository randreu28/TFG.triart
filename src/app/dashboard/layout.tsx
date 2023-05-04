type Props = {
  children: React.ReactNode;
};

export default async function DashboardLayout({ children }: Props) {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
