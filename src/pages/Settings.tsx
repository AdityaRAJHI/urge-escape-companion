
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  
  const handleSaveChanges = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };
  
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account and application preferences.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Manage your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Display Name</Label>
                <Input id="name" defaultValue="User" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="user@example.com" type="email" />
              </div>
              <Button onClick={handleSaveChanges} className="w-full">Save Changes</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="daily-reminder">Daily Reminders</Label>
                  <p className="text-sm text-muted-foreground">Receive a daily check-in reminder</p>
                </div>
                <Switch id="daily-reminder" defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="motivation">Motivational Messages</Label>
                  <p className="text-sm text-muted-foreground">Get motivational quotes and tips</p>
                </div>
                <Switch id="motivation" defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="milestone">Milestone Celebrations</Label>
                  <p className="text-sm text-muted-foreground">Be notified when you reach milestones</p>
                </div>
                <Switch id="milestone" defaultChecked />
              </div>
              
              <Button onClick={handleSaveChanges} className="w-full">Save Preferences</Button>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Privacy & Data</CardTitle>
            <CardDescription>Manage your data and privacy settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="anonymize">Anonymize Usage Data</Label>
                  <p className="text-sm text-muted-foreground">Share anonymous usage data to improve the app</p>
                </div>
                <Switch id="anonymize" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="reset">Reset Progress</Label>
                  <p className="text-sm text-muted-foreground">Reset all progress data and start fresh</p>
                </div>
                <Button variant="destructive" size="sm">Reset</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Settings;
