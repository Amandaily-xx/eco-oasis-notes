import { Link, useLocation } from "react-router-dom";
import { Flag } from "lucide-react";

const SiteFooter = () => {
  const { pathname } = useLocation();
  // Hide on contact page itself to avoid redundancy
  if (pathname.startsWith("/contact")) return null;

  return (
    <footer className="border-t mt-16 py-6 px-6 text-center" style={{ borderColor: "hsl(var(--border))" }}>
      <p className="text-xs font-body text-muted-foreground inline-flex flex-wrap items-center justify-center gap-1.5">
        <Flag className="w-3.5 h-3.5 text-accent" />
        Spot a typo or a shifting error in a graph?
        <Link to="/contact" className="font-semibold text-accent hover:underline">
          Report an issue / Submit Feedback →
        </Link>
      </p>
      <p className="text-[11px] font-body text-muted-foreground mt-2 italic">
        Actively maintained by a human — Amanda ✨
      </p>
    </footer>
  );
};

export default SiteFooter;