
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type ThemeColor = "purple" | "blue" | "green" | "amber" | "red" | "pink";

const themes: Record<ThemeColor, { name: string, color: string, className: string }> = {
  purple: { 
    name: "Purple", 
    color: "#9b87f5", 
    className: "bg-gradient-to-r from-purple-400 to-purple-600"
  },
  blue: { 
    name: "Blue", 
    color: "#33C3F0", 
    className: "bg-gradient-to-r from-blue-400 to-blue-600"
  },
  green: { 
    name: "Green", 
    color: "#10b981", 
    className: "bg-gradient-to-r from-green-400 to-green-600"
  },
  amber: { 
    name: "Amber", 
    color: "#f59e0b", 
    className: "bg-gradient-to-r from-amber-400 to-amber-600"
  },
  red: { 
    name: "Red", 
    color: "#ef4444", 
    className: "bg-gradient-to-r from-red-400 to-red-600"
  },
  pink: { 
    name: "Pink", 
    color: "#ec4899", 
    className: "bg-gradient-to-r from-pink-400 to-pink-600"
  }
};

interface ColorPaletteProps {
  onColorSelect: (color: string) => void;
}

export default function ColorPalette({ onColorSelect }: ColorPaletteProps) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeColor>("purple");
  
  const handleThemeChange = (theme: ThemeColor) => {
    setSelectedTheme(theme);
    onColorSelect(themes[theme].name);
    
    // In a real app, you would update CSS variables or a theme context here
    // This is a simplified example
  };
  
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-3">Select Theme Color</h3>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {(Object.keys(themes) as ThemeColor[]).map((key) => (
            <button
              key={key}
              onClick={() => handleThemeChange(key)}
              className={cn(
                "relative flex h-10 w-full items-center justify-center rounded-md transition-all",
                themes[key].className,
                "hover:scale-105 transition-transform"
              )}
              style={{ aspectRatio: "1/1" }}
              aria-label={`Select ${themes[key].name} theme`}
            >
              {selectedTheme === key && (
                <Check className="h-4 w-4 text-white" />
              )}
            </button>
          ))}
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground">
        <p>The selected theme will change the appearance throughout the application.</p>
      </div>
    </div>
  );
}
