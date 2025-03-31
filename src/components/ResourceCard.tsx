
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, Headphones, ArrowRight } from "lucide-react";

type ResourceType = "article" | "video" | "audio";

interface ResourceCardProps {
  title: string;
  description: string;
  type: ResourceType;
  category: string;
  url: string;
}

export default function ResourceCard({ title, description, type, category, url }: ResourceCardProps) {
  // Choose the appropriate icon based on resource type
  const getIcon = () => {
    switch (type) {
      case "video":
        return <Video className="h-5 w-5" />;
      case "audio":
        return <Headphones className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };
  
  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="mb-2 bg-brand-lightPurple text-brand-deepPurple border-0">
            {category}
          </Badge>
          <div className="rounded-full p-2 bg-gray-100">
            {getIcon()}
          </div>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-500 capitalize">{type}</p>
      </CardContent>
      
      <CardFooter>
        <Button variant="ghost" className="w-full justify-between group" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <span>View Resource</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
