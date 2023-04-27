type Props = {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string;
};

export default function Feature({ children, icon, title }: Props) {
  return (
    <div className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl bg-[#101012]/50">
      <span className="inline-block p-3 rounded-full text-teal-500 bg-teal-900/50">
        {icon}
      </span>
      <h1 className="text-xl font-semibold capitalize text-white">{title}</h1>
      <p className="text-gray-300">{children}</p>
    </div>
  );
}
