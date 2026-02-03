import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import { 
  Heart, 
  Brain, 
  Sparkles, 
  Eye, 
  Leaf, 
  ArrowRight,
  Shield,
  Video,
  MapPin,
  Quote,
  ArrowLeft
} from "lucide-react";

// Import calming images
import therapyOffice from "@/assets/therapy-office.jpg";
import zenGarden from "@/assets/zen-garden.jpg";
import forestPath from "@/assets/forest-path.jpg";
import peaceLily from "@/assets/peace-lily.jpg";
import oceanCalm from "@/assets/ocean-calm.jpg";

const services = [
  {
    icon: Heart,
    title: "Anxiety Therapy",
    description: "Learn effective strategies to manage anxiety and regain control over your thoughts and emotions.",
  },
  {
    icon: Shield,
    title: "Trauma & PTSD",
    description: "Compassionate, evidence-based treatment to help you process and heal from traumatic experiences.",
  },
  {
    icon: Sparkles,
    title: "Burnout Recovery",
    description: "Rediscover balance and purpose while developing sustainable strategies for long-term wellbeing.",
  },
  {
    icon: Eye,
    title: "EMDR Therapy",
    description: "A powerful approach to help your brain naturally heal from distressing memories and experiences.",
  },
  {
    icon: Brain,
    title: "Mindfulness Therapy",
    description: "Cultivate present-moment awareness and develop a more peaceful relationship with your thoughts.",
  },
  {
    icon: Video,
    title: "Telehealth Sessions",
    description: "Convenient and secure online therapy from the comfort and privacy of your own space.",
  },
];

const calmingQuotes = [
  {
    quote: "The wound is the place where the light enters you.",
    author: "Rumi"
  },
  {
    quote: "You don't have to control your thoughts. You just have to stop letting them control you.",
    author: "Dan Millman"
  },
  {
    quote: "Healing takes courage, and we all have courage, even if we have to dig a little to find it.",
    author: "Tori Amos"
  }
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${oceanCalm})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="container mx-auto px-4 relative z-10 section-padding">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-sage/10 backdrop-blur-sm text-sage px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              Welcome to Peace Lily Path
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance leading-tight">
              Find Your Path to <span className="text-primary">Healing</span> & <span className="text-sage">Inner Peace</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl text-balance">
              I'm Dr. Maya Reynolds, a licensed psychologist dedicated to helping you navigate life's challenges 
              with compassion, expertise, and evidence-based care. Your journey to peace begins here.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button asChild variant="hero" size="xl">
  <Link
    to="/book-appointment"
    className="
      flex items-center justify-center
      text-xs sm:text-base md:text-lg lg:text-xl
      gap-2
    "
  >  <ArrowLeft className="w-5 h-5" />
    Book  a Free Consultation
    <ArrowRight className="w-5 h-5" />
  </Link>
