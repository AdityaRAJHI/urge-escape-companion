
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

type Mood = "great" | "good" | "okay" | "bad" | "awful";

const moods: Record<Mood, { emoji: string; label: string; color: string }> = {
  great: { emoji: "😄", label: "Great", color: "bg-green-100 hover:bg-green-200" },
  good: { emoji: "🙂", label: "Good", color: "bg-blue-100 hover:bg-blue-200" },
  okay: { emoji: "😐", label: "Okay", color: "bg-yellow-100 hover:bg-yellow-200" },
  bad: { emoji: "😔", label: "Bad", color: "bg-orange-100 hover:bg-orange-200" },
  awful: { emoji: "😞", label: "Awful", color: "bg-red-100 hover:bg-red-200" }
};

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const { toast } = useToast();
  
  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
    toast({
      title: "Mood Recorded",
      description: `You're feeling ${moods[mood].label.toLowerCase()} today.`
    });
  };
  
  return (
    <Card className="transition-all duration-300 hover:shadow-md bg-gradient-to-br from-white to-brand-softYellow/20">
      <CardHeader>
        <CardTitle>How are you feeling today?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          {(Object.keys(moods) as Mood[]).map((mood) => (
            <button
              key={mood}
              onClick={() => handleMoodSelect(mood)}
              className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-300 transform ${
                selectedMood === mood ? "ring-2 ring-brand-purple scale-110" : "hover:scale-105"
              } ${moods[mood].color}`}
            >
              <span className="text-2xl mb-1">{moods[mood].emoji}</span>
              <span className="text-xs font-medium">{moods[mood].label}</span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
