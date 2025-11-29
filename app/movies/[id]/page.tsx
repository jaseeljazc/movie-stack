import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Star, Clock, Calendar } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fetchMovieDetails, getImageUrl } from "@/lib/tmdb";

interface MovieDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const { id } = await params;
  
  // Validate that id is a number
  if (!id || isNaN(Number(id))) {
    notFound();
  }

  const movie = await fetchMovieDetails(id);

  if (!movie || !movie.id) {
    notFound();
  }

  const rating = movie.vote_average?.toFixed(1) || "N/A";

  return (
    <div className="min-h-screen bg-background ">
      <Navbar />

      {/* Backdrop */}
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getImageUrl(movie.backdrop_path, 'original')}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-14 -mt-32 relative z-10 pb-12">
        <Link href="/movies">
          <Button variant="secondary" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Movies
          </Button>
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Poster */}
          <div className="md:sticky md:top-24 h-fit">
            <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-card">
              <img
                src={getImageUrl(movie.poster_path, 'w780')}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-display tracking-wide text-gray-300 font-bold mb-2">
                {movie.title}
              </h1>
              {movie.tagline && (
                <p className="text-xl text-muted-foreground italic text-gray-400">{movie.tagline}</p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-primary">
                <Star className="w-6 h-6 fill-current  text-yellow-400" />
                <span className="text-2xl font-bold text-yellow-400">{rating}</span>
                <span className="text-muted-foreground">/ 10</span>
              </div>

              {movie.runtime && movie.runtime > 0 && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span>{movie.runtime} min</span>
                </div>
              )}

              {movie.release_date && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(movie.release_date).getFullYear()}</span>
                </div>
              )}
            </div>

            {movie.genres && movie.genres.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre: { id: number; name: string }) => (
                  <Badge key={genre.id} variant="secondary" className="text-sm">
                    {genre.name}
                  </Badge>
                ))}
              </div>
            )}

            {movie.overview && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-gray-400">
                  {movie.overview}
                </p>
              </div>
            )}

            {movie.status && (
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Status</h3>
                <Badge variant="outline">{movie.status}</Badge>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: MovieDetailPageProps) {
  const { id } = await params;
  
  // Validate ID before fetching
  if (!id || isNaN(Number(id))) {
    return {
      title: "Movie Not Found",
    };
  }

  try {
    const movie = await fetchMovieDetails(id);

    if (!movie || !movie.id) {
      return {
        title: "Movie Not Found",
      };
    }

    return {
      title: `${movie.title} - Movie Details`,
      description: movie.overview || `Watch ${movie.title}`,
      openGraph: {
        title: movie.title,
        description: movie.overview || "",
        images: movie.poster_path ? [getImageUrl(movie.poster_path, 'w780')] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Movie Not Found",
    };
  }
}