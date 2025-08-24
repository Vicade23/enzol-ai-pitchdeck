import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import Logo from "../assets/enzol-logo.png"
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock,
  Send,
  Brain
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours",
    contact: "hello@enzol.ai",
    href: "mailto:hello@enzol.ai",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our support team",
    contact: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with us in real-time for instant support",
    contact: "Available 24/7",
    href: "#",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come visit our headquarters",
    contact: "San Francisco, CA",
    href: "#",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* <Brain className="h-12 w-12 text-primary" /> */}
                  <img className="h-12 w-12" src={Logo} alt="Logo" />
              <div className="absolute inset-0 text-primary opacity-50 blur-sm">
                {/* <Brain className="h-12 w-12" /> */}
                  <img className="h-12 w-12" src={Logo} alt="Logo" />
              </div>
            </div>
          </div>
          <h1 className="text-hero text-glow mb-6">
            Get in Touch
          </h1>
          <p className="text-subtitle text-muted-foreground">
            Have questions about Enzol? We're here to help. Reach out to our team 
            and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="glass"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="glass"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company/Organization
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  className="glass"
                  placeholder="Your company or organization"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="glass"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="glass resize-none"
                  placeholder="Tell us more about how we can help you..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full glow-primary"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactMethods.map((method) => (
                  <div key={method.title} className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl gradient-primary">
                      <method.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {method.description}
                      </p>
                      <a
                        href={method.href}
                        className="text-primary hover:text-primary/80 transition-smooth font-medium"
                      >
                        {method.contact}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Support Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </div>
                <div className="pt-2 border-t border-border/50">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency Support</span>
                    <span className="text-primary">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium mb-1">How quickly do you respond?</p>
                  <p className="text-muted-foreground">We typically respond within 24 hours during business days.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Do you offer technical support?</p>
                  <p className="text-muted-foreground">Yes, our technical team provides comprehensive support for all Enzol features.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Can I schedule a demo?</p>
                  <p className="text-muted-foreground">Absolutely! Contact us to schedule a personalized demo of Enzol's capabilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}