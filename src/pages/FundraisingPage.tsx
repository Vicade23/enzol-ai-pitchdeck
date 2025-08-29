import { ArrowRight, TrendingUp, Target, DollarSign, Users, Award, Briefcase } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function FundraisingPage() {
  const [companyEmail] = useState('mailto:revoinnovationsystems@gmail.com')
  const fundingRounds = [
    {
      round: "Series A",
      target: "$75K",
      raised: "$11.2K",
      progress: 16,
      status: "Active",
      deadline: "Q4 2025",
      investors: 5
    },
    {
      round: "Seed Round",
      target: "$8K",
      raised: "$8K",
      progress: 100,
      status: "Completed",
      deadline: "Q2 2024",
      investors: 2
    },
    {
      round: "Pre-Seed Round",
      target: "$2K",
      raised: "$2K",
      progress: 100,
      status: "Completed",
      deadline: "Q2 2024",
      investors: 1
    },
  ];

  const useOfFunds = [
    { category: "R&D & Product Development", percentage: 40, amount: "$28K" },
    { category: "Sales & Marketing", percentage: 25, amount: "$17.5K" },
    { category: "Team Expansion", percentage: 20, amount: "$14K" },
    { category: "Operations & Infrastructure", percentage: 15, amount: "$10.5K" }
  ];

  const milestones = [
    { title: "Product Beta Launch (MVP)", status: "Completed", date: "Q4 2024" },
    { title: "First 1000 Users", status: "Completed", date: "Q4 2024" },
    { title: "First 10,000 Users", status: "Completed", date: "Q1 2025" },
    { title: "Series A Close", status: "In Progress", date: "Q3 2025" },
    { title: "Product Launch", status: "Planned", date: "Q4 2025" },
    { title: "International Expansion", status: "Planned", date: "Q4 2025" },
    { title: "Enterprise Partnerships", status: "Planned", date: "2026" },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-glow mb-2">Fundraising</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Track our funding progress and investor relations
          </p>
        </div>
          <Link to={'https://1drv.ms/p/c/3a6edfaff77a327f/EZfBrvNbi5BAvog48GPjliMBK4y3urkDed_KIdKZcXrLsQ?e=s7nnZg'} target='_blank'>
            <Button className="bg-primary hover:bg-primary/90 w-full lg:w-auto">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Pitch Deck
            </Button>
          </Link>
      </div>

      {/* Funding Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Raised</p>
                <p className="text-2xl font-bold text-glow">$21.2k</p>
              </div>
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Investors</p>
                <p className="text-2xl font-bold text-glow">8</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Valuation</p>
                <p className="text-2xl font-bold text-glow">$2M</p>
              </div>
              <Award className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Next Round</p>
                <p className="text-2xl font-bold text-glow">Series B</p>
              </div>
              <Target className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Funding Rounds */}
      <Card className="glass-card border-border/50">
        <CardHeader>
          <CardTitle className="text-xl">Funding Rounds</CardTitle>
          <CardDescription>Current and completed funding rounds</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {fundingRounds.map((round, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{round.round}</h3>
                    <p className="text-sm text-muted-foreground">
                      Target: {round.target} • Deadline: {round.deadline}
                    </p>
                  </div>
                  <Badge 
                    variant={round.status === "Completed" ? "default" : "secondary"}
                    className={round.status === "Completed" ? "bg-green-500/10 text-green-400" : "bg-primary/10 text-primary"}
                  >
                    {round.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress: {round.raised} / {round.target}</span>
                    <span>{round.progress}%</span>
                  </div>
                  <Progress value={round.progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {round.investors} investors committed
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Use of Funds */}
      <Card className="glass-card border-border/50">
        <CardHeader>
          <CardTitle className="text-xl">Use of Funds</CardTitle>
          <CardDescription>How we plan to allocate the Series A funding</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {useOfFunds.map((fund, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{fund.category}</span>
                  <div className="text-right">
                    <span className="font-semibold">{fund.amount}</span>
                    <span className="text-sm text-muted-foreground ml-2">({fund.percentage}%)</span>
                  </div>
                </div>
                <Progress value={fund.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Milestones */}
      <Card className="glass-card border-border/50">
        <CardHeader>
          <CardTitle className="text-xl">Key Milestones</CardTitle>
          <CardDescription>Progress towards our strategic goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border/50">
                <div className="flex items-center space-x-3">
                  <div className={`h-3 w-3 rounded-full ${
                    milestone.status === "Completed" ? "bg-green-400" :
                    milestone.status === "In Progress" ? "bg-primary" : "bg-muted-foreground"
                  }`} />
                  <div>
                    <p className="font-medium">{milestone.title}</p>
                    <p className="text-sm text-muted-foreground">{milestone.date}</p>
                  </div>
                </div>
                <Badge 
                  variant="secondary" 
                  className={
                    milestone.status === "Completed" ? "bg-green-500/10 text-green-400" :
                    milestone.status === "In Progress" ? "bg-primary/10 text-primary" : 
                    "bg-muted/10 text-muted-foreground"
                  }
                >
                  {milestone.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="glass-card border-border/50 bg-gradient-to-r from-primary/10 to-background">
        <CardContent className="p-8 text-center">
          <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Interested in Investing?</h2>
          <p className="text-muted-foreground mb-6">
            Join our journey to revolutionize AI education and research
          </p>
          <Link to={companyEmail}>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}