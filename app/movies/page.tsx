"use client";

import { useEffect, useState } from "react";
import { Search, Filter, X, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MovieCard } from "@/components/MovieCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  fetchTopRated,
  searchMovies,
  fetchGenres,
  Movie,
  Genre,
} from "@/lib/tmdb";

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("rating");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const genreList = await fetchGenres();
        setGenres(genreList);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    loadGenres();
  }, []);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        if (searchQuery) {
          const { results, total_pages } = await searchMovies(
            searchQuery,
            page
          );
          setMovies(results);
          setTotalPages(total_pages);
        } else {
          const { results, total_pages } = await fetchTopRated(page);
          setMovies(results);
          setTotalPages(total_pages);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(() => {
      loadMovies();
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchQuery, page]);

  const filteredMovies = movies.filter((movie) => {
    if (selectedGenre !== "all") {
      return movie.genre_ids.includes(parseInt(selectedGenre));
    }
    return true;
  });

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.vote_average - a.vote_average;
      case "popularity":
        return b.popularity - a.popularity;
      case "newest":
        return (
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
        );
      default:
        return 0;
    }
  });

  const selectedGenreName = genres.find(
    (g) => g.id.toString() === selectedGenre
  )?.name;

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <div className="bg-zinc-950 border-b border-zinc-900">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {searchQuery ? "Search Results" : "Browse Movies"}
                </h1>
                <p className="text-zinc-400 text-lg">
                  {searchQuery
                    ? `Showing results for "${searchQuery}"`
                    : `Discover ${sortedMovies.length}+ highly rated films`}
                </p>
              </div>

              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden border-zinc-800 text-white hover:bg-zinc-900"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <Input
                type="text"
                placeholder="Search for movies, actors, directors..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(1);
                }}
                className="pl-12 pr-12 h-14 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500 rounded-xl focus:border-zinc-700"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setPage(1);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Filters Row */}
            <div
              className={`flex flex-wrap gap-3 ${
                showFilters ? "flex" : "hidden md:flex"
              }`}
            >
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="w-auto min-w-[140px] bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800 rounded-lg h-11">
                  <SelectValue placeholder="All Genres" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-800">
                  <SelectItem
                    value="all"
                    className="text-white hover:bg-zinc-800"
                  >
                    All Genres
                  </SelectItem>
                  {genres.map((genre) => (
                    <SelectItem
                      key={genre.id}
                      value={genre.id.toString()}
                      className="text-white hover:bg-zinc-800"
                    >
                      {genre.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-auto min-w-[160px] bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800 rounded-lg h-11">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-800">
                  <SelectItem
                    value="rating"
                    className="text-white hover:bg-zinc-800"
                  >
                    Highest Rated
                  </SelectItem>
                  <SelectItem
                    value="popularity"
                    className="text-white hover:bg-zinc-800"
                  >
                    Most Popular
                  </SelectItem>
                  <SelectItem
                    value="newest"
                    className="text-white hover:bg-zinc-800"
                  >
                    Newest First
                  </SelectItem>
                </SelectContent>
              </Select>

              {(selectedGenre !== "all" || sortBy !== "rating") && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSelectedGenre("all");
                    setSortBy("rating");
                  }}
                  className="text-zinc-400 hover:text-white hover:bg-zinc-900 h-11"
                >
                  Clear filters
                  <X className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Active Filters */}
            {selectedGenreName && selectedGenre !== "all" && (
              <div className="flex items-center gap-2 pt-2">
                <span className="text-sm text-zinc-500">Filtering:</span>
                <div className="px-3 py-1 bg-red-600/20 border border-red-600/30 rounded-full text-sm text-red-400 flex items-center gap-2">
                  {selectedGenreName}
                  <button
                    onClick={() => setSelectedGenre("all")}
                    className="hover:text-red-300"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-2/3 bg-zinc-900 animate-pulse rounded-xl"
                />
              ))}
            </div>
          ) : sortedMovies.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-zinc-600 mb-4">
                <Search className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                No movies found
              </h3>
              <p className="text-zinc-400 mb-6">
                Try adjusting your search or filters
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedGenre("all");
                  setPage(1);
                }}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Reset filters
              </Button>
            </div>
          ) : (
            <>
              {/* Results count */}
              <div className="mb-6 text-zinc-400 text-sm">
                Showing {sortedMovies.length} movies
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                {sortedMovies.map((movie) => (
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
                      Page{" "}
                      <span className="text-white font-medium">{page}</span> of{" "}
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
    </div>
  );
};

export default Movies;
