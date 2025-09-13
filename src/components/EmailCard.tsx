import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface EmailCardProps {
  onEmailConnect: (email: string) => void;
}

const EmailCard = ({ onEmailConnect }: EmailCardProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onEmailConnect(email);
    }
  };

  return (
    <div className="gov-card email-card-hover p-8">
      <div className="text-center mb-6">
        <Mail className="mx-auto h-12 w-12 text-accent mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Connect Email</h3>
        <p className="text-muted-foreground">Access documents from your government email</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="your.email@gov.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            required
          />
        </div>
        
        <Button 
          type="submit"
          className="w-full gradient-button text-white"
          disabled={!email.trim()}
        >
          Connect Email Account
        </Button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-xs text-muted-foreground">
          Secure authentication with government email systems
        </p>
      </div>
    </div>
  );
};

export default EmailCard;