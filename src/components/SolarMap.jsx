import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet.heat";

function Map({ data }) {
  const position = [31.9, 35.2];

  useEffect(() => {
    if (!data) return;

    const map = L.map("map").setView(position, 8);

    // Base layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap",
    }).addTo(map);

    // Heat data (Solar Radiation)
    const heatData = data.map((item) => [
      item.lat,
      item.lng,
      item.radiation / 100, // normalize intensity
    ]);

    // Heat layer
    L.heatLayer(heatData, {
      radius: 25,
      blur: 15,
      maxZoom: 10,
      gradient: {
        0.2: "blue",
        0.4: "cyan",
        0.6: "yellow",
        0.8: "orange",
        1.0: "red",
      },
    }).addTo(map);

    return () => map.remove();
  }, [data]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-10">

      <h2 className="text-2xl font-bold mb-4">
        Solar Radiation Heatmap ☀️
      </h2>

      <div id="map" style={{ height: "600px", width: "100%" }}></div>
    </div>
  );
}

export default Map;