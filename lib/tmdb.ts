const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  popularity: number;
}



export interface Genre {
  id: number;
  name: string;
}

export const getImageUrl = (
  path: string | null,
  size: "w500" | "w780" | "original" = "w500"
) => {
  if (!path) return "/placeholder.svg";
  return `${TMDB_IMAGE_BASE}/${size}${path}`;
};

// Shared fetch function
async function fetchFromTMDB(url: string) {
  if (!TMDB_API_KEY) {
    console.error("❌ Missing TMDB_API_KEY in .env.local");
    return null;
  }

  try {
    const res = await fetch(`${url}&api_key=${TMDB_API_KEY}`, {
      next: { revalidate: 3600 }, // ISR cache for 1 hour
    });

    if (!res.ok) {
      console.error(`❌ TMDB error (${res.status}):`, await res.text());
      return null;
    }

    return res.json();
  } catch (err) {
    console.error("❌ Fetch failed:", err);
    return null;
  }
}

// ---------------- API Functions --------------------

export async function fetchTrending(media: "movie" | "tv" = "movie") {
  return (
    (
      (await fetchFromTMDB(`${TMDB_BASE_URL}/trending/${media}/week?`))?.results ??
      []
    )
  );
}

export async function fetchTopRated(page = 1) {
  const data = await fetchFromTMDB(
    `${TMDB_BASE_URL}/movie/top_rated?page=${page}`
  );

  return {
    results: data?.results ?? [],
    total_pages: data?.total_pages ?? 1,
  };
}

export async function fetchMovieDetails(id: string) {
  return await fetchFromTMDB(`${TMDB_BASE_URL}/movie/${id}?`);
}

export async function searchMovies(query: string, page = 1) {
  const data = await fetchFromTMDB(
    `${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(
      query
    )}&page=${page}`
  );

  return {
    results: data?.results ?? [],
    total_pages: data?.total_pages ?? 1,
  };
}

export async function fetchMoviesByGenre(genreId: number, page = 1) {
  const data = await fetchFromTMDB(
    `${TMDB_BASE_URL}/discover/movie?with_genres=${genreId}&page=${page}&sort_by=vote_average.desc&vote_count.gte=100`
  );

  return {
    results: data?.results ?? [],
    total_pages: data?.total_pages ?? 1,
  };
}

export async function fetchGenres() {
  return (
    (await fetchFromTMDB(`${TMDB_BASE_URL}/genre/movie/list?`))?.genres ?? []
  );
}
