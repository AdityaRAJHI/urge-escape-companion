
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Trophy, Award, TrendingUp, Star } from "lucide-react";
import { useState } from "react";

const Progress = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Mock data for the calendar - in a real app, this would come from a database
  const successfulDays = [
    new Date(2023, 6, 3),
    new Date(2023, 6, 4),
    new Date(2023, 6, 5),
    new Date(2023, 6, 7),
    new Date(2023, 6, 8),
    new Date(2023, 6, 10),
    new Date(2023, 6, 11),
    new Date(2023, 6, 12),
    new Date(2023, 6, 13),
    new Date(2023, 6, 14),
  ];
  
  const achievements = [
    {
      title: "First Day",
      description: "Completed your first day successfully",
      icon: <Star className="h-6 w-6" />,
      earned: true,
    },
    {
      title: "One Week Strong",
      description: "Maintained a 7-day streak",
      icon: <Award className="h-6 w-6" />,
      earned: true,
    },
    {
      title: "Double Digits",
      description: "Reached a 10-day streak",
      icon: <Trophy className="h-6 w-6" />,
      earned: true,
    },
    {
      title: "Two Week Warrior",
      description: "Maintained a 14-day streak",
      icon: <TrendingUp className="h-6 w-6" />,
      earned: false,
    },
  ];
  
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Progress</h1>
          <p className="text-muted-foreground">Track your journey and celebrate your achievements.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
              <CardDescription>Track your successful days over time</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                modifiers={{
                  success: successfulDays,
                }}
                modifiersClassNames={{
                  success: "bg-green-100 text-green-800 font-semibold",
                }}
              />
              <div className="mt-4 flex items-center">
                <div className="w-4 h-4 bg-green-100 rounded mr-2"></div>
                <span className="text-sm text-gray-600">Successful days</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
              <CardDescription>Your journey in numbers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-lightPurple rounded-lg p-4">
                  <p className="text-sm text-brand-deepPurple font-medium">Current Streak</p>
                  <p className="text-3xl font-bold">14 days</p>
                </div>
                <div className="bg-brand-softYellow rounded-lg p-4">
                  <p className="text-sm text-amber-700 font-medium">Longest Streak</p>
                  <p className="text-3xl font-bold">14 days</p>
                </div>
                <div className="bg-brand-softGreen rounded-lg p-4">
                  <p className="text-sm text-green-700 font-medium">Total Clean Days</p>
                  <p className="text-3xl font-bold">24 days</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-medium">Success Rate</p>
                  <p className="text-3xl font-bold">80%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Achievements</h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`card-hover ${!achievement.earned ? "opacity-60" : ""}`}>
                <CardContent className="p-6 flex items-center">
                  <div className={`mr-4 p-4 rounded-full ${achievement.earned ? "bg-brand-purple text-white" : "bg-gray-200 text-gray-500"}`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <h3 className="font-medium">{achievement.title}</h3>
                      {achievement.earned && (
                        <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Earned</Badge>
                      )}
                      {!achievement.earned && (
                        <Badge variant="outline" className="ml-2">In Progress</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Progress;
