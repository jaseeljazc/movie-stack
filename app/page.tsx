"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Play, Star, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MovieCard } from "@/components/MovieCard";
import { fetchTrending, Movie } from "@/lib/tmdb";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrending = async () => {
      try {
        const movies = await fetchTrending();
        setTrendingMovies(movies.slice(0, 12));
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      } finally {
        setLoading(false);
      }
    };
    loadTrending();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section with Featuyellow Content */}
      <section className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/95 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent z-10" />

        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1920&q=80"
            alt="Cinema"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-3 text-sm">
              <span className="px-3 py-1 bg-yellow-600 text-white font-medium rounded">
                Featured
              </span>
              <span className="text-zinc-400">Your weekend pick</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Where stories</span>
              <br />
              <span className="text-white">come to </span>
              <span className="text-yellow-500">life</span>
            </h1>

            <p className="text-xl text-zinc-300 max-w-xl leading-relaxed">
              Dive into a world of cinema. From blockbusters to hidden indie
              gems, find your next favorite film tonight.
            </p>

            <div className="flex gap-4 pt-4">
              <Link href="/movies">
                <Button
                  size="sm"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-2 h-14 text-base"
                >
                  <Play className="mr-2 h-5 w-5 fill-white" />
                  Start Exploring
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-2 border-zinc-700 hover:bg-zinc-900 text-white font-semibold px-4 md-px-8 h-14 text-base"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="flex gap-8 pt-6 text-sm">
              <div className="flex items-center gap-2 text-zinc-400">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                <span>50k+ Movies</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Calendar className="h-4 w-4" />
                <span>Daily Updates</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Clock className="h-4 w-4" />
                <span>Watch Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Movies */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">
                Popular Right Now
              </h2>
              <p className="text-zinc-400">
                What everyone's watching this week
              </p>
            </div>
            <Link href="/movies">
              <Button
                variant="ghost"
                className="text-zinc-300 hover:text-white hover:bg-zinc-900 gap-2"
              >
                Browse all
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-[2/3] bg-zinc-900 animate-pulse rounded-xl"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {trendingMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-white mb-12">
            Explore by Mood
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="lists/action">
              <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80"
                  alt="Action"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Action & Thrill
                  </h3>
                  <p className="text-zinc-300 text-sm">
                    Heart-pounding adventures
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/lists/crime">
              <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80"
                  alt="Drama"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Crime & Story
                  </h3>
                  <p className="text-zinc-300 text-sm">
                    Deep emotional journeys
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/lists/comedy">
              <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80"
                  alt="Comedy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Comedy & Fun
                  </h3>
                  <p className="text-zinc-300 text-sm">
                    Laugh-out-loud moments
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/movies?genre=scifi">
              <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=600&q=80"
                  alt="Sci-Fi"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Sci-Fi & Fantasy
                  </h3>
                  <p className="text-zinc-300 text-sm">Beyond imagination</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
