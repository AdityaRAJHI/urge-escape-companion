
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider } from "@/components/ui/sidebar";
import { Home, Calendar, BookOpen, MessageSquare, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

const Navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Progress", href: "/progress", icon: Calendar },
  { name: "Resources", href: "/resources", icon: BookOpen },
  { name: "Chat Support", href: "/chat", icon: MessageSquare },
  { name: "Settings", href: "/settings", icon: Settings }
];

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-b from-white to-brand-lightPurple/20">
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-50 flex flex-col bg-white border-r border-border transition-all duration-300 ease-in-out",
            isSidebarOpen ? "w-64" : "w-0 md:w-20"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 flex items-center justify-between border-b">
              <h1 
                className={cn(
                  "font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-deepPurple transition-all duration-300", 
                  !isSidebarOpen && "md:scale-0"
                )}
              >
                Urge Escape
              </h1>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleSidebar}
                className={!isSidebarOpen ? "md:ml-2" : ""}
              >
                {isSidebarOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                )}
              </Button>
            </div>

            <div className="py-4 flex-1 overflow-y-auto">
              <nav className="px-2 space-y-1">
                {Navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors",
                        isActive
                          ? "bg-brand-lightPurple text-brand-deepPurple"
                          : "text-gray-600 hover:bg-gray-100",
                        !isSidebarOpen && "md:justify-center"
                      )}
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6" />
                      <span className={cn("ml-3", !isSidebarOpen && "md:hidden")}>
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        <div 
          className={cn(
            "flex-1 transition-all duration-300 ease-in-out",
            isSidebarOpen ? "md:ml-64" : "md:ml-20",
            "mt-0"
          )}
        >
          <Navbar />
          <main className="p-4 md:p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
