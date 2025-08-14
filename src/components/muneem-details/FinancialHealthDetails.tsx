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
  Building2,
  Download,
  BookOpen
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
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI-Powered Financial Health & Risk Assessment
            </h1>
            <p className="text-lg text-muted-foreground">
              Connect your accounting software to get personalized insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card 
              className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-primary hover:scale-105 group"
              onClick={() => handleSoftwareSelect('zoho')}
            >
              <CardContent className="flex flex-col items-center justify-center p-12 h-64">
                <div className="p-4 rounded-full bg-blue-50 dark:bg-blue-950/30 mb-6 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  <BookOpen className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-center text-foreground">Zoho Books</h3>
                <p className="text-sm text-muted-foreground mt-2 text-center">Cloud accounting solution</p>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-primary hover:scale-105 group"
              onClick={() => handleSoftwareSelect('tally')}
            >
              <CardContent className="flex flex-col items-center justify-center p-12 h-64">
                <div className="p-4 rounded-full bg-green-50 dark:bg-green-950/30 mb-6 group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-colors">
                  <Database className="h-16 w-16 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-center text-foreground">Tally</h3>
                <p className="text-sm text-muted-foreground mt-2 text-center">Business management software</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Step 1 - Connect to Your Account Book
  if (currentStep === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <HorizontalStepper />
          
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Connect to Your Account Book
            </h1>
            <p className="text-lg text-muted-foreground">
              Authorize access to your {selectedSoftware === 'zoho' ? 'Zoho Books' : 'Tally'} account
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="border-2 shadow-lg">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                  <div className="p-3 rounded-full bg-primary/10">
                    {selectedSoftware === 'zoho' ? (
                      <BookOpen className="h-8 w-8 text-primary" />
                    ) : (
                      <Database className="h-8 w-8 text-primary" />
                    )}
                  </div>
                  {selectedSoftware === 'zoho' ? 'Zoho Books' : 'Tally'}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-4">
                <p className="text-muted-foreground mb-6">
                  Click below to securely connect your accounting software
                </p>
                <Button 
                  onClick={handleConnect}
                  className="w-full"
                  size="lg"
                >
                  Connect Securely
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Step 2 - CIBIL Report & GST Number
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <HorizontalStepper />
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Financial Documents & GST Details
          </h1>
          <p className="text-lg text-muted-foreground">
            Complete your profile to get comprehensive financial insights
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* GST Number Input */}
          <Card className="border-2 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">GST Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="gst" className="text-base font-medium">GST Number *</Label>
                <Input
                  id="gst"
                  placeholder="Enter your GST number (e.g., 22AAAAA0000A1Z5)"
                  value={gstNumber}
                  onChange={(e) => setGstNumber(e.target.value)}
                  className="h-14 text-lg"
                />
              </div>
            </CardContent>
          </Card>

          {/* Required Documents */}
          <Card className="border-2 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Required Documents</CardTitle>
              <p className="text-muted-foreground">Upload the following documents for analysis</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <Card className="border-2 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-950/30">
                          <CreditCard className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-lg">CIBIL Report</p>
                          <p className="text-sm text-muted-foreground">Upload your credit report for risk assessment</p>
                        </div>
                      </div>
                      <div className="flex justify-center md:justify-end">
                        <Button
                          variant={uploadedFiles.cibil ? "default" : "outline"}
                          onClick={() => handleFileUpload('cibil')}
                          size="lg"
                          className="min-w-32"
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
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-green-50 dark:bg-green-950/30">
                          <FileText className="h-8 w-8 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-lg">ITR (Income Tax Return)</p>
                          <p className="text-sm text-muted-foreground">Last 2 years tax returns for income analysis</p>
                        </div>
                      </div>
                      <div className="flex justify-center md:justify-end">
                        <Button
                          variant={uploadedFiles.itr ? "default" : "outline"}
                          onClick={() => handleFileUpload('itr')}
                          size="lg"
                          className="min-w-32"
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
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-orange-50 dark:bg-orange-950/30">
                          <Building2 className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-lg">Bank Statements</p>
                          <p className="text-sm text-muted-foreground">Last 6 months bank transaction history</p>
                        </div>
                      </div>
                      <div className="flex justify-center md:justify-end">
                        <Button
                          variant={uploadedFiles.bankStatement ? "default" : "outline"}
                          onClick={() => handleFileUpload('bankStatement')}
                          size="lg"
                          className="min-w-32"
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
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              onClick={handleSubmit}
              className="flex-1"
              size="lg"
              disabled={!isFormValid}
            >
              Generate Analysis
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="flex-1 sm:flex-none sm:min-w-48"
              onClick={() => {
                // Handle export report functionality
                console.log('Export report clicked');
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialHealthDetails;