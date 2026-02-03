import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf, User } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Therapy Sessions", path: "/therapy-sessions" },
  { name: "About", path: "/about" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Example: Check if user is logged in (replace with real auth logic)
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("user"); // clear user info
    navigate("/sign-in");
    setIsUserDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-header/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center group-hover:bg-sage/20 transition-calm">
              <Leaf className="w-5 h-5 text-sage" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-serif font-semibold text-foreground">Peace Lily Path</h1>
              <p className="text-xs text-muted-foreground -mt-0.5">Counseling Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-calm ${
                  isActive(link.path)
                    ? "bg-sage/10 text-sage"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth / User */}
          <div className="hidden lg:flex items-center gap-3 relative">
            {user ? (
              <div className="relative">
                    <Button
  variant="ghost"
  size="icon"
  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
  className="bg-green-400 hover:bg-green-500 text-white transition-colors rounded-full"
>
  <User className="w-5 h-5" />
</Button>


                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-md py-2 z-50">
                    <p className="px-4 py-2 text-sm font-medium text-foreground border-b border-border">
                      {user.firstName} {user.lastName}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/sign-in"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm"
                >
                  Sign In
                </Link>
                <Link
                  to="/create-account"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm"
                >
                  Create Account
                </Link>
              </>
            )}
            <Button asChild variant="hero" size="default">
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-calm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-calm ${
                    isActive(link.path)
                      ? "bg-sage/10 text-sage"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="border-t border-border my-2" />

              {user ? (
                <>
                  <div className="px-4 py-2 text-sm font-medium text-foreground">
                    {user.firstName} {user.lastName}
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground text-left w-full"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/sign-in"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-calm"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/create-account"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-calm"
                  >
                    Create Account
                  </Link>
                </>
              )}

              <div className="px-4 pt-2">
                <Button asChild variant="hero" className="w-full">
                  <Link to="/book-appointment" onClick={() => setIsMenuOpen(false)}>
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
