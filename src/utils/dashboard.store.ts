import { Artworks } from "@/components/dashboard/Dashboard";
import { PostgrestError } from "@supabase/supabase-js";
import { atom } from "jotai";

export const artworksAtom = atom<Artworks | undefined>(undefined);
export const paginationAtom = atom<number>(0);
export const errorAtom = atom<PostgrestError | undefined>(undefined);
