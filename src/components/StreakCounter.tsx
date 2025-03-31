
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Trophy, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function StreakCounter() {
  // For demo purposes - in a real app, this would come from a database
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [goalDays, setGoalDays] = useState(30);
  const { toast } = useToast();

  // Mock data initialization - in a real app, we would fetch this from API/storage
  useEffect(() => {
    // Simulate loading data
    const mockStreak = Math.floor(Math.random() * 15) + 1; // Random streak between 1-15
    const mockBestStreak = mockStreak + Math.floor(Math.random() * 10); // Best streak is current + random 0-10
    
    setTimeout(() => {
      setStreak(mockStreak);
      setBestStreak(mockBestStreak);
      
      // Show welcome toast
      toast({
        title: "Welcome back!",
        description: `You're on day ${mockStreak} of your journey. Keep going!`,
      });
    }, 1000);
  }, [toast]);
  
  // Calculate progress percentage
  const progress = Math.min(100, (streak / goalDays) * 100);
  
  return (
    <div className="streak-card p-6">
      <div className="absolute top-0 right-0 opacity-10">
        <TrendingUp size={120} />
      </div>
      
      <div className="flex flex-col gap-4 z-10 relative">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Current Streak</h2>
          <span className="flex items-center text-sm">
            <Trophy className="h-4 w-4 mr-1" />
            Best: {bestStreak} days
          </span>
        </div>
        
        <div className="flex items-baseline">
          <span className="text-5xl font-bold">{streak}</span>
          <span className="text-xl ml-2">days</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress to {goalDays} days</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-white/20" />
        </div>
      </div>
    </div>
  );
}
