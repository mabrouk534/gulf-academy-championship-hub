
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ClipboardList } from "lucide-react";

type AgeGroup = "12" | "14" | "16";

const ageGroupNames = {
  "12": { ar: "فئة 12 سنة", en: "U-12" },
  "14": { ar: "فئة 14 سنة", en: "U-14" },
  "16": { ar: "فئة 16 سنة", en: "U-16" }
};

const warningsData = {
  "12": [
    { player: "Ahmad Khalil", team: "Academy A", yellowCards: 1, redCards: 0, matchId: 1, date: "2025-07-09" },
    { player: "Mohammed Ali", team: "Academy B", yellowCards: 1, redCards: 0, matchId: 1, date: "2025-07-09" },
  ],
  "14": [
    { player: "Fahad Ahmed", team: "Academy B", yellowCards: 0, redCards: 0, matchId: 5, date: "2025-07-09" },
  ],
  "16": []
};

const WarningsTable = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup>("12");
  
  const handleAgeGroupChange = (value: string) => {
    setSelectedAgeGroup(value as AgeGroup);
  };
  
  const warnings = warningsData[selectedAgeGroup] || [];
  
  return (
    <Card className="animate-fade-in">
      <CardHeader className="bg-gray-100 border-b">
        <div className="flex items-center justify-center mb-2">
          <ClipboardList className="h-5 w-5 mr-2 text-tournament-blue" />
          <CardTitle className="rtl">كشف الإنذارات</CardTitle>
        </div>
        <p className="text-center text-gray-600">Disciplinary Record</p>
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
                <TableHead>Player</TableHead>
                <TableHead>Team</TableHead>
                <TableHead className="text-center">Yellow Cards</TableHead>
                <TableHead className="text-center">Red Cards</TableHead>
                <TableHead className="text-center">Match</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {warnings.length > 0 ? (
                warnings.map((warning, index) => (
                  <TableRow key={index}>
                    <TableCell>{warning.player}</TableCell>
                    <TableCell>{warning.team}</TableCell>
                    <TableCell className="text-center">
                      {warning.yellowCards > 0 && (
                        <div className="w-5 h-7 bg-yellow-400 mx-auto"></div>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {warning.redCards > 0 && (
                        <div className="w-5 h-7 bg-red-600 mx-auto"></div>
                      )}
                    </TableCell>
                    <TableCell className="text-center">#{warning.matchId}</TableCell>
                    <TableCell>{warning.date}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    No disciplinary records available
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

export default WarningsTable;
