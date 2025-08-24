import { useEffect, useState } from "react";
import { Bell, Search, Settings, User, Moon, Sun, Crown, LogOut, Menu, X, PanelLeft, PanelLeftClose, Zap, Palette } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

export function AuthorizedNavbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [notifications] = useState(3); // Mock notification count
  const [userFirstName] = useState("John"); // Mock user name
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = window.location.pathname;
  const [theme, setTheme] = useState<'dark' | 'light' | 'absolute-white' | 'purple'>('dark');
  const isActive = (path: string) => currentPath === path;

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | 'absolute-white' | 'purple' || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: 'dark' | 'light' | 'absolute-white' | 'purple') => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light', 'absolute-white', 'purple');
    root.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const cycleTheme = () => {
    const themeOrder: ('dark' | 'light' | 'absolute-white' | 'purple')[] = ['dark', 'light', 'absolute-white', 'purple'];
    const currentIndex = themeOrder.indexOf(theme);
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'dark':
        return <Moon className="h-5 w-5" />;
      case 'light':
        return <Sun className="h-5 w-5" />;
      case 'absolute-white':
        return <Palette className="h-5 w-5" />;
      case 'purple':
        return <Zap className="h-5 w-5" />;
      default:
        return <Moon className="h-5 w-5" />;
    }
  };

  const handleSidebarToggle = () => {
    // Dispatch event to toggle our custom sidebar
    window.dispatchEvent(new CustomEvent('toggleSidebar'));
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...");
    setShowLogoutDialog(false);
    // Redirect to home page or login
    window.location.href = "/";
  };

  
type NavigationItem = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
};

const navigation: NavigationItem[] = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Tools & Workspace", href: "/tools" },
  { name: "Subscription", href: "/subscription" },
  { name: "Team", href: "/team" },
  { name: "Help & Support", href: "/help" },
  { name: "Feedback", href: "/feedback" },
  { name: "Profile", href: "/profile" },
  { name: "Settings", href: "/settings" },
  { name: "Notification", href: "/notifications" },
];

  return (
    <nav className="glass-nav sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left side - Sidebar trigger and search */}
        <div className="flex items-center space-x-2 md:space-x-4 min-w-0 flex-1 hidden sm:flex">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSidebarToggle}
            className="text-foreground hover:text-primary flex-shrink-0"
          >
            <PanelLeft className="h-5 w-5" />
          </Button>

          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tools, projects..."
              className="pl-10 w-48 md:w-64 glass-input border-border/50 focus:border-primary/50"
            />
          </div>
        </div>

        {/* Mobile menu - Toggle */}
        <div className="sm:hidden">
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

        



        {/* Right side - User controls */}
        <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
          {/* Upgrade to Pro */}
          <Button
            variant="outline"
            size="sm"
            className="hidden lg:flex items-center gap-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 glow-primary"
          >
            <Crown className="h-4 w-4" />
            <span className="text-xs font-medium">Upgrade</span>
          </Button>


          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={cycleTheme}
            className="text-foreground hover:text-primary transition-all duration-300"
            title={`Current theme: ${theme.replace('-', ' ')}. Click to cycle.`}
          >
            {getThemeIcon()}
          </Button>

          

          {/* Notifications */}
          <Button
            variant="ghost"
            size="sm"
            className="relative text-foreground hover:text-primary transition-all duration-300"
          >
            <Bell className="h-5 w-5" />
            {notifications > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-primary text-primary-foreground p-0 flex items-center justify-center animate-pulse">
                {notifications}
              </Badge>
            )}
          </Button>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 hover:bg-muted/50 px-2 md:px-4 transition-all duration-300">
                <Avatar className="h-8 w-8 ring-2 ring-primary/20">
                  <AvatarImage src="/placeholder-user.jpg" alt={userFirstName} />
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    {userFirstName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden lg:block text-foreground font-medium">{userFirstName}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-56 glass-card border-border/50 shadow-elegant"
            >
              <DropdownMenuLabel className="text-foreground font-semibold">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300" onClick={() => window.location.href = '/profile'}>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300" onClick={() => window.location.href = '/settings'}>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300" onClick={() => window.location.href = '/notifications'}>
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Crown className="mr-2 h-4 w-4" />
                Upgrade to Pro
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem 
                    className="text-destructive hover:text-destructive hover:bg-destructive/10 transition-all duration-300"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </AlertDialogTrigger>
                <AlertDialogContent className="glass-card border-border/50 shadow-elegant">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-foreground">Confirm Logout</AlertDialogTitle>
                    <AlertDialogDescription className="text-muted-foreground">
                      Are you sure you want to logout? You'll need to sign in again to access your account.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="glass-input border-border/50 hover:bg-muted/50">Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleLogout} className="bg-destructive hover:bg-destructive/90 shadow-glow">
                      Logout
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden absolute top-12 w-full backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 z-40 mt-4 glass-nav bg-background/95">
              {navigation.map((item) => (
                <div key={item.name}>
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
              
              {/* <div className="pt-4 space-y-2">
                <Link to="/signin" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full glow-primary">
                    Get Started
                  </Button>
                </Link>
              </div> */}
            </div>
          </div>
        )}
    </nav>
  );
}