
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const competitions = [
  {
    id: "football",
    title: "بطولة كرة القدم",
    titleEn: "Football Championship",
    color: "bg-tournament-green",
    ageGroups: [
      { id: "12", name: "فئة 12 سنة", nameEn: "U-12" },
      { id: "14", name: "فئة 14 سنة", nameEn: "U-14" },
      { id: "16", name: "فئة 16 سنة", nameEn: "U-16" },
    ]
  },
  {
    id: "gaming",
    title: "بطولة الألعاب الإلكترونية",
    titleEn: "Electronic Games Championship",
    color: "bg-tournament-blue",
    ageGroups: [
      { id: "12", name: "فئة 12 سنة", nameEn: "U-12" },
      { id: "14", name: "فئة 14 سنة", nameEn: "U-14" },
      { id: "16", name: "فئة 16 سنة", nameEn: "U-16" },
    ]
  },
  {
    id: "skills",
    title: "بطولة المهارات",
    titleEn: "Skills Championship",
    color: "bg-purple-500",
    ageGroups: [
      { id: "12", name: "فئة 12 سنة", nameEn: "U-12" },
      { id: "14", name: "فئة 14 سنة", nameEn: "U-14" },
      { id: "16", name: "فئة 16 سنة", nameEn: "U-16" },
    ]
  }
];

const TournamentOverview = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-6">
        <span className="text-tournament-blue">2025</span> Quattro Gulf Academies Championship
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {competitions.map((competition) => (
          <Card key={competition.id} className="overflow-hidden">
            <CardHeader className={`${competition.color} text-white py-4`}>
              <CardTitle className="text-center rtl">{competition.title}</CardTitle>
              <p className="text-center text-white/80 text-sm">{competition.titleEn}</p>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-1 gap-2">
                {competition.ageGroups.map((ageGroup) => (
                  <div 
                    key={`${competition.id}-${ageGroup.id}`}
                    className="p-3 bg-gray-100 rounded-md rtl text-center hover:bg-gray-200 transition-colors"
                  >
                    <p className="font-medium">{ageGroup.name}</p>
                    <p className="text-sm text-gray-600">{ageGroup.nameEn}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/registration">
          <Button className="w-full bg-tournament-blue hover:bg-tournament-blue-dark">
            <Users className="mr-2" size={18} /> Player Registration
          </Button>
        </Link>
        <Link to="/schedule">
          <Button className="w-full bg-tournament-green hover:bg-tournament-green-dark text-black">
            <Calendar className="mr-2" size={18} /> Camp Schedule
          </Button>
        </Link>
        <Link to="/matches">
          <Button className="w-full bg-tournament-blue hover:bg-tournament-blue-dark">
            <Clock className="mr-2" size={18} /> Match Schedule
          </Button>
        </Link>
        <Link to="/standings">
          <Button className="w-full bg-tournament-green hover:bg-tournament-green-dark text-black">
            <ChartBar className="mr-2" size={18} /> Standings
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TournamentOverview;
