import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, TrendingUp, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-primary via-primary-dark to-primary-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-60 h-60 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-white/30 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                AI-Powered MSME Solutions
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                ADITYA BIRLA FINANCE
                <span className="block text-4xl lg:text-5xl mt-2 text-primary-glow">
                  LIMITED (ABFL)
                </span>
              </h1>
              
              <div className="bg-primary text-white px-4 py-2 rounded-md inline-block">
                <span className="text-sm font-medium">Company - Aditya Birla Capital Limited (ABCL)</span>
              </div>
            </div>

            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              Smart Financial Solutions for MSMEs with AI-driven compliance management, 
              business growth insights, and personalized financial advisory services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                Explore Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-3 text-white/80">
                <Users className="h-6 w-6" />
                <div>
                  <div className="font-semibold text-white">2.5M+</div>
                  <div className="text-sm">Active Customers</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <TrendingUp className="h-6 w-6" />
                <div>
                  <div className="font-semibold text-white">₹78,367 Cr</div>
                  <div className="text-sm">Assets Under Management</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Award className="h-6 w-6" />
                <div>
                  <div className="font-semibold text-white">AAA Rated</div>
                  <div className="text-sm">By ICRA & CRISIL</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/b1150222-312d-47db-8988-65d2d1212bac.png"
                alt="Aditya Birla Finance professionals discussing MSME solutions"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">35+ Years</div>
                <div className="text-sm text-muted-foreground">of Excellence</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">23,000+</div>
                <div className="text-sm text-muted-foreground">Employees</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-background" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;