"use client";

import { Film, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoMdFilm } from "react-icons/io";

import Link from "next/link";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-black/15 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-yellow-600 rounded flex items-center justify-center group-hover:bg-yellow-700 transition-colors">
              <IoMdFilm className="w-5 h-5 text-black" />
            </div>
            <span className="text-lg font-bold text-white">MovieStack</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-md font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/movies"
              className="text-md font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Movies
            </Link>
            <Link
              href="/shows"
              className="text-md font-medium text-zinc-300 hover:text-white transition-colors"
            >
              TV Shows
            </Link>
            <Link
              href="/about"
              className="text-md font-medium text-zinc-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/watchlist"
              className="text-md font-medium text-zinc-300 hover:text-white transition-colors"
            >
             Watchlist
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-zinc-400 hover:text-white hover:bg-zinc-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-900 space-y-1">
            <Link
              href="/movies"
              className="block py-3 px-4 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Movies
            </Link>
            <Link
              href="/shows"
              className="block py-3 px-4 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              TV Shows
            </Link>
            <Link
              href="/watchlist"
              className="block py-3 px-4 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
             Watchlist
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
