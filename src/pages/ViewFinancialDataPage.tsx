import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { TrendingUp, TrendingDown, DollarSign, BarChart3, PieChart, Target } from "lucide-react";

export default function ViewFinancialDataPage() {
  const financialMetrics = [
    { title: "Total Revenue", value: "$2.4M", change: "+18%", trend: "up", period: "YTD" },
    { title: "Monthly Recurring Revenue", value: "$350K", change: "+12%", trend: "up", period: "Last 30 days" },
    { title: "Gross Margin", value: "82%", change: "+3%", trend: "up", period: "Q3 2024" },
    { title: "Customer Acquisition Cost", value: "$142", change: "-8%", trend: "down", period: "Q3 2024" },
    { title: "Lifetime Value", value: "$2,850", change: "+22%", trend: "up", period: "Current" },
    { title: "Churn Rate", value: "2.1%", change: "-0.4%", trend: "down", period: "Monthly" }
  ];

  const revenueBreakdown = [
    { source: "Enterprise Subscriptions", amount: "$1,680K", percentage: 70 },
    { source: "API Usage", amount: "$480K", percentage: 20 },
    { source: "Professional Services", amount: "$240K", percentage: 10 }
  ];

  const monthlyGrowth = [
    { month: "Jan", revenue: 180, users: 1200 },
    { month: "Feb", revenue: 195, users: 1350 },
    { month: "Mar", revenue: 210, users: 1480 },
    { month: "Apr", revenue: 225, users: 1620 },
    { month: "May", revenue: 245, users: 1800 },
    { month: "Jun", revenue: 270, users: 1950 },
    { month: "Jul", revenue: 295, users: 2100 },
    { month: "Aug", revenue: 315, users: 2280 },
    { month: "Sep", revenue: 340, users: 2450 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
            Financial Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive overview of Enzol AI's financial performance and key metrics.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {financialMetrics.map((metric, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardDescription className="text-sm">{metric.title}</CardDescription>
                  <Badge variant={metric.trend === "up" ? "default" : "secondary"}>
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {metric.change}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold">{metric.value}</span>
                  <span className="text-sm text-muted-foreground">{metric.period}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Revenue Breakdown */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PieChart className="h-5 w-5" />
                <span>Revenue Breakdown</span>
              </CardTitle>
              <CardDescription>Revenue distribution by source (YTD)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {revenueBreakdown.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.source}</span>
                    <span className="text-lg font-semibold">{item.amount}</span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                  <div className="text-right text-sm text-muted-foreground">
                    {item.percentage}%
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Growth Chart Visualization */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Monthly Growth</span>
              </CardTitle>
              <CardDescription>Revenue and user growth over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">340K</p>
                    <p className="text-sm text-muted-foreground">Current MRR</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary">2,450</p>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">18%</p>
                    <p className="text-sm text-muted-foreground">YoY Growth</p>
                  </div>
                </div>
                
                {/* Simple visual representation */}
                <div className="space-y-2">
                  {monthlyGrowth.slice(-6).map((data, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <span className="w-8 text-sm">{data.month}</span>
                      <div className="flex-1 bg-muted rounded-full h-2 relative overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-primary to-primary/60 h-full rounded-full"
                          style={{ width: `${(data.revenue / 350) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-16">${data.revenue}K</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Targets */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span>2024 Financial Targets</span>
            </CardTitle>
            <CardDescription>Progress towards annual goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-muted/30"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="80, 100"
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">80%</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Revenue Target</p>
                  <p className="text-sm text-muted-foreground">$3M Annual Goal</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-muted/30"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="65, 100"
                      className="text-secondary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">65%</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">User Growth</p>
                  <p className="text-sm text-muted-foreground">5K Users Goal</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-muted/30"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="92, 100"
                      className="text-accent"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">92%</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Margin Target</p>
                  <p className="text-sm text-muted-foreground">85% Gross Margin</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}