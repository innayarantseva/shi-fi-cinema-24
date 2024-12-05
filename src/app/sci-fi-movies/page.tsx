import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Movie } from "@/types/movie";
import { getSciFiMovies } from "@/services/movies";
import { RootLayout } from "@/components/layout/root-layout";

interface Props {
  searchParams: { page?: string };
}

export default async function SciFiMoviesPage({ searchParams }: Props) {
  const currentPage = Number(searchParams.page) || 1;
  const moviesPerPage = 12;

  try {
    const { movies, totalPages } = await getSciFiMovies({
      page: currentPage,
      moviesPerPage,
    });

    return (
      <RootLayout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-blue-900">
            Science Fiction Movies
          </h1>

          {/* Responsive movie grid: 1 column on mobile, up to 4 columns on xl screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {movies.map((movie: Movie) => (
              // Movie card with hover effects
              <div
                key={movie.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Movie poster with aspect ratio preservation */}
                <div className="relative h-[400px]">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                  {/* Movie metadata: release year and directors */}
                  <p className="text-gray-600 text-sm mb-2">
                    {new Date(movie.releaseDate).getFullYear()} •
                    {movie.directors
                      .map((d: { name: string }) => d.name)
                      .join(", ")}
                  </p>
                  {/* Rating display with vote count */}
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1">{movie.voteAverage.toFixed(1)}</span>
                    <span className="text-gray-500 text-sm ml-2">
                      ({movie.voteCount.toLocaleString()} votes)
                    </span>
                  </div>
                  {/* Genre tags */}
                  <div className="flex flex-wrap gap-2">
                    {movie.genres.map((genre: { id: number; name: string }) => (
                      <span
                        key={genre.id}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination controls - show Previous/Next buttons based on current page */}
          <div className="flex justify-center gap-2">
            {currentPage > 1 && (
              <Button variant="outline" asChild>
                <a href={`/sci-fi-movies?page=${currentPage - 1}`}>Previous</a>
              </Button>
            )}
            {currentPage < totalPages && (
              <Button variant="outline" asChild>
                <a href={`/sci-fi-movies?page=${currentPage + 1}`}>Next</a>
              </Button>
            )}
          </div>
        </div>
      </RootLayout>
    );
  } catch {
    // Display a more informative error UI
    return (
      <RootLayout>
        <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-600 mb-4">
                Unable to Load Movies
              </h1>
              <p className="text-gray-600 mb-4">
                We encountered an issue while fetching the movies. This could be
                due to:
              </p>
              <ul className="text-gray-600 text-sm list-disc list-inside mb-6">
                <li>Temporary database connection issues</li>
                <li>Server maintenance</li>
                <li>Network connectivity problems</li>
              </ul>
              <Button
                variant="default"
                onClick={() => window.location.reload()}
                className="w-full"
              >
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </RootLayout>
    );
  }
}
