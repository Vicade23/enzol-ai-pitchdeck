import { 
  Users, 
  UserPlus, 
  Settings, 
  Crown, 
  Shield, 
  Edit,
  Trash2,
  Mail,
  MoreVertical
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@enzol.ai",
    role: "Admin",
    avatar: null,
    status: "active",
    joinedAt: "2024-01-15",
    lastActive: "2 minutes ago"
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah@enzol.ai",
    role: "Member",
    avatar: null,
    status: "active",
    joinedAt: "2024-02-01",
    lastActive: "1 hour ago"
  },
  {
    id: 3,
    name: "Mike Chen",
    email: "mike@enzol.ai",
    role: "Member",
    avatar: null,
    status: "pending",
    joinedAt: "2024-02-10",
    lastActive: "Never"
  },
  {
    id: 4,
    name: "Emily Johnson",
    email: "emily@enzol.ai",
    role: "Editor",
    avatar: null,
    status: "active",
    joinedAt: "2024-01-20",
    lastActive: "3 hours ago"
  }
];

const teamStats = [
  { label: "Total Members", value: "4", icon: Users, color: "text-primary" },
  { label: "Active Projects", value: "12", icon: Shield, color: "text-accent" },
  { label: "AI Queries Today", value: "234", icon: Crown, color: "text-secondary" },
  { label: "Storage Used", value: "8.4 GB", icon: Settings, color: "text-foreground" }
];

const getRoleIcon = (role: string) => {
  switch (role) {
    case "Admin":
      return <Crown className="h-4 w-4 text-primary" />;
    case "Editor":
      return <Edit className="h-4 w-4 text-accent" />;
    default:
      return <Shield className="h-4 w-4 text-muted-foreground" />;
  }
};

const getRoleBadgeVariant = (role: string) => {
  switch (role) {
    case "Admin":
      return "default";
    case "Editor":
      return "secondary";
    default:
      return "outline";
  }
};

export default function TeamPage() {
  return (
    <div className="space-y-6 max-w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-glow mb-2">Team Management</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Manage your team members and collaborate on AI-powered projects
          </p>
        </div>
        <Button className="glow-primary w-full sm:w-auto">
          <UserPlus className="mr-2 h-4 w-4" />
          Invite Member
        </Button>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamStats.map((stat, index) => (
          <Card key={index} className="glass-card border-border/50 hover:border-primary/30 transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="members" className="w-full">
        <div className="overflow-x-auto">
          <TabsList className="grid w-full grid-cols-3 glass-card min-w-max">
            <TabsTrigger value="members" className="text-xs sm:text-sm whitespace-nowrap">Team Members</TabsTrigger>
            <TabsTrigger value="invitations" className="text-xs sm:text-sm whitespace-nowrap">Invitations</TabsTrigger>
            <TabsTrigger value="settings" className="text-xs sm:text-sm whitespace-nowrap">Settings</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="members" className="space-y-6">
          {/* Search and Filters */}
          <div className="flex items-center justify-between">
            <Input
              placeholder="Search team members..."
              className="max-w-sm glass-input border-border/50 focus:border-primary/50"
            />
            <div className="flex items-center space-x-2">
              <Badge variant="outline">{teamMembers.length} members</Badge>
            </div>
          </div>

          {/* Team Members List */}
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Team Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border/50 rounded-lg hover:border-primary/30 transition-smooth gap-4"
                  >
                    <div className="flex items-center space-x-4 min-w-0 flex-1">
                      <Avatar className="h-10 w-10 flex-shrink-0">
                        <AvatarImage src={member.avatar || undefined} alt={member.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-medium text-foreground truncate">{member.name}</h3>
                          <Badge variant={getRoleBadgeVariant(member.role)} className="flex items-center space-x-1">
                            {getRoleIcon(member.role)}
                            <span>{member.role}</span>
                          </Badge>
                          {member.status === "pending" && (
                            <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                              Pending
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{member.email}</p>
                        <p className="text-xs text-muted-foreground">
                          Last active: {member.lastActive}
                        </p>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="glass-card border-border/50">
                        <DropdownMenuItem className="hover:bg-primary/10">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Role
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-primary/10">
                          <Mail className="mr-2 h-4 w-4" />
                          Send Message
                        </DropdownMenuItem>
                        {member.role !== "Admin" && (
                          <DropdownMenuItem className="text-destructive hover:bg-destructive/10">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Remove
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invitations" className="space-y-6">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                Pending Invitations
              </CardTitle>
              <CardDescription>
                Manage invitations sent to new team members
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border/50 rounded-lg gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-foreground break-words">alex@example.com</h3>
                    <p className="text-sm text-muted-foreground">Invited 2 days ago • Member role</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                      Resend
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive text-xs sm:text-sm">
                      Cancel
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border/50 rounded-lg gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-foreground break-words">sarah.johnson@example.com</h3>
                    <p className="text-sm text-muted-foreground">Invited 5 days ago • Editor role</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                      Resend
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive text-xs sm:text-sm">
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <Settings className="mr-2 h-5 w-5 text-primary" />
                Team Settings
              </CardTitle>
              <CardDescription>
                Configure team permissions and access controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Team Name</h3>
                  <Input 
                    defaultValue="Enzol Research Team" 
                    className="glass-input border-border/50 focus:border-primary/50"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Default Role for New Members</h3>
                  <select className="w-full p-2 border border-border/50 rounded-md bg-background text-foreground">
                    <option value="member">Member</option>
                    <option value="editor">Editor</option>
                  </select>
                </div>
                <div className="pt-4">
                  <Button className="glow-primary">Save Settings</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}