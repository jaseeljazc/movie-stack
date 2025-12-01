// "use client";

// import { useEffect } from "react";
// import { useWishlist } from "@/store/useWatchlist";
// import {MovieCard} from "@/components/MovieCard";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export default function WatchlistPage() {
//   const { wishlist, load } = useWishlist();

//   useEffect(() => {
//     load(); // Load from localStorage
//   }, []);

//   return (
//     <div className="p-5 h-screen">

//           <div className="flex items-start gap-6 max-w-4xl">
//             <div className="flex-1 mb-15 ">
//               <h1 className="text-3xl pt-5 md:text-4xl lg:text-5xl font-bold text-white  leading-tight">
//                 Your Watchlist
//               </h1>
//           <p className="text-gray-300">
//             Your watchlist is a personalized space to save movies you want to watch later.
//           </p>
            
//             </div>
//           </div>
//       {wishlist.length === 0 ? (
//           <div className="min-h-screen bg-black">
//         <div className="container mx-auto px-6 py-20 text-center">
//           <h1 className="text-3xl font-bold text-white mb-4">
//            Nothing in your Watchlist
//           </h1>
//           <p className="text-zinc-400 mb-8">
//             Add movie movies to your watchlist to see them here.
//           </p>
//           <Link href="/movies">
//             <Button className="bg-yellow-600 hover:bg-red-700 text-white">
//               Back to Movies
//             </Button>
//           </Link>
//         </div>
//       </div>
//       ) : (
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
//           {wishlist.map((movie) => (
//             <MovieCard key={movie.id} movie={movie} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


"use client";
import { useEffect } from "react";
import { useWishlist } from "@/store/useWatchlist";
import { MovieCard } from "@/components/MovieCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";




const WatchlistPage = () => {
  const { wishlist, load } = useWishlist();

  useEffect(() => {
    load(); // Load from localStorage
  }, [load]);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Your Watchlist
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Your watchlist is a personalized space to save movies you want to watch later.
          </p>
        </div>

        {/* Content Section */}
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="text-center space-y-6 max-w-md">
              <div className="w-24 h-24 mx-auto bg-black border border-gray-300 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Nothing in your Watchlist</h2>
                <p className="text-muted-foreground">
                  Add movies to your watchlist to see them here.
                </p>
              </div>
              <Link href="/">
                <Button size="lg" className="mt-4 bg-yellow-600">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to Movies
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            {/* Movie Count */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                {wishlist.length} {wishlist.length === 1 ? "movie" : "movies"} saved
              </p>
            </div>
            
            {/* Movies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
              {wishlist.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchlistPage;