import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div id="header-title" className="text-2xl font-bold">
          Zureyma Quetzaili Manrique Santiago.
        </div>
        <nav>
          <ul className="flex gap-6 text-lg">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
