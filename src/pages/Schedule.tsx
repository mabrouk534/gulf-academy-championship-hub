
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import CampSchedule from "@/components/schedule/CampSchedule";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <CampSchedule />
      </main>
    </div>
  );
};

export default Schedule;
