import { 
  LayoutDashboard, 
  Wrench, 
  CreditCard, 
  Users, 
  HelpCircle, 
  MessageSquare,
  LogOut,
  Brain,
  Settings,
  User,
  Bell,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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

const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Tools & Workspace", url: "/tools", icon: Wrench },
  { title: "Subscription", url: "/subscription", icon: CreditCard },
  { title: "Team", url: "/team", icon: Users },
  { title: "Help & Support", url: "/help", icon: HelpCircle },
  { title: "Feedback", url: "/feedback", icon: MessageSquare },
];

const userMenuItems = [
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Notifications", url: "/notifications", icon: Bell },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [showLogoutText, setShowLogoutText] = useState(false);

  const isActive = (path: string) => currentPath === path;

  // Listen for toggle events from navbar
  useEffect(() => {
    const handleToggle = () => {
      toggleSidebar();
    };

    window.addEventListener('toggleSidebar', handleToggle);
    return () => {
      window.removeEventListener('toggleSidebar', handleToggle);
    };
  }, [isCollapsed]);

  const handleLogout = () => {
    console.log("Logging out...");
    setShowLogoutDialog(false);
    window.location.href = "/";
  };

  const toggleSidebar = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    setTimeout(() => {
      setShowLogoutText(true)
    }, 5000);
    
    // Dispatch custom event to notify layout
    window.dispatchEvent(new CustomEvent('sidebarToggle', {
      detail: { collapsed: newCollapsedState }
    }));
  };

  return (
    <>
    
      <div 
        // hidden sm:flex
        className={` 
        fixed left-0 top-0 h-screen z-40 transition-all duration-200 ease-in-out
        ${isCollapsed ? " sm:w-16" : "sm:w-64"}
        bg-sidebar border-r border-sidebar-border shadow-lg
        hidden sm:flex flex-col
      `}>
        {/* Header */}
        <div className="px-4 py-3 border-b border-sidebar-border bg-sidebar-accent/5">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary rounded-lg">
                  <Brain className="h-6 w-6 text-primary-foreground" />
                </div>
                <h1 className="text-xl font-bold text-sidebar-foreground">Enzol</h1>
              </div>
            )}
            {isCollapsed && (
              <div className="p-2 bg-primary rounded-lg mx-auto">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
            )}
            {/* <button
              onClick={toggleSidebar}
              className="text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent h-8 w-8 rounded flex items-center justify-center transition-colors"
            >
              {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </button> */}
          </div>
        </div>

        {/* Navigation - scrollable area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 sidebar-scrollbar sidebar-scrollbar-sec-testing">
          {/* Main Navigation */}
          <div>
            {!isCollapsed && (
              <h2 className="text-xs font-semibold text-sidebar-muted uppercase tracking-wider mb-3">
                {/* Navigation */}
              </h2>
            )}
            <nav className="space-y-1">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.url} // ${isActive && isCollapsed ? 'p-0' : ''} ${!isActive && isCollapsed ? 'p-0 text-muted-foreground' : ''}
                  className={({ isActive }) => `
                    flex items-center gap-3 px-0 py-3 rounded-lg transition-all duration-200 text-muted-foreground ${!isCollapsed ? 'px-3' : ''}
                    ${isActive
                      ? ''
                      // "bg-sidebar-accent text-sidebar-accent-foreground border border-sidebar-accent/50"
                      : "text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                    }
                    ${isCollapsed ? "justify-center" : ""}
                  `}
                >
                  <item.icon className={` ${isActive(item.url) ? "text-primary" : ""} h-5 w-5`} />
                  {!isCollapsed && (
                    <span className="font-medium">{item.title}</span>
                  )}
                  {isActive(item.url) && !isCollapsed && (
                    <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                  )}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Account Section */}
          {!isCollapsed && (
            <div>
              <h2 className="text-xs font-semibold text-sidebar-muted uppercase tracking-wider mb-3">
                Account
              </h2>
              <nav className="space-y-1">
                {userMenuItems.map((item) => (
                  <NavLink
                    key={item.title}
                    to={item.url}
                    className={({ isActive }) => `
                      flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200
                      ${isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground border border-sidebar-accent/50"
                        : "text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                      }
                    `}
                  >
                    <item.icon className={`h-4 w-4 ${isActive(item.url) ? "text-primary" : ""}`} />
                    <span className="font-medium">{item.title}</span>
                    {isActive(item.url) && (
                      <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                    )}
                  </NavLink>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* Footer with Logout */}
        <div className="px-4 py-3 border-t border-sidebar-border bg-sidebar-accent/5">
          <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
            <AlertDialogTrigger asChild>
              <button
                className={`
                  w-full ${isCollapsed ? "justify-center " : "justify-start px-3"} 
                  py-3 text-destructive hover:text-destructive-foreground hover:bg-destructive/10
                  rounded-lg transition-all duration-200 flex items-center
                `}
              >
                <LogOut className="h-5 w-5" />
                {!isCollapsed && (
                  <span className="ml-3 font-medium">Logout</span>
                )}
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to logout? You'll need to sign in again to access your account.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleLogout}>
                  Logout
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    
    </>
  );
}