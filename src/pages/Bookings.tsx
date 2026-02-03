import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Leaf, Calendar, Clock, Video, MapPin, Plus } from "lucide-react";

// Mock data - would come from backend
const upcomingBookings = [
  {
    id: 1,
    date: "February 8, 2026",
    time: "10:00 AM",
    type: "Individual Therapy",
    format: "Telehealth",
    status: "confirmed"
  },
  {
    id: 2,
    date: "February 15, 2026",
    time: "10:00 AM",
    type: "EMDR Session",
    format: "In-Person",
    status: "confirmed"
  }
];

const pastBookings = [
  {
    id: 3,
    date: "January 25, 2026",
    time: "10:00 AM",
    type: "Individual Therapy",
    format: "Telehealth",
    status: "completed"
  },
  {
    id: 4,
    date: "January 18, 2026",
    time: "10:00 AM",
    type: "Initial Assessment",
    format: "In-Person",
    status: "completed"
  }
];

export default function Bookings() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-section-alt section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Leaf className="w-4 h-4" />
                  Client Portal
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                  Your Bookings
                </h1>
              </div>
              <Button asChild variant="hero">
                <Link to="/book-appointment">
                  <Plus className="w-4 h-4 mr-2" />
                  Book New Session
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Upcoming */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Upcoming Appointments
              </h2>
              {upcomingBookings.length > 0 ? (
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div 
                      key={booking.id}
                      className="bg-card rounded-xl p-5 border border-border hover:border-sage/30 transition-calm"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-sage/10 flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-sage" />
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground">{booking.type}</h3>
                            <div className="flex flex-wrap items-center gap-3 mt-1">
                              <span className="text-sm text-muted-foreground">{booking.date}</span>
                              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Clock className="w-3.5 h-3.5" />
                                {booking.time}
                              </span>
                              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                {booking.format === "Telehealth" ? (
                                  <Video className="w-3.5 h-3.5" />
                                ) : (
                                  <MapPin className="w-3.5 h-3.5" />
                                )}
                                {booking.format}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 sm:flex-shrink-0">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-sage/10 text-sage capitalize">
                            {booking.status}
                          </span>
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-card rounded-xl p-8 border border-border text-center">
                  <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    No Upcoming Appointments
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Ready to schedule your next session?
                  </p>
                  <Button asChild variant="hero">
                    <Link to="/book-appointment">Book Now</Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Past */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Past Appointments
              </h2>
              {pastBookings.length > 0 ? (
                <div className="space-y-4">
                  {pastBookings.map((booking) => (
                    <div 
                      key={booking.id}
                      className="bg-card rounded-xl p-5 border border-border opacity-75"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-muted-foreground" />
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground">{booking.type}</h3>
                            <div className="flex flex-wrap items-center gap-3 mt-1">
                              <span className="text-sm text-muted-foreground">{booking.date}</span>
                              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Clock className="w-3.5 h-3.5" />
                                {booking.time}
                              </span>
                              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                {booking.format === "Telehealth" ? (
                                  <Video className="w-3.5 h-3.5" />
                                ) : (
                                  <MapPin className="w-3.5 h-3.5" />
                                )}
                                {booking.format}
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground capitalize">
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No past appointments.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
