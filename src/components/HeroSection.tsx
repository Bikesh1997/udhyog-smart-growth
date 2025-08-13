import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, TrendingUp, Star } from "lucide-react";
import heroBg from "@/assets/corporate-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Premium Overlay - Subtle red gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
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
          
          <h1 className="text-hero text-white mb-6 leading-tight max-w-5xl">
            Empowering MSMEs with
            <span className="block text-secondary font-bold">
              Intelligent Financial Solutions
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/95 mb-4 leading-relaxed max-w-4xl font-medium">
            Streamline loan management, automate compliance, and unlock growth opportunities 
            with our AI-powered platform designed specifically for your business success.
          </p>
          
          <p className="text-lg text-white/80 mb-10 max-w-3xl">
            Trusted by 50,000+ MSMEs across India • ₹2,500Cr+ loans disbursed • 99.5% compliance rate
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-secondary hover:text-white transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 px-10 py-5 text-lg font-semibold rounded-full shadow-2xl"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 px-10 py-5 text-lg font-semibold rounded-full"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Explore Solutions
            </Button>
          </div>
          
          {/* Key Stats - Corporate Style */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center sm:text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">₹2,500Cr+</div>
              <div className="text-white/90 text-lg font-medium">Total Loans Disbursed</div>
              <div className="text-secondary text-sm font-semibold mt-1">Since inception</div>
            </div>
            <div className="text-center sm:text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">50,000+</div>
              <div className="text-white/90 text-lg font-medium">Trusted MSMEs</div>
              <div className="text-secondary text-sm font-semibold mt-1">Across India</div>
            </div>
            <div className="text-center sm:text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">99.5%</div>
              <div className="text-white/90 text-lg font-medium">Compliance Score</div>
              <div className="text-secondary text-sm font-semibold mt-1">Industry leading</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;