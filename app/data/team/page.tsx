import { TeamData } from "../../_components/TeamData";

export default function TeamPage() {
  return (
    <div className="h-full flex flex-col bg-green-50 p-4">
      <div className="mb-4 bg-white shadow-md p-4 rounded-md">
        <h2 className="text-2xl font-bold text-gray-600">Team Data</h2>
      </div>
      <div className="p-4 overflow-auto">
        <TeamData />
      </div>
    </div>
  );
}
