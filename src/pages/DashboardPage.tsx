import { 
  BarChart3, 
  Brain, 
  Clock, 
  FileText, 
  Image, 
  Lightbulb, 
  TrendingUp, 
  Users,
  Zap,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const stats = [
  {
    title: "Projects Generated",
    value: "1,234",
    change: "+12%",
    icon: Brain,
    color: "text-primary"
  },
  {
    title: "AI Queries Today",
    value: "89",
    change: "+23%",
    icon: Zap,
    color: "text-accent"
  },
  {
    title: "Images Created",
    value: "456",
    change: "+8%",
    icon: Image,
    color: "text-secondary"
  },
  {
    title: "Team Members",
    value: "12",
    change: "+2",
    icon: Users,
    color: "text-foreground"
  }
];

const recentActivity = [
  { title: "Generated research proposal", time: "2 minutes ago", type: "research" },
  { title: "Created AI-powered presentation", time: "15 minutes ago", type: "presentation" },
  { title: "Completed assignment analysis", time: "1 hour ago", type: "analysis" },
  { title: "Generated science project ideas", time: "2 hours ago", type: "ideas" },
];

const quickActions = [
  { title: "Start Research", description: "Begin AI-powered research", icon: Brain, href: "/tools" },
  { title: "Generate Images", description: "Create visual content", icon: Image, href: "/tools" },
  { title: "Assignment Help", description: "Get homework assistance", icon: FileText, href: "/tools" },
  { title: "Project Ideas", description: "Brainstorm new concepts", icon: Lightbulb, href: "/tools" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 max-w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-glow mb-2 truncate">Welcome back, John!</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Ready to supercharge your research and learning today?
          </p>
        </div>
        <Button className="glow-primary flex-shrink-0 w-full sm:w-auto">
          <Zap className="mr-2 h-4 w-4" />
          Quick Start
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="glass-card border-border/50 hover:border-primary/30 transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-accent mt-1">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="lg:col-span-2 glass-card border-border/50">
          <CardHeader>
            <CardTitle className="text-xl text-foreground flex items-center">
              <Zap className="mr-2 h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-smooth cursor-pointer group"
                >
                  <div className="flex items-start space-x-3">
                    <action.icon className="h-6 w-6 text-primary group-hover:text-accent transition-smooth" />
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-smooth">
                        {action.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {action.description}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle className="text-xl text-foreground flex items-center">
              <Clock className="mr-2 h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {activity.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart Placeholder */}
      <Card className="glass-card border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-foreground flex items-center">
            <BarChart3 className="mr-2 h-5 w-5 text-primary" />
            Usage Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center border border-border/30 rounded-lg">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground">Analytics chart will be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}