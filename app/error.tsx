'use client'

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AlertCircle, RefreshCw, Film } from "lucide-react"

// Error Page Component
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-black flex flex-col mt-10">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-md text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-red-600/20 border border-red-900/30 flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-red-500" />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-white">
              Something went wrong
            </h1>
            <p className="text-lg text-zinc-400">
              {error.message || 'An unexpected error occurred. Please try again.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center px-6 h-12 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </button>
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 h-12 border border-zinc-800 hover:bg-zinc-900 text-white font-semibold rounded-lg transition-colors"
            >
              Go Home
            </a>
          </div>

          {error.digest && (
            <p className="text-xs text-zinc-600 pt-4">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
