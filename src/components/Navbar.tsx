
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-sm border-b border-border">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2 md:hidden">
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-deepPurple">
            Urge Escape
          </span>
        </div>
        
        <div className="flex-1" />
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-brand-purple text-white">UE</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
