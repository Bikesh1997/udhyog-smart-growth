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
      
      <main className="py-20">
        {/* Welcome Section - Corporate Style */}
        <section className="bg-gradient-to-b from-muted/30 to-background py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                      <Star className="h-4 w-4 mr-2" />
                      Premium MSME Partner
                    </Badge>
                  </div>
                  <h2 className="text-section-title text-foreground mb-6">
                    Welcome back, 
                    <span className="block text-primary">Rajesh Kumar</span>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Access your intelligent dashboard to manage loans, track compliance, 
                    and discover growth opportunities tailored for your business.
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Last login: Today at 9:30 AM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Account balance: ₹2,45,000</span>
                    </div>
                  </div>
                </div>
                <div className="lg:text-right">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50">
                      <div className="text-2xl font-bold text-primary mb-2">98.5%</div>
                      <div className="text-sm text-muted-foreground">Compliance Score</div>
                    </div>
                    <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50">
                      <div className="text-2xl font-bold text-success mb-2">₹15L</div>
                      <div className="text-sm text-muted-foreground">Available Credit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Solutions - Corporate Style */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-6">
                  <Shield className="h-4 w-4 mr-2" />
                  SMART Compliance Manager
                </Badge>
                <h2 className="text-section-title text-foreground mb-6">
                  Intelligent Loan Management & Compliance
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Automate compliance tracking, manage EMI schedules, and stay ahead of regulatory changes 
                  with our AI-powered platform designed specifically for MSMEs.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="lg:col-span-1 space-y-8">
                  <EnhancedLoanStatus />
                  <LoanComplianceWidget />
                </div>
                <div className="lg:col-span-1 space-y-8">
                  <LoanAlerts />
                  <RegulatoryPanel />
                </div>
              </div>
              
              <div className="text-center">
                <Button size="lg" className="bg-primary hover:bg-primary-dark px-8 py-4">
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
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-2 mb-6">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Business Growth Advisor
                </Badge>
                <h2 className="text-section-title text-foreground mb-6">
                  AI-Powered Growth Insights for Your Business
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Discover market opportunities, benchmark against competitors, and accelerate your 
                  business growth with personalized insights and financing recommendations.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="lg:col-span-1 space-y-8">
                  <QuickActions />
                  <FinancingOpportunities />
                </div>
                <div className="lg:col-span-1 space-y-8">
                  <CompetitorAnalysis />
                  <LearningResources />
                </div>
              </div>
              
              <div className="text-center">
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-4">
                  <Users className="mr-2 h-5 w-5" />
                  Explore All Growth Solutions
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Corporate Footer */}
        <footer className="bg-gradient-to-b from-muted/50 to-muted py-16 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-8">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-elegant">
                    <span className="text-primary-foreground font-bold text-xl">AB</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-foreground">Aditya Birla Finance Limited</div>
                    <div className="text-sm text-muted-foreground">Smart Financial Solutions for MSMEs</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <div>Loan Products</div>
                      <div>Interest Rates</div>
                      <div>Apply Online</div>
                      <div>EMI Calculator</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground mb-3">Support</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <div>Customer Care</div>
                      <div>Branch Locator</div>
                      <div>FAQ</div>
                      <div>Grievance Redressal</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground mb-3">Resources</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <div>Financial Literacy</div>
                      <div>Business Insights</div>
                      <div>Regulatory Updates</div>
                      <div>Investment Tips</div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-border pt-8 space-y-4">
                  <p className="text-muted-foreground">
                    © 2024 Aditya Birla Finance Limited. All rights reserved.
                  </p>
                  <p className="text-sm bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
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
