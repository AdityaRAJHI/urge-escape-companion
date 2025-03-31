
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface JournalEntryItem {
  id: number;
  date: Date;
  content: string;
  mood: string;
}

export default function JournalEntry() {
  const [entryContent, setEntryContent] = useState("");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [date, setDate] = useState<Date>(new Date());
  const { toast } = useToast();
  
  // Mock previous journal entries
  const [pastEntries, setPastEntries] = useState<JournalEntryItem[]>([
    {
      id: 1,
      date: new Date(Date.now() - 86400000), // yesterday
      content: "Today was challenging but I managed to stay focused on my goals. I went for a long walk when I felt urges coming on.",
      mood: "good"
    },
    {
      id: 2,
      date: new Date(Date.now() - 86400000 * 3), // 3 days ago
      content: "I'm feeling stronger each day. Meditation has been a great help in controlling my thoughts.",
      mood: "great"
    }
  ]);
  
  const moodOptions = [
    { value: "great", label: "Great 😄", color: "bg-green-100 border-green-300 hover:bg-green-200" },
    { value: "good", label: "Good 🙂", color: "bg-blue-100 border-blue-300 hover:bg-blue-200" },
    { value: "okay", label: "Okay 😐", color: "bg-yellow-100 border-yellow-300 hover:bg-yellow-200" },
    { value: "bad", label: "Struggling 😔", color: "bg-orange-100 border-orange-300 hover:bg-orange-200" },
    { value: "awful", label: "Really Hard 😞", color: "bg-red-100 border-red-300 hover:bg-red-200" }
  ];
  
  const handleSaveEntry = () => {
    if (!entryContent.trim() || !selectedMood) {
      toast({
        title: "Missing information",
        description: "Please enter your journal text and select your mood.",
        variant: "destructive"
      });
      return;
    }
    
    const newEntry: JournalEntryItem = {
      id: Date.now(),
      date: new Date(),
      content: entryContent,
      mood: selectedMood
    };
    
    setPastEntries([newEntry, ...pastEntries]);
    setEntryContent("");
    setSelectedMood(null);
    
    toast({
      title: "Journal entry saved",
      description: "Your reflection has been saved successfully.",
    });
  };
  
  return (
    <div className="space-y-6">
      <Card className="card-hover bg-gradient-to-br from-white to-brand-softYellow/30">
        <CardHeader>
          <CardTitle>Daily Journal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              <div>
                <Label htmlFor="journal-entry">
                  How are you feeling today? What challenges did you face?
                </Label>
                <Textarea
                  id="journal-entry"
                  className="mt-2 min-h-[150px]"
                  placeholder="Write your thoughts here..."
                  value={entryContent}
                  onChange={(e) => setEntryContent(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label>How would you rate today's emotional state?</Label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {moodOptions.map((mood) => (
                    <button
                      key={mood.value}
                      type="button"
                      className={`p-2 rounded-md border text-sm ${mood.color} ${
                        selectedMood === mood.value 
                          ? "ring-2 ring-brand-purple" 
                          : ""
                      } transition-all`}
                      onClick={() => setSelectedMood(mood.value)}
                    >
                      {mood.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <Label className="block mb-2">Entry Date</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => newDate && setDate(newDate)}
                className="rounded-md border"
                disabled={(date) => date > new Date() || date < new Date('2000-01-01')}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveEntry} className="w-full">Save Journal Entry</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Past Entries</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>
            
            <TabsContent value="list">
              <div className="space-y-4">
                {pastEntries.length > 0 ? (
                  pastEntries.map((entry) => (
                    <Card key={entry.id} className="bg-white">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">
                            {entry.date.toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </h3>
                          <Badge 
                            className={getJournalMoodBadgeClass(entry.mood)} 
                            variant="secondary"
                          >
                            {entry.mood.charAt(0).toUpperCase() + entry.mood.slice(1)}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-700">{entry.content}</p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center p-6 text-gray-500">
                    No journal entries yet. Start reflecting on your day!
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="calendar">
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => newDate && setDate(newDate)}
                  className="rounded-md border"
                  modifiers={{
                    hasEntry: pastEntries.map(entry => entry.date),
                  }}
                  modifiersClassNames={{
                    hasEntry: "bg-brand-lightPurple text-brand-deepPurple font-semibold",
                  }}
                />
              </div>
              <div className="mt-4 flex items-center">
                <div className="w-4 h-4 bg-brand-lightPurple rounded mr-2"></div>
                <span className="text-sm text-gray-600">Days with journal entries</span>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

// Helper function to get the badge class based on mood
function getJournalMoodBadgeClass(mood: string): string {
  switch(mood) {
    case 'great':
      return 'bg-green-100 text-green-800 hover:bg-green-100';
    case 'good':
      return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
    case 'okay':
      return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
    case 'bad':
      return 'bg-orange-100 text-orange-800 hover:bg-orange-100';
    case 'awful':
      return 'bg-red-100 text-red-800 hover:bg-red-100';
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
  }
}

// Import the Badge component
import { Badge } from "@/components/ui/badge";
