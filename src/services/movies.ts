import { prisma } from "@/lib/prisma";
import { logger } from "@/lib/logger";

interface GetSciFiMoviesParams {
  page: number;
  moviesPerPage: number;
}

export async function getSciFiMovies({
  page,
  moviesPerPage,
}: GetSciFiMoviesParams) {
  try {
    // Parallel database queries for movies and total count
    const [movies, totalMovies] = await Promise.all([
      prisma.movie.findMany({
        where: {
          genres: {
            some: {
              id: 878, // TMDB ID for Science Fiction genre
            },
          },
        },
        include: {
          genres: true,
          directors: true,
        },
        orderBy: {
          voteAverage: "desc", // Sort by highest rated first
        },
        skip: (page - 1) * moviesPerPage,
        take: moviesPerPage,
      }),
      // Count total sci-fi movies for pagination
      prisma.movie.count({
        where: {
          genres: {
            some: {
              id: 878,
            },
          },
        },
      }),
    ]);

    return {
      movies,
      totalMovies,
      totalPages: Math.ceil(totalMovies / moviesPerPage),
    };
  } catch (error) {
    logger.error("Failed to fetch sci-fi movies", {
      error: error instanceof Error ? error.message : String(error),
      page,
      context: "getSciFiMovies",
    });
    throw error;
  }
}
