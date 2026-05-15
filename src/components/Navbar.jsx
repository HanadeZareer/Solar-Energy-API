import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4 shadow-lg">

      <div className="flex items-center justify-between">

        {/* Logo / Title */}
        <h1 className="text-yellow-400 font-bold text-xl">
          ☀️
        </h1>

        {/* Links */}
        <ul className="flex gap-6 text-lg items-center">

          <li>
            <Link to="/home" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/forecast" className="hover:text-yellow-400 transition">
              Forecast
            </Link>
          </li>

          <li>
            <Link to="/analytics" className="hover:text-yellow-400 transition">
              Analytics
            </Link>
          </li>

          <li>
            <Link to="/map" className="hover:text-yellow-400 transition">
              Map
            </Link>
          </li>

          {/* 🌞 NEW: Simulator */}
          <li>
            <Link
              to="/simulator"
              className="bg-yellow-500 text-black px-3 py-1 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Simulator
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;