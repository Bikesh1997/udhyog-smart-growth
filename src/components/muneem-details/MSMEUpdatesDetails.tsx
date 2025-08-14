import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Newspaper, TrendingUp, Globe } from 'lucide-react';

const MSMEUpdatesDetails: React.FC = () => {
  const newsUpdates = [
    {
      category: "Policy Update",
      time: "2 hours ago",
      headline: "Government Launches New MSME Credit Guarantee Scheme",
      summary: "Enhanced credit guarantee coverage up to ₹5 crores for manufacturing MSMEs with reduced collateral requirements.",
      readTime: "3 min read",
      source: "Ministry of MSME"
    },
    {
      category: "Financial Update",
      time: "5 hours ago",
      headline: "RBI Reduces Repo Rate by 0.25%, Benefits MSME Loans",
      summary: "Interest rate reduction expected to lower borrowing costs for small businesses across all sectors.",
      readTime: "2 min read",
      source: "Reserve Bank of India"
    },
    {
      category: "Export News",
      time: "1 day ago",
      headline: "New Export Promotion Scheme for MSMEs Announced",
      summary: "Government introduces simplified export procedures and enhanced incentives for first-time MSME exporters.",
      readTime: "4 min read",
      source: "Export Promotion Council"
    },
    {
      category: "Technology",
      time: "1 day ago",
      headline: "Digital MSME Platform Reaches 1 Million Registrations",
      summary: "Government's digital platform for MSME services achieves milestone with enhanced features for business growth.",
      readTime: "2 min read",
      source: "Digital India Initiative"
    },
    {
      category: "Financial Update",
      time: "2 days ago",
      headline: "GST Compliance Made Easier for Small Businesses",
      summary: "New simplified GST return filing process reduces compliance burden for businesses with turnover below ₹5 crores.",
      readTime: "3 min read",
      source: "GST Council"
    }
  ];

  const trendingTopics = [
    "MSME Registration Online",
    "Udyam Certificate Benefits",
    "Working Capital Loans",
    "Export Incentive Schemes",
    "Digital Payment Benefits"
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Policy Update':
        return 'bg-blue-100 text-blue-800';
      case 'Financial Update':
        return 'bg-green-100 text-green-800';
      case 'Export News':
        return 'bg-purple-100 text-purple-800';
      case 'Technology':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Policy Update':
        return '📋';
      case 'Financial Update':
        return '💰';
      case 'Export News':
        return '🌍';
      case 'Technology':
        return '💻';
      default:
        return '📰';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">📰 MSME Updates</h1>
        <p className="text-muted-foreground">Stay updated with the latest news and developments for MSMEs</p>
      </div>

      {/* Trending Topics */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2" />
          Trending Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map((topic, index) => (
            <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary/10">
              {topic}
            </Badge>
          ))}
        </div>
      </Card>

      {/* Latest News */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Newspaper className="h-5 w-5 mr-2" />
          Latest News & Updates
        </h3>
        <div className="space-y-4">
          {newsUpdates.map((news, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{getCategoryIcon(news.category)}</span>
                    <div className="flex items-center gap-2">
                      <Badge className={getCategoryColor(news.category)}>
                        {news.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {news.time}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-2 hover:text-primary cursor-pointer">
                    {news.headline}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {news.summary}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Source: {news.source}</span>
                    <span>{news.readTime}</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <div className="text-center">
          <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
          <h3 className="font-semibold mb-2">Stay Updated</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get daily MSME news and updates delivered to your email
          </p>
          <div className="flex flex-col md:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 border border-border rounded-md text-sm"
            />
            <Button className="bg-[#C91429] hover:bg-[#b21224] text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button className="bg-[#C91429] hover:bg-[#b21224] text-white">
          View All News & Updates
        </Button>
        <Button variant="outline">
          Browse by Category
        </Button>
        <Button variant="outline">
          Set News Alerts
        </Button>
      </div>
    </div>
  );
};

export default MSMEUpdatesDetails;