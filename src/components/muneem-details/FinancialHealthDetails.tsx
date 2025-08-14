import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { 
  Database, 
  Upload, 
  CheckCircle, 
  ArrowRight,
  FileText,
  CreditCard,
  Building2
} from 'lucide-react';

const FinancialHealthDetails: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0); // 0: Initial, 1: Step 1, 2: Step 2
  const [selectedSoftware, setSelectedSoftware] = useState<string>('');
  const [gstNumber, setGstNumber] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState({
    cibil: false,
    itr: false,
    bankStatement: false
  });

  const handleSoftwareSelect = (software: string) => {
    setSelectedSoftware(software);
    setCurrentStep(1);
  };

  const handleConnect = () => {
    setCurrentStep(2);
  };

  const handleFileUpload = (fileType: string) => {
    setUploadedFiles(prev => ({ ...prev, [fileType]: true }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted');
  };

  const isFormValid = gstNumber && Object.values(uploadedFiles).some(Boolean);

  // Horizontal Stepper Component
  const HorizontalStepper = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            currentStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
          }`}>
            {currentStep > 1 ? <CheckCircle className="h-4 w-4" /> : '1'}
          </div>
          <span className="ml-2 text-sm font-medium">Connect Account</span>
        </div>
        
        <div className="flex-1 mx-4">
          <Progress value={currentStep >= 2 ? 100 : currentStep >= 1 ? 50 : 0} className="h-2" />
        </div>
        
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            currentStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
          }`}>
            2
          </div>
          <span className="ml-2 text-sm font-medium">Documents & GST</span>
        </div>
      </div>
    </div>
  );

  // Initial Screen - Connect to Accounting Software
  if (currentStep === 0) {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Connect to Accounting Software</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary aspect-square flex flex-col"
            onClick={() => handleSoftwareSelect('zoho')}
          >
            <CardContent className="flex-1 flex flex-col items-center justify-center p-8">
              <Database className="h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-center">Zoho Books</h3>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary aspect-square flex flex-col"
            onClick={() => handleSoftwareSelect('tally')}
          >
            <CardContent className="flex-1 flex flex-col items-center justify-center p-8">
              <Database className="h-16 w-16 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-center">Tally</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Step 1 - Connect to Your Account Book
  if (currentStep === 1) {
    return (
      <div className="space-y-6">
        <HorizontalStepper />
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Connect to Your Account Book</h2>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Database className="h-6 w-6 text-primary" />
                {selectedSoftware === 'zoho' ? 'Zoho Books' : 'Tally'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                onClick={handleConnect}
                className="w-full"
                size="lg"
              >
                Connect
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Step 2 - CIBIL Report & GST Number
  return (
    <div className="space-y-6">
      <HorizontalStepper />
      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">CIBIL Report & GST Number</h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* GST Number Input */}
        <div className="space-y-2">
          <Label htmlFor="gst" className="text-base font-medium">GST Number *</Label>
          <Input
            id="gst"
            placeholder="Enter your GST number"
            value={gstNumber}
            onChange={(e) => setGstNumber(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Required Documents */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Required Documents</h3>
          
          <div className="grid gap-4">
            <Card className="border-2">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-medium">CIBIL Report</p>
                      <p className="text-sm text-muted-foreground">Upload your credit report</p>
                    </div>
                  </div>
                  <Button
                    variant={uploadedFiles.cibil ? "default" : "outline"}
                    onClick={() => handleFileUpload('cibil')}
                  >
                    {uploadedFiles.cibil ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Uploaded
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        Upload
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium">ITR (Income Tax Return)</p>
                      <p className="text-sm text-muted-foreground">Last 2 years tax returns</p>
                    </div>
                  </div>
                  <Button
                    variant={uploadedFiles.itr ? "default" : "outline"}
                    onClick={() => handleFileUpload('itr')}
                  >
                    {uploadedFiles.itr ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Uploaded
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        Upload
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-6 w-6 text-orange-600" />
                    <div>
                      <p className="font-medium">Bank Statements (Last 6 months)</p>
                      <p className="text-sm text-muted-foreground">Recent bank transaction history</p>
                    </div>
                  </div>
                  <Button
                    variant={uploadedFiles.bankStatement ? "default" : "outline"}
                    onClick={() => handleFileUpload('bankStatement')}
                  >
                    {uploadedFiles.bankStatement ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Uploaded
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        Upload
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Button 
          onClick={handleSubmit}
          className="w-full"
          size="lg"
          disabled={!isFormValid}
        >
          Submit
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default FinancialHealthDetails;