import { Film, Github, Twitter, Instagram, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-black/20 mt-20 px-10">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent" />
      
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center">
                <Film className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-display tracking-wider text-foreground">
                Movie Stack
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Curating the world's greatest stories, one frame at a time. 
              Discover, explore, and fall in love with cinema.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-muted hover:bg-yellow-300/20 hover:text-yellow-300 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted hover:bg-yellow-300/20 hover:text-yellow-300 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted hover:bg-yellow-300/20 hover:text-yellow-300 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted hover:bg-yellow-300/20 hover:text-yellow-300 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Discover Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg tracking-wide">
              DISCOVER
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/lists/crime" className="text-muted-foreground hover:text-yellow-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-yellow-300 transition-all duration-200 mr-0 group-hover:mr-2" />
                  Top Crime Movies
                </a>
              </li>
              <li>
                <a href="/lists/action" className="text-muted-foreground hover:text-yellow-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-yellow-300 transition-all duration-200 mr-0 group-hover:mr-2" />
                  Top Action Movies
                </a>
              </li>
              <li>
                <a href="/lists/sci-fi" className="text-muted-foreground hover:text-yellow-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-yellow-300 transition-all duration-200 mr-0 group-hover:mr-2" />
                  Top Sci-fi Movies
                </a>
              </li>
              <li>
                <a href="/lists/comedy" className="text-muted-foreground hover:text-yellow-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-yellow-300 transition-all duration-200 mr-0 group-hover:mr-2" />
                   Top Comedy Movies
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg tracking-wide">
              COMPANY
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-yellow-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-yellow-300 transition-all duration-200 mr-0 group-hover:mr-2" />
                  About Movie Stack
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-yellow-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-yellow-300 transition-all duration-200 mr-0 group-hover:mr-2" />
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-yellow-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-yellow-300 transition-all duration-200 mr-0 group-hover:mr-2" />
                  Get in Touch
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-yellow-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-yellow-300 transition-all duration-200 mr-0 group-hover:mr-2" />
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Data Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg tracking-wide">
              LEGAL & DATA
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="#" className="text-muted-foreground hover:text-yellow-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-yellow-300 transition-all duration-200 mr-0 group-hover:mr-2" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-yellow-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-yellow-300 transition-all duration-200 mr-0 group-hover:mr-2" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-yellow-300 transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-yellow-300 transition-all duration-200 mr-0 group-hover:mr-2" />
                  Sitemap
                </a>
              </li>
            </ul>
            
           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              &copy; {new Date().getFullYear()} Movie Stack. Crafted with 
              for film lovers worldwide
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Accessibility
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Cookie Settings
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};