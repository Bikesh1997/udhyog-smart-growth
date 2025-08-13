import AdityaBirlaHeader from "@/components/AdityaBirlaHeader";
import LoanComplianceWidget from "@/components/LoanComplianceWidget";
import LoanAlerts from "@/components/LoanAlerts";
import RegulatoryPanel from "@/components/RegulatoryPanel";
import FinancingOpportunities from "@/components/FinancingOpportunities";
import CompetitorAnalysis from "@/components/CompetitorAnalysis";
import LearningResources from "@/components/LearningResources";
import EnhancedLoanStatus from "@/components/EnhancedLoanStatus";
import QuickActions from "@/components/QuickActions";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdityaBirlaHeader />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <div className="space-y-4 p-6 bg-gradient-to-r from-card to-muted/30 rounded-xl border border-border shadow-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-display bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Welcome back, Rajesh!
              </h2>
              <Badge className="bg-gradient-to-r from-success to-success text-success-foreground interactive-scale">
                <Star className="h-3 w-3 mr-1" />
                Premium Account
              </Badge>
            </div>
            <div className="text-right text-sm text-muted-foreground">
              <p>Last login: Today at 9:30 AM</p>
              <p>Account balance: ₹2,45,000</p>
            </div>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Manage your loans, discover growth opportunities, and stay compliant with ease.
          </p>
        </div>
        
        {/* Feature 1: SMART Compliance Manager (Loans) */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
            <div className="w-3 h-8 bg-gradient-to-b from-primary to-primary-dark rounded-full"></div>
            <h3 className="text-heading flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary glow-on-hover" />
              SMART Compliance Manager
            </h3>
            <Badge className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-semibold px-4 py-1">
              Loan Management
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <EnhancedLoanStatus />
            </div>
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
        <section className="space-y-6">
          <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-lg border border-secondary/20">
            <div className="w-3 h-8 bg-gradient-to-b from-secondary to-secondary-dark rounded-full"></div>
            <h3 className="text-heading flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-secondary glow-on-hover" />
              Business Growth Advisor
            </h3>
            <Badge className="bg-gradient-to-r from-secondary/20 to-secondary/10 text-secondary font-semibold px-4 py-1">
              MSME Growth
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <QuickActions />
            </div>
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
        <footer className="pt-8 mt-12 border-t border-border bg-gradient-to-r from-muted/30 to-muted/10 rounded-t-xl">
          <div className="text-center space-y-3 p-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AB</span>
              </div>
              <span className="font-semibold text-foreground">Aditya Birla Finance Limited</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              © 2024 Aditya Birla Finance Limited. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
              Powered by AI-driven insights for better financial decisions
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
