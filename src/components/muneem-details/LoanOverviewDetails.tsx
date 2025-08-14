import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, FileText } from 'lucide-react';

const LoanOverviewDetails: React.FC = () => {
  const recommendedLoans = [
    {
      type: "Equipment Finance",
      amount: "₹1-3 Crores",
      rate: "9.2%",
      tenure: "Up to 7 years",
      status: "Pre-approved",
      highlight: true
    },
    {
      type: "Working Capital Loan",
      amount: "₹2-8 Lakhs",
      rate: "11.2%",
      tenure: "12-36 months",
      status: "Available"
    },
    {
      type: "Term Loan",
      amount: "₹5-20 Lakhs",
      rate: "10.8%",
      tenure: "Up to 5 years",
      status: "Available"
    }
  ];

  const loanFeatures = [
    "Minimal documentation",
    "Quick approval process",
    "Flexible repayment options",
    "No hidden charges"
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">💰 Loan Overview</h1>
        <p className="text-muted-foreground">Explore personalized loan opportunities for your business</p>
      </div>

      {/* Best Match Card */}
      <Card className="p-6 border-primary/20 bg-primary/5">
        <div className="flex items-start justify-between mb-4">
          <Badge variant="secondary" className="bg-primary text-white">
            Best Match
          </Badge>
          <TrendingUp className="h-5 w-5 text-primary" />
        </div>
        
        <h3 className="text-xl font-semibold mb-2">Equipment Finance</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div>
            <p className="text-sm text-muted-foreground">Amount</p>
            <p className="font-semibold">₹1-3 Crores</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Interest Rate</p>
            <p className="font-semibold text-green-600">9.2% p.a.</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Tenure</p>
            <p className="font-semibold">Up to 7 years</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <Badge className="bg-green-100 text-green-800">Pre-approved</Badge>
          </div>
        </div>
        
        <Button 
          className="w-full md:w-auto bg-[#C91429] hover:bg-[#b21224] text-white"
        >
          Apply Now
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </Card>

      {/* Other Loan Options */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Other Loan Options</h3>
        <div className="grid gap-4">
          {recommendedLoans.slice(1).map((loan, index) => (
            <Card key={index} className="p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h4 className="font-semibold text-lg">{loan.type}</h4>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span>{loan.amount}</span>
                    <span>•</span>
                    <span>{loan.rate} p.a.</span>
                    <span>•</span>
                    <span>{loan.tenure}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full md:w-auto">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Loan Features */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <FileText className="h-5 w-5 mr-2" />
          Why Choose Our Loans?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {loanFeatures.map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <Button className="flex-1 bg-[#C91429] hover:bg-[#b21224] text-white">
          Start Loan Application
        </Button>
        <Button variant="outline" className="flex-1">
          Calculate EMI
        </Button>
        <Button variant="outline" className="flex-1">
          Download Loan Guide
        </Button>
      </div>
    </div>
  );
};

export default LoanOverviewDetails;
