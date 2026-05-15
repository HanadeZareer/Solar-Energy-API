import SolarChart from "../components/SolarChart";

export default function Home({ data = [] }) {

  if (!data.length) {
    return (
      <div className="p-10 text-xl font-bold">
        Loading Dashboard...
      </div>
    );
  }

  const bestDay = [...data].reduce((a, b) =>
    a.production > b.production ? a : b
  );

  const totalEnergy = data.reduce(
    (sum, d) => sum + Number(d.production),
    0
  );

  const avgCloud = (
    data.reduce((sum, d) => sum + d.cloud, 0) / data.length
  ).toFixed(1);

  return (
    <div className="p-8 space-y-8 bg-slate-100 min-h-screen">

      {/* 🌟 HEADER */}
      <div>
        <h1 className="text-4xl font-bold">
          Solar Energy Dashboard ☀️
        </h1>
        <p className="text-gray-600 mt-1">
          Real-time solar performance overview
        </p>
      </div>

      {/* 📊 KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <p className="text-gray-500">Total Energy</p>
          <h2 className="text-2xl font-bold text-green-600">
            {totalEnergy.toFixed(2)} kWh
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <p className="text-gray-500">Avg Cloud Cover</p>
          <h2 className="text-2xl font-bold text-blue-500">
            {avgCloud}%
          </h2>
        </div>

      </div>

      {/* 🌞 BEST DAY HERO CARD */}
      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-2xl shadow-md">

        <h2 className="text-2xl font-bold mb-2">
          ☀️ Best Solar Day
        </h2>

        <p className="text-lg">
          {bestDay.day}
        </p>

        <p className="text-green-700 font-bold text-xl mt-2">
          {bestDay.production.toFixed(2)} kWh
        </p>

      </div>

      {/* 📈 CHART */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <SolarChart data={data} />
      </div>

      {/* 🌤 FORECAST PREVIEW */}
      <div>
        <h2 className="text-xl font-bold mb-4">
          Weekly Forecast
        </h2>

        <div className="flex gap-4 overflow-x-auto">

          {data.map((d, i) => (
            <div
              key={i}
              className="min-w-[180px] bg-white p-4 rounded-xl shadow-md"
            >
              <p className="font-bold">{d.day}</p>

              <p className="text-yellow-500">
                ☀ {d.radiation}
              </p>

              <p className="text-blue-500">
                ☁ {d.cloud}%
              </p>

              <p className="text-green-600 font-bold">
                ⚡ {d.production.toFixed(2)}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}