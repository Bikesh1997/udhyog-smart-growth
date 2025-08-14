import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, AlertCircle, Info } from 'lucide-react';

const RegulatoryUpdatesDetails: React.FC = () => {
  const updates = [
    {
      title: "New MSME Classification Guidelines",
      description: "Updated investment and turnover limits for micro, small, and medium enterprises effective from April 2024.",
      date: "March 15, 2024",
      category: "Policy Update",
      impact: "high",
      affectsYou: true
    },
    {
      title: "GST Rate Changes for Manufacturing",
      description: "Revised GST rates for specific manufacturing sectors including textiles and automotive components.",
      date: "March 10, 2024",
      category: "Tax Update",
      impact: "medium",
      affectsYou: true
    },
    {
      title: "Digital Payment Incentive Scheme Extended",
      description: "Government extends digital payment incentives for MSMEs till December 2024 with enhanced benefits.",
      date: "March 5, 2024",
      category: "Financial Update",
      impact: "medium",
      affectsYou: false
    },
    {
      title: "Export Documentation Simplified",
      description: "New streamlined process for export documentation reduces compliance burden for small exporters.",
      date: "February 28, 2024",
      category: "Export Policy",
      impact: "low",
      affectsYou: false
    },
    {
      title: "Labor Law Compliance Changes",
      description: "Updated labor law requirements for businesses with 10+ employees including new reporting formats.",
      date: "February 25, 2024",
      category: "Compliance",
      impact: "high",
      affectsYou: true
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Policy Update':
        return 'bg-purple-100 text-purple-800';
      case 'Tax Update':
        return 'bg-orange-100 text-orange-800';
      case 'Financial Update':
        return 'bg-green-100 text-green-800';
      case 'Export Policy':
        return 'bg-blue-100 text-blue-800';
      case 'Compliance':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">📋 Regulatory Updates</h1>
        <p className="text-muted-foreground">Stay informed about the latest MSME regulations and policy changes</p>
      </div>

      {/* Quick Summary */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-primary mt-1" />
          <div>
            <h3 className="font-semibold mb-2">Quick Summary</h3>
            <p className="text-sm text-muted-foreground">
              3 updates directly affect your business, 2 general updates for your awareness. 
              Review high-impact changes and take necessary action.
            </p>
          </div>
        </div>
      </Card>

      {/* Updates List */}
      <div className="space-y-4">
        {updates.map((update, index) => (
          <Card key={index} className="p-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-2 mb-3">
                  <FileText className="h-5 w-5 text-muted-foreground mt-1" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="font-semibold text-lg">{update.title}</h4>
                      {update.affectsYou && (
                        <Badge className="bg-[#C91429] text-white">
                          Affects You
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-3">{update.description}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-muted-foreground">{update.date}</span>
                      <Badge className={getCategoryColor(update.category)}>
                        {update.category}
                      </Badge>
                      <Badge className={getImpactColor(update.impact)}>
                        {update.impact} impact
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm">
                  Read More
                </Button>
                {update.affectsYou && (
                  <Button size="sm" className="bg-[#C91429] hover:bg-[#b21224] text-white">
                    Take Action
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Important Notice */}
      <Card className="p-6 border-orange-200 bg-orange-50">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-orange-600 mt-1" />
          <div>
            <h3 className="font-semibold text-orange-800 mb-2">Important Notice</h3>
            <p className="text-sm text-orange-700">
              New MSME classification guidelines will be effective from April 1, 2024. 
              Please review your business classification and update registration if required.
            </p>
            <Button 
              size="sm" 
              className="mt-3 bg-orange-600 hover:bg-orange-700 text-white"
            >
              Check Classification
            </Button>
          </div>
        </div>
      </Card>

      {/* Action Button */}
      <div className="text-center">
        <Button 
          size="lg" 
          className="bg-[#C91429] hover:bg-[#b21224] text-white px-8"
        >
          View All Updates
        </Button>
      </div>
    </div>
  );
};

export default RegulatoryUpdatesDetails;