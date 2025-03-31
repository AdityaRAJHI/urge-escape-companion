
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ColorPalette from "@/components/ColorPalette";

const Settings = () => {
  const { toast } = useToast();
  const [avatarUrl, setAvatarUrl] = useState("");
  const [displayName, setDisplayName] = useState("User");
  const [userBio, setUserBio] = useState("");
  const [journeyGoal, setJourneyGoal] = useState("30");
  
  const handleSaveChanges = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };
  
  const avatarOptions = [
    { id: 1, name: "Default", url: "https://api.dicebear.com/7.x/bottts/svg?seed=1" },
    { id: 2, name: "Abstract", url: "https://api.dicebear.com/7.x/shapes/svg?seed=2" },
    { id: 3, name: "Pixel", url: "https://api.dicebear.com/7.x/pixel-art/svg?seed=3" },
    { id: 4, name: "Initials", url: "https://api.dicebear.com/7.x/initials/svg?seed=4" },
  ];
  
  const handleAvatarSelect = (value: string) => {
    const selected = avatarOptions.find(option => option.id.toString() === value);
    if (selected) {
      setAvatarUrl(selected.url);
    }
  };
  
  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account and application preferences.</p>
        </div>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Manage your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={avatarUrl} alt={displayName} />
                      <AvatarFallback>{displayName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="w-full max-w-[150px]">
                      <Select onValueChange={handleAvatarSelect}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose avatar" />
                        </SelectTrigger>
                        <SelectContent>
                          {avatarOptions.map((option) => (
                            <SelectItem key={option.id} value={option.id.toString()}>
                              {option.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Display Name</Label>
                      <Input 
                        id="name" 
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue="user@example.com" type="email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Input 
                        id="bio" 
                        value={userBio}
                        onChange={(e) => setUserBio(e.target.value)}
                        placeholder="Tell us about yourself"
                      />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="goal">Journey Goal (days)</Label>
                  <Select value={journeyGoal} onValueChange={setJourneyGoal}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="14">14 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="180">180 days</SelectItem>
                      <SelectItem value="365">365 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button onClick={handleSaveChanges} className="w-full">Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
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
          </TabsContent>
          
          <TabsContent value="appearance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize the look and feel of the application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ColorPalette 
                  onColorSelect={(colorTheme) => {
                    toast({
                      title: "Theme updated",
                      description: `You've changed your theme color to ${colorTheme}`,
                    });
                  }}
                />
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">Enable dark mode for the application</p>
                  </div>
                  <Switch id="dark-mode" />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="animations">Animations</Label>
                    <p className="text-sm text-muted-foreground">Enable animations in the interface</p>
                  </div>
                  <Switch id="animations" defaultChecked />
                </div>
                
                <Button onClick={handleSaveChanges} className="w-full">Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="privacy" className="space-y-6">
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
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="export-data">Export Your Data</Label>
                    <p className="text-sm text-muted-foreground">Download all your data in a JSON format</p>
                  </div>
                  <Button variant="outline" size="sm">Export</Button>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="delete-account">Delete Account</Label>
                    <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                  </div>
                  <Button variant="destructive" size="sm">Delete</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Settings;
