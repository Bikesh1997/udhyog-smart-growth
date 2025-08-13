import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, AlertTriangle, CheckCircle, Clock } from "lucide-react";

const ComplianceWidget = () => {
  const upcomingDeadlines = [
    {
      id: 1,
      title: "GST GSTR-3B Return",
      deadline: "20th Jan 2024",
      daysLeft: 5,
      status: "urgent",
      description: "Monthly return filing for December 2023"
    },
    {
      id: 2,
      title: "TDS Return Filing",
      deadline: "31st Jan 2024",
      daysLeft: 16,
      status: "upcoming",
      description: "Quarterly TDS return for Q3 FY 2023-24"
    },
    {
      id: 3,
      title: "ROC Annual Filing",
      deadline: "30th Mar 2024",
      daysLeft: 75,
      status: "scheduled",
      description: "Annual return filing with Registrar of Companies"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "urgent":
        return "bg-destructive text-destructive-foreground";
      case "upcoming":
        return "bg-warning text-warning-foreground";
      case "scheduled":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "urgent":
        return <AlertTriangle className="h-4 w-4" />;
      case "upcoming":
        return <Clock className="h-4 w-4" />;
      case "scheduled":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <CalendarDays className="h-4 w-4" />;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <CalendarDays className="h-5 w-5 text-primary" />
          Compliance Deadlines
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {upcomingDeadlines.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between p-3 rounded-lg border bg-card hover:bg-muted/30 transition-colors"
          >
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="font-medium text-sm">{item.title}</h4>
                <Badge className={`${getStatusColor(item.status)} text-xs px-2 py-1`}>
                  {getStatusIcon(item.status)}
                  <span className="ml-1">{item.daysLeft} days</span>
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{item.description}</p>
              <p className="text-xs font-medium text-foreground">Due: {item.deadline}</p>
            </div>
            <Button size="sm" variant="outline" className="ml-2 text-xs">
              File Now
            </Button>
          </div>
        ))}
        
        <div className="pt-2 border-t">
          <Button variant="default" className="w-full" size="sm">
            View All Compliance Tasks
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComplianceWidget;