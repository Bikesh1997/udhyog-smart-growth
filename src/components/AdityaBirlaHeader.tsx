import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, User, Settings, Search, Shield } from "lucide-react";

const AdityaBirlaHeader = () => {
  return (
    <header className="w-full bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold text-lg">AB</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-foreground">Aditya Birla Finance</h1>
                <p className="text-xs text-muted-foreground">Smart Financial Solutions for MSMEs</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-secondary text-secondary-foreground text-xs">
                <Shield className="h-3 w-3 mr-1" />
                Secure Dashboard
              </Badge>
              <Badge variant="outline" className="text-xs">
                Digital Platform
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search loans, payments, alerts..."
                className="pl-10 pr-4 py-2.5 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary w-72 transition-all"
              />
            </div>
            
            <Button size="sm" variant="ghost" className="relative hover:bg-accent transition-colors">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
                5
              </Badge>
            </Button>
            
            <Button size="sm" variant="ghost" className="hover:bg-accent transition-colors">
              <Settings className="h-4 w-4" />
            </Button>
            
            <Button size="sm" variant="outline" className="flex items-center gap-2 hover:bg-accent transition-colors">
              <User className="h-4 w-4" />
              <div className="text-left hidden sm:block">
                <span className="text-sm font-medium">Rajesh Kumar</span>
                <p className="text-xs text-muted-foreground">Premium Customer</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdityaBirlaHeader;