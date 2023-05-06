"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error }: Props) {
  return (
    <h1 className="text-lg text-red-700 max-w-sm text-center">
      {error.message}
    </h1>
  );
}
