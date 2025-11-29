import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Film, ArrowRight, Sparkles, Trophy, Heart, Zap } from "lucide-react";
import Link from "next/link";

const Lists = () => {
  const lists = [
    {
      title: "Crime Thrillers",
      description: "Gripping tales of crime and investigation",
      path: "/lists/crime",
      genreId: 80,
      color: "from-red-600/20 to-red-900/20",
      borderColor: "border-red-900/30"
    },
    {
      title: "Sci-Fi Adventures",
      description: "Mind-bending journeys through space and time",
      path: "/lists/sci-fi",
      genreId: 878,
      color: "from-blue-600/20 to-blue-900/20",
      borderColor: "border-blue-900/30"
    },
    {
      title: "Action Blockbusters",
      description: "High-octane thrills and explosive entertainment",
      path: "/lists/action",
      genreId: 28,
      color: "from-orange-600/20 to-orange-900/20",
      borderColor: "border-orange-900/30"
    },
    {
      title: "Comedy Classics",
      description: "Timeless films that never fail to entertain",
      path: "/lists/comedy",
      genreId: 35,
      color: "from-yellow-600/20 to-yellow-900/20",
      borderColor: "border-yellow-900/30"
    },

  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Header Section */}
      <div className="bg-zinc-950 border-b border-zinc-900">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Curated Collections
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Hand-picked movies organized by genre, theme, and style. 
              Find your next favorite film in our carefully curated lists.
            </p>
          </div>
        </div>
      </div>

      {/* Lists Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lists.map((list) => {
              return (
                <Link key={list.path} href={list.path}>
                  <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${list.color} border ${list.borderColor} p-8 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50`}>
                    <div className="flex flex-col h-full space-y-4">
                      
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                          {list.title}
                        </h3>
                        <p className="text-zinc-300 leading-relaxed">
                          {list.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center text-white font-medium pt-2">
                        <span className="text-sm">Explore collection</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                </Link>
              );
            })}
          </div>

        
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Lists;