import Link from "next/link";

export function Header() {
  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SciFi Flix</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/sci-fi-movies" className="hover:text-blue-300">
                Movies
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-300">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
