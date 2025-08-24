import { 
  Brain, 
  FileText, 
  Image, 
  Calculator, 
  BookOpen, 
  Lightbulb,
  Search,
  Code,
  PenTool,
  Microscope,
  Rocket,
  Palette
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const tools = [
  {
    id: 1,
    title: "AI Research Assistant",
    description: "Generate comprehensive research papers, citations, and analysis",
    icon: Brain,
    category: "research",
    badge: "Popular",
    color: "text-primary"
  },
  {
    id: 2,
    title: "Assignment Solver",
    description: "Get step-by-step solutions for math, science, and engineering problems",
    icon: Calculator,
    category: "education",
    badge: "New",
    color: "text-accent"
  },
  {
    id: 3,
    title: "Image Generator",
    description: "Create stunning visuals, diagrams, and illustrations for your projects",
    icon: Image,
    category: "creative",
    badge: null,
    color: "text-secondary"
  },
  {
    id: 4,
    title: "Project Planner",
    description: "Plan and organize complex projects with AI-powered insights",
    icon: Lightbulb,
    category: "productivity",
    badge: null,
    color: "text-primary"
  },
  {
    id: 5,
    title: "Code Assistant",
    description: "Generate, debug, and optimize code across multiple programming languages",
    icon: Code,
    category: "development",
    badge: "Beta",
    color: "text-accent"
  },
  {
    id: 6,
    title: "Study Helper",
    description: "Create flashcards, summaries, and study guides from any material",
    icon: BookOpen,
    category: "education",
    badge: null,
    color: "text-secondary"
  },
  {
    id: 7,
    title: "Science Lab Simulator",
    description: "Conduct virtual experiments and analyze scientific data",
    icon: Microscope,
    category: "science",
    badge: "Premium",
    color: "text-primary"
  },
  {
    id: 8,
    title: "Innovation Hub",
    description: "Brainstorm and develop innovative solutions to complex problems",
    icon: Rocket,
    category: "innovation",
    badge: null,
    color: "text-accent"
  },
  {
    id: 9,
    title: "Design Studio",
    description: "Create professional designs, logos, and visual content",
    icon: Palette,
    category: "creative",
    badge: null,
    color: "text-secondary"
  }
];

const categories = [
  { id: "all", label: "All Tools", icon: Search },
  { id: "research", label: "Research", icon: Brain },
  { id: "education", label: "Education", icon: BookOpen },
  { id: "creative", label: "Creative", icon: Palette },
  { id: "science", label: "Science", icon: Microscope },
  { id: "development", label: "Development", icon: Code },
  { id: "productivity", label: "Productivity", icon: PenTool },
  { id: "innovation", label: "Innovation", icon: Rocket }
];

export default function ToolsPage() {
  const filterTools = (category: string) => {
    return category === "all" ? tools : tools.filter(tool => tool.category === category);
  };

  const ToolCard = ({ tool }: { tool: typeof tools[0] }) => (
    <Card className="glass-card border-border/50 hover:border-primary/50 transition-smooth group cursor-pointer h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3 min-w-0 flex-1">
            <tool.icon className={`h-8 w-8 ${tool.color} group-hover:text-primary transition-smooth flex-shrink-0`} />
            <div className="min-w-0 flex-1">
              <CardTitle className="text-lg text-foreground group-hover:text-primary transition-smooth truncate">
                {tool.title}
              </CardTitle>
              {tool.badge && (
                <Badge variant={tool.badge === "New" ? "default" : "secondary"} className="mt-1">
                  {tool.badge}
                </Badge>
              )}
            </div>
          </div>
        </div>
        <CardDescription className="text-muted-foreground text-sm line-clamp-3">
          {tool.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button className="w-full glow-primary group-hover:shadow-lg transition-smooth">
          Launch Tool
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6 max-w-full">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-glow mb-2">Tools & Workspace</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Powerful AI tools to accelerate your research, learning, and creativity
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tools..."
              className="pl-10 w-full glass-input border-border/50 focus:border-primary/50"
            />
          </div>
        </div>
      </div>

      {/* Tools by Category */}
      <Tabs defaultValue="all" className="w-full">
        <div className="overflow-x-auto pb-2">
          <TabsList className="glass-card p-1 h-auto bg-background/50 backdrop-blur-sm border border-border/50">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 w-full min-w-max">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center justify-center gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-glow text-xs sm:text-sm whitespace-nowrap px-3 py-2 rounded-lg transition-all duration-300 hover:bg-muted/50 min-w-0"
                >
                  <category.icon className="h-4 w-4 flex-shrink-0" />
                  <span className="hidden sm:inline truncate">{category.label}</span>
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterTools(category.id).map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Recent Workspaces */}
      <Card className="glass-card border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-foreground flex items-center">
            <FileText className="mr-2 h-5 w-5 text-primary" />
            Recent Workspaces
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Quantum Physics Research", updated: "2 hours ago", type: "Research" },
              { name: "Machine Learning Project", updated: "1 day ago", type: "Development" },
              { name: "Biology Assignment", updated: "3 days ago", type: "Education" }
            ].map((workspace, index) => (
              <div 
                key={index}
                className="p-4 border border-border/50 rounded-lg hover:border-primary/50 transition-smooth cursor-pointer"
              >
                <h3 className="font-medium text-foreground">{workspace.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {workspace.type} • {workspace.updated}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}