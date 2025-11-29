import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tv, Bell, ArrowRight } from "lucide-react";
import Link from "next/link";

const Shows = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Coming Soon Section */}
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
        
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              TV Shows Coming Soon
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              We're building an incredible TV shows experience with trending series, 
              top-rated episodes, and personalized recommendations. Stay tuned!
            </p>
          </div>

          {/* Feature Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-left">
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
              <h3 className="text-lg font-semibold text-white mb-2">
                Popular Series
              </h3>
              <p className="text-sm text-zinc-400">
                Browse trending shows and discover what everyone's watching
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
              <h3 className="text-lg font-semibold text-white mb-2">
                Top Rated
              </h3>
              <p className="text-sm text-zinc-400">
                Find critically acclaimed series across all genres
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
              <h3 className="text-lg font-semibold text-white mb-2">
                Smart Search
              </h3>
              <p className="text-sm text-zinc-400">
                Filter by genre, year, network, and more to find your next binge
              </p>
            </div>
          </div>

        
        </div>
      </div>

      

   

      <Footer />
    </div>
  );
};

export default Shows;