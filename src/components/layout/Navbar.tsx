import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Brain, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import Logo from "../../assets/enzol-logo.png"

const navigation = [
  { name: "About", href: "/" },
  { name: "Investors", href: "/investors" },
  { name: "Partnership", href: "/partnership" },
  { name: "Fundraising", href: "/fundraising" },
  // { 
  //   name: "Company", 
  //   href: "#",
  //   dropdown: [
  //     // { name: "Investors", href: "/investors" },
  //     // { name: "Partnership", href: "/partnership" },
  //     // { name: "Fundraising", href: "/fundraising" },
  //   ]
  // },
];

// mailto:hello@enzol.ai
const newNavigation = [
    // { name: "Team", href: "/team" },
    { name: "Investors", href: "/investors" },
    { name: "Partnership", href: "/partnership" },
    { name: "Fundraising", href: "/fundraising" }
];


export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const location = useLocation();
  const [companyEmail] = useState('mailto:revoinnovationsystems@gmail.com')

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                {/* <Brain className="h-8 w-8 text-primary" /> */}
                  <img className="h-8 w-8" src={Logo} alt="Logo" />
                <div className="absolute inset-0 text-primary opacity-50 blur-sm">
                  {/* <Brain className="h-8 w-8" /> */}
                  <img className="h-8 w-8" src={Logo} alt="Logo" />
                </div>
              </div>
              <span className="text-xl font-bold text-glow">Enzol</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {/* @ts-ignore */}
                  {item.dropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setCompanyDropdownOpen(true)}
                      // onMouseLeave={() => setCompanyDropdownOpen(false)}
                      onClick={() => companyDropdownOpen ? setCompanyDropdownOpen(false) : setCompanyDropdownOpen(true)}
                    >
                      <button className="flex items-center text-body hover:text-primary transition-smooth">
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {companyDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 glass-card border border-border/50 z-50" onMouseLeave={() => setCompanyDropdownOpen(false)}>
                          {/* {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={cn(
                                "block px-4 py-2 text-sm transition-smooth hover:bg-primary/10",
                                isActive(subItem.href) ? "text-primary" : "text-foreground"
                              )}
                            >
                              {subItem.name}
                            </Link>
                          ))} */}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        "text-body transition-smooth hover:text-primary",
                        isActive(item.href) ? "text-primary font-medium" : ""
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Link to="/signin">
              <Button variant="ghost" className="text-body">
                Sign In
              </Button>
            </Link> */}
            <Link to={'/contact-investment-team'}>
              <Button variant="primary" className="glow-primary">
                Contact Team
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-card mt-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {/* @ts-ignore */}
                  {item.dropdown ? (
                    <div>
                      <div className="block px-3 py-2 text-base font-medium text-foreground">
                        {item.name}
                      </div>
                      {/* {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={cn(
                            "block px-6 py-2 text-sm transition-smooth",
                            isActive(subItem.href) 
                              ? "text-primary font-medium" 
                              : "text-muted-foreground hover:text-primary"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))} */}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-3 py-2 text-base font-medium transition-smooth",
                        isActive(item.href) 
                          ? "text-primary font-medium" 
                          : "text-foreground hover:text-primary"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 space-y-2">
                {/* <Link to="/signin" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full">
                    Sign In
                  </Button>
                </Link> */}
                <Link to={'/contact-investment-team'} onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full glow-primary">
                    Contact Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}