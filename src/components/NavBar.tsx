type Props = {};
export default function NavBar({}: Props) {
  return (
    <nav className="fixed backdrop-blur-lg bg-black/50 w-screen p-4 flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <svg
          className="w-10 h-10 text-teal-400"
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="59"
          fill="none"
          viewBox="0 0 42 59"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M40.453 58.379C49.718 18.153 8.501 39.019 1.433 0-.453 26.359 15.051 30.703 31.796 38.14c-8.389-2.44-26-6.922-31.17-15.741 3.215 16 19.822 16.881 30.227 20.061-8.06-1.113-23.306-1.04-29.337-7.604C6.71 48.024 21.76 44.868 30.619 46.378c-6.51.305-18.754 1.514-24.593-2.875 6.207 10.574 17.978 6.977 26.4 6.28-4.802 1.808-13.822 2.948-18.87 1.055 7.263 7.24 13.714 3.872 20.948.979-2.882 2.244-6.04 4.007-9.7 4.763 8.285 1.69 12.63-5.615 15.65 1.799Z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="text-3xl font-bold">
          Tri<span className="text-teal-400">Art</span>
        </h1>
      </div>
      <div className="px-4 gap-5 md:gap:10 flex text-lg text-center">
        <a>Get Started</a>
        <a>Sign in</a>
      </div>
    </nav>
  );
}
