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
        <Link to="/" className="font-display text-xl font-bold text-primary">
          AP Econ Notes
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
              {[1,2,3,4,5,6].map(i => (
                <Link key={i} to={`/micro/${i}`} className="block px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors">
                  Unit {i}: {["Basic Concepts", "Supply & Demand", "Costs & Perfect Competition", "Imperfect Competition", "Factor Markets", "Market Failure"][i-1]}
                </Link>
              ))}
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
              {[2,3,4,5,6].map(i => (
                <Link key={i} to={`/macro/${i}`} className="block px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors">
                  Unit {i}: {["", "Economic Indicators", "National Income & AD-AS", "Financial Sector", "Long-Run Consequences", "International Trade"][i]}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background px-6 py-4 space-y-3 font-body text-sm">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-1">Home</Link>
          <div className="font-semibold text-muted-foreground mt-3">Microeconomics</div>
          {[1,2,3,4,5,6].map(i => (
            <Link key={i} to={`/micro/${i}`} onClick={() => setMobileOpen(false)} className="block py-1 pl-3">
              Unit {i}
            </Link>
          ))}
          <div className="font-semibold text-muted-foreground mt-3">Macroeconomics</div>
          <Link to="/micro/1" onClick={() => setMobileOpen(false)} className="block py-1 pl-3">Unit 1 (→ Micro)</Link>
          {[2,3,4,5,6].map(i => (
            <Link key={i} to={`/macro/${i}`} onClick={() => setMobileOpen(false)} className="block py-1 pl-3">Unit {i}</Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
