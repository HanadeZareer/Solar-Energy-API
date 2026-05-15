import SolarChart from "../components/SolarChart";
import WeatherCard from "../components/WeatherCard";

export default function Forecast({ data = [] }) {

  if (!data || data.length === 0) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">
          Loading Forecast...
        </h1>
      </div>
    );
  }

  const bestDay = [...data].reduce((max, day) =>
    day.production > max.production ? day : max
  );

  const totalProduction = data.reduce(
    (sum, day) => sum + Number(day.production),
    0
  );

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        Solar Forecast 🌤
      </h1>

      {/* Best Day */}
      <div className="bg-yellow-100 p-6 rounded-2xl mb-8">

        <h2 className="text-2xl font-bold">
          Best Solar Day ☀️
        </h2>

        <p className="text-lg">
          {bestDay.day}
        </p>

        <p className="text-green-600 font-bold mt-2">
          {bestDay.production.toFixed(2)} kWh
        </p>

      </div>

      {/* Cards */}
      <div className="flex gap-4 flex-wrap mb-10">

        {data.map((item, i) => (
          <div key={i}>

            <p className="text-center font-bold mb-2">
              {item.day}
            </p>

            <WeatherCard
  data={{
    tempMax: item.tempMax,
    tempMin: item.tempMin,
    condition: item.cloud > 20 ? "Cloudy" : "Sunny",
    humidity: item.cloud,
    wind: item.production,
  }}
/>

            <div className="bg-white p-3 mt-2 text-center rounded-xl">

              <p>☀ {item.radiation}</p>

              <p className="font-bold text-green-600">
                ⚡ {item.production.toFixed(2)} kWh
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* Chart */}
      <SolarChart data={data} />

      {/* Summary */}
      <div className="bg-white p-6 mt-10 rounded-2xl">

        <h2 className="text-xl font-bold mb-2">
          Weekly Summary
        </h2>

        <p className="text-3xl text-green-600 font-bold">
          {totalProduction.toFixed(2)} kWh
        </p>

      </div>

    </div>
  );
}