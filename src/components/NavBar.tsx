"use client";

import { Session } from "@supabase/supabase-js";
import { useSupabase } from "./SupabaseProvider";
import { usePathname } from "next/navigation";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

type Props = {
  session: Session | null;
};

const routes = ["dashboard", "publish"];

export default function NavBar({ session }: Props) {
  const { supabase } = useSupabase();
  const pathName = usePathname();

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
    }
  }

  return (
    <nav className="fixed backdrop-blur-lg bg-black/50 w-screen p-4 flex justify-between items-center">
      <a
        href="/"
        className="flex gap-3 items-center focus:outline-none focus:ring-inset focus:ring-2 focus:rounded"
      >
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
      </a>
      <div className="px-4 gap-5 md:gap:10 text-lg items-center text-center hidden md:flex">
        {session ? (
          <>
            {routes.map((route) => (
              <a
                key={route}
                href={`/${route}`}
                className={
                  pathName === `/${route}`
                    ? "text-teal-500 font-bold capitalize hover:underline focus:outline-none focus:underline"
                    : "capitalize hover:underline focus:outline-none focus:underline"
                }
              >
                {route}
              </a>
            ))}

            <span className="text-right pl-10">
              <p className="">{session.user.email}</p>
              <button
                className="hover:underline text-red-700 focus:outline-none focus:underline"
                onClick={signOut}
              >
                Sign out
              </button>
            </span>
          </>
        ) : (
          <>
            <a
              className="hover:underline focus:outline-none focus:underline"
              href="/auth/sign-up"
            >
              Get Started
            </a>
            <a
              className="hover:underline focus:outline-none focus:underline"
              href="/auth/sign-in"
            >
              Sign in
            </a>
          </>
        )}
      </div>

      <Popover className="md:hidden my-auto">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <div className=" flex items-center">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-inset">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
        </nav>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right"
          >
            <div className="rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-black ">
              <div className="px-5 pt-4 flex items-center justify-between">
                <a
                  href="/"
                  className="flex gap-5 items-center focus:outline-none focus:ring-inset focus:ring-2 focus:rounded"
                >
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
                </a>

                <div className="-mr-2">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="sr-only">Close main menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="p-5 pb-3 space-y-3 flex flex-col divide-gray-700 text-xl">
                {session ? (
                  <>
                    {routes.map((route) => (
                      <Popover.Button
                        key={route}
                        className={
                          pathName === `/${route}`
                            ? "text-teal-500 font-bold capitalize hover:underline focus:outline-none focus:underline"
                            : "capitalize hover:underline focus:outline-none focus:underline"
                        }
                        href={`/${route}`}
                        as="a"
                      >
                        {route}
                      </Popover.Button>
                    ))}
                    <span className="border border-gray-700 w-full" />
                    <p>{session?.user.email}</p>
                    <button
                      onClick={signOut}
                      className="text-left text-red-700 hover:underline focus:outline-none focus:underline"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <Popover.Button
                      className="hover:underline focus:outline-none focus:underline"
                      href="/auth/sign-up"
                      as="a"
                    >
                      Get started
                    </Popover.Button>

                    <Popover.Button
                      className="hover:underline focus:outline-none focus:underline"
                      href="/auth/sign-in"
                      as="a"
                    >
                      Sign in
                    </Popover.Button>
                  </>
                )}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </nav>
  );
}
