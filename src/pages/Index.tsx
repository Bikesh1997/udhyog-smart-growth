import MuneemjiMainInterface from '@/components/MuneemjiMainInterface';
import AdityaBirlaHeader from '@/components/AdityaBirlaHeader';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdityaBirlaHeader />
      
      {/* Main Muneem Ji Interface */}
      <MuneemjiMainInterface />
    </div>
  );
};

export default Index;