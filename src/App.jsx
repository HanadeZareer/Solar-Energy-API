import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import SolarChart from "./components/SolarChart";
import Map from "./pages/Map";
import Analytics from "./pages/Analytics";
import Forecast from "./pages/Forecast";
import Home from "./pages/Home";
import Simulator from "./pages/Simulator";

function App() {
  const [data, setData] = useState(null);

  const SYSTEM_SIZE = 5;

  // API
  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=31.9&longitude=35.2&daily=temperature_2m_max,temperature_2m_min,cloudcover_mean,shortwave_radiation_sum&timezone=auto"
      )
      .then((res) => setData(res.data.daily));
  }, []);

  // ✅ processedData 
  const processedData = useMemo(() => {
    if (!data) return [];

    return data.time.map((day, i) => ({
      day,
      tempMax: data.temperature_2m_max[i],
      tempMin: data.temperature_2m_min[i],
      cloud: data.cloudcover_mean[i],
      radiation: data.shortwave_radiation_sum[i],
      production:
        SYSTEM_SIZE *
        data.shortwave_radiation_sum[i] *
        (1 - data.cloudcover_mean[i] / 100),
    }));
  }, [data]);

  return (
    <div className="flex">

      <Sidebar />

      <div className="ml-64 w-full min-h-screen bg-slate-100">

        <Navbar />

        <Routes>

          🏠 Dashboard
          <Route
            path="/home"
            element={<Home data={processedData} />}
          /> 


          {/* Analytics */}
          <Route
            path="/analytics"
            element={<Analytics data={processedData} />}
          />

          {/* Map */}
          <Route
            path="/map"
            element={<Map data={processedData} />}
          />


          {/* Forecast */}
          <Route 
            path="/forecast" 
            element={<Forecast data={processedData} />} 
          />

          {/* Home */}
          <Route 
            path="/home" 
            element={<Home data={processedData} />} 
          />

          <Route 
            path="/simulator" 
            element={<Simulator />} />

        </Routes>

      </div>
    </div>
  );
}

export default App;