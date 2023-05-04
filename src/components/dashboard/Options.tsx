import { artworksAtom, selectionAtom } from "@/utils/dashboard.store";
import {
  ArrowUpTrayIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useAtomValue } from "jotai";
import { Toaster, toast } from "react-hot-toast";
import { useSupabase } from "../SupabaseProvider";

export default function Options() {
  const selection = useAtomValue(selectionAtom);
  const { supabase } = useSupabase();

  async function handleDelete() {
    if (confirm("Are you sure you want to delete your artwork?")) {
      selection.forEach(async (id) => {
        const toastID = toast.loading("Loading");
        const { error } = await supabase.from("artwork").delete().eq("id", id);
        if (error) {
          toast.error(error.message, { id: toastID, duration: 5000 });
        } else {
          toast.success("Artwork deleted successfully", {
            id: toastID,
            duration: 5000,
          });
        }
      });
    }
  }

  async function handleEditTite() {}

  async function handleVisibilityChange() {}

  return (
    <>
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
      <div className="lg:flex lg:items-center lg:justify-between mt-5">
        <p className="text-gray-300">{selection.length} items selected</p>
        <div className="flex flex-col lg:flex-row gap-2 items-center gap-x-3">
          <button
            disabled={selection.length === 0}
            onClick={handleDelete}
            className="flex items-center disabled:cursor-not-allowed text-sm w-full lg:w-auto gap-3 justify-center border-red-500 border bg-red-950 px-5 py-2 rounded transition-colors hover:bg-red-800 focus:outline-none focus:ring-4 duration-300"
          >
            <TrashIcon className="h-5 w-5" />
            <span>Delete</span>
          </button>

          <button
            onClick={handleEditTite}
            className="flex items-center text-sm w-full lg:w-auto gap-3 justify-center border-teal-500 border bg-teal-950 px-5 py-2 rounded transition-colors hover:bg-teal-800 focus:outline-none focus:ring-4 duration-300"
          >
            <PencilIcon className="h-5 w-5" />
            <span>Edit title</span>
          </button>

          <button
            onClick={handleVisibilityChange}
            className="flex items-center text-sm w-full lg:w-auto gap-3 justify-center border-teal-500 border bg-teal-950 px-5 py-2 rounded transition-colors hover:bg-teal-800 focus:outline-none focus:ring-4 duration-300"
          >
            <EyeIcon className="h-5 w-5" />
            <span>Change visibility</span>
          </button>

          <a
            href="/publish"
            className="bg-teal-500 flex gap-3 text-sm w-full lg:w-auto justify-center px-5 py-2 text-black rounded transition-colors hover:bg-teal-300 duration-300 focus:outline-none focus:ring-4"
          >
            <ArrowUpTrayIcon className="h-5 w-5" />
            <span>Publish</span>
          </a>
        </div>
      </div>
    </>
  );
}
