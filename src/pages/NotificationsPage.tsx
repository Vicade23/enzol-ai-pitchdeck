import { 
  Bell, 
  Check, 
  Trash2, 
  Filter,
  MoreVertical,
  Clock,
  User,
  Settings,
  AlertTriangle,
  Info,
  CheckCircle,
  X
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const notifications = [
  {
    id: 1,
    type: "success",
    title: "Project completed successfully",
    message: "Your AI research project 'Quantum Computing Analysis' has been completed and is ready for review.",
    time: "2 minutes ago",
    read: false,
    category: "project"
  },
  {
    id: 2,
    type: "info",
    title: "New team member joined",
    message: "Sarah Wilson has joined your research team and is now a collaborator on your projects.",
    time: "1 hour ago",
    read: false,
    category: "team",
    avatar: "SW"
  },
  {
    id: 3,
    type: "warning",
    title: "Subscription expires soon",
    message: "Your Premium subscription will expire in 3 days. Renew now to continue using advanced features.",
    time: "2 hours ago",
    read: true,
    category: "billing"
  },
  {
    id: 4,
    type: "info",
    title: "Feature update available",
    message: "New AI image generation models are now available in your Tools & Workspace.",
    time: "1 day ago",
    read: true,
    category: "feature"
  },
  {
    id: 5,
    type: "success",
    title: "Feedback submitted",
    message: "Thank you for your feedback! We've received your suggestion about real-time collaboration.",
    time: "2 days ago",
    read: true,
    category: "feedback"
  },
  {
    id: 6,
    type: "error",
    title: "AI query failed",
    message: "Your recent AI query couldn't be processed due to high server load. Please try again.",
    time: "3 days ago",
    read: true,
    category: "system"
  }
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "success":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "warning":
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    case "error":
      return <X className="h-5 w-5 text-red-500" />;
    default:
      return <Info className="h-5 w-5 text-blue-500" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "project":
      return "bg-primary/10 text-primary";
    case "team":
      return "bg-accent/10 text-accent";
    case "billing":
      return "bg-yellow-500/10 text-yellow-500";
    case "feature":
      return "bg-blue-500/10 text-blue-500";
    case "feedback":
      return "bg-green-500/10 text-green-500";
    case "system":
      return "bg-red-500/10 text-red-500";
    default:
      return "bg-muted/10 text-muted-foreground";
  }
};

export default function NotificationsPage() {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6 max-w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-glow">Notifications</h1>
            {unreadCount > 0 && (
              <Badge variant="default" className="bg-primary text-primary-foreground">
                {unreadCount} new
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground text-sm sm:text-base">
            Stay updated with your latest activities and important updates
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Check className="mr-2 h-4 w-4" />
            Mark all read
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="overflow-x-auto">
          <TabsList className="grid w-full grid-cols-4 glass-card min-w-max">
            <TabsTrigger value="all" className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">
              All ({notifications.length})
            </TabsTrigger>
            <TabsTrigger value="unread" className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">
              Unread ({unreadCount})
            </TabsTrigger>
            <TabsTrigger value="projects" className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">
              Projects
            </TabsTrigger>
            <TabsTrigger value="team" className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">
              Team
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-4">
          {notifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`glass-card border-border/50 hover:border-primary/30 transition-smooth ${
                !notification.read ? 'bg-primary/5 border-primary/20' : ''
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  {notification.avatar ? (
                    <Avatar className="h-10 w-10 flex-shrink-0">
                      <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                        {notification.avatar}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-medium text-foreground">{notification.title}</h3>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Badge variant="outline" className={`text-xs ${getCategoryColor(notification.category)}`}>
                          {notification.category}
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="glass-card border-border/50">
                            <DropdownMenuItem className="hover:bg-primary/10">
                              <Check className="mr-2 h-4 w-4" />
                              Mark as {notification.read ? 'unread' : 'read'}
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive hover:bg-destructive/10">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3 break-words">
                      {notification.message}
                    </p>
                    
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {notification.time}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="unread" className="space-y-4">
          {notifications.filter(n => !n.read).map((notification) => (
            <Card 
              key={notification.id} 
              className="glass-card border-primary/20 bg-primary/5 hover:border-primary/30 transition-smooth"
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  {notification.avatar ? (
                    <Avatar className="h-10 w-10 flex-shrink-0">
                      <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                        {notification.avatar}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-medium text-foreground">{notification.title}</h3>
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      </div>
                      <Badge variant="outline" className={`text-xs ${getCategoryColor(notification.category)}`}>
                        {notification.category}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3 break-words">
                      {notification.message}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {notification.time}
                      </div>
                      <Button variant="outline" size="sm">
                        <Check className="mr-1 h-3 w-3" />
                        Mark read
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          {notifications.filter(n => n.category === 'project').map((notification) => (
            <Card 
              key={notification.id} 
              className={`glass-card border-border/50 hover:border-primary/30 transition-smooth ${
                !notification.read ? 'bg-primary/5 border-primary/20' : ''
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-medium text-foreground">{notification.title}</h3>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{notification.message}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {notification.time}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          {notifications.filter(n => n.category === 'team').map((notification) => (
            <Card 
              key={notification.id} 
              className={`glass-card border-border/50 hover:border-primary/30 transition-smooth ${
                !notification.read ? 'bg-primary/5 border-primary/20' : ''
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                      {notification.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-medium text-foreground">{notification.title}</h3>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{notification.message}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {notification.time}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Notification Settings Link */}
      <Card className="glass-card border-border/50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Settings className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Notification Settings</p>
                <p className="text-sm text-muted-foreground">Customize what notifications you receive</p>
              </div>
            </div>
            <Button variant="outline">Configure</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}