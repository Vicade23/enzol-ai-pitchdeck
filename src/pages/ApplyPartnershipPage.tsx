import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Badge } from "../components/ui/badge";
import { Send, Building, Users, Globe, Award } from "lucide-react";
import { useToast } from "../components/ui/use-toast";

export default function ApplyPartnershipPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    partnershipType: "",
    companySize: "",
    industry: "",
    description: "",
    experience: "",
    expectedRevenue: "",
    timeline: "",
    services: [] as string[],
    agreed: false
  });

  const partnershipTypes = [
    { value: "technology", label: "Technology Partner", description: "Integrate our AI solutions" },
    { value: "reseller", label: "Reseller Partner", description: "Sell our products to your clients" },
    { value: "strategic", label: "Strategic Partner", description: "Long-term collaboration" },
    { value: "integration", label: "Integration Partner", description: "Technical integrations" }
  ];

  const services = [
    "AI Model Development",
    "Data Analytics",
    "Custom Integration",
    "Training & Support",
    "White-label Solutions",
    "API Access"
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, services: [...formData.services, service] });
    } else {
      setFormData({ ...formData, services: formData.services.filter(s => s !== service) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the terms and conditions",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Application Submitted",
      description: "We'll review your partnership application within 5 business days."
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
            Apply for Partnership
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our partner ecosystem and unlock new opportunities for growth and innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Partnership Types Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-3">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{type.label}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </Card>
            ))}
          </div>

          {/* Application Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Partnership Application</CardTitle>
              <CardDescription>
                Complete the form below to apply for a partnership with Enzol AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Company Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center space-x-2">
                    <Building className="h-5 w-5" />
                    <span>Company Information</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company Name *</label>
                      <Input
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Your company name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Website</label>
                      <Input
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourcompany.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company Size</label>
                      <Select value={formData.companySize} onValueChange={(value) => setFormData({ ...formData, companySize: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                          <SelectItem value="small">Small (11-50 employees)</SelectItem>
                          <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                          <SelectItem value="large">Large (200+ employees)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Industry</label>
                      <Input
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        placeholder="e.g., Technology, Healthcare, Finance"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Contact Information</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Contact Name *</label>
                      <Input
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Partnership Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center space-x-2">
                    <Globe className="h-5 w-5" />
                    <span>Partnership Details</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Partnership Type *</label>
                      <Select value={formData.partnershipType} onValueChange={(value) => setFormData({ ...formData, partnershipType: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select partnership type" />
                        </SelectTrigger>
                        <SelectContent>
                          {partnershipTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Expected Timeline</label>
                      <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (1-30 days)</SelectItem>
                          <SelectItem value="short">Short term (1-3 months)</SelectItem>
                          <SelectItem value="medium">Medium term (3-6 months)</SelectItem>
                          <SelectItem value="long">Long term (6+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Expected Annual Revenue</label>
                    <Input
                      value={formData.expectedRevenue}
                      onChange={(e) => setFormData({ ...formData, expectedRevenue: e.target.value })}
                      placeholder="e.g., $100K - $500K"
                    />
                  </div>
                </div>

                {/* Services Interest */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center space-x-2">
                    <Award className="h-5 w-5" />
                    <span>Services of Interest</span>
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                        />
                        <label htmlFor={service} className="text-sm">{service}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company Description *</label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell us about your company, products, and services..."
                      rows={4}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Relevant Experience</label>
                    <Textarea
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      placeholder="Describe your experience with AI, partnerships, or relevant technologies..."
                      rows={3}
                    />
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreement"
                    checked={formData.agreed}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreed: checked as boolean })}
                  />
                  <label htmlFor="agreement" className="text-sm leading-relaxed">
                    I agree to the terms and conditions and confirm that the information provided is accurate. 
                    I understand that Enzol AI will review this application and contact me within 5 business days.
                  </label>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Partnership Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}