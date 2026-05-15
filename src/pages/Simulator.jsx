import { useState } from "react";
import axios from "axios";

export default function Simulator() {
  const [tilt, setTilt] = useState(20);
  const [azimuth, setAzimuth] = useState(180);
  const [panels, setPanels] = useState(10);
  const [panelWatt, setPanelWatt] = useState(400);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const API_KEY = "YOUR_API_KEY";

  const fetchPVWatts = async () => {
    setLoading(true);

    const systemSize = (panels * panelWatt) / 1000;

    try {
      const res = await axios.get(
        "https://developer.nrel.gov/api/pvwatts/v8.json",
        {
          params: {
            api_key: API_KEY,
            lat: 31.9,
            lon: 35.2,
            system_capacity: systemSize,
            azimuth,
            tilt,
            array_type: 1,
            module_type: 1,
            losses: 14,
          },
        }
      );

      setResult(res.data.outputs);
    } catch (err) {
      console.log("NREL Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 space-y-6">

      <h1 className="text-3xl font-bold">
        Solar PV Simulator ☀️
      </h1>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-2xl shadow-md">

        <div>
          <label className="text-sm text-gray-600">Tilt Angle (°)</label>
          <input
            type="number"
            value={tilt}
            onChange={(e) => setTilt(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Azimuth (°)</label>
          <input
            type="number"
            value={azimuth}
            onChange={(e) => setAzimuth(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Panels</label>
          <input
            type="number"
            value={panels}
            onChange={(e) => setPanels(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Panel Watt</label>
          <input
            type="number"
            value={panelWatt}
            onChange={(e) => setPanelWatt(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* Button */}
      <button
        onClick={fetchPVWatts}
        className="bg-yellow-500 px-6 py-2 rounded font-bold"
      >
        {loading ? "Calculating..." : "Calculate with NREL ☀️"}
      </button>

      {/* Results */}
      {result && (
        <div className="bg-white p-6 rounded-2xl shadow-md space-y-2">

          <h2 className="text-xl font-bold">
            NREL PVWatts Results ⚡
          </h2>

          <p>☀ AC Annual: {result.ac_annual.toFixed(2)} kWh</p>

          <p>📦 System Size: {result.system_size} kW</p>

          <p className="text-green-600 font-bold">
            Monthly Avg: {(result.ac_annual / 12).toFixed(2)} kWh
          </p>

        </div>
      )}

    </div>
  );
}