import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  Database, 
  Upload, 
  CheckCircle, 
  ArrowRight,
  FileText,
  CreditCard,
  Building
} from 'lucide-react';

const FinancialHealthDetails: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedSoftware, setSelectedSoftware] = useState<string>('');
  const [gstNumber, setGstNumber] = useState('');
  const [checkedItems, setCheckedItems] = useState({
    gst: false,
    cibil: false,
    itr: false,
    bankStatement: false
  });

  const handleSoftwareConnect = (software: string) => {
    setSelectedSoftware(software);
    setStep(2);
  };

  const handleCheckboxChange = (item: string, checked: boolean) => {
    setCheckedItems(prev => ({ ...prev, [item]: checked }));
  };

  const handleProceed = () => {
    setStep(3);
  };

  if (step === 1) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Financial Health Dashboard</h2>
          <p className="text-muted-foreground">AI-powered analysis of your financial data</p>
        </div>

        <Card className="border-2 border-blue-200 bg-blue-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <BarChart3 className="h-5 w-5" />
              AI-Powered Financial Analysis
            </CardTitle>
            <CardDescription className="text-blue-700">
              Connect your accounting software for comprehensive financial insights
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Connect to Accounting Software</h3>
          
          <div className="grid gap-3">
            <Button
              variant="outline"
              className="justify-start gap-3 p-4 h-auto"
              onClick={() => handleSoftwareConnect('tally')}
            >
              <Database className="h-6 w-6 text-green-600" />
              <div className="text-left">
                <p className="font-medium">Connect to Tally</p>
                <p className="text-sm text-muted-foreground">Import your Tally data automatically</p>
              </div>
            </Button>

            <Button
              variant="outline"
              className="justify-start gap-3 p-4 h-auto"
              onClick={() => handleSoftwareConnect('zoho')}
            >
              <Database className="h-6 w-6 text-blue-600" />
              <div className="text-left">
                <p className="font-medium">Connect to Zoho Books</p>
                <p className="text-sm text-muted-foreground">Sync with your Zoho accounting data</p>
              </div>
            </Button>

            <Button
              variant="outline"
              className="justify-start gap-3 p-4 h-auto"
              onClick={() => handleSoftwareConnect('manual')}
            >
              <Upload className="h-6 w-6 text-orange-600" />
              <div className="text-left">
                <p className="font-medium">Upload Financial Statements</p>
                <p className="text-sm text-muted-foreground">Manually upload your financial documents</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Additional Information Required</h2>
          <p className="text-muted-foreground">Please provide the following details for comprehensive analysis</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="gst">GST Number</Label>
            <Input
              id="gst"
              placeholder="Enter your GST number"
              value={gstNumber}
              onChange={(e) => setGstNumber(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Required Documents</h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="cibil"
                  checked={checkedItems.cibil}
                  onCheckedChange={(checked) => handleCheckboxChange('cibil', checked as boolean)}
                />
                <Label htmlFor="cibil" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  CIBIL Report
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="itr"
                  checked={checkedItems.itr}
                  onCheckedChange={(checked) => handleCheckboxChange('itr', checked as boolean)}
                />
                <Label htmlFor="itr" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  ITR (Income Tax Return)
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="bankStatement"
                  checked={checkedItems.bankStatement}
                  onCheckedChange={(checked) => handleCheckboxChange('bankStatement', checked as boolean)}
                />
                <Label htmlFor="bankStatement" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Bank Statements (Last 6 months)
                </Label>
              </div>
            </div>
          </div>
        </div>

        <Button 
          onClick={handleProceed}
          className="w-full"
          size="lg"
          disabled={!gstNumber || !Object.values(checkedItems).some(Boolean)}
        >
          Proceed to Analysis
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Financial Health Analysis</h2>
        <p className="text-muted-foreground">Comprehensive insights from your financial data</p>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Cash Flow Analysis</span>
              <Badge className="bg-green-100 text-green-800">Healthy</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Your cash flow shows positive trends with consistent inflows</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Revenue Trends</span>
              <Badge className="bg-blue-100 text-blue-800">Growing</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">15% month-over-month revenue growth detected</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Expense Patterns</span>
              <Badge className="bg-yellow-100 text-yellow-800">Optimizable</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Identified potential savings in operational expenses</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-primary">Special Offer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-3">Based on your financial health, you're eligible for:</p>
            <div className="bg-primary/10 p-3 rounded-lg">
              <p className="font-semibold text-primary">Business Growth Loan</p>
              <p className="text-sm">Up to ₹50 Lakhs at 8.5% interest rate</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button className="w-full" size="lg">
        <FileText className="h-4 w-4 mr-2" />
        Get Complete Financial Report
      </Button>
    </div>
  );
};

export default FinancialHealthDetails;