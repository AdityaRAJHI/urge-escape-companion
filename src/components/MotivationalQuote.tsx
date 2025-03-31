
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

// Sample quotes for the application
const quotes = [
  "The man who moves a mountain begins by carrying away small stones.",
  "Every day it gets a little easier. But you have to do it every day. That's the hard part. But it does get easier.",
  "You don't have to be great to start, but you have to start to be great.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "It always seems impossible until it's done.",
  "The only person you are destined to become is the person you decide to be.",
  "Believe you can and you're halfway there.",
  "Change your thoughts and you change your world.",
  "What you stay focused on will grow.",
  "You are never too old to set another goal or to dream a new dream.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Your life does not get better by chance, it gets better by change.",
  "The only way to do great work is to love what you do.",
  "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it."
];

export default function MotivationalQuote() {
  const [quote, setQuote] = useState("");
  
  useEffect(() => {
    // Select a random quote from the array
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);
  
  return (
    <Card className="card-hover">
      <CardContent className="p-6 flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-brand-lightPurple flex items-center justify-center text-brand-purple">
            <QuoteIcon className="h-5 w-5" />
          </div>
        </div>
        <div>
          <p className="italic text-gray-700">{quote}</p>
          <p className="text-sm text-gray-500 mt-2">Daily Inspiration</p>
        </div>
      </CardContent>
    </Card>
  );
}
