import { Link } from "react-router-dom";
import { Leaf, MapPin, Mail, Phone, Clock } from "lucide-react";

const quickLinks = [
  { name: "Therapy Sessions", path: "/therapy-sessions" },
  { name: "About Dr. Reynolds", path: "/about" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
  { name: "Book Appointment", path: "/book-appointment" },
];

export default function Footer() {
  return (
    <footer className="bg-footer border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-sage" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground">Peace Lily Path</h3>
                <p className="text-xs text-muted-foreground">Counseling Services</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Compassionate therapy for anxiety, trauma, burnout, and personal growth. 
              Your journey to healing starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-sage transition-calm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  123th Street 45 W<br />
                  Santa Monica, CA 90401
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sage flex-shrink-0" />
                <a 
                  href="mailto:mbruntha43@gmail.com" 
                  className="text-sm text-muted-foreground hover:text-sage transition-calm"
                >
                  mbruntha43@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sage flex-shrink-0" />
                <a 
                  href="tel:+13105551234" 
                  className="text-sm text-muted-foreground hover:text-sage transition-calm"
                >
                  (310) 555-1234
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Office Hours</h4>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p>Monday - Friday</p>
                <p className="font-medium text-foreground">9:00 AM - 6:00 PM</p>
                <p className="mt-2">Saturday</p>
                <p className="font-medium text-foreground">10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Peace Lily Path. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-sage transition-calm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-sage transition-calm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
