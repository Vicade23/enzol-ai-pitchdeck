import { ArrowRight, TrendingUp, Users, Globe, Award, Target } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function InvestorsPage() {
  const [companyEmail] = useState('mailto:revoinnovationsystems@gmail.com')
  const metrics = [
    { label: "Revenue Growth", value: "130%", period: "YoY", icon: TrendingUp },
    { label: "Active Users", value: "12K+", period: "Monthly", icon: Users },
    { label: "Markets", value: "4", period: "Countries", icon: Globe },
    { label: "Awards", value: "2", period: "Industry", icon: Award }
  ];

  const milestones = [
    { year: "Q3/25", title: "Series A Funding", amount: "$150K", description: "Led by top-tier VCs to scale AI research capabilities" },
    { year: "2025", title: "MVP Paused", amount: "", description: "Hign maintainance cost" },
    { year: "Q4/24", title: "MVP Launch", amount: "12K+ Users", description: "Successfully launched AI platform prototype with rapid user adoption" },
    { year: "Q2/24", title: "Seed Round", amount: "$5K", description: "Initial funding to build core AI technology and team" },
    { year: "2024", title: "Company Founded", amount: "Team of 5", description: "Started with a vision to democratize AI for research and education" }
  ];

  const investmentOpportunity = [
    "Massive addressable market of $50B+ in AI-powered education and research",
    "Proprietary AI models trained on curated academic and research datasets",
    "Strong network effects with increasing user engagement and retention",
    "Multiple revenue streams: subscriptions, enterprise licenses, API access",
    "Experienced team with proven track record in AI and education technology"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Investment Opportunity
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Invest in the Future of AI Research
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join us in revolutionizing how researchers, students, and professionals leverage AI technology.
              Enzol is at the forefront of democratizing artificial intelligence for education and scientific discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={'https://1drv.ms/p/c/3a6edfaff77a327f/EZfBrvNbi5BAvog48GPjliMBK4y3urkDed_KIdKZcXrLsQ?e=s7nnZg'} target='_blank'>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Download Pitch Deck
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              {/* <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                Schedule Call
              </Button> */}
              <Link to={companyEmail}>
                <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                  Schedule Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Performance Metrics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our rapid growth demonstrates strong market fit and scalable business model
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardContent className="p-6 text-center">
                  <metric.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.period}</div>
                  <div className="text-sm font-medium text-foreground mt-1">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Invest in Enzol?</h2>
              <p className="text-muted-foreground">
                We're positioned to capture significant market share in the rapidly growing AI education sector
              </p>
            </div>
            <div className="grid gap-6">
              {investmentOpportunity.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 glass-card border border-border/50 rounded-lg">
                  <div className="h-6 w-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mt-1">
                    <Target className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Funding Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Funding Milestones</h2>
            <p className="text-muted-foreground">
              Our journey from startup to industry leader
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1 glass-card border-border/50">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{milestone.title}</CardTitle>
                          <CardDescription className="mt-2">{milestone.description}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {milestone.amount}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us to build the future of AI-powered research and education. 
            Contact our team to learn more about investment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={companyEmail}>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Investment Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            {/* <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
              View Financial Data
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
}