import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

type Track = "micro" | "macro";

const microUnits = [
  { id: 1, title: "Basic Concepts" },
  { id: 2, title: "Demand & Supply" },
  { id: 3, title: "Costs & Perfect Competition" },
  { id: 4, title: "Imperfect Competition" },
  { id: 5, title: "Factor Markets" },
  { id: 6, title: "Market Failure" },
];

const macroUnits = [
  { id: 1, title: "Basic Concepts (shared)", path: "/micro/1" },
  { id: 2, title: "Economic Indicators" },
  { id: 3, title: "National Income & AD-AS" },
  { id: 4, title: "Financial Sector" },
  { id: 5, title: "Long-Run Consequences" },
  { id: 6, title: "International Trade" },
];

interface Props {
  track: Track;
  currentUnit: number;
}

const UnitSidebar = ({ track, currentUnit }: Props) => {
  const items = track === "micro" ? microUnits : macroUnits;
  const label = track === "micro" ? "AP Microeconomics" : "AP Macroeconomics";
  const practicePath = track === "micro" ? "/micro/practice" : "/macro/practice";
  const { pathname } = useLocation();

  const [sections, setSections] = useState<{ id: string; title: string }[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-section-title]"));
      setSections(nodes.map((n) => ({ id: n.id, title: n.dataset.sectionTitle || n.id })));
    }, 100);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="hidden lg:block w-60 shrink-0">
      <div className="sticky top-24 rounded-xl border p-4" style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}>
        <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground mb-3 font-body">
          {label} · Table of Contents
        </div>
        <nav className="space-y-1">
          {items.map((u) => {
            const to = "path" in u && u.path ? u.path : `/${track}/${u.id}`;
            const active = u.id === currentUnit && pathname === to;
            return (
              <Link
                key={u.id}
                to={to}
                className={`flex items-start gap-2 px-3 py-2 rounded-md text-sm font-body transition-colors ${
                  active
                    ? "bg-accent/15 text-accent font-semibold border-l-2 border-accent"
                    : "text-muted-foreground hover:bg-secondary hover:text-primary"
                }`}
              >
                <span className="font-display font-semibold w-10 shrink-0">U{u.id}</span>
                <span className="leading-snug">{u.title}</span>
              </Link>
            );
          })}
          <div className="border-t my-2" style={{ borderColor: "hsl(var(--border))" }} />
          <Link
            to={practicePath}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-body font-semibold text-accent hover:bg-secondary transition-colors"
          >
            📝 Practice Quizzes
          </Link>
        </nav>

        {sections.length > 0 && (
          <div className="mt-4 pt-4 border-t" style={{ borderColor: "hsl(var(--border))" }}>
            <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground mb-2 font-body">
              On this page
            </div>
            <nav className="space-y-0.5 max-h-[40vh] overflow-y-auto pr-1">
              {sections.map((s) => {
                const isActive = s.id === activeId;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(s.id);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                        history.replaceState(null, "", `#${s.id}`);
                      }
                    }}
                    className={`block px-3 py-1.5 rounded-md text-xs font-body leading-snug transition-colors border-l-2 ${
                      isActive
                        ? "bg-accent/15 text-accent font-semibold border-accent"
                        : "text-muted-foreground hover:bg-secondary hover:text-primary border-transparent"
                    }`}
                  >
                    {s.title}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </aside>
  );
};

export default UnitSidebar;