import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-sage/10 rounded-xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-sage" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
          Message Sent Successfully
        </h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. I'll respond within 24-48 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Web3Forms Access Key - Replace with your actual key */}
      <input type="hidden" name="access_key" value="5056f6fe-c8df-41da-a2ba-1404ef7db393" />
      <input type="hidden" name="subject" value="New Inquiry - Peace Lily Path" />
      <input type="hidden" name="from_name" value="Peace Lily Path Website" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="bg-card"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            className="bg-card"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(310) 555-1234"
          className="bg-card"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="service">Service Interest</Label>
        <select
          id="service"
          name="service"
          className="w-full h-10 px-3 rounded-lg border border-input bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Select a service...</option>
          <option value="anxiety">Anxiety Therapy</option>
          <option value="trauma">Trauma & PTSD</option>
          <option value="burnout">Burnout Recovery</option>
          <option value="emdr">EMDR Therapy</option>
          <option value="mindfulness">Mindfulness Therapy</option>
          <option value="other">Other / General Inquiry</option>
        </select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can I help you? Feel free to share what brings you here..."
          rows={5}
          required
          className="bg-card resize-none"
        />
      </div>
      
      <p className="text-xs text-muted-foreground">
        Please note: This form is not for emergencies. If you're in crisis, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.
      </p>
      
      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
        {isLoading ? (
          "Sending..."
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
