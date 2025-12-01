// useWishlist.ts
"use client";

import { create } from "zustand";
import { Movie } from "@/types/movie";
import { getWishlist, saveWishlist } from "@/lib/watchlist";

interface WishlistState {
  wishlist: Movie[];
  add: (movie: Movie) => void;
  remove: (id: number) => void;
  load: () => void;
}

export const useWishlist = create<WishlistState>((set) => ({
  wishlist: [],

  load: () =>
    set(() => ({
      wishlist: getWishlist(),
    })),

  add: (movie) =>
    set((state) => {
      const updated = [...state.wishlist, movie];
      saveWishlist(updated);
      return { wishlist: updated };
    }),

  remove: (id) =>
    set((state) => {
      const updated = state.wishlist.filter((m) => m.id !== id);
      saveWishlist(updated);
      return { wishlist: updated };
    }),
}));
