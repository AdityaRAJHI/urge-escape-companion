
import Layout from "@/components/Layout";
import StreakCounter from "@/components/StreakCounter";
import EmergencyButton from "@/components/EmergencyButton";
import MotivationalQuote from "@/components/MotivationalQuote";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen, Calendar, ListChecks } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Track your progress and get support on your journey.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-2">
            <StreakCounter />
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <EmergencyButton />
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <MotivationalQuote />
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Next Challenge</CardTitle>
              <CardDescription>Day 3 of 7-day motivation challenge</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-start space-x-4">
                <div className="bg-brand-lightPurple p-2 rounded-full">
                  <ListChecks className="h-5 w-5 text-brand-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Positive Visualization</h3>
                  <p className="text-sm text-gray-500">Spend 5 minutes visualizing your future success.</p>
                </div>
              </div>
              
              <div className="mt-4">
                <Button className="w-full" variant="outline">Mark as Complete</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Quick Access</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="card-hover">
              <CardContent className="p-6 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="mr-4 bg-brand-lightPurple p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium">Progress Tracker</h3>
                    <p className="text-sm text-gray-500">View your journey</p>
                  </div>
                </div>
                <Link to="/progress">
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="mr-4 bg-brand-lightPurple p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium">Resources</h3>
                    <p className="text-sm text-gray-500">Helpful materials</p>
                  </div>
                </div>
                <Link to="/resources">
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="mr-4 bg-brand-lightPurple p-3 rounded-full">
                    <Award className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium">Achievements</h3>
                    <p className="text-sm text-gray-500">Your milestones</p>
                  </div>
                </div>
                <Link to="/progress">
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
