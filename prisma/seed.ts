import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

async function main() {
  // Read JSON files
  const movies = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../seed-data/movies.json"), "utf-8")
  );
  const actors = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../seed-data/actors.json"), "utf-8")
  );
  const directors = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "../seed-data/directors.json"),
      "utf-8"
    )
  );
  const genres = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../seed-data/genres.json"), "utf-8")
  );

  // Create genres
  console.log("Seeding genres...");
  for (const genre of genres) {
    await prisma.genre.upsert({
      where: { id: genre.id },
      update: genre,
      create: genre,
    });
  }

  // Create actors
  console.log("Seeding actors...");
  for (const actor of actors) {
    await prisma.actor.create({
      data: {
        id: actor.id,
        name: actor.name,
      },
    });
  }

  // Create directors
  console.log("Seeding directors...");
  for (const director of directors) {
    await prisma.director.create({
      data: {
        id: director.id,
        name: director.name,
      },
    });
  }

  // Create movies with relationships
  console.log("Seeding movies...");
  for (const movie of movies) {
    await prisma.movie.create({
      data: {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        posterPath: movie.posterPath,
        backdropPath: movie.backdropPath,
        releaseDate: new Date(movie.releaseDate),
        popularity: movie.popularity,
        voteAverage: movie.voteAverage,
        voteCount: movie.voteCount,
        genres: {
          connect: movie.genreIds.map((id: number) => ({ id })),
        },
        actors: {
          connect: movie.actorIds.map((id: number) => ({ id })),
        },
        directors: {
          connect: movie.directorIds.map((id: number) => ({ id })),
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
