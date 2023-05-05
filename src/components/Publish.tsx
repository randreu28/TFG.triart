"use client";

import { useSupabase } from "@/components/SupabaseProvider";
import { Session } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";

type FormData = {
  title: string;
  visibility: string;
  file: FileList;
};

type Props = {
  session: Session;
};

export default function Publish({ session }: Props) {
  const { register, handleSubmit } = useForm<FormData>();
  const { supabase } = useSupabase();

  const PublishArtwork = handleSubmit(async ({ file, title, visibility }) => {
    /* ... */
  });

  return (
    <form
      onSubmit={PublishArtwork}
      className="bg-black/25 rounded flex max-w-5xl items-center m-4"
    >
      <Toaster
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#222",
            color: "#fff",
          },
          success: {
            iconTheme: {
              primary: "rgb(0, 184, 166)",
              secondary: "#222",
            },
          },
        }}
      />

      <div className="p-8 space-y-3 sm:w-[30rem]">
        <svg
          className="w-10 h-10 mx-auto text-teal-400"
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
        <h1 className="text-2xl font-bold text-center">Publish your artwork</h1>

        <div className="flex flex-col space-y-3">
          <label className="text-xl">Title</label>
          <input
            {...register("title")}
            required
            className="rounded bg-[#1B2D2F] p-2 focus:outline-none focus:border focus:border-teal-500"
            type="text"
          />
        </div>

        <div className="flex flex-col space-y-3">
          <label className="text-xl">Visibility</label>
          <select
            {...register("visibility")}
            required
            className="capitalize rounded bg-[#1B2D2F] p-2 focus:outline-none focus:border focus:border-teal-500"
          >
            <option>private</option>
            <option>public</option>
          </select>
        </div>

        <div className="flex flex-col space-y-3">
          <span className="flex justify-between">
            <label className="text-xl">3D file</label>
          </span>

          <input
            {...register("file")}
            type="file"
            required
            className="rounded bg-[#1B2D2F] p-2 focus:outline-none focus:border focus:border-teal-500"
          />
        </div>

        <button
          type="submit"
          className="bg-teal-500 text-black px-3 py-2 rounded text-xl !mt-5 hover:opacity-50 duration-300 w-full focus:outline-none focus:ring-4"
        >
          Publish
        </button>
      </div>
    </form>
  );
}
