// wishlist.ts
import { useWishlist } from "@/store/useWatchlist";
import { Movie } from "@/types/movie";

const STORAGE_KEY = "watchlist";

export const getWishlist = (): Movie[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveWishlist = (movies: Movie[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
};

export const addToWishlist = (movie: Movie) => {
  const existing = getWishlist();
  const updated = [...existing, movie];
  saveWishlist(updated);
};

export const removeFromWishlist = (id: number) => {
  const existing = getWishlist();
  const updated = existing.filter((m) => m.id !== id);
  saveWishlist(updated);
};

export const isInWishlist = (id: number): boolean => {
  const existing = getWishlist();
  return existing.some((m) => m.id === id);
};



 