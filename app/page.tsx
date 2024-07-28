import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-full bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
      <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Welcome to Animalytics
        </h2>
        <nav className="flex flex-col items-center w-full space-y-4">
          <Link
            href="/dashboard"
            className="text-lg font-medium bg-blue-500 hover:bg-blue-600 text-center w-full px-4 py-2 rounded transition duration-300"
          >
            Dashboard
          </Link>
          <div className="flex w-full space-x-4">
            <Link
              href="/data/analytics"
              className="text-lg font-medium bg-blue-500 hover:bg-blue-600 text-center w-full px-4 py-2 rounded transition duration-300"
            >
              Analytics
            </Link>
            <Link
              href="/data/team"
              className="text-lg font-medium bg-blue-500 hover:bg-blue-600 text-center w-full px-4 py-2 rounded transition duration-300"
            >
              Team
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
