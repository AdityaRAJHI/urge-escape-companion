
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Circle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const weekGoals = [
  { id: 1, day: "Mon", task: "Meditation", completed: true },
  { id: 2, day: "Tue", task: "Journal entry", completed: true },
  { id: 3, day: "Wed", task: "Exercise", completed: false },
  { id: 4, day: "Thu", task: "Read article", completed: false },
  { id: 5, day: "Fri", task: "Cold shower", completed: false },
  { id: 6, day: "Sat", task: "Hobby time", completed: false },
  { id: 7, day: "Sun", task: "Reflection", completed: false },
];

export default function WeeklyGoals() {
  const [goals, setGoals] = useState(weekGoals);
  
  const toggleGoal = (id: number) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };
  
  return (
    <Card className="transition-all duration-300 hover:shadow-md bg-gradient-to-br from-white to-brand-lightPurple/10">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Weekly Goals</span>
          <span className="text-sm font-normal text-gray-500">
            {goals.filter(g => g.completed).length}/{goals.length} completed
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {goals.map((goal) => (
            <div 
              key={goal.id}
              className={cn(
                "flex items-center justify-between p-2 rounded-md transition-all duration-300 cursor-pointer",
                goal.completed ? "bg-brand-softGreen/40" : "hover:bg-gray-50"
              )}
              onClick={() => toggleGoal(goal.id)}
            >
              <div className="flex items-center">
                <div className="w-8 font-medium text-gray-500">{goal.day}</div>
                <div className="ml-2">{goal.task}</div>
              </div>
              <div className="transition-transform duration-300 hover:scale-110">
                {goal.completed ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-300" />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
