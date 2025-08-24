import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, BarChart3, Download } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

interface GraphGeneratorProps {
  onClose: () => void;
  onGenerate: (data: { type: string; data: any }) => void;
}

const sampleData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 }
];

const pieData = [
  { name: 'Desktop', value: 45, color: 'hsl(var(--primary))' },
  { name: 'Mobile', value: 35, color: 'hsl(var(--secondary))' },
  { name: 'Tablet', value: 20, color: 'hsl(var(--accent))' }
];

export function GraphGenerator({ onClose, onGenerate }: GraphGeneratorProps) {
  const [dataPrompt, setDataPrompt] = useState("");
  const [chartType, setChartType] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedChart, setGeneratedChart] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!dataPrompt.trim() || !chartType) return;
    
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setGeneratedChart(chartType);
      setIsGenerating(false);
      onGenerate({ type: chartType, data: sampleData });
    }, 2500);
  };

  const renderChart = () => {
    switch (generatedChart) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="p-6 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Generate Graph
          </h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            ×
          </Button>
        </div>
        
        <div className="space-y-3">
          <Input
            placeholder="Describe your data (e.g., monthly sales data)..."
            value={dataPrompt}
            onChange={(e) => setDataPrompt(e.target.value)}
            disabled={isGenerating}
          />
          
          <Select value={chartType} onValueChange={setChartType} disabled={isGenerating}>
            <SelectTrigger>
              <SelectValue placeholder="Select chart type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="line">Line Chart</SelectItem>
              <SelectItem value="bar">Bar Chart</SelectItem>
              <SelectItem value="pie">Pie Chart</SelectItem>
            </SelectContent>
          </Select>
          
          <Button 
            onClick={handleGenerate}
            disabled={!dataPrompt.trim() || !chartType || isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Generating...
              </>
            ) : (
              "Generate Graph"
            )}
          </Button>
        </div>

        {isGenerating && (
          <div className="flex flex-col items-center py-8 space-y-3">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Creating your graph...</p>
          </div>
        )}

        {generatedChart && !isGenerating && (
          <div className="space-y-3">
            <div className="border rounded-lg p-4 bg-card">
              {renderChart()}
            </div>
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Export Chart
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}