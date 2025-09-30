import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { 
  BookOpen, 
  Users, 
  Target, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Download,
  Building,
  Handshake,
  TrendingUp,
  Award,
  Globe,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PartnershipGuidePage() {
  const partnershipSteps = [
    {
      step: 1,
      title: "Initial Application",
      description: "Submit your partnership application with company details and partnership goals.",
      duration: "1-2 days",
      actions: ["Complete application form", "Provide company documentation", "Define partnership objectives"]
    },
    {
      step: 2,
      title: "Review & Assessment",
      description: "Our team reviews your application and assesses partnership fit.",
      duration: "3-5 days",
      actions: ["Application review", "Company background check", "Technical capability assessment"]
    },
    {
      step: 3,
      title: "Initial Discussion",
      description: "Schedule a call to discuss partnership details and expectations.",
      duration: "1 week",
      actions: ["Partnership strategy call", "Technical requirements review", "Business model alignment"]
    },
    {
      step: 4,
      title: "Agreement & Onboarding",
      description: "Finalize partnership agreement and begin onboarding process.",
      duration: "2-3 weeks",
      actions: ["Contract negotiation", "Legal documentation", "Technical integration setup"]
    }
  ];

  const partnershipTypes = [
    {
      type: "Technology Partner",
      icon: Zap,
      description: "Integrate Enzol AI's technology into your products and services",
      benefits: ["API access", "Technical support", "Co-development opportunities"],
      requirements: ["Technical expertise", "Integration capabilities", "Customer base"],
      commitment: "Medium to High"
    },
    {
      type: "Reseller Partner",
      icon: TrendingUp,
      description: "Sell Enzol AI solutions to your client base",
      benefits: ["Revenue sharing", "Sales training", "Marketing support"],
      requirements: ["Sales experience", "Client relationships", "Market reach"],
      commitment: "Medium"
    },
    {
      type: "Strategic Partner",
      icon: Handshake,
      description: "Long-term strategic collaboration and joint ventures",
      benefits: ["Joint go-to-market", "Shared resources", "Innovation collaboration"],
      requirements: ["Strategic alignment", "Significant resources", "Long-term commitment"],
      commitment: "High"
    },
    {
      type: "Integration Partner",
      icon: Building,
      description: "Create seamless integrations with existing platforms",
      benefits: ["Technical resources", "Integration support", "Joint marketing"],
      requirements: ["Platform compatibility", "Development resources", "User base"],
      commitment: "Medium"
    }
  ];

  const resources = [
    { name: "Partnership Application Form", type: "Form", icon: BookOpen },
    { name: "Technical Integration Guide", type: "PDF", icon: Download },
    { name: "Partner Portal Access", type: "Platform", icon: Globe },
    { name: "Marketing Resource Kit", type: "Package", icon: Award }
  ];

  const benefits = [
    "Access to cutting-edge AI technology",
    "Revenue sharing opportunities",
    "Technical and marketing support",
    "Co-marketing and joint ventures",
    "Priority access to new features",
    "Dedicated partner success manager"
  ];

  const requirements = [
    "Proven track record in your industry",
    "Technical capabilities for integration",
    "Commitment to quality and customer success",
    "Alignment with Enzol AI's values",
    "Adequate resources for partnership",
    "Legal compliance and business credentials"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
            Partnership Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about becoming an Enzol AI partner. 
            From application to success, we've got you covered.
          </p>
        </div>

        {/* Partnership Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipSteps.map((step, index) => (
              <Card key={index} className="shadow-lg relative">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-primary border-primary">
                      Step {step.step}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                {index < partnershipSteps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Types</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((partnership, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <partnership.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{partnership.type}</CardTitle>
                      <Badge variant="secondary">{partnership.commitment} Commitment</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">{partnership.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Benefits</h4>
                    <ul className="space-y-1">
                      {partnership.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Requirements</h4>
                    <ul className="space-y-1">
                      {partnership.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-center space-x-2 text-sm">
                          <Target className="h-4 w-4 text-blue-500" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits & Requirements */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2 text-green-600">
                <Award className="h-6 w-6" />
                <span>Partnership Benefits</span>
              </CardTitle>
              <CardDescription>What you gain as an Enzol AI partner</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2 text-blue-600">
                <Target className="h-6 w-6" />
                <span>Partner Requirements</span>
              </CardTitle>
              <CardDescription>What we look for in potential partners</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <resource.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{resource.name}</h3>
                  <Badge variant="outline">{resource.type}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="shadow-xl bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the Enzol AI partner ecosystem and unlock new opportunities for growth, 
              innovation, and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-lg">
                <Link to="/apply-partnership">
                  <Users className="mr-2 h-5 w-5" />
                  Apply for Partnership
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact-investment-team">
                  Contact Our Team
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}