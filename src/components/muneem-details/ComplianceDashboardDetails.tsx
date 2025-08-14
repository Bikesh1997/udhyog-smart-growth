import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const ComplianceDashboardDetails: React.FC = () => {
  const complianceItems = [
    {
      title: "TDS Return Filing",
      dueDate: "March 31, 2024",
      status: "pending",
      priority: "high",
      description: "Quarterly TDS return filing for Q4 FY 2023-24"
    },
    {
      title: "GST Return",
      dueDate: "April 20, 2024",
      status: "completed",
      priority: "medium",
      description: "Monthly GST return for March 2024"
    },
    {
      title: "ROC Annual Filing",
      dueDate: "May 30, 2024",
      status: "pending",
      priority: "high",
      description: "Annual return filing with Registrar of Companies"
    },
    {
      title: "EPF Return",
      dueDate: "April 15, 2024",
      status: "pending",
      priority: "medium",
      description: "Monthly EPF return submission"
    }
  ];

  const tdsStatus = {
    currentQuarter: "Q4 FY 2023-24",
    amountDeducted: "₹2,45,600",
    amountDeposited: "₹2,45,600",
    nextDueDate: "March 31, 2024",
    status: "On Track"
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-orange-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

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

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">📊 Compliance Dashboard</h1>
        <p className="text-muted-foreground">Track your regulatory requirements and upcoming deadlines</p>
      </div>

      {/* TDS Status Card */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Calendar className="h-5 w-5 mr-2" />
          TDS Status Overview
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Current Quarter</p>
            <p className="font-semibold">{tdsStatus.currentQuarter}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Amount Deducted</p>
            <p className="font-semibold">{tdsStatus.amountDeducted}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Amount Deposited</p>
            <p className="font-semibold">{tdsStatus.amountDeposited}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Next Due Date</p>
            <p className="font-semibold text-orange-600">{tdsStatus.nextDueDate}</p>
          </div>
        </div>
        <div className="mt-4">
          <Badge className="bg-green-100 text-green-800">{tdsStatus.status}</Badge>
        </div>
      </Card>

      {/* Upcoming Reminders */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Upcoming Compliance Tasks</h3>
        <div className="space-y-4">
          {complianceItems.map((item, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {getStatusIcon(item.status)}
                    <h4 className="font-semibold">{item.title}</h4>
                    <Badge className={getPriorityColor(item.priority)}>
                      {item.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">Due: {item.dueDate}</span>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  {item.status === 'completed' ? 'View Details' : 'Take Action'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button className="bg-[#C91429] hover:bg-[#b21224] text-white">
            File TDS Return
          </Button>
          <Button variant="outline">
            Download Forms
          </Button>
          <Button variant="outline">
            Set Reminders
          </Button>
        </div>
      </Card>

      {/* Action Button */}
      <div className="text-center">
        <Button 
          size="lg" 
          className="bg-[#C91429] hover:bg-[#b21224] text-white px-8"
        >
          View All Compliance Tasks
        </Button>
      </div>
    </div>
  );
};

export default ComplianceDashboardDetails;