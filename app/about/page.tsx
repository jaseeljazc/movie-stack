import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-24 max-w-3xl">
        <div className="space-y-16">
          {/* Intro */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-white">About</h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              MovieStack is a simple way to discover and explore films. Browse
              thousands of movies, find what to watch, and build your personal
              collection.
            </p>
          </div>

          {/* What We Do */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">What we do</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                We provide a clean, straightforward platform for movie
                discovery. Search our database, filter by genre and rating, and
                explore curated collections.
              </p>
              <p>No clutter. No subscriptions. Just movies.</p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Features</h2>
            <div className="space-y-3 text-zinc-400">
              <p>— Browse 50,000+ movies</p>
              <p>— Smart search and filtering</p>
              <p>— Curated genre collections</p>
              <p>— Detailed movie information</p>
              <p>— Daily trending updates</p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Our approach</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                We believe movie discovery should be simple and enjoyable. No
                overwhelming recommendations, no complicated interfaces.
              </p>
              <p>
                Just a well-organized catalog that lets you find what you're
                looking for.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8 border-t border-zinc-900">
            <a
              href="/movies"
              className="inline-block text-white hover:text-zinc-400 transition-colors font-medium"
            >
              Start browsing →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
