import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Star, CheckCircle, Calendar } from 'lucide-react';

const FinancialTipsDetails: React.FC = () => {
  const dailyTip = {
    title: "Smart Cash Flow Management",
    content: "Maintain a cash flow buffer of at least 3 months of operating expenses. This helps you navigate unexpected market changes and ensures business continuity during challenging periods.",
    category: "Cash Flow",
    difficulty: "Easy",
    impact: "High",
    implementationTime: "1 week"
  };

  const essentialTips = [
    {
      title: "Track Daily Expenses",
      description: "Monitor all business expenses daily to identify cost-saving opportunities",
      category: "Expense Management",
      impact: "Medium"
    },
    {
      title: "Separate Business & Personal Finances",
      description: "Maintain separate accounts to improve financial clarity and tax compliance",
      category: "Financial Planning",
      impact: "High"
    },
    {
      title: "Build Emergency Fund",
      description: "Create a reserve fund equivalent to 6 months of operational costs",
      category: "Risk Management",
      impact: "High"
    },
    {
      title: "Automate Regular Payments",
      description: "Set up automatic payments for recurring expenses to avoid late fees",
      category: "Cash Flow",
      impact: "Medium"
    },
    {
      title: "Review Credit Terms Regularly",
      description: "Audit supplier payment terms and negotiate better deals annually",
      category: "Credit Management",
      impact: "Medium"
    },
    {
      title: "Invoice Promptly",
      description: "Send invoices immediately after delivery to improve cash flow",
      category: "Accounts Receivable",
      impact: "High"
    }
  ];

  const quickWins = [
    {
      title: "Digital Payment Discounts",
      savings: "2-3%",
      description: "Switch to digital payments for supplier transactions"
    },
    {
      title: "Early Payment Discounts",
      savings: "1-2%",
      description: "Take advantage of early payment discounts from suppliers"
    },
    {
      title: "Bulk Purchase Benefits",
      savings: "5-10%",
      description: "Negotiate bulk purchase discounts for regular inventory"
    },
    {
      title: "Energy Efficiency",
      savings: "15-20%",
      description: "Implement energy-saving measures to reduce utility costs"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = [
      'bg-purple-100 text-purple-800',
      'bg-blue-100 text-blue-800',
      'bg-green-100 text-green-800',
      'bg-orange-100 text-orange-800',
      'bg-red-100 text-red-800',
      'bg-yellow-100 text-yellow-800'
    ];
    return colors[Math.abs(category.length) % colors.length];
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">💡 Financial Tips</h1>
        <p className="text-muted-foreground">Daily financial wisdom and actionable advice for your business</p>
      </div>

      {/* Daily Tip Highlight */}
      <Card className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-yellow-200 rounded-full">
            <Lightbulb className="h-6 w-6 text-yellow-800" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold">{dailyTip.title}</h3>
              <Badge className="bg-yellow-200 text-yellow-800">
                Daily Tip
              </Badge>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {dailyTip.content}
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Badge className={getCategoryColor(dailyTip.category)}>
                {dailyTip.category}
              </Badge>
              <Badge className={getImpactColor(dailyTip.impact)}>
                {dailyTip.impact} Impact
              </Badge>
              <Badge variant="outline">
                {dailyTip.implementationTime}
              </Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Wins Section */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Star className="h-5 w-5 mr-2 text-yellow-500" />
          Quick Cost-Saving Wins
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickWins.map((win, index) => (
            <div key={index} className="p-4 border border-border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">{win.title}</h4>
                <Badge className="bg-green-100 text-green-800">
                  Save {win.savings}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{win.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Essential Tips */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <CheckCircle className="h-5 w-5 mr-2" />
          Essential Financial Tips
        </h3>
        <div className="grid gap-4">
          {essentialTips.map((tip, index) => (
            <Card key={index} className="p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{tip.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{tip.description}</p>
                  <div className="flex gap-2">
                    <Badge className={getCategoryColor(tip.category)}>
                      {tip.category}
                    </Badge>
                    <Badge className={getImpactColor(tip.impact)}>
                      {tip.impact} Impact
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Webinar */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <div className="flex items-start gap-4">
          <Calendar className="h-6 w-6 text-primary mt-1" />
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Upcoming Financial Webinar</h3>
            <p className="text-sm text-muted-foreground mb-3">
              "Advanced Cash Flow Management for MSMEs" - Join our expert-led session on optimizing your business finances.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">March 28, 2024 at 3:00 PM</span>
              <Button size="sm" className="bg-[#C91429] hover:bg-[#b21224] text-white">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button className="bg-[#C91429] hover:bg-[#b21224] text-white">
          Get Personalized Tips
        </Button>
        <Button variant="outline">
          Download Financial Guide
        </Button>
      </div>

      {/* Success Story */}
      <Card className="p-6 bg-green-50 border-green-200">
        <div className="text-center">
          <div className="text-4xl mb-2">🎯</div>
          <h3 className="font-semibold mb-2">Success Story</h3>
          <p className="text-sm text-muted-foreground mb-4">
            "Following Muneem Ji's cash flow tips, we improved our working capital by 30% in just 3 months!" 
            - Rajesh Kumar, Manufacturing MSME
          </p>
          <Button variant="outline" size="sm">
            Read More Success Stories
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default FinancialTipsDetails;