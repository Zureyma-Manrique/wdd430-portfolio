export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto text-center">
        <p>
          Copyright &copy; {new Date().getFullYear()} | Zureyma Manrique | All
          rights reserved
        </p>
        <p className="text-sm text-gray-400 mt-1">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
