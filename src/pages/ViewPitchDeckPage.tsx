import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Share2, 
  Eye,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Zap,
  Globe,
  Award,
  BarChart3
} from "lucide-react";
import { useToast } from "../components/ui/use-toast";

export default function ViewPitchDeckPage() {
  const { toast } = useToast();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Enzol AI",
      subtitle: "Revolutionizing AI for Enterprise",
      content: "Empowering businesses with cutting-edge artificial intelligence solutions that drive innovation, efficiency, and growth.",
      icon: Zap,
      gradient: "from-primary to-primary/60"
    },
    {
      title: "The Problem",
      subtitle: "Enterprise AI Challenges",
      content: "• 73% of enterprises struggle with AI implementation\n• Complex integration processes\n• Lack of specialized expertise\n• High development costs and time",
      icon: Target,
      gradient: "from-red-500 to-red-400"
    },
    {
      title: "Our Solution",
      subtitle: "AI Made Simple",
      content: "• Plug-and-play AI solutions\n• 90% faster implementation\n• No-code/low-code platform\n• Enterprise-grade security",
      icon: Award,
      gradient: "from-green-500 to-green-400"
    },
    {
      title: "Market Opportunity",
      subtitle: "$150B+ AI Market",
      content: "• Global AI market: $150B by 2025\n• Enterprise AI: 45% CAGR\n• 5,000+ potential customers\n• $50B+ addressable market",
      icon: TrendingUp,
      gradient: "from-blue-500 to-blue-400"
    },
    {
      title: "Business Model",
      subtitle: "Scalable Revenue Streams",
      content: "• SaaS Subscriptions (70%)\n• API Usage Fees (20%)\n• Professional Services (10%)\n• Monthly Recurring Revenue: $350K",
      icon: DollarSign,
      gradient: "from-purple-500 to-purple-400"
    },
    {
      title: "Traction & Growth",
      subtitle: "Proven Market Validation",
      content: "• 2,450+ active users\n• 340K MRR (18% growth)\n• 95% customer satisfaction\n• 12+ enterprise clients",
      icon: BarChart3,
      gradient: "from-orange-500 to-orange-400"
    },
    {
      title: "Team",
      subtitle: "World-Class Expertise",
      content: "• CEO: Former Google AI Lead\n• CTO: Ex-Microsoft Research\n• 15+ engineers with AI/ML expertise\n• Advisory board with industry leaders",
      icon: Users,
      gradient: "from-teal-500 to-teal-400"
    },
    {
      title: "Funding & Use of Funds",
      subtitle: "Seeking $5M Series A",
      content: "• Product Development (40%)\n• Sales & Marketing (35%)\n• Team Expansion (20%)\n• Operations (5%)",
      icon: Target,
      gradient: "from-indigo-500 to-indigo-400"
    }
  ];

  const metrics = [
    { label: "Annual Revenue", value: "$2.4M", change: "+180%" },
    { label: "Active Users", value: "2,450", change: "+45%" },
    { label: "Enterprise Clients", value: "12", change: "+200%" },
    { label: "Market Share", value: "0.8%", change: "+60%" }
  ];

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Pitch deck is being downloaded as PDF."
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Pitch deck link copied to clipboard."
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Enzol AI Pitch Deck</h1>
            <p className="text-muted-foreground">Series A Funding Presentation</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              Slide {currentSlide + 1} of {slides.length}
            </span>
            <Badge variant="outline">
              <Eye className="h-3 w-3 mr-1" />
              Live View
            </Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Slide */}
          <div className="lg:col-span-3">
            <Card className="shadow-2xl min-h-[600px] relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} opacity-10`} />
              <CardContent className="p-12 relative z-10 h-full flex flex-col justify-center">
                <div className="text-center space-y-8">
                  <div className="bg-white/10 p-6 rounded-full w-fit mx-auto">
                    {(() => {
                      const IconComponent = slides[currentSlide].icon;
                      return <IconComponent className="h-16 w-16 text-primary" />;
                    })()}
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      {slides[currentSlide].title}
                    </h2>
                    <h3 className="text-2xl text-muted-foreground mb-8">
                      {slides[currentSlide].subtitle}
                    </h3>
                  </div>
                  <div className="max-w-3xl mx-auto">
                    <p className="text-lg leading-relaxed whitespace-pre-line">
                      {slides[currentSlide].content}
                    </p>
                  </div>
                </div>
              </CardContent>
              
              {/* Navigation */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide ? 'bg-primary' : 'bg-muted'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextSlide}
                  disabled={currentSlide >= slides.length - 1}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Metrics */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Key Metrics</CardTitle>
                <CardDescription>Current performance indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{metric.value}</p>
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                    </div>
                    <Badge variant="secondary" className="text-green-600">
                      {metric.change}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Slide Overview */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Presentation Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {slides.map((slide, index) => (
                    <button
                      key={index}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        index === currentSlide 
                          ? 'bg-primary/10 border border-primary/20' 
                          : 'hover:bg-muted/50'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded ${
                          index === currentSlide ? 'bg-primary/20' : 'bg-muted'
                        }`}>
                          <slide.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{slide.title}</p>
                          <p className="text-xs text-muted-foreground">
                            Slide {index + 1}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Interested in Learning More?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our investment team to discuss opportunities.
                </p>
                <Button size="sm" className="w-full">
                  Contact Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}