import { Film } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          {/* Spinning outer ring */}
          <div className="w-16 h-16 rounded-full border-4 border-zinc-900 border-t-red-600 animate-spin"></div>

          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Film className="w-6 h-6 text-zinc-600" />
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm font-medium text-white">Loading</p>
          <p className="text-xs text-zinc-500">Please wait...</p>
        </div>
      </div>
    </div>
  );
}