</Button>


              <Button asChild variant="hero-outline" size="xl">
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calming Quote Banner */}
      <section className="bg-sage/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-10 h-10 text-sage/50 mx-auto mb-4" />
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic mb-4 text-balance">
              "Almost everything will work again if you unplug it for a few minutes, including you."
            </blockquote>
            <cite className="text-muted-foreground">— Anne Lamott</cite>
          </div>
        </div>
      </section>

      {/* About Preview with Office Image */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative">
                <img 
                  src={therapyOffice} 
                  alt="Peaceful therapy office with natural light and plants" 
                  className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5]"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl overflow-hidden shadow-lg hidden md:block">
                  <img 
                    src={peaceLily} 
                    alt="Peace lily flower" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  A Safe Space for Your Healing Journey
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  With over 15 years of experience, I specialize in helping adults navigate anxiety, 
                  trauma, burnout, and life transitions. My approach combines evidence-based techniques 
                  with genuine warmth and understanding.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you're dealing with overwhelming stress, processing past experiences, or seeking 
                  personal growth, I'm here to provide a safe, supportive space for your healing journey.
                </p>
                <div className="bg-sage/10 rounded-xl p-5 mb-6">
                  <p className="font-serif text-lg text-foreground italic">
                    "Therapy is not about fixing what is broken. It's about discovering the strength you already have within."
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-sage" />
                    Santa Monica, CA
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Video className="w-4 h-4 text-sage" />
                    Telehealth Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mindfulness Section with Zen Garden */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${zenGarden})` }}
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Leaf className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
              Find Stillness Within the Storm
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              In the chaos of daily life, it's easy to lose touch with ourselves. Therapy offers a quiet space 
              to pause, reflect, and reconnect with what truly matters. Like stones in a garden, we can find 
              balance and peace, even amidst life's turbulence.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
              <span>✦ Reduce Anxiety</span>
              <span>✦ Process Trauma</span>
              <span>✦ Restore Balance</span>
              <span>✦ Find Clarity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-section-alt">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="How I Can Help"
            subtitle="I offer a range of therapeutic services tailored to meet your unique needs and goals."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link="/therapy-sessions"
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/therapy-sessions">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Inspirational Quotes Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Words of Wisdom"
            subtitle="Gentle reminders for your healing journey"
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {calmingQuotes.map((item, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-sage/30 transition-calm text-center"
              >
                <Quote className="w-8 h-8 text-sage/40 mx-auto mb-4" />
                <blockquote className="font-serif text-lg text-foreground italic mb-3">
                  "{item.quote}"
                </blockquote>
                <cite className="text-sm text-muted-foreground">— {item.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forest Path Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${forestPath})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Every Healing Journey Begins with a Single Step
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Just as sunlight finds its way through the forest canopy, hope and healing can find their way 
              into even the darkest moments. You don't have to walk this path alone.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Leaf className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                <span>Breathe deeply. You are exactly where you need to be.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Leaf className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                <span>Healing is not linear—every step forward matters.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Leaf className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                <span>Your story is still being written. There is hope ahead.</span>
              </li>
            </ul>
            <Button asChild variant="hero" size="lg">
              <Link to="/book-appointment">
                Begin Your Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Calming Practices Section */}
      <section className="section-padding bg-section-alt">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nurturing Your Mental Wellness"
            subtitle="Simple practices for everyday peace of mind"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">Breathe</h3>
              <p className="text-sm text-muted-foreground">
                Take slow, deep breaths. Inhale peace, exhale tension.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">Be Present</h3>
              <p className="text-sm text-muted-foreground">
                Ground yourself in this moment. The past is gone, the future awaits.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">Self-Compassion</h3>
              <p className="text-sm text-muted-foreground">
                Treat yourself with the kindness you'd offer a dear friend.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌸</span>
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">Rest</h3>
              <p className="text-sm text-muted-foreground">
                Your mind needs rest too. Allow yourself moments of stillness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-sage/10 via-primary/5 to-sage/10 rounded-3xl p-8 md:p-12">
            <img 
              src={peaceLily} 
              alt="Peace lily" 
              className="w-20 h-20 rounded-full object-cover mx-auto mb-6 shadow-lg"
            />
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Ready to Take the First Step?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Reaching out takes courage. I offer a free 15-minute consultation to discuss your needs 
              and see if we're a good fit. You deserve support on your healing journey.
            </p>
                     <Button
  asChild
  variant="hero"
  className="
    w-full max-w-full mx-auto
    px-6 py-6 sm:px-8 sm:py-5 md:px-10 md:py-6 lg:px-12 lg:py-7 xl:px-14 xl:py-8
    text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl
    bg-blue-400 hover:bg-blue-500 text-white
    rounded-xl shadow-md shadow-blue-200/40
    flex items-center justify-center
    gap-2
    transition-all duration-300 ease-in-out
    text-center
  "
>
  <Link to="/book-appointment" className="flex items-center">
    <span className="whitespace-pre-line text-center">Schedule Your Free Consultation</span>
    <ArrowRight className="w-5 h-5 sm:w-6 md:w-6 lg:w-7 xl:w-8 ml-2" />
  </Link>
</Button>



          </div>
        </div>
      </section>
    </Layout>
  );
}

