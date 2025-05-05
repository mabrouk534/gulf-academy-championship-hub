
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import TopScorers from "@/components/players/TopScorers";

const TopScorersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <TopScorers />
      </main>
    </div>
  );
};

export default TopScorersPage;
