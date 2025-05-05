
import { Link, useLocation } from "react-router-dom";
import { 
  ClipboardList, 
  Calendar, 
  Flag, 
  Trophy, 
  User, 
  Users, 
  Clock,
  ChartBar
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "الرئيسية", labelEn: "Dashboard", icon: Trophy },
    { path: "/registration", label: "تسجيل اللاعبين والجهاز الفني", labelEn: "Registration", icon: Users },
    { path: "/schedule", label: "برنامج المعسكر", labelEn: "Camp Schedule", icon: Calendar },
    { path: "/matches", label: "جدول ونتائج المباريات", labelEn: "Matches", icon: Clock },
    { path: "/standings", label: "جدول الترتيب", labelEn: "Standings", icon: ChartBar },
    { path: "/top-scorers", label: "كشف الأهداف", labelEn: "Top Scorers", icon: Flag },
    { path: "/disciplinary", label: "كشف الإنذارات", labelEn: "Warnings", icon: ClipboardList },
  ];

  return (
    <nav className="bg-gray-100 overflow-x-auto shadow-sm mb-6">
      <div className="container mx-auto">
        <div className="flex rtl whitespace-nowrap">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-3 flex items-center gap-2 border-b-2 text-sm md:text-base transition-colors ${
                location.pathname === item.path
                  ? "border-tournament-blue text-tournament-blue font-semibold"
                  : "border-transparent hover:bg-gray-200"
              }`}
            >
              <item.icon size={18} />
              <span className="hidden md:inline">{item.label}</span>
              <span className="inline md:hidden">{item.labelEn}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
