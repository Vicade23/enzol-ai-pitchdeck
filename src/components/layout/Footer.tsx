import { Link } from "react-router-dom";
import { Brain, Linkedin, Twitter, Instagram, Youtube, Github } from "lucide-react";
import Logo from "../../assets/enzol-logo.png"

const navigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Investors", href: "/investors" },
    { name: "Partnership", href: "/partnership" },
  ],
  product: [
    { name: "Tools", href: "/tools" },
    { name: "Pricing", href: "/subscription" },
    { name: "Research", href: "/research" },
    { name: "Engineering", href: "/engineering" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Documentation", href: "/docs" },
    { name: "Support", href: "/support" },
    { name: "Feedback", href: "/feedback" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Security", href: "/security" },
  ],
};

const socialMedia = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/enzol-ai",
    icon: Linkedin,
  },
  // {
  //   name: "Twitter",
  //   href: "https://twitter.com/enzol",
  //   icon: Twitter,
  // },
  // {
  //   name: "Instagram", 
  //   href: "https://instagram.com/enzol",
  //   icon: Instagram,
  // },
  // {
  //   name: "YouTube",
  //   href: "https://youtube.com/@enzol",
  //   icon: Youtube,
  // },
  {
    name: "GitHub",
    href: "https://github.com/Revo-System",
    icon: Github,
  },
];

export function Footer() {
  return (
    
    <footer className="glass border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className=" xl:gap-8">
          {/* Brand section */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2 justify-center">
              <div className="relative">
                {/* <Brain className="h-8 w-8 text-primary" /> */}
                  <img src={Logo} className='h-8 w-8' alt="logo" />
                <div className="absolute inset-0 text-primary opacity-50 blur-sm">
                  {/* <Brain className="h-8 w-8" /> */}
                  <img src={Logo} className='h-8 w-8' alt="logo" />
                </div>
              </div>
              <span className="text-xl font-bold text-glow">
                Enzol
              </span>
            </div>
            <p className="text-body text-muted-foreground max-w-md mx-auto text-center">
              Advanced AI platform empowering research, learning, and innovation. 
              From academic assignments to cutting-edge engineering projects.
            </p>
            <div className="flex space-x-6 justify-center">
              {socialMedia.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))} 
            </div>
            <div className="text-sm text-muted-foreground text-center">
              <p>Deployed on <span className="text-primary font-medium">Vercel</span></p>
              <p className="mt-1">Maintained by <Link className="underline" to={'https://revosystem.vercel.app/'} target="_blank">Revo system</Link> and contributors</p>
            </div>
          </div>

        </div>

        {/* Bottom section */}
        <div className="mt-16 border-t border-border/50 pt-8 sm:mt-20 md:flex md:items-center justify-center lg:mt-24">
          <p className="mt-8 text-xs leading-5 text-muted-foreground md:order-1 md:mt-0 text-center">
            &copy; 2024 Enzol AI. All rights reserved. Powered by Enzol AI.
          </p>
        </div>
      </div>
    </footer>
  )

  return (
    <footer className="glass border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="relative">
                {/* <Brain className="h-8 w-8 text-primary" /> */}
                  <img className="h-8 w-8" src={Logo} alt="Logo" />
                <div className="absolute inset-0 text-primary opacity-50 blur-sm">
                  {/* <Brain className="h-8 w-8" /> */}
                  <img className="h-8 w-8" src={Logo} alt="Logo" />
                </div>
              </div>
              <span className="text-xl font-bold text-glow">Enzol</span>
            </div>
            <p className="text-body text-muted-foreground max-w-md">
              Advanced AI platform empowering research, learning, and innovation. 
              From academic assignments to cutting-edge engineering projects.
            </p>
            <div className="flex space-x-6">
              {socialMedia.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Deployed on <span className="text-primary font-medium">Vercel</span></p>
              <p className="mt-1">Maintained by <Link className="underline" to={'https://revosystem.vercel.app/'} target="_blank">Revo system</Link> and contributors</p>
            </div>
          </div>

          {/* Links section */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Company
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Product
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Resources
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Legal
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 border-t border-border/50 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            <Link 
              to="/privacy" 
              className="text-sm leading-6 text-muted-foreground hover:text-primary transition-smooth"
            >
              Privacy
            </Link>
            <Link 
              to="/terms" 
              className="text-sm leading-6 text-muted-foreground hover:text-primary transition-smooth"
            >
              Terms
            </Link>
            <Link 
              to="/cookies" 
              className="text-sm leading-6 text-muted-foreground hover:text-primary transition-smooth"
            >
              Cookies
            </Link>
          </div>
          <p className="mt-8 text-xs leading-5 text-muted-foreground md:order-1 md:mt-0">
            &copy; 2024 Enzol AI. All rights reserved. Powered by Enzol AI.
          </p>
        </div>
      </div>
    </footer>
  );

  
}