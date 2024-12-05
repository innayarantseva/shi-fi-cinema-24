export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">
          Movie data provided by{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-300"
          >
            The Movie Database (TMDB)
          </a>
        </p>
        <p>&copy; 2023 SciFi Flix. All rights reserved.</p>
      </div>
    </footer>
  );
}
