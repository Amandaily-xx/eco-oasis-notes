import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-display font-bold text-2xl text-left">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">AP Econ</span>
          <span className="text-muted-foreground text-lg font-normal ml-1.5">by Amanda ✨</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
          <Link to="/" className={`transition-colors hover:text-accent ${location.pathname === "/" ? "text-accent" : "text-muted-foreground"}`}>
            Home
          </Link>
          <div className="relative group">
            <span className={`cursor-default transition-colors hover:text-accent ${isActive("/micro") ? "text-accent" : "text-muted-foreground"}`}>
              Microeconomics
            </span>
            <div className="absolute top-full left-0 mt-2 w-56 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <Link key={i} to={`/micro/${i}`} className="block px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors">
                  Unit {i}: {["Basic Concepts", "Demand & Supply", "Costs & Perfect Competition", "Imperfect Competition", "Factor Markets", "Market Failure"][i - 1]}
                </Link>
              )}
            </div>
          </div>
          <div className="relative group">
            <span className={`cursor-default transition-colors hover:text-accent ${isActive("/macro") ? "text-accent" : "text-muted-foreground"}`}>
              Macroeconomics
            </span>
            <div className="absolute top-full left-0 mt-2 w-64 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
              <Link to="/micro/1" className="block px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors">
                Unit 1: Basic Concepts → <span className="text-accent text-xs">(Same as Micro!)</span>
              </Link>
              {[2, 3, 4, 5, 6].map((i) => {
                const macroNames: Record<number, string> = { 2: "Economic Indicators", 3: "National Income & AD-AS", 4: "Financial Sector", 5: "Long-Run Consequences", 6: "International Trade" };
                return (
                  <Link key={i} to={`/macro/${i}`} className="block px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors">
                    Unit {i}: {macroNames[i]}
                  </Link>);
              })}
            </div>
          </div>
          <Link to="/resources" className={`transition-colors hover:text-accent ${isActive("/resources") ? "text-accent" : "text-muted-foreground"}`}>
            Resources
          </Link>
          <Link to="/about" className={`transition-colors hover:text-accent ${isActive("/about") ? "text-accent" : "text-muted-foreground"}`}>
            About
          </Link>
          <Link to="/contact" className={`transition-colors hover:text-accent ${isActive("/contact") ? "text-accent" : "text-muted-foreground"}`}>
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen &&
      <div className="md:hidden border-t bg-background px-6 py-4 space-y-3 font-body text-sm">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-1">Home</Link>
          <div className="font-semibold text-muted-foreground mt-3">Microeconomics</div>
          {[1, 2, 3, 4, 5, 6].map((i) =>
        <Link key={i} to={`/micro/${i}`} onClick={() => setMobileOpen(false)} className="block py-1 pl-3">
              Unit {i}
            </Link>
        )}
          <div className="font-semibold text-muted-foreground mt-3">Macroeconomics</div>
          <Link to="/micro/1" onClick={() => setMobileOpen(false)} className="block py-1 pl-3">Unit 1 (→ Micro)</Link>
          {[2, 3, 4, 5, 6].map((i) =>
        <Link key={i} to={`/macro/${i}`} onClick={() => setMobileOpen(false)} className="block py-1 pl-3">Unit {i}</Link>
        )}
          <div className="border-t my-2" style={{ borderColor: "hsl(var(--border))" }} />
          <Link to="/resources" onClick={() => setMobileOpen(false)} className="block py-1">📚 Resources</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-1">👩‍🎓 About</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block py-1">✉️ Contact</Link>
        </div>
      }
    </nav>);
};

export default Navbar;
