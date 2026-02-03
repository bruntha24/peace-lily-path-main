import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/forms/ContactForm";
import { Leaf, MapPin, Mail, Phone, Clock, Quote } from "lucide-react";

import zenGarden from "@/assets/zen-garden.jpg";

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${zenGarden})` }}
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sage/10 backdrop-blur-sm text-sage px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              Get in Touch
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Contact Me
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions or ready to schedule? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Calming Message */}
      <section className="bg-sage/10 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Quote className="w-6 h-6 text-sage/50 mx-auto mb-2" />
            <p className="font-serif text-lg text-foreground italic">
              "Reaching out is an act of courage. I'm here to listen without judgment."
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    Office Information
                  </h2>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-sage" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Address</h3>
                        <p className="text-muted-foreground text-sm">
                          123th Street 45 W<br />
                          Santa Monica, CA 90401
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-sage" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Email</h3>
                        <a 
                          href="mailto:mbruntha43@gmail.com" 
                          className="text-muted-foreground text-sm hover:text-sage transition-calm"
                        >
                          mbruntha43@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-sage" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Phone</h3>
                        <a 
                          href="tel:+13105551234" 
                          className="text-muted-foreground text-sm hover:text-sage transition-calm"
                        >
                          (310) 555-1234
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-sage" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Office Hours</h3>
                        <p className="text-muted-foreground text-sm">
                          Monday - Friday: 9am - 6pm<br />
                          Saturday: 10am - 2pm<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Encouraging Message */}
                <div className="bg-sage/10 rounded-xl p-5">
                  <Leaf className="w-6 h-6 text-sage mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Taking the first step can feel overwhelming. Know that whatever you're experiencing, 
                    you don't have to face it alone. I respond to all inquiries within 24-48 business hours.
                  </p>
                </div>

                {/* Map Placeholder */}
                <div className="aspect-video rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.688539477967!2d-118.49139708478498!3d34.01458098062159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cec2910019%3A0xb4170ab5ff23f5ab!2sSanta%20Monica%2C%20CA!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    Send a Message
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form below and I'll get back to you within 24-48 business hours.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
