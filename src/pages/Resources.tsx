
import Layout from "@/components/Layout";
import ResourceCard from "@/components/ResourceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for resources
const resources = [
  {
    id: 1,
    title: "Understanding Addiction Cycles",
    description: "Learn about how addiction affects your brain and how to break the cycle.",
    type: "article" as const,
    category: "Education",
    url: "https://www.healthline.com/health/addiction/recognizing-addiction",
  },
  {
    id: 2,
    title: "Mindfulness Techniques for Urges",
    description: "Practical mindfulness exercises to help you manage urges and cravings.",
    type: "video" as const,
    category: "Mindfulness",
    url: "https://www.youtube.com/watch?v=iN6g2mr0p3Q",
  },
  {
    id: 3,
    title: "Building New Habits",
    description: "How to replace unwanted behaviors with positive habits that last.",
    type: "article" as const,
    category: "Strategies",
    url: "https://jamesclear.com/habit-guide",
  },
  {
    id: 4,
    title: "Guided Meditation for Anxiety",
    description: "A 10-minute guided meditation to help reduce anxiety and stress.",
    type: "audio" as const,
    category: "Meditation",
    url: "https://www.headspace.com/meditation/anxiety",
  },
  {
    id: 5,
    title: "The Science of Willpower",
    description: "Understanding how willpower works and how to strengthen it.",
    type: "video" as const,
    category: "Education",
    url: "https://www.ted.com/talks/kelly_mcgonigal_how_to_make_stress_your_friend",
  },
  {
    id: 6,
    title: "Recovery Success Stories",
    description: "Real people share their journeys to recovery and freedom.",
    type: "article" as const,
    category: "Inspiration",
    url: "https://www.reddit.com/r/NoFap/top/?t=all",
  },
];

const Resources = () => {
  // Filter resources by type
  const articles = resources.filter(resource => resource.type === "article");
  const videos = resources.filter(resource => resource.type === "video");
  const audios = resources.filter(resource => resource.type === "audio");
  
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
          <p className="text-muted-foreground">Educational materials and tools to support your journey.</p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {resources.map(resource => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  category={resource.category}
                  url={resource.url}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="articles">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map(resource => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  category={resource.category}
                  url={resource.url}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map(resource => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  category={resource.category}
                  url={resource.url}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="audio">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {audios.map(resource => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  category={resource.category}
                  url={resource.url}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Resources;
