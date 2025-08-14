import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import LoanOverviewDetails from './muneem-details/LoanOverviewDetails';
import ComplianceDashboardDetails from './muneem-details/ComplianceDashboardDetails';
import RegulatoryUpdatesDetails from './muneem-details/RegulatoryUpdatesDetails';
import GrowthTipsDetails from './muneem-details/GrowthTipsDetails';
import MSMEUpdatesDetails from './muneem-details/MSMEUpdatesDetails';
import FinancialTipsDetails from './muneem-details/FinancialTipsDetails';

interface MenuOption {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const menuOptions: MenuOption[] = [
  { id: 'compliance', icon: '📊', title: 'Compliance Dashboard', description: 'Track your regulatory requirements and deadlines' },
  { id: 'loans', icon: '💰', title: 'Loan Overview', description: 'Explore loan opportunities and offers' },
  { id: 'regulatory', icon: '📋', title: 'Regulatory Updates', description: 'Stay updated with latest MSME regulations' },
  { id: 'growth', icon: '📈', title: 'Growth Tips', description: 'Get personalized business growth advice' },
  { id: 'msme', icon: '📰', title: 'MSME Updates', description: 'Latest news and updates for MSMEs' },
  { id: 'financial', icon: '💡', title: 'Financial Tips', description: 'Daily financial tips and recommendations' }
];

const MuneemjiMainInterface: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const renderDetailComponent = () => {
    switch (selectedOption) {
      case 'loans':
        return <LoanOverviewDetails />;
      case 'compliance':
        return <ComplianceDashboardDetails />;
      case 'regulatory':
        return <RegulatoryUpdatesDetails />;
      case 'growth':
        return <GrowthTipsDetails />;
      case 'msme':
        return <MSMEUpdatesDetails />;
      case 'financial':
        return <FinancialTipsDetails />;
      default:
        return null;
    }
  };

  if (selectedOption) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-6">
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={() => setSelectedOption(null)}
              className="mb-4 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Menu
            </Button>
          </div>
          {renderDetailComponent()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/generated-image.png"
              alt="Muneem Ji"
              className="h-20 w-20 object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Muneem Ji</h1>
          <p className="text-lg text-muted-foreground">Your Digital Business Assistant</p>
          <p className="text-sm text-muted-foreground mt-2">Choose an option to get started:</p>
        </div>

        {/* Menu Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {menuOptions.map((option) => (
            <Card
              key={option.id}
              className="p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-primary/20 hover:bg-accent/5"
              onClick={() => setSelectedOption(option.id)}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Namaste! Main hoon Muneem Ji – aapke business ka digital saathi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MuneemjiMainInterface;