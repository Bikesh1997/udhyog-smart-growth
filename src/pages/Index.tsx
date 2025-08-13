import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AdityaBirlaHeader from "@/components/AdityaBirlaHeader";
import HeroSection from "@/components/HeroSection";
import EnhancedLoanStatus from "@/components/EnhancedLoanStatus";
import LoanComplianceWidget from "@/components/LoanComplianceWidget";
import LoanAlerts from "@/components/LoanAlerts";
import RegulatoryPanel from "@/components/RegulatoryPanel";
import QuickActions from "@/components/QuickActions";
import FinancingOpportunities from "@/components/FinancingOpportunities";
import CompetitorAnalysis from "@/components/CompetitorAnalysis";
import LearningResources from "@/components/LearningResources";
import { User, Crown, TrendingUp, Shield, Briefcase, MapPin, Phone, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdityaBirlaHeader />
      <HeroSection />
      
      {/* Welcome Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg border border-gray-100">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <User className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground">Welcome back, Rajesh!</h1>
                  <p className="text-lg text-muted-foreground">Your financial dashboard is ready with AI-powered insights</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <Badge className="bg-primary text-primary-foreground px-6 py-3 text-sm">
                  <Crown className="h-4 w-4 mr-2" />
                  Premium Account
                </Badge>
                <Badge variant="outline" className="border-green-500 text-green-700 bg-green-50 px-6 py-3 text-sm">
                  <Shield className="h-4 w-4 mr-2" />
                  Verified MSME
                </Badge>
                <Badge variant="outline" className="border-blue-500 text-blue-700 bg-blue-50 px-6 py-3 text-sm">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Credit Score: 785
                </Badge>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="text-center lg:text-right">
                <p className="text-sm text-muted-foreground font-medium">Total Portfolio Value</p>
                <p className="text-3xl font-bold text-primary">₹45,67,890</p>
              </div>
              <Button size="lg" className="btn-primary px-8 py-4">
                <Briefcase className="h-5 w-5 mr-2" />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
        
        {/* SMART Compliance Manager Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-primary/5 px-6 py-3 rounded-full mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold">SMART Compliance Manager</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">AI-Powered Compliance Tracking</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay ahead of regulatory requirements with automated alerts, EMI tracking, and intelligent compliance management
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="xl:col-span-2">
              <EnhancedLoanStatus />
            </div>
            <LoanComplianceWidget />
            <LoanAlerts />
          </div>
          
          <div className="mt-8">
            <RegulatoryPanel />
          </div>
        </div>
        
        {/* Business Growth Advisor Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-secondary/20 px-6 py-3 rounded-full mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold">Business Growth Advisor</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Strategic Growth Insights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unlock market opportunities, analyze competitors, and accelerate your MSME growth with data-driven recommendations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            <QuickActions />
            <FinancingOpportunities />
            <div className="xl:col-span-2">
              <CompetitorAnalysis />
            </div>
          </div>
          
          <div className="mt-8">
            <LearningResources />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 22 6652 5000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>customercare@adityabirlacapital.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Careers</h3>
              <div className="space-y-2 text-white/80">
                <div>Aditya Birla Group Leadership Programme</div>
                <div>Global Manufacturing and Leadership Program</div>
                <div>Decentralisation of Ranking Services</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2 text-white/80">
                <div>Privacy Notice</div>
                <div>Grievance Notice</div>
                <div>Job Portal</div>
                <div>Terms & Conditions</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-white/80 mb-4">Subscribe to our newsletter for the latest news straight to your inbox.</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Subscribe
              </Button>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>© 2024 All Rights Reserved - Aditya Birla Management Corporation Pvt. Ltd.</p>
            <p className="mt-2">Powered by AI-driven insights for MSME growth and financial excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
