import Link from "next/link";

export default function TeamPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-green-50">
      <div className="bg-white shadow-lg rounded-lg p-8 m-4 w-full lg:w-1/2">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Team Section</h2>
        <p className="text-gray-700">
          Welcome to the Team section. Here you will find information about our
          team members.
        </p>
        <div className="mt-6">
          <Link
            href="/dashboard/team"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </div>
  );
}
