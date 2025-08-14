import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, Users, BookOpen, Download } from 'lucide-react';

const GrowthAdvisorDetails: React.FC = () => {
  const handleExportReport = () => {
    // Export functionality to be implemented
    console.log('Exporting growth advisor report...');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Business Growth Advisor</h2>
        <p className="text-muted-foreground">Personalised actionable recommendations for Business Growth</p>
      </div>

      <div className="grid gap-4">
        {/* Market Opportunity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Market Opportunity Identification
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Analysing MSME business data and comparing with larger market trends
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-blue-900">Market Insight</p>
                  <p className="text-sm text-blue-700">
                    We've identified 30% increase in demand for organic textiles. 
                    Have you thought of launching a new product in this segment to capture the market?
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Competitor Benchmarking */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Competitor Benchmarking
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Analysis of public data to provide insights on performance against competitors
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <p className="text-lg font-bold text-green-600">Above Average</p>
                <p className="text-xs text-muted-foreground">Pricing Strategy</p>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <p className="text-lg font-bold text-yellow-600">Needs Improvement</p>
                <p className="text-xs text-muted-foreground">Online Presence</p>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <p className="text-lg font-bold text-green-600">Excellent</p>
                <p className="text-xs text-muted-foreground">Customer Reviews</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning and Development */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Personalised Learning & Development
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Recommended webinars and articles tailored to your business challenges and goals
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Digital Marketing for MSMEs</p>
                  <p className="text-sm text-muted-foreground">Webinar • 2 hours</p>
                </div>
                <Badge>Recommended</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Supply Chain Optimization</p>
                  <p className="text-sm text-muted-foreground">Article • 10 min read</p>
                </div>
                <Badge variant="outline">New</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button 
        onClick={handleExportReport}
        className="w-full"
        size="lg"
      >
        <Download className="h-4 w-4 mr-2" />
        Export Growth Report
      </Button>
    </div>
  );
};

export default GrowthAdvisorDetails;