export default function Footer() {
  return (
    <footer className="w-full bg-[#101012]/50 p-5 mt-10 flex flex-col md:flex-row gap-5 items-start justify-between text-gray-300">
      <a
        href="https://randreu.dev"
        className="flex gap-5 items-center hover:opacity-50 duration-300"
      >
        <svg
          className="text-white fill-current h-8 w-fit"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150.2 231.96"
        >
          <defs>
            <linearGradient
              id="a"
              x1="75.1"
              x2="75.1"
              y1="231.96"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ef079b"></stop>
              <stop offset="0.11" stop-color="#f11890"></stop>
              <stop offset="0.36" stop-color="#f43a7a"></stop>
              <stop offset="0.6" stop-color="#f6526a"></stop>
              <stop offset="0.82" stop-color="#f86160"></stop>
              <stop offset="1" stop-color="#f8665d"></stop>
            </linearGradient>
          </defs>
          <g data-name="Capa 2">
            <path
              d="m0 27.38 50.51 30.19S0 86.51 0 87.74ZM50.51 0v57.57l49.58 29.08v57.61l50.11-29V57.57ZM0 144.4V203l50.51-29.28L150.2 232v-57.8l-99.69-58.55Z"
              data-name="Isotipo T"
            ></path>
          </g>
        </svg>
        <p className="text-sm">randreu.dev</p>
      </a>
      <p>© Copyright 2023. All Rights Reserved.</p>

      <a href="https://github.com/randreu28/TFG.triart" target="_blank">
        <svg
          className="text-white fill-current hover:opacity-50 duration-300"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
        >
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    </footer>
  );
}
