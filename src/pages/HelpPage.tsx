import { 
  HelpCircle, 
  MessageCircle, 
  Book, 
  Video,
  Search,
  ChevronRight,
  Mail,
  Phone,
  Clock,
  FileText,
  Lightbulb
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const faqCategories = [
  {
    title: "Getting Started",
    icon: Lightbulb,
    questions: [
      {
        question: "How do I create my first AI-powered research project?",
        answer: "Navigate to Tools & Workspace, select 'AI Research Assistant', and follow the guided setup process."
      },
      {
        question: "What types of assignments can Enzol help with?",
        answer: "Enzol supports research papers, math problems, science projects, coding assignments, and creative writing."
      },
      {
        question: "How does the image generation feature work?",
        answer: "Use our AI Image Generator tool to create visuals by describing what you need in natural language."
      }
    ]
  },
  {
    title: "Tools & Features",
    icon: Book,
    questions: [
      {
        question: "Can I collaborate with team members on projects?",
        answer: "Yes! Pro and Enterprise plans include team collaboration features with real-time editing and sharing."
      },
      {
        question: "How accurate are the AI-generated research citations?",
        answer: "Our AI provides high-quality citations, but we recommend verifying sources for academic submissions."
      },
      {
        question: "Is there a mobile app available?",
        answer: "Currently, Enzol is optimized for web browsers on all devices. A dedicated mobile app is in development."
      }
    ]
  },
  {
    title: "Billing & Plans",
    icon: FileText,
    questions: [
      {
        question: "Can I upgrade or downgrade my plan anytime?",
        answer: "Yes, you can change your subscription plan at any time. Changes take effect immediately."
      },
      {
        question: "Do you offer educational discounts?",
        answer: "Yes! Students and educational institutions can get up to 50% off Pro plans with valid verification."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
      }
    ]
  }
];

const supportOptions = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    available: "24/7",
    responseTime: "< 5 minutes",
    color: "text-primary"
  },
  {
    title: "Email Support",
    description: "Send us a detailed message",
    icon: Mail,
    available: "24/7",
    responseTime: "< 2 hours",
    color: "text-accent"
  },
  {
    title: "Video Tutorials",
    description: "Learn through guided video content",
    icon: Video,
    available: "Always",
    responseTime: "Self-paced",
    color: "text-secondary"
  },
  {
    title: "Documentation",
    description: "Comprehensive guides and references",
    icon: Book,
    available: "Always",
    responseTime: "Instant",
    color: "text-foreground"
  }
];

export default function HelpPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-glow mb-2">Help & Support</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get the help you need to make the most of Enzol's AI-powered tools
        </p>
      </div>

      {/* Search */}
      <Card className="glass-card border-border/50">
        <CardContent className="pt-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search help articles..."
              className="pl-10 glass-input border-border/50 focus:border-primary/50"
            />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="faq" className="w-full">
        <TabsList className="grid w-full grid-cols-4 glass-card">
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-6">
          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <Card key={index} className="glass-card border-border/50 hover:border-primary/30 transition-smooth cursor-pointer">
                <CardHeader className="text-center">
                  <option.icon className={`h-8 w-8 ${option.color} mx-auto mb-2`} />
                  <CardTitle className="text-lg text-foreground">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="text-sm text-muted-foreground">
                    Available: {option.available}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Response: {option.responseTime}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Categories */}
          <div className="space-y-6">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center">
                    <category.icon className="mr-2 h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div
                        key={faqIndex}
                        className="p-4 border border-border/50 rounded-lg hover:border-primary/30 transition-smooth"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium text-foreground mb-2 flex items-center">
                              <HelpCircle className="mr-2 h-4 w-4 text-primary" />
                              {faq.question}
                            </h3>
                            <p className="text-sm text-muted-foreground">{faq.answer}</p>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground ml-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Get personalized help from our support team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input 
                    placeholder="Briefly describe your issue"
                    className="mt-1 glass-input border-border/50 focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Category</label>
                  <select className="w-full mt-1 p-2 border border-border/50 rounded-md bg-background text-foreground">
                    <option value="">Select a category</option>
                    <option value="technical">Technical Issue</option>
                    <option value="billing">Billing Question</option>
                    <option value="feature">Feature Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    placeholder="Describe your issue in detail..."
                    className="mt-1 glass-input border-border/50 focus:border-primary/50"
                    rows={5}
                  />
                </div>
                <Button className="w-full glow-primary">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium text-foreground">Email Support</h3>
                      <p className="text-sm text-muted-foreground">support@enzol.ai</p>
                      <p className="text-xs text-muted-foreground">Response within 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <h3 className="font-medium text-foreground">Live Chat</h3>
                      <p className="text-sm text-muted-foreground">Available 24/7</p>
                      <p className="text-xs text-muted-foreground">Average response under 5 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h3 className="font-medium text-foreground">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 9 AM - 6 PM PST</p>
                      <p className="text-xs text-muted-foreground">Emergency support available 24/7</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Getting Started Guide",
                description: "Complete guide to setting up your first project",
                icon: Book,
                type: "Guide",
                duration: "15 min read"
              },
              {
                title: "Video Tutorials",
                description: "Step-by-step video walkthroughs",
                icon: Video,
                type: "Video",
                duration: "2-5 min each"
              },
              {
                title: "API Documentation",
                description: "Complete reference for developers",
                icon: FileText,
                type: "Documentation",
                duration: "Reference"
              },
              {
                title: "Best Practices",
                description: "Tips for getting the most out of Enzol",
                icon: Lightbulb,
                type: "Guide",
                duration: "10 min read"
              },
              {
                title: "Troubleshooting",
                description: "Common issues and solutions",
                icon: HelpCircle,
                type: "Guide",
                duration: "Quick reference"
              },
              {
                title: "Community Forum",
                description: "Connect with other Enzol users",
                icon: MessageCircle,
                type: "Community",
                duration: "Ongoing"
              }
            ].map((resource, index) => (
              <Card key={index} className="glass-card border-border/50 hover:border-primary/30 transition-smooth cursor-pointer">
                <CardHeader>
                  <resource.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg text-foreground">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{resource.type}</Badge>
                    <span className="text-xs text-muted-foreground">{resource.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6">
          <Card className="glass-card border-border/50 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <MessageCircle className="mr-2 h-5 w-5 text-primary" />
                Share Your Feedback
              </CardTitle>
              <CardDescription>
                Help us improve Enzol by sharing your thoughts and suggestions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground">Feedback Type</label>
                <select className="w-full mt-1 p-2 border border-border/50 rounded-md bg-background text-foreground">
                  <option value="">Select feedback type</option>
                  <option value="feature">Feature Request</option>
                  <option value="bug">Bug Report</option>
                  <option value="improvement">Improvement Suggestion</option>
                  <option value="general">General Feedback</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Your Feedback</label>
                <Textarea
                  placeholder="Tell us what you think..."
                  className="mt-1 glass-input border-border/50 focus:border-primary/50"
                  rows={6}
                />
              </div>
              <Button className="w-full glow-primary">
                Submit Feedback
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}