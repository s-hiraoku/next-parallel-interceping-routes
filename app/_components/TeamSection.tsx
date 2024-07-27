const teams = [
  {
    name: "Lion Leaders",
    members: [
      { name: "Leo King", role: "Team Lead" },
      { name: "Savannah Roar", role: "Developer" },
      { name: "Mane Majestic", role: "Designer" },
    ],
  },
  {
    name: "Panther Power",
    members: [
      { name: "Panther Prime", role: "Team Lead" },
      { name: "Stealth Shadow", role: "Developer" },
      { name: "Prowl Prowess", role: "Designer" },
    ],
  },
  {
    name: "Shark Sharks",
    members: [
      { name: "Great White", role: "Team Lead" },
      { name: "Fin Fury", role: "Developer" },
      { name: "Wave Wonder", role: "Designer" },
    ],
  },
  {
    name: "Falcon Force",
    members: [
      { name: "Sky High", role: "Team Lead" },
      { name: "Talon Tactician", role: "Developer" },
      { name: "Feathered Flair", role: "Designer" },
    ],
  },
  {
    name: "Eagle Eyes",
    members: [
      { name: "Sharp Sight", role: "Team Lead" },
      { name: "Eagle Eye", role: "Developer" },
      { name: "Winged Whiz", role: "Designer" },
    ],
  },
];

export const TeamSection: React.FC = () => {
  return (
    <div className="container mx-auto space-y-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-4">Team Members</h1>
      {teams.map((team) => {
        const { name, members } = team;
        return (
          <div key={name} className="bg-white shadow rounded-lg p-4 mb-6">
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2">Name</th>
                  <th className="py-2">Role</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.name}>
                    <td className="border px-4 py-2">{member.name}</td>
                    <td className="border px-4 py-2">{member.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};
