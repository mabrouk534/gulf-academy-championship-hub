
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import RegistrationForm from "@/components/registration/RegistrationForm";

const Registration = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <RegistrationForm />
      </main>
    </div>
  );
};

export default Registration;
