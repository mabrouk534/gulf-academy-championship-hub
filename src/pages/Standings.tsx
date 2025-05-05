
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import StandingsTable from "@/components/standings/StandingsTable";

const Standings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <StandingsTable />
      </main>
    </div>
  );
};

export default Standings;
