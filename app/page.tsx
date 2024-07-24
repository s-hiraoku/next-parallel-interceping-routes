import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-full bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
      <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Welcome to the Home Page</h2>
        <nav>
          <ul className="list-none">
            <li className="mb-2">
              <Link
                href="/dashboard"
                className="text-lg font-medium bg-blue-700 hover:bg-blue-900 px-4 py-2 rounded transition duration-300"
              >
                Go to Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
