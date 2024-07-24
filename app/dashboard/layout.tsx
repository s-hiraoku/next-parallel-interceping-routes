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
    <div className="h-full flex flex-col">
      <div>{children}</div>
      <div className="flex gap-2 h-full">
        {analytics}
        {team}
      </div>
    </div>
  );
}
