
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Trophy, Award, TrendingUp, Star, Medal, Target, Zap, Gem } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JournalEntry from "@/components/JournalEntry";
import MilestonesTimeline from "@/components/MilestonesTimeline";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Progress = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();
  
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
    {
      title: "Mental Clarity",
      description: "Completed 3 mindfulness sessions",
      icon: <Zap className="h-6 w-6" />,
      earned: true,
    },
    {
      title: "Knowledge Seeker",
      description: "Read 5 educational resources",
      icon: <Target className="h-6 w-6" />,
      earned: false,
    },
    {
      title: "Journaling Master",
      description: "Completed 10 journal entries",
      icon: <Medal className="h-6 w-6" />,
      earned: false,
    },
    {
      title: "Diamond Resolve",
      description: "Reached a 30-day streak",
      icon: <Gem className="h-6 w-6" />,
      earned: false,
    },
  ];
  
  const handleAchievementClick = (achievement: typeof achievements[0]) => {
    toast({
      title: achievement.earned ? "Achievement Unlocked!" : "Achievement Locked",
      description: achievement.earned 
        ? `You've earned the "${achievement.title}" badge. Great job!` 
        : `Keep going to unlock "${achievement.title}".`,
    });
  };
  
  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Progress</h1>
          <p className="text-muted-foreground">Track your journey and celebrate your achievements.</p>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="journal">Journal</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="card-hover bg-gradient-to-br from-white to-brand-softGreen/30">
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
              
              <Card className="card-hover bg-gradient-to-br from-white to-brand-lightPurple/30">
                <CardHeader>
                  <CardTitle>Statistics</CardTitle>
                  <CardDescription>Your journey in numbers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-brand-lightPurple rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <p className="text-sm text-brand-deepPurple font-medium">Current Streak</p>
                      <p className="text-3xl font-bold">14 days</p>
                    </div>
                    <div className="bg-brand-softYellow rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <p className="text-sm text-amber-700 font-medium">Longest Streak</p>
                      <p className="text-3xl font-bold">14 days</p>
                    </div>
                    <div className="bg-brand-softGreen rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <p className="text-sm text-green-700 font-medium">Total Clean Days</p>
                      <p className="text-3xl font-bold">24 days</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <p className="text-sm text-gray-700 font-medium">Success Rate</p>
                      <p className="text-3xl font-bold">80%</p>
                    </div>
                  </div>
                  
                  <Card className="overflow-hidden bg-gradient-to-r from-brand-purple to-brand-deepPurple text-white animate-pulse-soft">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">Today's Tip</h3>
                          <p className="text-sm opacity-90 mt-1">Try a short meditation when you feel an urge coming on.</p>
                        </div>
                        <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0">
                          Try Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
            
            <Card className="card-hover bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <CardTitle>Weekly Progress</CardTitle>
                <CardDescription>How you've been doing this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 flex items-center justify-center">
                  <div className="grid grid-cols-7 gap-2 w-full">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                      <div key={day} className="flex flex-col items-center">
                        <span className="text-sm font-medium mb-2">{day}</span>
                        <div 
                          className={`w-full h-32 rounded-md transition-all ${
                            i < 5 ? "bg-green-100 border-green-300" : "bg-gray-100 border-gray-300"
                          } border relative ${i < 2 ? "h-32" : i < 4 ? "h-24" : i < 5 ? "h-28" : "h-16"}`}
                        >
                          {i < 5 && (
                            <div className="absolute top-2 left-0 right-0 flex justify-center">
                              <Check className="h-4 w-4 text-green-600" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="achievements">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className={`card-hover cursor-pointer transition-all ${!achievement.earned ? "opacity-60" : ""}`}
                  onClick={() => handleAchievementClick(achievement)}
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className={`mb-4 p-4 rounded-full ${
                      achievement.earned 
                        ? "bg-gradient-to-br from-brand-purple to-brand-deepPurple text-white" 
                        : "bg-gray-200 text-gray-500"
                    }`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{achievement.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">{achievement.description}</p>
                      {achievement.earned ? (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Earned</Badge>
                      ) : (
                        <Badge variant="outline">In Progress</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="journal">
            <JournalEntry />
          </TabsContent>
          
          <TabsContent value="milestones">
            <MilestonesTimeline />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Progress;

// Component for the check icon in the weekly progress
function Check(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
