export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm sm:text-base break-words">
          Copyright &copy; {new Date().getFullYear()} | Zureyma Manrique | All rights reserved
        </p>
        <p className="text-xs sm:text-sm text-gray-400 mt-1">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}