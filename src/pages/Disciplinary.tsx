
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import WarningsTable from "@/components/disciplinary/WarningsTable";

const Disciplinary = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <WarningsTable />
      </main>
    </div>
  );
};

export default Disciplinary;
