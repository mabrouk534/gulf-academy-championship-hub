
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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

// Sample standings data
const standingsData = {
  football: {
    "12": [
      { position: 1, team: "Academy A", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 2, goalsAgainst: 1, goalDifference: 1, points: 3 },
      { position: 2, team: "Academy C", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { position: 3, team: "Academy D", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { position: 4, team: "Academy B", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 2, goalDifference: -1, points: 0 },
    ],
    "14": [
      { position: 1, team: "Academy B", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 3, goalsAgainst: 0, goalDifference: 3, points: 3 },
      { position: 2, team: "Academy C", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { position: 3, team: "Academy D", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { position: 4, team: "Academy A", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 3, goalDifference: -3, points: 0 },
    ],
    "16": [
      { position: 1, team: "Academy A", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { position: 2, team: "Academy B", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { position: 3, team: "Academy C", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { position: 4, team: "Academy D", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ]
  },
  gaming: {
    "12": [
      { position: 1, team: "Academy A", played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 4, goalsAgainst: 1, goalDifference: 3, points: 3 },
      { position: 2, team: "Academy C", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { position: 3, team: "Academy D", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { position: 4, team: "Academy B", played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 4, goalDifference: -3, points: 0 },
    ],
    "14": [
      { position: 1, team: "Academy A", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { position: 2, team: "Academy B", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ],
    "16": [
      { position: 1, team: "Academy A", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { position: 2, team: "Academy B", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ]
  },
  skills: {
    "12": [
      { position: 1, team: "Academy A", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 2, team: "Academy B", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
    ],
    "14": [
      { position: 1, team: "Academy A", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 2, team: "Academy B", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
    ],
    "16": [
      { position: 1, team: "Academy A", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 2, team: "Academy B", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
    ]
  }
};

const StandingsTable = () => {
  const [selectedCompetition, setSelectedCompetition] = useState<Competition>("football");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup>("12");
  
  const handleCompetitionChange = (value: string) => {
    setSelectedCompetition(value as Competition);
  };
  
  const handleAgeGroupChange = (value: string) => {
    setSelectedAgeGroup(value as AgeGroup);
  };
  
  const standings = standingsData[selectedCompetition]?.[selectedAgeGroup] || [];
  const isSkills = selectedCompetition === "skills";
  
  return (
    <Card className="animate-fade-in">
      <CardHeader className="bg-gray-100 border-b">
        <CardTitle className="text-center rtl">جدول الترتيب</CardTitle>
        <p className="text-center text-gray-600">Competition Standings</p>
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
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-12 text-center">#</TableHead>
                <TableHead>Team</TableHead>
                <TableHead className="text-center">P</TableHead>
                <TableHead className="text-center">W</TableHead>
                <TableHead className="text-center">D</TableHead>
                <TableHead className="text-center">L</TableHead>
                {!isSkills && (
                  <>
                    <TableHead className="text-center">GF</TableHead>
                    <TableHead className="text-center">GA</TableHead>
                    <TableHead className="text-center">GD</TableHead>
                  </>
                )}
                <TableHead className="text-center">PTS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {standings.length > 0 ? (
                standings.map((team) => (
                  <TableRow key={team.position} className={team.position === 1 ? "bg-green-50" : ""}>
                    <TableCell className="text-center font-medium">{team.position}</TableCell>
                    <TableCell>{team.team}</TableCell>
                    <TableCell className="text-center">{team.played}</TableCell>
                    <TableCell className="text-center">{team.won}</TableCell>
                    <TableCell className="text-center">{team.drawn}</TableCell>
                    <TableCell className="text-center">{team.lost}</TableCell>
                    {!isSkills && (
                      <>
                        <TableCell className="text-center">{team.goalsFor}</TableCell>
                        <TableCell className="text-center">{team.goalsAgainst}</TableCell>
                        <TableCell className="text-center">
                          {team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}
                        </TableCell>
                      </>
                    )}
                    <TableCell className="text-center font-bold">{team.points}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={isSkills ? 7 : 10} className="text-center py-8">
                    No standings data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default StandingsTable;
