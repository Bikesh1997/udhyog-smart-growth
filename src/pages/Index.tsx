import AdityaBirlaHeader from "@/components/AdityaBirlaHeader";
import LoanComplianceWidget from "@/components/LoanComplianceWidget";
import LoanAlerts from "@/components/LoanAlerts";
import RegulatoryPanel from "@/components/RegulatoryPanel";
import FinancingOpportunities from "@/components/FinancingOpportunities";
import CompetitorAnalysis from "@/components/CompetitorAnalysis";
import LearningResources from "@/components/LearningResources";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdityaBirlaHeader />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-foreground">Welcome back, Rajesh!</h2>
            <Badge className="bg-success text-success-foreground">
              <Star className="h-3 w-3 mr-1" />
              Premium Account
            </Badge>
          </div>
          <p className="text-muted-foreground">Manage your loans, discover growth opportunities, and stay compliant with ease.</p>
        </div>
        
        {/* Feature 1: SMART Compliance Manager (Loans) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-primary rounded"></div>
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              SMART Compliance Manager
            </h3>
            <Badge className="bg-primary/10 text-primary">Loan Management</Badge>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <LoanComplianceWidget />
            </div>
            <div className="lg:col-span-1">
              <LoanAlerts />
            </div>
            <div className="lg:col-span-1">
              <RegulatoryPanel />
            </div>
          </div>
        </section>
        
        {/* Feature 2: Business Growth Advisor (MSME Loan Customers) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-secondary rounded"></div>
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-secondary" />
              Business Growth Advisor
            </h3>
            <Badge className="bg-secondary/10 text-secondary">MSME Growth</Badge>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <FinancingOpportunities />
            </div>
            <div className="lg:col-span-1">
              <CompetitorAnalysis />
            </div>
            <div className="lg:col-span-1">
              <LearningResources />
            </div>
          </div>
        </section>
        
        {/* Footer Section */}
        <footer className="pt-8 border-t border-border">
          <div className="text-center space-y-2">
            <p className="text-xs text-muted-foreground">
              © 2024 Aditya Birla Finance Limited. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Powered by AI-driven insights for better financial decisions
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
