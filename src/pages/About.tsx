import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { 
  Leaf, 
  ArrowRight,
  GraduationCap,
  Award,
  Heart,
  Users,
  Video,
  MapPin,
  Quote
} from "lucide-react";

import therapyOffice from "@/assets/therapy-office.jpg";
import forestPath from "@/assets/forest-path.jpg";
import MayaImg from "@/assets/Maya.png";
import office1 from "@/assets/office1.jpeg";
import office2 from "@/assets/office2.jpeg";
export default function About() {
  return (
    <Layout>
      {/* Hero with Forest Background */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${forestPath})` }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              
              {/* Left: Image */}
                   <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 mx-auto md:mx-0 rounded-full overflow-hidden shadow-lg border-4 border-sage/20">
  <img
    src={MayaImg} // imported image
    alt="Dr. Maya Reynolds"
    className="w-full h-full object-contain"
  />
</div>


              {/* Right: Text */}
              <div className="flex flex-col text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-sage/10 backdrop-blur-sm text-sage px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Leaf className="w-4 h-4" />
                  About Me
                </div>
                <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
                  Meet Dr. Maya Reynolds
                </h1>
                <p className="text-lg text-muted-foreground">
                  Licensed Psychologist | Trauma Specialist | EMDR Certified
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-sage/10 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Quote className="w-8 h-8 text-sage/50 mx-auto mb-3" />
            <blockquote className="font-serif text-xl text-foreground italic">
              "The greatest healing therapy is friendship and love."
            </blockquote>
            <cite className="text-sm text-muted-foreground mt-2 block">
              — Hubert H. Humphrey
            </cite>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-start">
            
            {/* Left: Office Image + Location */}
            {/* Left: Office Image + Location */}
<div className="md:col-span-2">
  <div className="sticky top-24 space-y-6">
    
    {/* Main Therapy Office Image */}
    <img 
      src={therapyOffice} 
      alt="Peaceful therapy office" 
      className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5]"
    />

       {/* Office 1 */}
    <img 
      src={office1} 
      alt="Therapy office view 1" 
      className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5]"
    />

    {/* Office 2 */}
    <img 
      src={office2} 
      alt="Therapy office view 2" 
      className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5]"
    />

    {/* Location + Telehealth Info */}
    <div className="space-y-3">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <MapPin className="w-4 h-4 text-sage" />
        Santa Monica, California
      </div>
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <Video className="w-4 h-4 text-sage" />
        Telehealth Available Statewide
      </div>
    </div>

  </div>
</div>

            {/* Right: Content */}
            <div className="md:col-span-3 space-y-8">
              
              {/* Approach */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  My Approach to Therapy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I believe that healing happens in the context of a genuine, trusting relationship. 
                  My approach is warm, collaborative, and grounded in evidence-based practices. I meet 
                  each client where they are, honoring their unique experiences while providing the 
                  tools and support needed for meaningful change.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With over 15 years of clinical experience, I've had the privilege of walking alongside 
                  hundreds of individuals on their healing journeys. I integrate various therapeutic 
                  modalities—including EMDR, CBT, mindfulness, and somatic approaches—to create a 
                  personalized treatment plan that addresses your specific needs and goals.
                </p>
              </div>

              {/* Philosophy Box */}
              <div className="bg-sage/10 rounded-xl p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">My Philosophy</h3>
                <p className="text-muted-foreground italic leading-relaxed">
                  "Healing is not about erasing the past—it's about integrating our experiences in a way 
                  that allows us to move forward with greater wisdom, compassion, and peace. Every person 
                  has an innate capacity for growth and resilience. My role is to help you reconnect with 
                  that strength within yourself."
                </p>
              </div>

              {/* Trauma Work */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Specializing in Trauma Work
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Trauma is not just what happened to you—it's what happens inside you as a result. 
                  Whether single-event or complex trauma, I provide a safe, compassionate space to process and heal.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As an EMDR-certified therapist, I use this powerful approach to help your brain naturally heal. 
                  EMDR allows processing trauma more quickly with less emotional distress than traditional talk therapy.
                </p>
              </div>

              {/* Burnout */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Supporting Burnout Recovery
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  I help high-achievers, healthcare professionals, and caregivers recognize signs of burnout, 
                  establish healthy boundaries, and reconnect with their values and purpose.
                </p>
              </div>

              {/* Gentle Reminder */}
              <div className="border-l-4 border-sage pl-6 py-2">
                <p className="text-foreground font-serif text-lg italic">
                  "You are not broken. You are not a project to be fixed. You are a human being deserving 
                  of compassion, understanding, and support."
                </p>
              </div>

                 {/* Flexible Sessions */}
<div>
  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
    Flexible Session Options
  </h2>
  <p className="text-muted-foreground leading-relaxed mb-4">
    I offer both in-person sessions at my Santa Monica office and secure telehealth sessions 
    for clients throughout California. Virtual therapy provides the same quality of care with added convenience.
  </p>

  {/* Small Quote */}
  <p className="text-foreground font-serif italic border-l-4 border-sage pl-4 py-2">
    "Every step forward, no matter how small, is a step toward healing."
  </p>
</div>
     {/* Mindfulness Practice */}
<div>
  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
    Mindfulness & Self-Care
  </h2>
  <p className="text-muted-foreground leading-relaxed mb-4">
    Integrating mindfulness into daily life can help reduce stress, increase self-awareness, 
    and support emotional resilience. Simple practices, like mindful breathing or journaling, 
    can make a meaningful difference in your mental well-being.
  </p>

  {/* Small Quote */}
  <p className="text-foreground font-serif italic border-l-4 border-sage pl-4 py-2">
    "Almost everything will work again if you unplug it for a few minutes, including your mind." 
  </p>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-section-alt section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-8 text-center">
              Education & Credentials
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <GraduationCap className="w-8 h-8 text-sage mb-4" />
                <h3 className="font-serif font-semibold text-foreground mb-2">Education</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>PsyD in Clinical Psychology, Pepperdine University</li>
                  <li>MA in Counseling Psychology, UCLA</li>
                  <li>BA in Psychology, UC Berkeley</li>
                </ul>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Award className="w-8 h-8 text-sage mb-4" />
                <h3 className="font-serif font-semibold text-foreground mb-2">Certifications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>EMDR Certified Therapist</li>
                  <li>Licensed Psychologist, State of California</li>
                  <li>Certified Mindfulness-Based Stress Reduction (MBSR) Teacher</li>
                </ul>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Heart className="w-8 h-8 text-sage mb-4" />
                <h3 className="font-serif font-semibold text-foreground mb-2">Specializations</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Trauma & PTSD</li>
                  <li>Anxiety & Panic Disorders</li>
                  <li>Professional Burnout</li>
                  <li>Life Transitions</li>
                </ul>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Users className="w-8 h-8 text-sage mb-4" />
                <h3 className="font-serif font-semibold text-foreground mb-2">Affiliations</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>American Psychological Association</li>
                  <li>EMDR International Association</li>
                  <li>California Psychological Association</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Leaf className="w-10 h-10 text-sage mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'd love to learn more about what brings you here and how I can support your healing journey.
              Taking the first step is often the hardest—but you don't have to do it alone.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/book-appointment">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
