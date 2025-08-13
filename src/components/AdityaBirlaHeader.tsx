import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, User, Settings, Search, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const AdityaBirlaHeader = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* AB Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-3 rounded-lg shadow-md">
                <span className="text-white font-bold text-xl">AB</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Aditya Birla Finance</h1>
                <p className="text-sm text-muted-foreground font-medium">Smart Financial Solutions for MSMEs</p>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">OUR STORY</a>
              <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">BUSINESS</a>
              <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">MEDIA</a>
              <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">INVESTORS</a>
              <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">COMMUNITY</a>
              <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">SUSTAINABILITY</a>
            </nav>
          </div>

          {/* Right - Actions and User */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search loans, payments, alerts..."
                className="pl-10 pr-4 py-3 w-80 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50"
              />
            </div>

            {/* Trust Badges */}
            <div className="hidden lg:flex items-center space-x-3">
              <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200 px-3 py-1">
                <Shield className="h-3 w-3 mr-1" />
                Secure Dashboard
              </Badge>
              <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200 px-3 py-1">
                Digital Platform
              </Badge>
            </div>
            
            {/* Notifications */}
            <div className="relative">
              <Button 
                size="sm" 
                variant="ghost" 
                className="btn-ghost-enhanced relative"
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              >
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center p-0 animate-pulse">
                  5
                </Badge>
              </Button>
              
              {isNotificationOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-card border border-border rounded-lg shadow-elegant z-50 notification-slide-in">
                  <div className="p-4 border-b border-border">
                    <h3 className="font-semibold text-sm">Notifications</h3>
                  </div>
                  <div className="p-2 space-y-2 max-h-64 overflow-y-auto">
                    <div className="p-3 hover:bg-muted rounded-md cursor-pointer transition-colors">
                      <p className="text-sm font-medium">EMI Due Tomorrow</p>
                      <p className="text-xs text-muted-foreground">₹25,000 payment due</p>
                    </div>
                    <div className="p-3 hover:bg-muted rounded-md cursor-pointer transition-colors">
                      <p className="text-sm font-medium">New Loan Offer</p>
                      <p className="text-xs text-muted-foreground">Pre-approved at 8.5% interest</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Button size="sm" variant="ghost" className="btn-ghost-enhanced">
              <Settings className="h-4 w-4" />
            </Button>
            
            {/* User Profile */}
            <div className="relative">
              <Button 
                size="sm" 
                variant="outline" 
                className="flex items-center gap-2 hover:bg-accent transition-all duration-300 hover:shadow-md"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div className="text-left hidden sm:block">
                  <span className="text-sm font-semibold">Rajesh Kumar</span>
                  <p className="text-xs text-muted-foreground">Premium Customer</p>
                </div>
                <ChevronDown className="h-3 w-3 text-muted-foreground" />
              </Button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-card border border-border rounded-lg shadow-elegant z-50 notification-slide-in">
                  <div className="p-2 space-y-1">
                    <button className="w-full text-left p-2 hover:bg-muted rounded-md text-sm transition-colors">Profile Settings</button>
                    <button className="w-full text-left p-2 hover:bg-muted rounded-md text-sm transition-colors">Account Details</button>
                    <button className="w-full text-left p-2 hover:bg-muted rounded-md text-sm transition-colors">Security</button>
                    <hr className="my-1" />
                    <button className="w-full text-left p-2 hover:bg-muted rounded-md text-sm text-destructive transition-colors">Sign Out</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdityaBirlaHeader;