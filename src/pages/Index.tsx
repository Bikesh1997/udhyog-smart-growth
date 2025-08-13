import AdityaBirlaHeader from "@/components/AdityaBirlaHeader";
import HeroSection from "@/components/HeroSection";
import LoanComplianceWidget from "@/components/LoanComplianceWidget";
import LoanAlerts from "@/components/LoanAlerts";
import RegulatoryPanel from "@/components/RegulatoryPanel";
import FinancingOpportunities from "@/components/FinancingOpportunities";
import CompetitorAnalysis from "@/components/CompetitorAnalysis";
import LearningResources from "@/components/LearningResources";
import EnhancedLoanStatus from "@/components/EnhancedLoanStatus";
import QuickActions from "@/components/QuickActions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Star, Users, CheckCircle, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdityaBirlaHeader />
      <HeroSection />
      
      <main className="py-0">
        {/* Welcome Section - Premium Corporate Style */}
        <section className="bg-gradient-to-b from-background to-muted/10 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <Badge className="bg-primary text-primary-foreground border-0 px-4 py-2 text-sm font-medium">
                      <Star className="h-4 w-4 mr-2" />
                      Premium MSME Partner
                    </Badge>
                  </div>
                  <h2 className="text-display text-foreground mb-6">
                    Welcome back, 
                    <span className="block text-primary mt-2">Rajesh Kumar</span>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                    Access your intelligent dashboard to manage loans, track compliance, 
                    and discover growth opportunities tailored for your business success.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/20 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground">Last Login</div>
                        <div className="text-muted-foreground text-sm">Today at 9:30 AM</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/20 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground">Account Balance</div>
                        <div className="text-muted-foreground text-sm">₹2,45,000</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1 flex flex-col gap-4">
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-2xl border border-primary/20 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">98.5%</div>
                    <div className="text-base font-medium text-foreground mb-1">Compliance Score</div>
                    <div className="text-muted-foreground text-sm">Industry leading</div>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-6 rounded-2xl border border-secondary/20 text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">₹15L</div>
                    <div className="text-base font-medium text-foreground mb-1">Available Credit</div>
                    <div className="text-muted-foreground text-sm">Ready to deploy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* SMART Compliance Manager - Corporate Style */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="bg-primary text-primary-foreground border-0 px-4 py-2 text-sm font-medium mb-6">
                  <Shield className="h-4 w-4 mr-2" />
                  SMART Compliance Manager
                </Badge>
                <h2 className="text-display text-foreground mb-6">
                  Intelligent Loan Management
                  <span className="block text-primary mt-2">& Compliance Automation</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Automate compliance tracking, manage EMI schedules, and stay ahead of regulatory changes 
                  with our AI-powered platform designed specifically for MSMEs.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="flex flex-col gap-8 min-h-0">
                  <div className="flex-1">
                    <EnhancedLoanStatus />
                  </div>
                  <div className="flex-1">
                    <LoanComplianceWidget />
                  </div>
                </div>
                <div className="flex flex-col gap-8 min-h-0">
                  <div className="flex-1">
                    <LoanAlerts />
                  </div>
                  <div className="flex-1">
                    <RegulatoryPanel />
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 px-8 py-4 text-base font-semibold rounded-full shadow-lg"
                >
                  View Complete Compliance Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Business Growth Advisor - Corporate Style */}
        <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="bg-secondary text-white border-0 px-4 py-2 text-sm font-medium mb-6">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Business Growth Advisor
                </Badge>
                <h2 className="text-display text-foreground mb-6">
                  AI-Powered Growth Insights
                  <span className="block text-secondary mt-2">for Your Business Success</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Discover market opportunities, benchmark against competitors, and accelerate your 
                  business growth with personalized insights and intelligent financing recommendations.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="flex flex-col gap-8 min-h-0">
                  <div className="flex-1">
                    <QuickActions />
                  </div>
                  <div className="flex-1">
                    <FinancingOpportunities />
                  </div>
                </div>
                <div className="flex flex-col gap-8 min-h-0">
                  <div className="flex-1">
                    <CompetitorAnalysis />
                  </div>
                  <div className="flex-1">
                    <LearningResources />
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 px-8 py-4 text-base font-semibold rounded-full"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Explore All Growth Solutions
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Premium Corporate Footer */}
        <footer className="bg-gradient-to-b from-background via-muted/20 to-muted py-16 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-8">
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src="/lovable-uploads/ad8a5a9e-0db9-47d7-8fea-a24e25d8d4de.png" 
                    alt="Aditya Birla Group" 
                    className="h-12 w-auto"
                  />
                  <div className="text-left border-l border-border pl-4">
                    <div className="text-xl font-bold text-foreground">Finance Limited</div>
                    <div className="text-muted-foreground text-sm">Smart Financial Solutions for MSMEs</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
                  <div className="text-center md:text-left">
                    <h4 className="font-bold text-foreground mb-4 text-base">Loan Products</h4>
                    <div className="space-y-2 text-muted-foreground text-sm">
                      <div className="hover:text-primary cursor-pointer transition-colors">Business Loans</div>
                      <div className="hover:text-primary cursor-pointer transition-colors">Working Capital</div>
                      <div className="hover:text-primary cursor-pointer transition-colors">Equipment Finance</div>
                      <div className="hover:text-primary cursor-pointer transition-colors">EMI Calculator</div>
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="font-bold text-foreground mb-4 text-base">Platform</h4>
                    <div className="space-y-2 text-muted-foreground text-sm">
                      <div className="hover:text-primary cursor-pointer transition-colors">Compliance Manager</div>
                      <div className="hover:text-primary cursor-pointer transition-colors">Growth Advisor</div>
                      <div className="hover:text-primary cursor-pointer transition-colors">Digital Dashboard</div>
                      <div className="hover:text-primary cursor-pointer transition-colors">Mobile App</div>
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="font-bold text-foreground mb-4 text-base">Support</h4>
                    <div className="space-y-2 text-muted-foreground text-sm">
                      <div className="hover:text-primary cursor-pointer transition-colors">Customer Care</div>
                      <div className="hover:text-primary cursor-pointer transition-colors">Branch Locator</div>
                      <div className="hover:text-primary cursor-pointer transition-colors">FAQ & Help</div>
                      <div className="hover:text-primary cursor-pointer transition-colors">Grievance Portal</div>
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="font-bold text-foreground mb-4 text-base">Resources</h4>
                    <div className="space-y-2 text-muted-foreground text-sm">
                      <div className="hover:text-primary cursor-pointer transition-colors">Financial Literacy</div>
                      <div className="hover:text-primary cursor-pointer transition-colors">Business Insights</div>
                      <div className="hover:text-primary cursor-pointer transition-colors">Market Reports</div>
                      <div className="hover:text-primary cursor-pointer transition-colors">Regulatory Updates</div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-border pt-8 space-y-4">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted-foreground text-sm">
                      © 2024 Aditya Birla Finance Limited. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
                      <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
                      <span className="hover:text-primary cursor-pointer transition-colors">Cookie Policy</span>
                    </div>
                  </div>
                  <p className="text-center bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent font-bold text-base">
                    Powered by AI-driven insights for smarter financial decisions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
