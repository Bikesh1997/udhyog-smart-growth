import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, TrendingUp, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Shield className="h-3 w-3 mr-1" />
              Trusted by 50,000+ MSMEs
            </Badge>
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 backdrop-blur-sm">
              <Star className="h-3 w-3 mr-1" />
              AI-Powered Platform
            </Badge>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Smart Financial
            <span className="block bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
              Solutions for MSMEs
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
            Intelligent loan management, compliance automation, and growth insights 
            powered by AI. Streamline your business finances with Aditya Birla Finance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 px-8 py-4">
              Explore Loan Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 px-8 py-4">
              <TrendingUp className="mr-2 h-5 w-5" />
              View Growth Insights
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-white mb-1">₹2,500Cr+</div>
              <div className="text-white/80">Loans Disbursed</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-white mb-1">50,000+</div>
              <div className="text-white/80">Active Customers</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-white mb-1">99.5%</div>
              <div className="text-white/80">Compliance Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;