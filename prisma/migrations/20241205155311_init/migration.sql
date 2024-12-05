-- CreateTable
CREATE TABLE "Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "posterPath" TEXT NOT NULL,
    "backdropPath" TEXT NOT NULL,
    "releaseDate" DATETIME NOT NULL,
    "popularity" REAL NOT NULL,
    "voteAverage" REAL NOT NULL,
    "voteCount" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Actor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Director" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MovieToActor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MovieToActor_A_fkey" FOREIGN KEY ("A") REFERENCES "Actor" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MovieToActor_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_MovieToDirector" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MovieToDirector_A_fkey" FOREIGN KEY ("A") REFERENCES "Director" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MovieToDirector_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_MovieToGenre" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MovieToGenre_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MovieToGenre_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToActor_AB_unique" ON "_MovieToActor"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToActor_B_index" ON "_MovieToActor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToDirector_AB_unique" ON "_MovieToDirector"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToDirector_B_index" ON "_MovieToDirector"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToGenre_AB_unique" ON "_MovieToGenre"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToGenre_B_index" ON "_MovieToGenre"("B");
