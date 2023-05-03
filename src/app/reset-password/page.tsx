"use client";

import { useSupabase } from "@/components/SupabaseProvider";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type FormData = {
  password: string;
  confirmPassword: string;
};

export default function ResetPassword() {
  const { register, handleSubmit } = useForm<FormData>();

  const { supabase } = useSupabase();

  const resetPassword = handleSubmit(async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }
    const toastID = toast.loading("Loading");
    const { error } = await supabase.auth.updateUser({
      password: formData.password,
    });

    if (error) {
      toast.error(error.message, { id: toastID });
    } else {
      toast.success("Your password has been changed succesfully", {
        id: toastID,
        duration: 5000,
      });
    }
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={resetPassword}
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
          <h1 className="text-2xl font-bold text-center">
            Reset your password
          </h1>
          <p className="text-gray-300 flex justify-center">
            Make sure you create a strong password!
          </p>

          <div className="flex flex-col space-y-3">
            <label className="text-xl">Password</label>
            <input
              required
              {...register("password")}
              className="rounded bg-[#1B2D2F] p-2 focus:outline-none focus:border focus:border-teal-500"
              type="password"
            />
          </div>

          <div className="flex flex-col space-y-3">
            <label className="text-xl">Confirm password</label>
            <input
              required
              {...register("confirmPassword")}
              className="rounded bg-[#1B2D2F] p-2 focus:outline-none focus:border focus:border-teal-500"
              type="password"
            />
          </div>

          <button
            type="submit"
            className="bg-teal-500 text-black px-3 py-2 rounded text-xl !mt-5 hover:opacity-50 duration-300 w-full focus:outline-none focus:ring-4"
          >
            Reset your password
          </button>
        </div>
      </form>
    </div>
  );
}
