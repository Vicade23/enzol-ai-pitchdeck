import { Check, Crown, Zap, Star, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for students and beginners",
    icon: Zap,
    color: "text-accent",
    features: [
      "5 AI queries per day",
      "Basic research tools",
      "Image generation (10/month)",
      "Community support",
      "Standard templates"
    ],
    limitations: [
      "Limited to 5 projects",
      "Basic export options",
      "No priority support"
    ],
    current: true
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For power users and professionals",
    icon: Crown,
    color: "text-primary",
    popular: true,
    features: [
      "Unlimited AI queries",
      "Advanced research tools",
      "Unlimited image generation",
      "Priority support",
      "Custom templates",
      "Team collaboration",
      "Advanced analytics",
      "API access"
    ],
    limitations: [],
    current: false
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations and large teams",
    icon: Star,
    color: "text-secondary",
    features: [
      "Everything in Pro",
      "Custom AI models",
      "Dedicated support",
      "SSO integration",
      "Advanced security",
      "White-label options",
      "Custom integrations",
      "SLA guarantee"
    ],
    limitations: [],
    current: false
  }
];

const usageStats = [
  { label: "AI Queries", used: 127, limit: 150, color: "text-primary" },
  { label: "Images Generated", used: 8, limit: 10, color: "text-accent" },
  { label: "Projects", used: 3, limit: 5, color: "text-secondary" },
  { label: "Storage", used: 2.4, limit: 10, color: "text-foreground", unit: "GB" }
];

export default function SubscriptionPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-glow mb-2">Subscription Plans</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan to supercharge your AI-powered research and learning journey
        </p>
      </div>

      {/* Current Usage */}
      <Card className="glass-card border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-foreground flex items-center">
            <Zap className="mr-2 h-5 w-5 text-primary" />
            Current Usage
          </CardTitle>
          <CardDescription>
            Your usage for this billing period
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usageStats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">{stat.label}</span>
                   <span className="text-sm text-muted-foreground">
                     {stat.used}{stat.unit || ""} / {stat.limit === Infinity ? "∞" : stat.limit}{stat.unit || ""}
                   </span>
                </div>
                 <Progress 
                   value={stat.limit === Infinity ? 0 : (stat.used / stat.limit) * 100} 
                   className="h-2"
                 />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`glass-card relative transition-smooth ${
              plan.popular 
                ? "border-primary/50 shadow-lg ring-1 ring-primary/20" 
                : "border-border/50 hover:border-primary/30"
            }`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                Most Popular
              </Badge>
            )}
            
            <CardHeader className="text-center">
              <plan.icon className={`h-12 w-12 ${plan.color} mx-auto mb-4`} />
              <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
              <div className="space-y-1">
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <Button 
                className={`w-full ${
                  plan.current 
                    ? "bg-muted text-muted-foreground cursor-not-allowed" 
                    : plan.popular 
                      ? "glow-primary" 
                      : "border border-border hover:border-primary"
                }`}
                disabled={plan.current}
              >
                {plan.current ? "Current Plan" : plan.name === "Enterprise" ? "Contact Sales" : "Upgrade Now"}
              </Button>

              {plan.current && (
                <p className="text-center text-sm text-muted-foreground">
                  Your current plan
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Comparison */}
      <Card className="glass-card border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-foreground flex items-center">
            <Users className="mr-2 h-5 w-5 text-primary" />
            Feature Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-3 px-4 text-foreground">Feature</th>
                  <th className="text-center py-3 px-4 text-foreground">Starter</th>
                  <th className="text-center py-3 px-4 text-foreground">Pro</th>
                  <th className="text-center py-3 px-4 text-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "AI Queries", starter: "5/day", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Image Generation", starter: "10/month", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Projects", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Team Members", starter: "1", pro: "10", enterprise: "Unlimited" },
                  { feature: "Priority Support", starter: "✗", pro: "✓", enterprise: "✓" },
                  { feature: "API Access", starter: "✗", pro: "✓", enterprise: "✓" },
                  { feature: "Custom Models", starter: "✗", pro: "✗", enterprise: "✓" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border/20">
                    <td className="py-3 px-4 text-foreground">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">{row.starter}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">{row.pro}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}