import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-slate-600 px-6 py-4 flex items-center justify-between">
      
      {/* Logo / Titre */}
      <h1 className="text-white text-3xl font-bold">
        Mon application React
      </h1>

      {/* Navigation */}
      <nav className="flex gap-4">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition"
        >
          Accueil
        </Link>

        <Link
          to="/about"
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition"
        >
          À propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
