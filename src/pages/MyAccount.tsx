import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import { 
  Leaf, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Settings,
  LogOut
} from "lucide-react";

// Mock user data - would come from backend
const user = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  phone: "(310) 555-5678",
  address: "456 Ocean Ave, Santa Monica, CA 90401",
  memberSince: "January 2026"
};

export default function MyAccount() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile update submitted");
  };

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
                  My Account
                </h1>
              </div>
              <Button variant="outline" asChild>
                <Link to="/bookings">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Bookings
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
                      <span className="font-serif text-2xl text-sage">
                        {user.firstName[0]}{user.lastName[0]}
                      </span>
                    </div>
                    <h2 className="font-serif text-lg font-semibold text-foreground">
                      {user.firstName} {user.lastName}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Member since {user.memberSince}
                    </p>
                  </div>
                  
                  <nav className="space-y-1">
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium bg-sage/10 text-sage">
                      <User className="w-4 h-4" />
                      Profile
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-calm">
                      <Settings className="w-4 h-4" />
                      Preferences
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-calm">
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
                    Profile Information
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="firstName"
                            defaultValue={user.firstName}
                            className="pl-10 bg-background"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          defaultValue={user.lastName}
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          defaultValue={user.email}
                          className="pl-10 bg-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          defaultValue={user.phone}
                          className="pl-10 bg-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="address"
                          defaultValue={user.address}
                          className="pl-10 bg-background"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-end gap-3">
                      <Button type="button" variant="outline">
                        Cancel
                      </Button>
                      <Button type="submit" variant="hero">
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Password Change */}
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border mt-6">
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
                    Change Password
                  </h2>
                  
                  <form className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        placeholder="••••••••"
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        placeholder="••••••••"
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        className="bg-background"
                      />
                    </div>
                    <div className="pt-2">
                      <Button type="submit" variant="outline">
                        Update Password
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
