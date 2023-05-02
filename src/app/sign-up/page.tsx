"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { useSupabase } from "@/components/SupabaseProvider";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();

  const { supabase } = useSupabase();
  const [success, setSuccess] = useState<string | null>(null);

  async function SignInWithGoogle() {
    supabase.auth.signInWithOAuth({ provider: "google" });
  }

  const SignInWithEmail = handleSubmit(async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      setError("confirmPassword", { message: "Password's don't match" });
      return;
    }

    const { error, data } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error || !data.user) {
      setSuccess(null);
      setError("root", {
        message: error
          ? error.message
          : "There has been a error creating your account. Please try again later",
      });
    } else {
      setSuccess(`A confirmation email has been sent to ${data.user.email}`);
    }
  });

  return (
    <form
      onSubmit={SignInWithEmail}
      className="bg-black/25 rounded flex max-w-5xl items-center m-4"
    >
      <div
        className="w-[35rem] h-[45rem] hidden lg:block"
        style={{
          backgroundImage: "url(/sign-up.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
          backgroundPositionY: "top",
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
          Sign up to Tri<span className="text-teal-500">Art</span>
        </h1>
        <button
          type="button"
          onClick={SignInWithGoogle}
          className="flex items-center w-full gap-3 justify-between border-teal-500 border bg-teal-950 p-3 rounded text-lg hover:opacity-50 focus:outline-none focus:ring-4 duration-300"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={64}
            height={64}
            viewBox="0 0 32 32"
          >
            <defs>
              <path
                id="a"
                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
              />
            </defs>
            <clipPath id="b">
              <use xlinkHref="#a" />
            </clipPath>
            <path
              fill="#fbbc05"
              d="M0 37V11l17 13z"
              clipPath="url(#b)"
              transform="matrix(.72727 0 0 .72727 -.955 -1.455)"
            />
            <path
              fill="#ea4335"
              d="m0 11 17 13 7-6.1L48 14V0H0z"
              clipPath="url(#b)"
              transform="matrix(.72727 0 0 .72727 -.955 -1.455)"
            />
            <path
              fill="#34a853"
              d="m0 37 30-23 7.9 1L48 0v48H0z"
              clipPath="url(#b)"
              transform="matrix(.72727 0 0 .72727 -.955 -1.455)"
            />
            <path
              fill="#4285f4"
              d="M48 48 17 24l-4-3 35-10z"
              clipPath="url(#b)"
              transform="matrix(.72727 0 0 .72727 -.955 -1.455)"
            />
          </svg>
          <span>Sign up with Google </span>
          <span className="w-5 h-5" />
        </button>
        <div className="flex justify-between items-center">
          <span className="border border-teal-500 w-24 h-0" />
          <p className="w-fit text-gray-300 text-center">
            Or sign up with email
          </p>
          <span className="border border-teal-500 w-24 h-0" />
        </div>
        <div className="flex flex-col space-y-3">
          <label className="text-xl">Email address</label>
          <input
            required
            {...register("email")}
            className="rounded bg-[#1B2D2F] p-2 focus:outline-none focus:border focus:border-teal-500"
            type="email"
          />
        </div>
        {errors.email?.message && (
          <ErrorMessage>{errors.email.message}</ErrorMessage>
        )}
        <div className="flex flex-col space-y-3">
          <label className="text-xl">Password</label>
          <input
            required
            {...register("password")}
            className="rounded bg-[#1B2D2F] p-2 focus:outline-none focus:border focus:border-teal-500"
            type="password"
          />
        </div>
        {errors.password?.message && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
        <div className="flex flex-col space-y-3">
          <label className="text-xl">Confirm password</label>
          <input
            required
            {...register("confirmPassword")}
            className="rounded bg-[#1B2D2F] p-2 focus:outline-none focus:border focus:border-teal-500"
            type="password"
          />
        </div>
        {errors.confirmPassword?.message && (
          <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
        )}
        {errors.root?.message && (
          <ErrorMessage>{errors.root.message}</ErrorMessage>
        )}

        {success && <ErrorMessage>{success}</ErrorMessage>}
        <button
          type="submit"
          className="bg-teal-500 text-black px-3 py-2 rounded text-xl !mt-5 hover:opacity-50 duration-300 w-full focus:outline-none focus:ring-4"
        >
          Sign up
        </button>
        <div className="flex justify-between items-center pb-5 lg:pb-0">
          <span className="border border-teal-500 w-36 h-0" />
          <a
            href="/sign-in"
            className="w-fit text-gray-300 hover:underline text-center"
          >
            Or sign in
          </a>
          <span className="border border-teal-500 w-36 h-0" />
        </div>
      </div>
    </form>
  );
}
