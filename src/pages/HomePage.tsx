import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import Logo from "../assets/enzol-logo.png"
import { 
  Brain, 
  Sparkles, 
  Rocket, 
  Shield, 
  Zap, 
  ArrowRight,
  BookOpen,
  Calculator,
  Beaker,
  Image,
  Code,
  GraduationCap
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Research & Learning",
    description: "Advanced AI-powered research tools for academic excellence and continuous learning.",
  },
  {
    icon: GraduationCap,
    title: "Assignment Support", 
    description: "Intelligent assistance for assignments, projects, and academic tasks.",
  },
  {
    icon: Calculator,
    title: "Engineering Solutions",
    description: "Cutting-edge tools for engineering calculations and technical problem-solving.",
  },
  {
    icon: Beaker,
    title: "Scientific Analysis",
    description: "Advanced scientific computing and data analysis capabilities.",
  },
  {
    icon: Image,
    title: "AI Image Generation",
    description: "State-of-the-art image generation for projects and creative work.",
  },
  {
    icon: Code,
    title: "Code Development",
    description: "AI-powered coding assistance and software development tools.",
  },
];

const stats = [
  { label: "Active Users", value: "10K+" },
  { label: "Research Papers", value: "50K+" },
  { label: "Projects Completed", value: "25K+" },
  { label: "AI Models", value: "100+" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* <Brain className="h-20 w-20 text-primary" /> */}
                  <img className="h-20 w-20" src={Logo} alt="Logo" />
                <div className="absolute inset-0 text-primary opacity-50 blur-lg">
                  {/* <Brain className="h-20 w-20" /> */}
                  <img className="h-20 w-20" src={Logo} alt="Logo" />
                </div>
              </div>
            </div> 
            
            <h1 className="text-hero text-glow mb-6">
              The Future of AI-Powered
              <span className="gradient-primary bg-clip-text text-transparent"> Research & Learning</span>
            </h1>
            
            <p className="text-subtitle text-muted-foreground mb-8 max-w-2xl mx-auto">
              Enzol empowers students, researchers, and professionals with cutting-edge AI technology 
              for research, assignments, engineering projects, and scientific innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/signup">
                <Button variant="primary" size="lg" className="glow-intense text-lg px-8 py-4">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-body text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Powerful AI Tools for
              <span className="gradient-secondary bg-clip-text text-transparent"> Every Need</span>
            </h2>
            <p className="text-subtitle text-muted-foreground">
              From academic research to professional engineering projects, 
              Enzol provides the AI-powered tools you need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="glass-card hover:glow-primary transition-smooth group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl gradient-primary mr-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-body text-muted-foreground group-hover:text-foreground transition-smooth">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass-card text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-accent" />
                <Rocket className="h-8 w-8 text-primary" />
                <Shield className="h-8 w-8 text-secondary" />
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your 
              <span className="gradient-primary bg-clip-text text-transparent"> Workflow?</span>
            </h2>
            
            <p className="text-subtitle text-muted-foreground mb-8">
              Join thousands of researchers, students, and professionals who are already 
              using Enzol to accelerate their work and achieve extraordinary results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="primary" size="lg" className="glow-intense">
                  <Zap className="mr-2 h-5 w-5" />
                  Get Started Free
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="glass" size="lg">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}