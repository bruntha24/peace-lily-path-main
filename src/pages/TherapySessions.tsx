import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import { 
  Heart, 
  Brain, 
  Sparkles, 
  Eye, 
  Leaf, 
  ArrowRight,
  Shield,
  Video,
  Clock,
  CheckCircle
} from "lucide-react";

const therapyTypes = [
  {
    icon: Heart,
    title: "Anxiety Therapy",
    description: "Anxiety can feel overwhelming, affecting your relationships, work, and daily life. Together, we'll identify the root causes of your anxiety and develop practical strategies to manage symptoms.",
    benefits: [
      "Reduce panic attacks and physical symptoms",
      "Challenge negative thought patterns",
      "Build confidence in social situations",
      "Develop healthy coping mechanisms"
    ]
  },
  {
    icon: Shield,
    title: "Trauma & PTSD Therapy",
    description: "Trauma can leave lasting impacts on your mind and body. I provide a safe, compassionate space to process difficult experiences using evidence-based approaches like EMDR and CPT.",
    benefits: [
      "Process traumatic memories safely",
      "Reduce flashbacks and nightmares",
      "Rebuild sense of safety and trust",
      "Reclaim your life from the past"
    ]
  },
  {
    icon: Sparkles,
    title: "Burnout Recovery",
    description: "Chronic stress and burnout can leave you feeling depleted and disconnected. We'll work together to restore balance, set healthy boundaries, and rediscover what brings you joy.",
    benefits: [
      "Identify burnout warning signs",
      "Establish work-life boundaries",
      "Reconnect with your values",
      "Build sustainable self-care practices"
    ]
  },
  {
    icon: Eye,
    title: "EMDR Therapy",
    description: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapy that helps your brain naturally heal from distressing experiences without having to talk through every detail.",
    benefits: [
      "Process trauma more efficiently",
      "Reduce emotional intensity of memories",
      "Develop new, healthier perspectives",
      "Experience lasting relief"
    ]
  },
  {
    icon: Brain,
    title: "Mindfulness-Based Therapy",
    description: "Mindfulness helps you develop a different relationship with your thoughts and emotions. Learn to observe without judgment and respond thoughtfully rather than react automatically.",
    benefits: [
      "Reduce rumination and worry",
      "Increase emotional regulation",
      "Improve focus and clarity",
      "Cultivate inner peace"
    ]
  },
  {
    icon: Video,
    title: "Telehealth Sessions",
    description: "Access quality therapy from anywhere in California. Virtual sessions offer the same depth and effectiveness as in-person therapy with added convenience and flexibility.",
    benefits: [
      "Secure, HIPAA-compliant platform",
      "Flexible scheduling options",
      "No commute time",
      "Same quality care as in-person"
    ]
  },
];

export default function TherapySessions() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-section-alt section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              Therapeutic Services
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Therapy Sessions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I offer a range of evidence-based therapeutic approaches tailored to your unique needs, 
              whether you're seeking individual therapy in-office or through secure telehealth.
            </p>
          </div>
        </div>
      </section>

      {/* Session Info */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6 mb-16">
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <Clock className="w-8 h-8 text-sage mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-foreground mb-1">Session Length</h3>
                <p className="text-muted-foreground text-sm">50-minute sessions</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <Video className="w-8 h-8 text-sage mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-foreground mb-1">Format Options</h3>
                <p className="text-muted-foreground text-sm">In-person or Telehealth</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <Heart className="w-8 h-8 text-sage mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-foreground mb-1">First Session</h3>
                <p className="text-muted-foreground text-sm">Free 15-min consultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Types */}
      <section className="bg-section-alt section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Specialized Services"
            subtitle="Each therapeutic approach is tailored to address your specific concerns and goals."
          />
          <div className="space-y-8 max-w-4xl mx-auto">
            {therapyTypes.map((therapy) => (
              <div 
                key={therapy.title}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-sage/30 transition-calm"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-sage/10 flex items-center justify-center flex-shrink-0">
                    <therapy.icon className="w-7 h-7 text-sage" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">
                      {therapy.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {therapy.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {therapy.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Begin Your Healing Journey
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to explore how therapy can help you? Schedule a free consultation to discuss your goals.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/book-appointment">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
