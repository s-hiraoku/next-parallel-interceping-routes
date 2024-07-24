import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900 h-screen`}>
        <div className="h-screen flex flex-col">
          <header className="bg-blue-700 text-white py-4 shadow-md">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold">My Application</h1>
            </div>
          </header>
          <main className="flex-1 container mx-auto px-4 py-6">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full overflow-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
