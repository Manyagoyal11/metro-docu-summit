import { Copy, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ResultsSectionProps {
  documentTitle: string;
  summary: string;
  isVisible: boolean;
}

const ResultsSection = ({ documentTitle, summary, isVisible }: ResultsSectionProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      toast({
        title: "Summary Copied",
        description: "The document summary has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDownloadPDF = () => {
    // Simulate PDF download
    toast({
      title: "PDF Generated",
      description: "Your summary report is being downloaded.",
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fade-in">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="gov-card p-8">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-foreground">AI Analysis Complete</h2>
                <p className="text-muted-foreground">Document: {documentTitle}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Executive Summary</h3>
              <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                  {summary}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleCopy}
                variant="outline"
                className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy Summary"}
              </Button>
              
              <Button
                onClick={handleDownloadPDF}
                className="flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;