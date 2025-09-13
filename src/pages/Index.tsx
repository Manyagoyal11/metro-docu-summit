import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import UploadCard from "@/components/UploadCard";
import EmailCard from "@/components/EmailCard";
import ResultsSection from "@/components/ResultsSection";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [connectedEmail, setConnectedEmail] = useState<string>("");
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  const handleEmailConnect = (email: string) => {
    setConnectedEmail(email);
  };

  const handleAnalyze = async () => {
    if (!selectedFile && !connectedEmail) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const canAnalyze = selectedFile || connectedEmail;

  // Mock summary data
  const mockSummary = `This document outlines the quarterly operational report for Kochi Metro Rail Limited's Phase 2 expansion project. Key highlights include:

• Project Progress: Construction is 78% complete, ahead of the scheduled timeline
• Ridership Growth: Monthly passenger count increased by 23% compared to previous quarter
• Financial Performance: Revenue targets exceeded by 15% due to improved operational efficiency
• Safety Metrics: Zero major incidents reported, maintaining exemplary safety standards
• Environmental Impact: 35% reduction in carbon emissions achieved through green energy initiatives
• Community Engagement: Successfully conducted 12 public consultations across project areas

The report recommends accelerated deployment of digital ticketing systems and expansion of feeder bus services to enhance connectivity. Budget allocation for next quarter focuses on station accessibility improvements and advanced signaling systems.`;

  return (
    <div className="min-h-screen hero-bg relative">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 hero-content" id="home">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 flex items-center justify-center gap-4 title-hover cursor-default">
              <FileText className="h-12 w-12 text-accent" />
              AI-Powered Document Analysis
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced document summarization and analysis system for government operations. 
              Streamline your workflow with intelligent document processing.
            </p>
          </div>

          {/* Upload and Email Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <UploadCard onFileSelect={handleFileSelect} />
            <EmailCard onEmailConnect={handleEmailConnect} />
          </div>

          {/* Status Indicators */}
          {(selectedFile || connectedEmail) && (
            <div className="max-w-2xl mx-auto mb-8">
              <div className="gov-card p-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Ready for Analysis</h3>
                <div className="space-y-2">
                  {selectedFile && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <FileText className="h-4 w-4 mr-2" />
                      File selected: {selectedFile.name}
                    </div>
                  )}
                  {connectedEmail && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <FileText className="h-4 w-4 mr-2" />
                      Email connected: {connectedEmail}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Analyze Button */}
          <div className="text-center">
            <Button
              onClick={handleAnalyze}
              disabled={!canAnalyze || isAnalyzing}
              className="gradient-button text-xl px-12 py-4 h-auto"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Analyzing Document...
                </>
              ) : (
                "Analyze Document"
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <ResultsSection
        documentTitle={selectedFile?.name || "Government Email Document"}
        summary={mockSummary}
        isVisible={showResults}
      />

      <div className="relative z-2">
        <Footer />
      </div>
    </div>
  );
};

export default Index;