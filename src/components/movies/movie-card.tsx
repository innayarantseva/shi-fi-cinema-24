"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Movie } from "@/types/movie";

interface MovieCardProps {
  movie: Movie;
}

// Helper function for consistent number formatting
function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num);
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="relative group bg-zinc-900 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative h-[400px]">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
          alt={movie.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay with Read More button - using group-hover instead of state */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            variant="default"
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            READ MORE
          </Button>
        </div>
      </div>
      <CardContent className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-12 pb-4 px-4">
        {/* Genre tags at the top of the content */}
        <div className="flex flex-wrap gap-2 mb-2">
          {movie.genres.map((genre) => (
            <span
              key={genre.id}
              className="px-2 py-0.5 bg-white/10 text-white/90 text-xs rounded-full"
            >
              {genre.name}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-white mb-2">{movie.title}</h2>

        {/* Movie metadata */}
        <p className="text-white/70 text-sm mb-2">
          {new Date(movie.releaseDate).getFullYear()} •{" "}
          {movie.directors.map((d) => d.name).join(", ")}
        </p>

        {/* Rating display */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-white">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 font-semibold">
              {movie.voteAverage.toFixed(1)}
            </span>
            <span className="text-sm ml-1">/10</span>
          </div>
          <span className="text-white/60 text-sm">
            {formatNumber(movie.voteCount)} votes
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
