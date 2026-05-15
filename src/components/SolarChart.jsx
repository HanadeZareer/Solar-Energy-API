import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function SolarChart({ data }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-10">

      <h2 className="text-2xl font-bold mb-4">
        Solar Energy Forecast ⚡
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />
          <YAxis />

          <Tooltip />

          {/* Production line */}
          <Line
            type="monotone"
            dataKey="production"
            stroke="#22c55e"
            strokeWidth={3}
          />

          {/* Radiation line */}
          <Line
            type="monotone"
            dataKey="radiation"
            stroke="#facc15"
            strokeWidth={2}
          />

          {/* Cloud line */}
          <Line
            type="monotone"
            dataKey="cloud"
            stroke="#60a5fa"
            strokeWidth={2}
          />

        </LineChart>

      </ResponsiveContainer>
    </div>
  );
}

export default SolarChart;