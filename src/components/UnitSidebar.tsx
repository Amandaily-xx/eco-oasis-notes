import { Link, useLocation } from "react-router-dom";

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
      </div>
    </aside>
  );
};

export default UnitSidebar;