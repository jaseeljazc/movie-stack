import { Star } from "lucide-react";
import { Movie, getImageUrl } from "@/lib/tmdb";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const rating = movie.vote_average.toFixed(1);

  return (
    <Link href={`/movies/${movie.id}`}>
      <Card className="group relative overflow-hidden border-border shadow-[0_0_5px_rgba(0,0,0,0.12)] hover:shadow-[0_0_18px_rgba(251,191,36,0.15)] border-violet-950/20 transition-all duration-300 hover:scale-105">
        <div className="aspect-[2/3] overflow-hidden bg-muted">
          <img
            src={getImageUrl(movie.poster_path, "w500")}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-50"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-foreground font-semibold mb-2 line-clamp-2">
            {movie.title}
          </h3>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1 text-primary">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span className="font-semibold text-yellow-400">{rating}</span>
            </div>
            <span className="text-muted-foreground">
              {movie.release_date
                ? new Date(movie.release_date).getFullYear()
                : "N/A"}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};
