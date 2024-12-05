import { Button } from "@/components/ui/button";
import type { Movie } from "@/types/movie";
import { getSciFiMovies } from "@/services/movies";
import { RootLayout } from "@/components/layout/root-layout";
import { MovieCard } from "@/components/movies/movie-card";

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {movies.map((movie: Movie) => (
              <MovieCard key={movie.id} movie={movie} />
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
