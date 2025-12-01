"use client";

import { useWishlist } from "@/store/useWatchlist";
import { Movie } from "@/types/movie";
import { Heart } from "lucide-react";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export default function WatchlistButton({ movie }: { movie: Movie }) {
  const { wishlist, add, remove } = useWishlist();

  const isSaved = wishlist.some((m) => m.id === movie.id);

  return (
    <button
      onClick={() => {
        isSaved ? remove(movie.id) : add(movie);
      }}
      className={`p-2 rounded-full ${
        isSaved ? "text-red-500" : "text-white"
      }`}
    >
      <Heart fill={isSaved ? "red" : "none"} />
    </button>
  );
}
