import { Sun, Home, CloudSun, BarChart3, Map, Settings } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-screen w-64 bg-slate-900 text-white p-6 fixed left-0 top-0 shadow-xl">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <Sun className="text-yellow-400" size={30} />
        <h1 className="text-2xl font-bold">
          Solar Energy
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-6 text-lg">

        <Link
          to="/home"
          className="flex items-center gap-3 hover:text-yellow-400 transition"
        >
          <Home size={20} />
          Dashboard
        </Link>

        <Link
          to="/forecast"
          className="flex items-center gap-3 hover:text-yellow-400 transition"
        >
          <CloudSun size={20} />
          Forecast
        </Link>

        <Link
          to="/analytics"
          className="flex items-center gap-3 hover:text-yellow-400 transition"
        >
          <BarChart3 size={20} />
          Analytics
        </Link>

        <Link
          to="/map"
          className="flex items-center gap-3 hover:text-yellow-400 transition"
        >
          <Map size={20} />
          Map
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-3 hover:text-yellow-400 transition"
        >
          <Settings size={20} />
          Settings
        </Link>

      </nav>
    </div>
  );
}

export default Sidebar;