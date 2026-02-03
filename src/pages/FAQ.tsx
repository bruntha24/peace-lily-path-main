import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Leaf, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What can I expect from my first session?",
    answer: "Your first session is an opportunity for us to get to know each other. We'll discuss what brings you to therapy, your history, and your goals. I'll explain my approach and answer any questions you have. It's completely normal to feel nervous—many clients do. My goal is to create a safe, welcoming space where you feel heard and understood."
  },
  {
    question: "How long does therapy typically last?",
    answer: "The length of therapy varies depending on your goals and what you're working through. Some clients find significant relief in 8-12 sessions, while others benefit from longer-term work. We'll regularly check in about your progress and adjust our approach as needed. You're always in control of your therapeutic journey."
  },
  {
    question: "What is EMDR therapy and how does it work?",
    answer: "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy that helps your brain process distressing memories. During EMDR, you'll focus on a troubling memory while following bilateral stimulation (like eye movements or tapping). This helps your brain reprocess the memory so it becomes less distressing. Many clients find EMDR works faster than traditional talk therapy."
  },
  {
    question: "Do you offer telehealth sessions?",
    answer: "Yes! I offer secure, HIPAA-compliant telehealth sessions for clients throughout California. Virtual therapy is just as effective as in-person therapy for most concerns and offers added convenience. You can attend sessions from home, your office, or anywhere you have privacy and a stable internet connection."
  },
  {
    question: "What are your fees and do you accept insurance?",
    answer: "I am an out-of-network provider, which means I don't bill insurance directly. However, I can provide a superbill (detailed receipt) that you can submit to your insurance for potential reimbursement. Many PPO plans offer out-of-network benefits. I also offer a sliding scale for those with financial constraints—please ask about availability."
  },
  {
    question: "How do I know if therapy is right for me?",
    answer: "If you're struggling with emotional difficulties, relationship problems, anxiety, trauma, or simply feel 'stuck,' therapy can help. You don't need to be in crisis to benefit from therapy—many people seek support during transitions or to work on personal growth. A free consultation can help you determine if therapy is the right step."
  },
  {
    question: "What is your cancellation policy?",
    answer: "I require 24-hour notice for cancellations. Sessions cancelled with less than 24 hours notice or missed without notification may be charged the full session fee. I understand that emergencies happen, and I'm always willing to discuss special circumstances."
  },
  {
    question: "Is everything I share confidential?",
    answer: "Yes, confidentiality is a cornerstone of therapy. What you share stays between us with very few exceptions required by law (such as imminent danger to yourself or others, or suspected abuse of a child or elder). I'll explain these limits in detail during our first session so you can feel completely safe."
  },
  {
    question: "How often should I attend therapy?",
    answer: "Most clients begin with weekly sessions to build momentum and establish our therapeutic relationship. As you progress, we may transition to biweekly or monthly sessions. The frequency depends on your needs, goals, and what works best for your schedule and life circumstances."
  },
  {
    question: "What if I'm not sure what I want to work on?",
    answer: "That's completely okay! Many clients come in feeling overwhelmed or unsure where to start. Part of our initial work together is exploring what's most pressing and what you'd like to change. Sometimes the act of talking helps clarify what matters most to you."
  }
];

export default function FAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-section-alt section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              FAQ
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about therapy, my approach, and what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-sage/30"
                >
                  <AccordionTrigger className="text-left font-serif text-lg hover:text-sage hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-section-alt section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm happy to answer any questions you have. Reach out directly or schedule a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Contact Me
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/book-appointment">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
