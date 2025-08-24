import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Edit,
  Camera,
  Shield,
  Crown,
  Award,
  Activity,
  Settings,
  Save
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Label } from "../components/ui/label";

const profileStats = [
  { label: "Projects Completed", value: "127", icon: Award, color: "text-primary" },
  { label: "AI Queries", value: "2,340", icon: Activity, color: "text-accent" },
  { label: "Days Active", value: "89", icon: Calendar, color: "text-secondary" },
  { label: "Team Projects", value: "23", icon: Shield, color: "text-foreground" }
];

const achievements = [
  { title: "Early Adopter", description: "Joined Enzol in the first month", icon: Crown, date: "Jan 2024" },
  { title: "Research Master", description: "Completed 100+ research projects", icon: Award, date: "Mar 2024" },
  { title: "Team Player", description: "Collaborated on 20+ team projects", icon: Shield, date: "Apr 2024" },
  { title: "AI Explorer", description: "Used all available AI tools", icon: Activity, date: "May 2024" }
];

export default function ProfilePage() {
  return (
    <div className="space-y-6 max-w-full">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-glow mb-2">Profile</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Manage your account information and preferences
          </p>
        </div>
        <Button className="glow-primary w-full lg:w-auto">
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      {/* Profile Overview */}
      <Card className="glass-card border-border/50">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder-avatar.jpg" alt="John Doe" />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">JD</AvatarFallback>
              </Avatar>
              <Button size="sm" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-1">John Doe</h2>
              <p className="text-muted-foreground mb-2">john.doe@example.com</p>
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
                <Badge variant="default" className="flex items-center space-x-1">
                  <Crown className="h-3 w-3" />
                  <span>Premium Member</span>
                </Badge>
                <Badge variant="secondary">Research Team Lead</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {profileStats.map((stat, index) => (
          <Card key={index} className="glass-card border-border/50 hover:border-primary/30 transition-smooth">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Profile Tabs */}
      <Tabs defaultValue="personal" className="w-full">
        <div className="overflow-x-auto">
          <TabsList className="grid w-full grid-cols-3 glass-card min-w-max">
            <TabsTrigger value="personal" className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">Personal Info</TabsTrigger>
            <TabsTrigger value="security" className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">Security</TabsTrigger>
            <TabsTrigger value="achievements" className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">Achievements</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="personal" className="space-y-6">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <User className="mr-2 h-5 w-5 text-primary" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Update your personal details and contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</Label>
                  <Input 
                    id="firstName"
                    defaultValue="John"
                    className="mt-1 glass-input border-border/50 focus:border-primary/50"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</Label>
                  <Input 
                    id="lastName"
                    defaultValue="Doe"
                    className="mt-1 glass-input border-border/50 focus:border-primary/50"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="mt-1 glass-input border-border/50 focus:border-primary/50"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="mt-1 glass-input border-border/50 focus:border-primary/50"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="location" className="text-sm font-medium text-foreground">Location</Label>
                  <Input 
                    id="location"
                    defaultValue="San Francisco, CA"
                    className="mt-1 glass-input border-border/50 focus:border-primary/50"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="bio" className="text-sm font-medium text-foreground">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself..."
                    className="mt-1 glass-input border-border/50 focus:border-primary/50"
                    rows={4}
                    defaultValue="Passionate researcher and AI enthusiast. I love exploring new technologies and solving complex problems with innovative solutions."
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <Shield className="mr-2 h-5 w-5 text-primary" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Manage your account security and authentication
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="currentPassword" className="text-sm font-medium text-foreground">Current Password</Label>
                <Input 
                  id="currentPassword"
                  type="password"
                  className="mt-1 glass-input border-border/50 focus:border-primary/50"
                />
              </div>
              <div>
                <Label htmlFor="newPassword" className="text-sm font-medium text-foreground">New Password</Label>
                <Input 
                  id="newPassword"
                  type="password"
                  className="mt-1 glass-input border-border/50 focus:border-primary/50"
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">Confirm New Password</Label>
                <Input 
                  id="confirmPassword"
                  type="password"
                  className="mt-1 glass-input border-border/50 focus:border-primary/50"
                />
              </div>
              <div className="pt-4 border-t border-border/30">
                <h3 className="font-medium text-foreground mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Enable 2FA</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <Award className="mr-2 h-5 w-5 text-primary" />
                Achievements
              </CardTitle>
              <CardDescription>
                Your milestones and accomplishments on Enzol
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-4 border border-border/50 rounded-lg hover:border-primary/30 transition-smooth"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <achievement.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground mb-1">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}