import SolarMap from "../components/SolarMap";

function Map() {

  const mapData = [
    { lat: 31.9, lng: 35.2, radiation: 800 },
    { lat: 32.0, lng: 35.3, radiation: 600 },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Solar Map 🗺️</h1>
      <SolarMap data={mapData} />
    </div>
  );
}

export default Map;