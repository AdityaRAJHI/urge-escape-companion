
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Milestone {
  id: number;
  day: number;
  title: string;
  description: string;
  completed: boolean;
  rewards: string[];
}

export default function MilestonesTimeline() {
  // Mock milestones data - in a real app, this would come from a database
  const milestones: Milestone[] = [
    {
      id: 1,
      day: 1,
      title: "Day 1 Complete",
      description: "You've taken the first step on your journey to freedom!",
      completed: true,
      rewards: ["First Day badge", "+10 points"]
    },
    {
      id: 2,
      day: 7,
      title: "One Week Milestone",
      description: "A full week of progress. Your brain is already starting to heal!",
      completed: true,
      rewards: ["One Week Strong badge", "+50 points", "Unlock daily meditation"]
    },
    {
      id: 3,
      day: 14,
      title: "Two Week Warrior",
      description: "Two weeks clean! Your dopamine levels are beginning to normalize.",
      completed: true,
      rewards: ["Two Week Warrior badge", "+100 points", "Unlock forum access"]
    },
    {
      id: 4,
      day: 30,
      title: "30 Day Champion",
      description: "A whole month! Your brain is making significant recovery progress.",
      completed: false,
      rewards: ["30 Day Champion badge", "+200 points", "Premium content access"]
    },
    {
      id: 5,
      day: 90,
      title: "90 Day Reboot",
      description: "You've completed the full reboot process! Your brain has significantly recovered.",
      completed: false,
      rewards: ["90 Day Reboot badge", "+500 points", "Mentor status", "Custom profile flair"]
    },
    {
      id: 6,
      day: 180,
      title: "6 Month Legend",
      description: "Half a year of freedom! You've made lasting changes in your life.",
      completed: false,
      rewards: ["6 Month Legend badge", "+1000 points", "Special app theme"]
    },
    {
      id: 7,
      day: 365,
      title: "1 Year Transcendence",
      description: "A full year of freedom! Your old habits are now replaced with healthy ones.",
      completed: false,
      rewards: ["1 Year Transcendence badge", "+2000 points", "Life Story feature unlock"]
    }
  ];
  
  return (
    <Card className="bg-gradient-to-br from-white to-brand-softPurple/20">
      <CardHeader>
        <CardTitle>Your Journey Milestones</CardTitle>
        <CardDescription>Track your progress through key recovery milestones</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-6 pb-6">
          {/* Timeline line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          {milestones.map((milestone, index) => (
            <div key={milestone.id} className={cn(
              "relative pl-10 transition-all duration-300",
              milestone.completed ? "opacity-100" : "opacity-70"
            )}>
              {/* Timeline dot */}
              <div className="absolute left-0 top-1">
                {milestone.completed ? (
                  <CheckCircle className="h-8 w-8 text-brand-purple" />
                ) : (
                  <Circle className="h-8 w-8 text-gray-300" />
                )}
              </div>
              
              <Card className={cn(
                "transition-all duration-500",
                milestone.completed 
                  ? "border-brand-purple bg-white" 
                  : "bg-gray-50",
                "hover:shadow-md"
              )}>
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={cn(
                          "text-sm font-medium px-2 py-0.5 rounded-full",
                          milestone.completed 
                            ? "bg-brand-purple text-white" 
                            : "bg-gray-200 text-gray-700"
                        )}>
                          Day {milestone.day}
                        </span>
                        <h3 className="font-medium">{milestone.title}</h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{milestone.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-2">
                        {milestone.rewards.map((reward, i) => (
                          <span 
                            key={i} 
                            className="inline-block text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                          >
                            {reward}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {milestone.completed ? (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-brand-purple border-brand-purple hover:bg-brand-lightPurple"
                      >
                        View Details
                      </Button>
                    ) : (
                      <div className="text-sm text-muted-foreground">
                        {milestone.day - 14} days remaining
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-3">
            Keep going! Your next milestone is just {30 - 14} days away.
          </p>
          <Button className="bg-gradient-to-r from-brand-purple to-brand-deepPurple">
            View All Achievements
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
