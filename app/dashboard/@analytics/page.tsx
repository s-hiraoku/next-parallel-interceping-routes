export default function AnalyticsPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-8 m-4 w-full lg:w-1/2">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Analytics Section
        </h2>
        <p className="text-gray-700">
          Welcome to the Analytics section. Here you will find all the metrics
          and data analysis.
        </p>
        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
}
