
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const scheduleData = [
  {
    day: "الاثنين",
    dayEn: "Monday",
    date: "07/07/2025",
    activities: [
      { time: "صلاة الفجر 4:15 ص", timeEn: "Dawn Prayer 4:15 AM" },
      { time: "وجبة الإفطار", timeEn: "Breakfast" },
      { time: "راحة", timeEn: "Rest" },
      { time: "تدريب في الصالة الرياضية ( من 9:45 ص إلى 10:30 ص )", timeEn: "Gym Training (9:45 AM - 10:30 AM)" },
      { time: "مباراة الألعاب الإلكترونية", timeEn: "Electronic Games Match" },
      { time: "صلاة الظهر 12:30 ظ", timeEn: "Noon Prayer 12:30 PM" },
      { time: "وجبة الغداء", timeEn: "Lunch" },
      { time: "راحة", timeEn: "Rest" },
      { time: "صلاة العصر 3:50 م", timeEn: "Afternoon Prayer 3:50 PM" },
      { time: "تدريبات فنية لفئة 14 سنة", timeEn: "Technical Training U-14" },
      { time: "صلاة المغرب والعشاء", timeEn: "Evening Prayers" },
      { time: "وجبة العشاء", timeEn: "Dinner" },
    ]
  },
  {
    day: "الثلاثاء",
    dayEn: "Tuesday",
    date: "08/07/2025",
    activities: [
      { time: "صلاة الفجر 4:15 ص", timeEn: "Dawn Prayer 4:15 AM" },
      { time: "وجبة الإفطار", timeEn: "Breakfast" },
      { time: "تجارب فنية للمبتدئين", timeEn: "Technical Trials for Beginners" },
      { time: "صلاة الظهر 12:30 ظ", timeEn: "Noon Prayer 12:30 PM" },
      { time: "وجبة الغداء", timeEn: "Lunch" },
      { time: "راحة", timeEn: "Rest" },
      { time: "صلاة العصر 3:50 م", timeEn: "Afternoon Prayer 3:50 PM" },
      { time: "تدريبات فنية", timeEn: "Technical Training" },
      { time: "وجبة العشاء", timeEn: "Dinner" },
    ]
  },
  {
    day: "الأربعاء",
    dayEn: "Wednesday",
    date: "09/07/2025",
    activities: [
      { time: "صلاة الفجر 4:15 ص", timeEn: "Dawn Prayer 4:15 AM" },
      { time: "وجبة الإفطار", timeEn: "Breakfast" },
      { time: "راحة", timeEn: "Rest" },
      { time: "صلاة الظهر 12:30 ظ", timeEn: "Noon Prayer 12:30 PM" },
      { time: "وجبة الغداء", timeEn: "Lunch" },
      { time: "راحة", timeEn: "Rest" },
      { time: "صلاة العصر 3:50 م", timeEn: "Afternoon Prayer 3:50 PM" },
      { time: "تدريبات فنية", timeEn: "Technical Training" },
      { time: "وجبة العشاء", timeEn: "Dinner" },
    ]
  },
  {
    day: "الخميس",
    dayEn: "Thursday",
    date: "10/07/2025",
    activities: [
      { time: "صلاة الفجر 4:15 ص", timeEn: "Dawn Prayer 4:15 AM" },
      { time: "وجبة الإفطار", timeEn: "Breakfast" },
      { time: "راحة", timeEn: "Rest" },
      { time: "صلاة الظهر 12:30 ظ", timeEn: "Noon Prayer 12:30 PM" },
      { time: "وجبة الغداء", timeEn: "Lunch" },
      { time: "راحة", timeEn: "Rest" },
      { time: "صلاة العصر 3:50 م", timeEn: "Afternoon Prayer 3:50 PM" },
      { time: "تدريبات فنية", timeEn: "Technical Training" },
      { time: "وجبة العشاء", timeEn: "Dinner" },
    ]
  }
];

const DaySchedule = ({ day }: { day: any }) => {
  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium rtl">{day.day}</h3>
        <p className="text-sm text-gray-600">{day.dayEn} - {day.date}</p>
      </div>
      <div className="space-y-3">
        {day.activities.map((activity, index) => (
          <div
            key={index}
            className="border-l-4 border-tournament-blue pl-4 py-3 bg-gray-50 rounded-r-md hover:bg-gray-100 transition-colors"
          >
            <p className="text-sm font-medium rtl">{activity.time}</p>
            <p className="text-xs text-gray-600">{activity.timeEn}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CampSchedule = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader className="bg-gray-100 border-b">
        <CardTitle className="text-center rtl">برنامج معسكر أكاديمية أولية لكرة القدم - ٢٠٢٥</CardTitle>
        <p className="text-center text-gray-600">Football Academy Camp Schedule - 2025</p>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue={scheduleData[0].dayEn.toLowerCase()} className="w-full">
          <TabsList className="w-full rounded-none justify-start overflow-x-auto">
            {scheduleData.map((day) => (
              <TabsTrigger 
                key={day.dayEn} 
                value={day.dayEn.toLowerCase()}
                className="flex-shrink-0"
              >
                <span className="rtl hidden md:block">{day.day}</span>
                <span className="rtl md:hidden">{day.dayEn}</span>
                <span className="text-xs text-gray-500 ml-2">({day.date})</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {scheduleData.map((day) => (
            <TabsContent key={day.dayEn} value={day.dayEn.toLowerCase()} className="p-6">
              <DaySchedule day={day} />
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CampSchedule;
