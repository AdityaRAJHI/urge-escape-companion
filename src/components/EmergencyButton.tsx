
import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export default function EmergencyButton() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  const handleEmergencyClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    toast({
      title: "Great job!",
      description: "You've made it through the urge. Stay strong!",
    });
  };

  return (
    <>
      <button 
        onClick={handleEmergencyClick}
        className="emergency-button w-full py-4 flex items-center justify-center animate-pulse-soft"
      >
        <AlertCircle className="h-6 w-6 mr-2" />
        <span className="text-lg">Get Help Now</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Stay Strong!</DialogTitle>
            <DialogDescription className="text-center">
              Take a deep breath. This feeling is temporary.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="bg-brand-softGreen rounded-lg p-4">
              <h3 className="font-medium mb-2">Take 5 Deep Breaths</h3>
              <p className="text-sm">Breathe in for 4 seconds, hold for 4 seconds, exhale for 4 seconds.</p>
            </div>
            
            <div className="bg-brand-softYellow rounded-lg p-4">
              <h3 className="font-medium mb-2">Change Your Environment</h3>
              <p className="text-sm">Go for a quick walk, do 10 push-ups, or take a cold shower.</p>
            </div>
            
            <div className="rounded-lg p-4 bg-brand-lightPurple">
              <h3 className="font-medium mb-2">Remember Your "Why"</h3>
              <p className="text-sm">You're working toward better health, relationships, and self-control.</p>
            </div>
          </div>
          
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="sm:w-1/2"
            >
              I Need More Help
            </Button>
            <Button 
              onClick={handleClose}
              className="bg-brand-purple hover:bg-brand-deepPurple sm:w-1/2"
            >
              I'm Feeling Better
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
