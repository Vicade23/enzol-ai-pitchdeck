import { AppSidebar } from "./AppSidebar";
import { AuthorizedNavbar } from "./AuthorizedNavbar";
import { useState, useEffect } from "react";

interface AuthorizedLayoutProps {
  children: React.ReactNode;
}

export function AuthorizedLayout({ children }: AuthorizedLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    // Listen for sidebar state changes
    const handleSidebarToggle = (event: CustomEvent) => {
      setSidebarCollapsed(event.detail.collapsed);
    };

    window.addEventListener('sidebarToggle', handleSidebarToggle as EventListener);
    return () => {
      window.removeEventListener('sidebarToggle', handleSidebarToggle as EventListener);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <div className={`transition-all duration-200 ml-0 ${sidebarCollapsed ? 'sm:ml-16' : 'sm:ml-64'} min-h-screen flex flex-col`} id="main-content" >
        <AuthorizedNavbar />
        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-full mx-auto w-full">
            {children}
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}