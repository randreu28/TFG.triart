type Props = {
  children: React.ReactNode;
};

export default function SignUpLayout({ children }: Props) {
  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  );
}
