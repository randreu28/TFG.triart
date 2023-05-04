import { selectionAtom } from "@/utils/dashboard.store";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import {
  ArrowUpTrayIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useAtomValue } from "jotai";
import { Fragment } from "react";
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

  async function handleEditTite() {
    const newTitle = prompt("Please enter the new title");
    if (!newTitle) return;

    selection.forEach(async (id) => {
      const toastID = toast.loading("Loading");
      const { error } = await supabase
        .from("artwork")
        .update({ title: newTitle })
        .eq("id", id);
      if (error) {
        toast.error(error.message, { id: toastID, duration: 5000 });
      } else {
        toast.success("Artwork's title updated successfully", {
          id: toastID,
          duration: 5000,
        });
      }
    });
  }

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
            disabled={selection.length === 0}
            onClick={handleEditTite}
            className="flex items-center disabled:cursor-not-allowed text-sm w-full lg:w-auto gap-3 justify-center border-teal-500 border bg-teal-950 px-5 py-2 rounded transition-colors hover:bg-teal-800 focus:outline-none focus:ring-4 duration-300"
          >
            <PencilIcon className="h-5 w-5" />
            <span>Edit title</span>
          </button>

          <VisibilityMenu />

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

const visibilityStatus = ["public", "private"];

function VisibilityMenu() {
  const selection = useAtomValue(selectionAtom);
  const { supabase } = useSupabase();

  async function handleChange(selectedVisibility: string) {
    if (confirm("Are you sure you want to change the visibility status?")) {
      selection.forEach(async (id) => {
        const toastID = toast.loading("Loading");
        const { error } = await supabase
          .from("artwork")
          .update({ visiblity: selectedVisibility })
          .eq("id", id);
        if (error) {
          toast.error(error.message, { id: toastID, duration: 5000 });
        } else {
          toast.success("Artwork updated successfully", {
            id: toastID,
            duration: 5000,
          });
        }
      });
    }
  }
  return (
    <Listbox onChange={handleChange} disabled={selection.length === 0}>
      <div className="relative mt-1 w-full lg:w-auto disabled:cursor-not-allowed">
        <Listbox.Button
          as="button"
          className="flex items-center disabled:cursor-not-allowed text-sm w-full gap-3 justify-center border-teal-500 border bg-teal-950 px-5 py-2 rounded transition-colors hover:bg-teal-800 focus:outline-none focus:ring-4 duration-300"
        >
          <EyeIcon className="h-5 w-5" />
          <span>Change visibility</span>
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute bg-teal-950 mt-1 max-h-60 w-full overflow-auto border-teal-500 border divide-y capitalize divide-teal-500 rounded-md bg-teal-95 py-1 text-base focus:outline-none">
            {visibilityStatus.map((visibility, key) => (
              <Listbox.Option
                key={key}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-teal-800 cursor-pointer" : ""
                  }`
                }
                value={visibility}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {visibility}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-500">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
