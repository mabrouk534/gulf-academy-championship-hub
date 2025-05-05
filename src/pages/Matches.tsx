
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import MatchSchedule from "@/components/matches/MatchSchedule";

const Matches = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <MatchSchedule />
      </main>
    </div>
  );
};

export default Matches;
