interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  styleType: "primary" | "secondary" | "danger";
}

export default function Button({ children, styleType, ...props }: Props) {
  switch (styleType) {
    case "primary":
      return (
        <button
          {...props}
          className="bg-teal-500 text-black px-3 py-2 rounded text-xl hover:opacity-50 duration-300"
        >
          {children}
        </button>
      );

    case "secondary":
      return (
        <button
          {...props}
          className="border-teal-500 border-2 bg-teal-950 px-3 py-2 rounded text-xl hover:opacity-50 duration-300"
        >
          {children}
        </button>
      );

    case "danger":
      return (
        <button
          {...props}
          className="border-red-500 border-2 bg-red-500/25 px-3 py-2 rounded text-xl hover:opacity-50 duration-300"
        >
          {children}
        </button>
      );
  }
}
