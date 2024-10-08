import Link from "next/link";

export const AnalyticsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-8 m-4 w-full lg:w-1/2">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Analytics Section
        </h2>
        <p className="text-gray-700">
          Welcome to the Analytics section. Here you will find all the metrics
          and data analysis.
        </p>
        <div className="mt-6">
          <Link
            href="/dashboard/analytics"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View Reports
          </Link>
        </div>
      </div>
    </div>
  );
};
