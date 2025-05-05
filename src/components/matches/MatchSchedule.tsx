
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Competition = "football" | "gaming" | "skills";
type AgeGroup = "12" | "14" | "16";

const competitionNames = {
  football: { ar: "بطولة كرة القدم", en: "Football Championship" },
  gaming: { ar: "بطولة الألعاب الإلكترونية", en: "Electronic Games Championship" },
  skills: { ar: "بطولة المهارات", en: "Skills Championship" }
};

const ageGroupNames = {
  "12": { ar: "فئة 12 سنة", en: "U-12" },
  "14": { ar: "فئة 14 سنة", en: "U-14" },
  "16": { ar: "فئة 16 سنة", en: "U-16" }
};

// Sample match data
const matchesData = {
  football: {
    "12": [
      { id: 1, team1: "Academy A", team2: "Academy B", date: "2025-07-09", time: "16:00", venue: "Stadium 1", score: { team1: 2, team2: 1 }, status: "completed" },
      { id: 2, team1: "Academy C", team2: "Academy D", date: "2025-07-09", time: "18:00", venue: "Stadium 1", score: null, status: "upcoming" },
      { id: 3, team1: "Academy A", team2: "Academy C", date: "2025-07-10", time: "16:00", venue: "Stadium 2", score: null, status: "upcoming" },
      { id: 4, team1: "Academy B", team2: "Academy D", date: "2025-07-10", time: "18:00", venue: "Stadium 2", score: null, status: "upcoming" },
    ],
    "14": [
      { id: 5, team1: "Academy A", team2: "Academy B", date: "2025-07-09", time: "17:00", venue: "Stadium 2", score: { team1: 0, team2: 3 }, status: "completed" },
      { id: 6, team1: "Academy C", team2: "Academy D", date: "2025-07-09", time: "19:00", venue: "Stadium 2", score: null, status: "upcoming" },
    ],
    "16": [
      { id: 7, team1: "Academy A", team2: "Academy B", date: "2025-07-10", time: "17:00", venue: "Stadium 1", score: null, status: "upcoming" },
      { id: 8, team1: "Academy C", team2: "Academy D", date: "2025-07-10", time: "19:00", venue: "Stadium 1", score: null, status: "upcoming" },
    ],
  },
  gaming: {
    "12": [
      { id: 9, team1: "Academy A", team2: "Academy B", date: "2025-07-09", time: "10:00", venue: "Gaming Room", score: { team1: 4, team2: 1 }, status: "completed" },
      { id: 10, team1: "Academy C", team2: "Academy D", date: "2025-07-09", time: "12:00", venue: "Gaming Room", score: null, status: "upcoming" },
    ],
    "14": [
      { id: 11, team1: "Academy A", team2: "Academy B", date: "2025-07-11", time: "10:00", venue: "Gaming Room", score: null, status: "upcoming" },
    ],
    "16": [
      { id: 12, team1: "Academy A", team2: "Academy B", date: "2025-07-11", time: "12:00", venue: "Gaming Room", score: null, status: "upcoming" },
    ],
  },
  skills: {
    "12": [
      { id: 13, team1: "Academy A", team2: "Academy B", date: "2025-07-11", time: "16:00", venue: "Training Ground", score: null, status: "upcoming" },
    ],
    "14": [
      { id: 14, team1: "Academy A", team2: "Academy B", date: "2025-07-12", time: "16:00", venue: "Training Ground", score: null, status: "upcoming" },
    ],
    "16": [
      { id: 15, team1: "Academy A", team2: "Academy B", date: "2025-07-12", time: "18:00", venue: "Training Ground", score: null, status: "upcoming" },
    ],
  }
};

const MatchItem = ({ match }: { match: any }) => {
  return (
    <div className="border rounded-md p-4 mb-4 hover:bg-gray-50 transition-colors">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full mr-2 bg-gray-400"></div>
          <span className="text-sm text-gray-600">Match #{match.id}</span>
        </div>
        <div>
          <span className="text-xs bg-gray-100 py-1 px-2 rounded">
            {match.date} - {match.time}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between py-4">
        <div className="text-center w-2/5">
          <div className="w-10 h-10 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center text-xs font-bold">
            {match.team1.slice(0, 2)}
          </div>
          <h3 className="font-medium">{match.team1}</h3>
          {match.status === "completed" && (
            <div className="text-xl font-bold mt-2">{match.score.team1}</div>
          )}
        </div>
        <div className="text-center w-1/5">
          {match.status === "completed" ? (
            <div className="text-sm text-gray-500">FT</div>
          ) : (
            <div className="text-sm">vs</div>
          )}
          <div className="text-xs text-gray-500 mt-1">{match.venue}</div>
        </div>
        <div className="text-center w-2/5">
          <div className="w-10 h-10 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center text-xs font-bold">
            {match.team2.slice(0, 2)}
          </div>
          <h3 className="font-medium">{match.team2}</h3>
          {match.status === "completed" && (
            <div className="text-xl font-bold mt-2">{match.score.team2}</div>
          )}
        </div>
      </div>
      {match.status === "upcoming" && (
        <div className="text-center text-xs text-gray-500 border-t pt-2 mt-2">
          <span className="inline-block px-2 py-1 bg-gray-100 rounded">Upcoming Match</span>
        </div>
      )}
    </div>
  );
};

const MatchSchedule = () => {
  const [selectedCompetition, setSelectedCompetition] = useState<Competition>("football");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup>("12");
  
  const handleCompetitionChange = (value: string) => {
    setSelectedCompetition(value as Competition);
  };
  
  const handleAgeGroupChange = (value: string) => {
    setSelectedAgeGroup(value as AgeGroup);
  };
  
  const filteredMatches = matchesData[selectedCompetition]?.[selectedAgeGroup] || [];
  
  return (
    <Card className="animate-fade-in">
      <CardHeader className="bg-gray-100 border-b">
        <CardTitle className="text-center rtl">جدول ونتائج المباريات</CardTitle>
        <p className="text-center text-gray-600">Match Schedule & Results</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium mb-1 rtl">البطولة</label>
            <Select defaultValue={selectedCompetition} onValueChange={handleCompetitionChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="football">{competitionNames.football.en}</SelectItem>
                <SelectItem value="gaming">{competitionNames.gaming.en}</SelectItem>
                <SelectItem value="skills">{competitionNames.skills.en}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 rtl">الفئة العمرية</label>
            <Select defaultValue={selectedAgeGroup} onValueChange={handleAgeGroupChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12">{ageGroupNames["12"].en}</SelectItem>
                <SelectItem value="14">{ageGroupNames["14"].en}</SelectItem>
                <SelectItem value="16">{ageGroupNames["16"].en}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div>
          <h3 className="font-medium mb-4">
            {competitionNames[selectedCompetition].en} - {ageGroupNames[selectedAgeGroup].en}
          </h3>
          
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match) => (
              <MatchItem key={match.id} match={match} />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No matches scheduled for this competition and age group
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MatchSchedule;
