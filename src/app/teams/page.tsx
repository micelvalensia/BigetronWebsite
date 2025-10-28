import Card from "./_components/Card";

export default function TeamsPage() {
  const division = ["Mobile Legends", "Free Fire", "Honor of Kings", "Pubg Mobile"];
  
  return (
    <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 pt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-8xl gap-4 sm:gap-5 items-center">
        {division.map((game, index) => (
            <Card key={index} game={game} />
        ))}
      </div>
    </div>
  );
}