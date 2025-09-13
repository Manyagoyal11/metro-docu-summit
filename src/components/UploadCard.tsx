import { Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UploadCardProps {
  onFileSelect: (file: File) => void;
}

const UploadCard = ({ onFileSelect }: UploadCardProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="gov-card upload-card-hover p-8">
      <div className="text-center mb-6">
        <FileText className="mx-auto h-12 w-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Upload Documents</h3>
        <p className="text-muted-foreground">Drag & drop or choose files to analyze</p>
      </div>

      <div
        className="upload-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-4" />
        <p className="text-muted-foreground mb-4">
          Drag and drop your documents here, or
        </p>
        
        <label htmlFor="file-upload">
          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary/90"
            asChild
          >
            <span className="cursor-pointer">
              Choose File
            </span>
          </Button>
        </label>
        
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept=".pdf,.png,.jpg,.jpeg"
          onChange={handleFileChange}
        />
        
        <p className="text-xs text-muted-foreground mt-3">
          Supported formats: PNG, JPG, PDF
        </p>
      </div>
    </div>
  );
};

export default UploadCard;