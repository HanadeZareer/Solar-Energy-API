import { Cloud, Droplets, Wind } from "lucide-react";

function WeatherCard({ data }) {

  if (!data) {
    return (
      <div className="bg-white p-5 rounded-2xl shadow-md w-64">
        Loading weather...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-64 hover:shadow-xl transition">

      {/* Title */}
      <h2 className="text-lg font-bold mb-4 text-slate-700">
        Weather
      </h2>

      {/* Temperature */}
      <div className="bg-red-50 p-2 rounded-lg text-center mb-2">

        <p className="text-red-600 font-bold">
          🌡 Max Temp: {data.tempMax}°
        </p>

        <p className="text-blue-500 text-sm">
          Min: {data.tempMin}°
        </p>

      </div>

      {/* Condition */}
      <div className="flex items-center gap-3 mb-3">
        <Cloud className="text-blue-400" />
        <span>{data.condition}</span>
      </div>

      {/* Humidity */}
      <div className="flex items-center gap-3 mb-3">
        <Droplets className="text-cyan-500" />
        <span>{data.humidity}%</span>
      </div>

      {/* Wind */}
      <div className="flex items-center gap-3">
        <Wind className="text-gray-500" />
        <span>{Number(data.wind).toFixed(2)} km/h</span>
      </div>

    </div>
  );
}

export default WeatherCard;