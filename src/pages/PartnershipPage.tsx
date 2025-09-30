import { ArrowRight, Handshake, Building2, GraduationCap, Briefcase, Globe, Users, Target } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useEffect, useState } from "react";
import Logo from "../assets/enzol-logo.png"
import Google_developer from "../assets/GDG_logo-removebg-preview.png"
import Microsoft_learn from "../assets/students-ambassador-logo.png"
import Revo_System from "../assets/revo-logo.png"
import { Link } from "react-router-dom";

export default function PartnershipPage() {
  
    useEffect(() => {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      })
    }, [])


  const [companyEmail] = useState('mailto:revoinnovationsystems@gmail.com')
  const partnershipTypes = [
    {
      icon: GraduationCap,
      title: "Academic Partnerships",
      description: "Collaborate with universities and research institutions to advance AI education",
      benefits: [
        "Joint research initiatives",
        "Student internship programs", 
        "Academic licensing discounts",
        "Co-authored publications"
      ]
    },
    {
      icon: Building2,
      title: "Technology Partners",
      description: "Integrate with leading platforms to enhance our AI capabilities",
      benefits: [
        "API integrations",
        "White-label solutions",
        "Technical co-development",
        "Shared infrastructure"
      ]
    },
    {
      icon: Briefcase,
      title: "Enterprise Partners",
      description: "Work with corporations to implement AI solutions at scale",
      benefits: [
        "Custom AI implementations",
        "Enterprise support",
        "Training programs",
        "Dedicated account management"
      ]
    },
    {
      icon: Globe,
      title: "Distribution Partners",
      description: "Expand our global reach through local market expertise",
      benefits: [
        "Local market penetration",
        "Cultural adaptation",
        "Regional support",
        "Revenue sharing models"
      ]
    }
  ];

  const currentPartners = [
    { name: "Google Developer Group", type: "Group", logo: Google_developer, description: "AI research collaboration" },
    { name: "Microsoft Learn", type: "Organization", logo: Microsoft_learn, description: "Student program partnership" },
    { name: "Revo System", type: "Technology", logo: Revo_System, description: "AI/ML platform integration" },
    // { name: "IBM Research", type: "Technology", logo: "🔬", description: "Advanced AI research" },
    // { name: "MIT", type: "Academic", logo: "🏫", description: "Student program partnership" },
    // { name: "AWS", type: "Technology", logo: "⚡", description: "Scalable cloud solutions" }
  ];

  const partnershipBenefits = [
    "Access to cutting-edge AI technology and research",
    "Collaborative development opportunities", 
    "Revenue sharing and business growth",
    "Technical support and integration assistance",
    "Marketing and co-branding opportunities",
    "Priority access to new features and updates"
  ];

  const requirements = [
    {
      title: "Technology Excellence",
      description: "Proven track record in technology innovation and quality"
    },
    {
      title: "Market Presence", 
      description: "Strong brand recognition and customer base in target markets"
    },
    {
      title: "Strategic Alignment",
      description: "Shared vision for advancing AI education and research"
    },
    {
      title: "Commitment",
      description: "Dedicated resources and long-term partnership commitment"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Strategic Partnerships
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Partner with Enzol
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join forces with us to revolutionize AI education and research. Together, we can build 
              innovative solutions that transform how the world learns and discovers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={'/apply-partnership'}>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Become a Partner
                  <Handshake className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to={'/partnership-guide'}>
                <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                  Partnership Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer various partnership models designed to create mutual value and drive innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="glass-card border-border/50 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <type.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Current Partners</h2>
            <p className="text-muted-foreground">
              Trusted by leading organizations worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPartners.map((partner, index) => (
              <Card key={index} className="glass-card border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 d-flex justify-center">{<img className="mx-auto " src={partner.logo} width={70} height={70} alt="Logo"/>}</div>
                  <h3 className="font-semibold text-lg mb-2">{partner.name}</h3>
                  <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary">
                    {partner.type}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Partnership Benefits</h2>
              <p className="text-muted-foreground">
                Unlock exclusive advantages and growth opportunities
              </p>
            </div>
            <div className="grid gap-4">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 glass-card border border-border/50 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partnership Requirements</h2>
            <p className="text-muted-foreground">
              What we look for in our strategic partners
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {requirements.map((req, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Target className="h-5 w-5 text-primary" />
                    <span>{req.title}</span>
                  </CardTitle>
                  <CardDescription className="text-base">{req.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Our Partnership Journey</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to explore how we can work together? Let's discuss how a partnership 
            with Enzol can drive mutual growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Link to={'/apply-partnership'}>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Apply for Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            {/* <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
              Download Partnership Kit
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
}