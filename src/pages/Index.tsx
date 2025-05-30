
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import TournamentOverview from "@/components/dashboard/TournamentOverview";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <TournamentOverview />
      </main>
    </div>
  );
};

export default Index;
