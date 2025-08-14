import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Target, Award, BarChart } from 'lucide-react';

const GrowthTipsDetails: React.FC = () => {
  const creditScore = {
    score: 742,
    rating: "Good",
    maxScore: 900,
    improvement: "+23 points this month"
  };

  const recommendations = [
    {
      title: "Improve Payment History",
      description: "Maintain consistent payment schedules to boost credit score by 50+ points",
      priority: "high",
      impact: "High Impact",
      timeframe: "3-6 months"
    },
    {
      title: "Diversify Revenue Streams",
      description: "Explore 2-3 additional service offerings to reduce business risk",
      priority: "medium",
      impact: "Medium Impact",
      timeframe: "6-12 months"
    },
    {
      title: "Optimize Working Capital",
      description: "Reduce inventory holding period by 15 days to improve cash flow",
      priority: "high",
      impact: "High Impact",
      timeframe: "1-3 months"
    },
    {
      title: "Digital Marketing Investment",
      description: "Allocate 5-8% of revenue to digital marketing for customer acquisition",
      priority: "medium",
      impact: "Medium Impact",
      timeframe: "3-6 months"
    }
  ];

  const businessMetrics = [
    { label: "Revenue Growth", value: 18, target: 25, unit: "%" },
    { label: "Profit Margin", value: 12, target: 15, unit: "%" },
    { label: "Customer Acquisition", value: 35, target: 50, unit: "/month" },
    { label: "Market Share", value: 8, target: 12, unit: "%" }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 750) return 'text-green-600';
    if (score >= 650) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">📈 Growth Tips</h1>
        <p className="text-muted-foreground">Personalized recommendations to accelerate your business growth</p>
      </div>

      {/* Credit Score Card */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold flex items-center">
            <Award className="h-5 w-5 mr-2" />
            Credit Score Overview
          </h3>
          <Badge className="bg-green-100 text-green-800">{creditScore.improvement}</Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className={`text-4xl font-bold mb-2 ${getScoreColor(creditScore.score)}`}>
              {creditScore.score}
            </div>
            <p className="text-sm text-muted-foreground">Current Score</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold mb-2">{creditScore.rating}</div>
            <p className="text-sm text-muted-foreground">Rating</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold mb-2">{creditScore.maxScore}</div>
            <p className="text-sm text-muted-foreground">Max Score</p>
          </div>
        </div>
        
        <div className="mt-4">
          <Progress value={(creditScore.score / creditScore.maxScore) * 100} className="h-3" />
        </div>
      </Card>

      {/* Business Metrics */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <BarChart className="h-5 w-5 mr-2" />
          Business Performance Metrics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {businessMetrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{metric.label}</span>
                <span>{metric.value}{metric.unit} / {metric.target}{metric.unit}</span>
              </div>
              <Progress value={(metric.value / metric.target) * 100} className="h-2" />
            </div>
          ))}
        </div>
      </Card>

      {/* Key Recommendations */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Target className="h-5 w-5 mr-2" />
          Key Recommendations
        </h3>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <Card key={index} className="p-4">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold">{rec.title}</h4>
                    <Badge className={getPriorityColor(rec.priority)}>
                      {rec.priority} priority
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>Impact: {rec.impact}</span>
                    <span>•</span>
                    <span>Timeline: {rec.timeframe}</span>
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

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2" />
          Take Action
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button className="bg-[#C91429] hover:bg-[#b21224] text-white">
            Get Detailed Advisory Report
          </Button>
          <Button variant="outline">
            Start New Business Analysis
          </Button>
        </div>
      </Card>

      {/* Achievement Badge */}
      <Card className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <div className="text-center">
          <div className="text-4xl mb-2">🏆</div>
          <h3 className="font-semibold mb-2">Growth Achievement</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Your business has shown 18% revenue growth this quarter. Keep up the excellent work!
          </p>
          <Button variant="outline" size="sm">
            View All Achievements
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default GrowthTipsDetails;