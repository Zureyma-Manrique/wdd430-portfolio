// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-300 py-6 text-center">
      <p className="text-sm">
        Copyright © {new Date().getFullYear()} | Zureyma Manrique | All rights reserved
      </p>
      <p className="text-xs text-slate-400 mt-1">
        Built with Next.js and Tailwind CSS
      </p>
    </footer>
  );
}