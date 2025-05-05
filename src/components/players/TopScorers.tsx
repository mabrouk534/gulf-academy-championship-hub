
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Flag } from "lucide-react";

type AgeGroup = "12" | "14" | "16";

const ageGroupNames = {
  "12": { ar: "فئة 12 سنة", en: "U-12" },
  "14": { ar: "فئة 14 سنة", en: "U-14" },
  "16": { ar: "فئة 16 سنة", en: "U-16" }
};

const scorersData = {
  "12": [
    { position: 1, player: "Ahmad Khalil", team: "Academy A", goals: 2, nationality: "Saudi Arabia" },
    { position: 2, player: "Mohammed Ali", team: "Academy B", goals: 1, nationality: "UAE" },
    { position: 3, player: "Salem Al-Dawsari", team: "Academy A", goals: 0, nationality: "Saudi Arabia" },
  ],
  "14": [
    { position: 1, player: "Fahad Ahmed", team: "Academy B", goals: 2, nationality: "Qatar" },
    { position: 2, player: "Khalid Mohammed", team: "Academy B", goals: 1, nationality: "Kuwait" },
    { position: 3, player: "Abdullah Rahman", team: "Academy A", goals: 0, nationality: "Bahrain" },
  ],
  "16": [
    { position: 1, player: "Saif Al-Shamsi", team: "Academy C", goals: 0, nationality: "UAE" },
    { position: 2, player: "Majed Al-Dawsari", team: "Academy D", goals: 0, nationality: "Saudi Arabia" },
    { position: 3, player: "Jassim Al-Harbi", team: "Academy A", goals: 0, nationality: "Qatar" },
  ]
};

const TopScorers = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup>("12");
  
  const handleAgeGroupChange = (value: string) => {
    setSelectedAgeGroup(value as AgeGroup);
  };
  
  const scorers = scorersData[selectedAgeGroup] || [];
  
  return (
    <Card className="animate-fade-in">
      <CardHeader className="bg-gray-100 border-b">
        <div className="flex items-center justify-center mb-2">
          <Flag className="h-5 w-5 mr-2 text-tournament-blue" />
          <CardTitle className="rtl">كشف الأهداف</CardTitle>
        </div>
        <p className="text-center text-gray-600">Top Scorers</p>
        <div className="mt-4">
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
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-12 text-center">#</TableHead>
                <TableHead>Player</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Nationality</TableHead>
                <TableHead className="text-center">Goals</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scorers.length > 0 ? (
                scorers.map((scorer) => (
                  <TableRow key={scorer.position} className={scorer.position === 1 ? "bg-yellow-50" : ""}>
                    <TableCell className="text-center font-medium">{scorer.position}</TableCell>
                    <TableCell>{scorer.player}</TableCell>
                    <TableCell>{scorer.team}</TableCell>
                    <TableCell>{scorer.nationality}</TableCell>
                    <TableCell className="text-center font-bold">{scorer.goals}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    No scorer data available
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

export default TopScorers;
