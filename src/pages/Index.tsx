import DashboardHeader from "@/components/DashboardHeader";
import ComplianceWidget from "@/components/ComplianceWidget";
import NotificationPanel from "@/components/NotificationPanel";
import RegulatoryChanges from "@/components/RegulatoryChanges";
import BusinessInsights from "@/components/BusinessInsights";
import CompetitorBenchmark from "@/components/CompetitorBenchmark";
import LearningRecommendations from "@/components/LearningRecommendations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Welcome back, Rajesh!</h2>
          <p className="text-muted-foreground">Here's what's happening with your business today.</p>
        </div>
        
        {/* Concept 1: SMART Compliance Manager */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-primary rounded"></div>
            <h3 className="text-lg font-semibold text-foreground">SMART Compliance Manager</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <ComplianceWidget />
            </div>
            <div className="lg:col-span-1">
              <NotificationPanel />
            </div>
            <div className="lg:col-span-1">
              <RegulatoryChanges />
            </div>
          </div>
        </section>
        
        {/* Concept 2: Business Growth Advisor */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-secondary rounded"></div>
            <h3 className="text-lg font-semibold text-foreground">Business Growth Advisor</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <BusinessInsights />
            </div>
            <div className="lg:col-span-1">
              <CompetitorBenchmark />
            </div>
            <div className="lg:col-span-1">
              <LearningRecommendations />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
