import { Brain, Users, Rocket, Award, Target, Heart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import Logo from "../assets/enzol-logo.png"
import Emmanuel from "../assets/Emmanuel.jpg"
import Dee from "../assets/Dee.jpg"
import Tobi from "../assets/Tobi.png"
import { useEffect, useState } from "react";

const values = [
  {
    icon: Brain,
    title: "Innovation",
    description: "We push the boundaries of AI technology to create solutions that transform how people learn and research.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of community and collaborative learning to achieve extraordinary results.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, delivering high-quality AI tools and experiences.",
  },
  {
    icon: Heart,
    title: "Empowerment",
    description: "We're passionate about empowering individuals to reach their full potential through AI assistance.",
  },
];

const team = [
  {
    name: "Emmanuel Victor",
    role: "CEO & Founder",
    img: Emmanuel,
    description: "Former AI researcher at Revo System, BSc in Telecommunication Engr from Unilorin.",
  },
  {
    name: "Idah Daniel",
    role: "CTO",
    img: Dee,
    description: "AI researcher at Revo System, BSc in Telecommunication Engr from Unilorin.",
  },
  {
    name: "Abigail Tobi",
    role: "Project Manager",
    img: Tobi,
    description: "Product leader with experience at Revo System, expert in AI UX design.",
  },
  {
    name: "Samuel Opeyemi",
    role: "Head of Research",
    // img: Emmanuel,
    description: "Researcher in AI and education technology, former CEO at Surfclick Innovations.",
  },
];

export default function AboutPage() {
  
    useEffect(() => {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      })
    }, [])


  const [companyEmail] = useState('mailto:revoinnovationsystems@gmail.com')
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
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
              Pioneering the Future of
              <span className="gradient-primary bg-clip-text text-transparent"> AI-Powered Learning</span>
            </h1>
            <p className="text-subtitle text-muted-foreground mb-8">
              Enzol was founded with a simple mission: to democratize access to advanced AI tools 
              and empower every student, researcher, and professional to achieve more than they ever thought possible.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-body text-muted-foreground">
                <p>
                  Founded in 2024 by a team of AI researchers and educators, Enzol emerged from a shared 
                  frustration with the gap between cutting-edge AI capabilities and practical educational tools.
                </p>
                <p>
                  We witnessed brilliant students struggling with research, engineers spending countless hours 
                  on routine calculations, and researchers limited by outdated tools. We knew AI could bridge 
                  these gaps, but existing solutions were either too complex or too simplistic.
                </p>
                <p>
                  Today, Enzol serves thousands of users worldwide, from high school students working on 
                  science projects to PhD researchers pushing the boundaries of their fields. We're proud 
                  to be part of their journey toward discovery and innovation.
                </p>
              </div>
            </div>
            <div className="glass-card">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Research Papers Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">12K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">AI Models</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Values
            </h2>
            <p className="text-subtitle text-muted-foreground">
              The principles that guide everything we do at Enzol
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="glass-card text-center group hover:glow-primary transition-smooth">
                <div className="inline-flex p-3 rounded-xl gradient-primary mb-4">
                  <value.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-body text-muted-foreground group-hover:text-foreground transition-smooth">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-subtitle text-muted-foreground">
              The brilliant minds behind Enzol's revolutionary AI platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="glass-card text-center">
                
                {!member.img && <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>}

                {member.img && <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <img src={member.img} className="rounded-full" alt="image"/>
                </div>}

                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass-card text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-subtitle text-muted-foreground mb-8">
              Be part of the AI revolution in education and research. 
              Start your journey with Enzol today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/investors"> 
                <Button variant="primary" size="lg" className="glow-primary">
                  Interested in Investing?
                </Button>
              </Link>
              <Link to={'/contact-investment-team'}>
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}