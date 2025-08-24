import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Loader2, Image, Download } from "lucide-react";

interface ImageGeneratorProps {
  onClose: () => void;
  onGenerate: (data: { imageUrl: string; prompt: string }) => void;
}

export function ImageGenerator({ onClose, onGenerate }: ImageGeneratorProps) {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const imageUrl = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=512&h=512&fit=crop";
      setGeneratedImage(imageUrl);
      setIsGenerating(false);
      onGenerate({ imageUrl, prompt });
    }, 3000);
  };

  return (
    <Card className="p-6 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Image className="h-5 w-5" />
            Generate Image
          </h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            ×
          </Button>
        </div>
        
        <div className="space-y-3">
          <Input
            placeholder="Describe the image you want to generate..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={isGenerating}
          />
          
          <Button 
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Generating...
              </>
            ) : (
              "Generate Image"
            )}
          </Button>
        </div>

        {isGenerating && (
          <div className="flex flex-col items-center py-8 space-y-3">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Creating your image...</p>
          </div>
        )}

        {generatedImage && !isGenerating && (
          <div className="space-y-3">
            <img 
              src={generatedImage} 
              alt="Generated" 
              className="w-full rounded-lg shadow-md"
            />
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}