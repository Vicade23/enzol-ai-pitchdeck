import { 
  MessageSquare, 
  Star,
  ThumbsUp,
  ThumbsDown,
  Send,
  Lightbulb,
  Bug,
  Zap,
  Heart
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useState } from "react";

const feedbackTypes = [
  {
    id: "feature",
    title: "Feature Request",
    description: "Suggest new features or improvements",
    icon: Lightbulb,
    color: "text-primary"
  },
  {
    id: "bug",
    title: "Bug Report",
    description: "Report issues or problems you've encountered",
    icon: Bug,
    color: "text-destructive"
  },
  {
    id: "improvement",
    title: "Improvement",
    description: "Suggest enhancements to existing features",
    icon: Zap,
    color: "text-accent"
  },
  {
    id: "general",
    title: "General Feedback",
    description: "Share your overall experience and thoughts",
    icon: Heart,
    color: "text-secondary"
  }
];

const recentFeedback = [
  {
    id: 1,
    type: "Feature Request",
    title: "Add real-time collaboration",
    description: "It would be great to have Google Docs-style real-time editing...",
    status: "Under Review",
    votes: 24,
    date: "2 days ago"
  },
  {
    id: 2,
    type: "Bug Report",
    title: "Image generator sometimes fails",
    description: "The AI image generator occasionally returns an error...",
    status: "Fixed",
    votes: 8,
    date: "1 week ago"
  },
  {
    id: 3,
    type: "Improvement",
    title: "Better mobile experience",
    description: "The mobile interface could be more responsive...",
    status: "In Progress",
    votes: 15,
    date: "3 days ago"
  }
];

export default function FeedbackPage() {
  const [selectedType, setSelectedType] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  return (
    <div className="space-y-6 max-w-full">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-glow mb-2">Feedback</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          Your feedback helps us make Enzol better for everyone. Share your ideas, report issues, or tell us what you love!
        </p>
      </div>

      <Tabs defaultValue="submit" className="w-full">
        <div className="overflow-x-auto">
          <TabsList className="grid w-full grid-cols-3 glass-card min-w-max">
            <TabsTrigger value="submit" className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">Submit Feedback</TabsTrigger>
            <TabsTrigger value="community" className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">Community Feedback</TabsTrigger>
            <TabsTrigger value="roadmap" className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">Roadmap</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="submit" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feedback Form */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                  Share Your Feedback
                </CardTitle>
                <CardDescription>
                  Help us improve Enzol by sharing your thoughts and suggestions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Feedback Type Selection */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    What type of feedback do you have?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {feedbackTypes.map((type) => (
                      <div
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`p-3 border rounded-lg cursor-pointer transition-smooth ${
                          selectedType === type.id
                            ? "border-primary bg-primary/10"
                            : "border-border/50 hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <type.icon className={`h-4 w-4 ${type.color}`} />
                          <span className="text-sm font-medium text-foreground">{type.title}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{type.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    How would you rate your overall experience?
                  </label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-6 w-6 cursor-pointer transition-smooth ${
                          star <= rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-muted-foreground hover:text-yellow-400"
                        }`}
                        onClick={() => setRating(star)}
                      />
                    ))}
                    {rating > 0 && (
                      <span className="ml-2 text-sm text-muted-foreground">
                        {rating} out of 5 stars
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="text-sm font-medium text-foreground">Title</label>
                  <Input 
                    placeholder="Brief title for your feedback"
                    className="mt-1 glass-input border-border/50 focus:border-primary/50"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="text-sm font-medium text-foreground">Description</label>
                  <Textarea
                    placeholder="Describe your feedback in detail..."
                    className="mt-1 glass-input border-border/50 focus:border-primary/50"
                    rows={5}
                  />
                </div>

                {/* Email for follow-up */}
                <div>
                  <label className="text-sm font-medium text-foreground">Email (optional)</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1 glass-input border-border/50 focus:border-primary/50"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    We'll only use this to follow up on your feedback
                  </p>
                </div>

                <Button className="w-full glow-primary">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Feedback
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    I love this feature
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ThumbsDown className="mr-2 h-4 w-4" />
                    Something isn't working
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Lightbulb className="mr-2 h-4 w-4" />
                    I have an idea
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bug className="mr-2 h-4 w-4" />
                    Report a bug
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Feedback Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <p>Be specific and detailed in your descriptions</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <p>Include steps to reproduce for bug reports</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <p>Search existing feedback before submitting duplicates</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <p>Be constructive and respectful in your feedback</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="community" className="space-y-6">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                Community Feedback
              </CardTitle>
              <CardDescription>
                See what other users are saying and vote on features you'd like to see
              </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                {recentFeedback.map((feedback) => (
                  <div
                    key={feedback.id}
                    className="p-4 border border-border/50 rounded-lg hover:border-primary/30 transition-smooth"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">{feedback.type}</Badge>
                          <Badge 
                            variant={
                              feedback.status === "Fixed" ? "default" :
                              feedback.status === "In Progress" ? "secondary" : "outline"
                            }
                            className="text-xs"
                          >
                            {feedback.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{feedback.date}</span>
                        </div>
                        <h3 className="font-medium text-foreground mb-1 break-words">{feedback.title}</h3>
                        <p className="text-sm text-muted-foreground break-words line-clamp-2">{feedback.description}</p>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                          <ThumbsUp className="h-3 w-3" />
                          <span className="text-xs">{feedback.votes}</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roadmap" className="space-y-6">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <Zap className="mr-2 h-5 w-5 text-primary" />
                Product Roadmap
              </CardTitle>
              <CardDescription>
                See what we're working on and what's coming next
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    quarter: "Q1 2024",
                    status: "In Progress",
                    features: [
                      "Real-time collaboration",
                      "Mobile app (iOS/Android)",
                      "Advanced AI models",
                      "Custom templates"
                    ]
                  },
                  {
                    quarter: "Q2 2024",
                    status: "Planned",
                    features: [
                      "API v2.0",
                      "Enterprise SSO",
                      "Advanced analytics",
                      "Multi-language support"
                    ]
                  },
                  {
                    quarter: "Q3 2024",
                    status: "Planned",
                    features: [
                      "Voice input/output",
                      "Offline mode",
                      "Custom AI training",
                      "Advanced integrations"
                    ]
                  }
                ].map((roadmapItem, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-3 h-3 bg-primary rounded-full"></div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-foreground">{roadmapItem.quarter}</h3>
                        <Badge variant={roadmapItem.status === "In Progress" ? "default" : "outline"}>
                          {roadmapItem.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {roadmapItem.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="text-sm text-muted-foreground">
                            • {feature}
                          </div>
                        ))}
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