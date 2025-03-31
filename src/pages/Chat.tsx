
import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send, User, Bot } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Mock responses from the AI to simulate conversation
const botResponses = [
  "Remember that urges are temporary and will pass. Try taking a deep breath and focusing on something else for a few minutes.",
  "You're doing great! Every day you resist is a victory. What specific triggers are you struggling with today?",
  "Consider going for a quick walk or doing some push-ups to redirect that energy into something positive.",
  "You've already made progress by seeking support. That shows real commitment to your goals.",
  "When you feel an urge, try the HALT method - ask yourself if you're Hungry, Angry, Lonely, or Tired. Often addressing these needs can help reduce urges.",
  "Try visualizing your future self thanking you for the decision you're making right now.",
  "Remember your reasons for starting this journey. What positive changes have you noticed so far?",
  "It's completely normal to struggle sometimes. The fact that you're here showing up for yourself proves your strength.",
  "Have you tried meditation? Even 5 minutes of mindfulness can help you reconnect with your goals.",
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your support assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    
    // Simulate bot typing delay
    setTimeout(() => {
      // Get random response from the list
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <Layout>
      <div className="space-y-8 h-[calc(100vh-160px)] flex flex-col">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Chat Support</h1>
          <p className="text-muted-foreground">Get advice, motivation, and answers to your questions.</p>
        </div>
        
        <Card className="flex-1 flex flex-col">
          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`flex max-w-[80%] md:max-w-[70%] ${
                      message.sender === "user" 
                        ? "flex-row-reverse" 
                        : "flex-row"
                    }`}
                  >
                    <div 
                      className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-2 ${
                        message.sender === "user" 
                          ? "bg-brand-purple ml-2" 
                          : "bg-gray-200"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-gray-600" />
                      )}
                    </div>
                    
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-brand-purple text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === "user" ? "text-white/70" : "text-gray-500"
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} className="bg-brand-purple hover:bg-brand-deepPurple">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Chat;
