export default function DashboardLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col bg-gray-100 p-4">
      <div className="mb-4 bg-white shadow-md p-4 rounded-md">{children}</div>
      <div className="flex gap-4 h-full min-h-0">
        <div className={"flex-1 bg-white shadow-md p-4 rounded-md"}>
          {analytics}
        </div>
        <div className={"flex-1 bg-white shadow-md p-4 rounded-md"}>{team}</div>
      </div>
    </div>
  );
}
