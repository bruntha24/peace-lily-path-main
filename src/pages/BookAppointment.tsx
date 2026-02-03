import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Leaf, Phone, Calendar, Clock, Video, MapPin, CheckCircle, X } from "lucide-react";
import axios from "axios";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Schedule a complimentary 15-minute phone consultation to discuss your needs and determine if we're a good fit.",
  },
  {
    number: "02",
    title: "Initial Assessment",
    description: "In our first full session, we'll explore your history, concerns, and goals to create a personalized treatment plan.",
  },
  {
    number: "03",
    title: "Begin Your Journey",
    description: "Start your therapeutic journey with regular sessions tailored to your unique needs and schedule.",
  },
];

export default function BookAppointment() {
  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [leaves, setLeaves] = useState<{ id: number; left: string }[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Free Call",
  });

  useEffect(() => {
    if (formSubmitted) {
      const newLeaves = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
      }));
      setLeaves(newLeaves);

      const timer = setTimeout(() => setLeaves([]), 5000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  const handleScheduleClick = (type: string) => {
    setFormData({ ...formData, type });
    setShowPopup(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/appointments", formData);
      setFormSubmitted(true);
      setShowPopup(false);
      setFormData({ ...formData, name: "", email: "", phone: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-section-alt section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              Schedule a Session
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Book an Appointment
            </h1>
            <p className="text-lg text-muted-foreground">
              Take the first step toward healing. I'm here to support you.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
            {/* Free Consultation Card */}
            <div className="bg-green-50 rounded-2xl p-6 md:p-8 border border-green-200">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-sage" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Free 15-Minute Consultation
              </h2>
              <p className="text-muted-foreground mb-6">
                Not sure if therapy is right for you? Schedule a complimentary phone call to discuss your needs and ask any questions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-sage" /> No obligation
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-sage" /> Discuss your concerns
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-sage" /> Learn about my approach
                </li>
              </ul>
              <Button
                variant="sage"
                size="lg"
                className="w-full"
                onClick={() => handleScheduleClick("Free Call")}
              >
                <Calendar className="w-4 h-4 mr-2" /> Schedule Free Call
              </Button>
            </div>

            {/* Regular Session Card */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Book a Session
              </h2>
              <p className="text-muted-foreground mb-6">
                Ready to begin? Schedule your first therapy session and start your journey toward healing and growth.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" /> 50-minute sessions
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Video className="w-4 h-4 text-primary" /> In-person or Telehealth
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" /> Santa Monica office
                </li>
              </ul>
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={() => handleScheduleClick("Session")}
              >
                <Calendar className="w-4 h-4 mr-2" /> Schedule Session
              </Button>
            </div>
          </div>

          {/* How It Works */}
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Getting started is simple. Here's what to expect when you begin working with me.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-lg font-semibold text-sage">{step.number}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <form
            onSubmit={handleFormSubmit}
            className="bg-green-50 rounded-2xl p-8 md:p-10 border border-green-200 max-w-sm w-full relative space-y-4"
          >
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-green-100 transition"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            <h2 className="text-2xl font-semibold mb-2 text-gray-700 text-center">Enter Your Details</h2>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-3 border border-green-200 rounded text-gray-700 focus:ring-2 focus:ring-sage/40 outline-none"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 border border-green-200 rounded text-gray-700 focus:ring-2 focus:ring-sage/40 outline-none"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone"
              required
              className="w-full p-3 border border-green-200 rounded text-gray-700 focus:ring-2 focus:ring-sage/40 outline-none"
            />

            <Button type="submit" variant="hero" size="lg" className="w-full mt-2">
              Submit
            </Button>
          </form>
        </div>
      )}

      {/* Confirmation & Leaf Confetti */}
      {formSubmitted && (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black/20">
          <div className="bg-card p-6 rounded-2xl text-center border border-border">
            <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
            <p className="text-muted-foreground mb-4">Our team will contact you within 3-4 hours.</p>
            <Button onClick={() => setFormSubmitted(false)} variant="hero">
              Close
            </Button>
          </div>

          {leaves.map((leaf) => (
            <span key={leaf.id} className="absolute text-green-500 text-2xl animate-fall" style={{ left: leaf.left }}>
              🍃
            </span>
          ))}
        </div>
      )}

      {/* Leaf Confetti Animation */}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(600px) rotate(360deg); opacity: 0; }
        }
        .animate-fall { animation: fall 4s linear forwards; }
      `}</style>
    </Layout>
  );
}
