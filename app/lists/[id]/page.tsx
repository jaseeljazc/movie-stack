"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Film, Sparkles, Trophy, Heart, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MovieCard } from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import { fetchMoviesByGenre, Movie } from "@/lib/tmdb";

const genreMap: {
  [key: string]: { name: string; id: number; description: string };
} = {
  crime: {
    name: "Crime Thrillers",
    id: 80,
    description: "Gripping tales of crime, investigation, and justice",
    // color: "from-red-800 to-red-900",
  },
  "sci-fi": {
    name: "Sci-Fi Adventures",
    id: 878,
    description: "Mind-bending journeys through space, time, and technology",
  },
  action: {
    name: "Action Blockbusters",
    id: 28,
    description: "High-octane thrills, explosions, and heroic feats",
  },
  comedy: {
    name: "Comedy Classics",
    id: 35,
    description: "Timeless films that bring laughter and joy",
  },
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ListDetailPage({ params }: PageProps) {
  const { id } = React.use(params);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const genre = genreMap[id];

  useEffect(() => {
    const loadMovies = async () => {
      if (!genre) return;
      setLoading(true);
      try {
        const { results, total_pages } = await fetchMoviesByGenre(
          genre.id,
          page
        );
        setMovies(results);
        setTotalPages(total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, [genre, page]);

  if (!genre) {
    return (
      <div className="min-h-screen bg-black">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Collection Not Found
          </h1>
          <p className="text-zinc-400 mb-8">
            This collection doesn't exist or has been removed.
          </p>
          <Link href="/lists">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Back to Collections
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-linear-to-br ">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-6 py-16">
          <Link href="/lists">
            <Button
              variant="ghost"
              className="mb-8 text-white hover:bg-white/10 border border-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Collections
            </Button>
          </Link>

          <div className="flex items-start gap-6 max-w-4xl">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {genre.name}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {genre.description}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-white/60">
                <span>{movies.length} movies in this collection</span>
                <span>•</span>
                <span>Updated regularly</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="container mx-auto px-6 py-16">
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="aspect-2/3 bg-zinc-900 animate-pulse rounded-xl"
              />
            ))}
          </div>
        ) : movies.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-zinc-600 mb-4">
              <Film className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              No movies found
            </h3>
            <p className="text-zinc-400 mb-6">
              We couldn't find any movies in this collection right now.
            </p>
            <Link href="/lists">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Explore Other Collections
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                  className="w-full sm:w-auto border-zinc-800 text-white hover:bg-zinc-900 disabled:opacity-30"
                >
                  Previous
                </Button>

                <div className="flex items-center gap-2">
                  <span className="text-zinc-400 text-sm">
                    Page <span className="text-white font-medium">{page}</span>{" "}
                    of{" "}
                    <span className="text-white font-medium">
                      {Math.min(totalPages, 500)}
                    </span>
                  </span>
                </div>

                <Button
                  variant="outline"
                  onClick={() => setPage(Math.min(totalPages, page + 1))}
                  disabled={page >= totalPages}
                  className="w-full sm:w-auto border-zinc-800 text-white hover:bg-zinc-900 disabled:opacity-30"
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
