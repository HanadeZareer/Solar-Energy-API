import SolarChart from "../components/SolarChart";

function Analytics({ data }) {

  if (!data || !data.length) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">
          Loading Analytics...
        </h1>
      </div>
    );
  }

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Analytics 📊 Solar Performance
      </h1>

      <SolarChart data={data} />

    </div>
  );
}

export default Analytics;