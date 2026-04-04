import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import MacroUnit2Content from "../content/MacroUnit2";
import MacroUnit3Content from "../content/MacroUnit3";
import MacroUnit4Content from "../content/MacroUnit4";
import MacroUnit5Content from "../content/MacroUnit5";
import MacroUnit6Content from "../content/MacroUnit6";
import AiStudyBuddy from "../components/AiStudyBuddy";

const unitInfo: Record<number, { title: string; subtitle: string }> = {
  2: { title: "Economic Indicators & Business Cycles", subtitle: "Circular Flow, GDP, Price Indices, Unemployment, Cost of Inflation & Business Cycles" },
  3: { title: "National Income & Price Determination", subtitle: "Multipliers, AD-AS Model, Long-Run Self-Adjustment, Fiscal Policy & Output Gaps" },
  4: { title: "Financial Sector", subtitle: "Financial Assets, Money & Banking, Money Supply, Money Market, Monetary Policy, Loanable Funds Market & Crowding Out" },
  5: { title: "Long-Run Consequences & Stabilization", subtitle: "Phillips Curve, Money Neutrality, Quantity Theory & Long-Run Economic Growth" },
  6: { title: "International Trade & Finance", subtitle: "Balance of Payments Accounts, Exchange Rates, Foreign Exchange Market & Trade Policy on Exchange Market" },
};

const contentMap: Record<number, React.FC> = {
  2: MacroUnit2Content,
  3: MacroUnit3Content,
  4: MacroUnit4Content,
  5: MacroUnit5Content,
  6: MacroUnit6Content,
};

const maxUnit = 6;

const MacroUnit = () => {
  const { unitId } = useParams();
  const id = Number(unitId);

  if (id === 1) return <Navigate to="/micro/1" replace />;

  const info = unitInfo[id];
  const ContentComponent = contentMap[id];

  if (!info || !ContentComponent) {
    return <div className="container mx-auto px-6 py-20 text-center">Unit not found.</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-10 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <span className="text-xs font-semibold font-body uppercase tracking-wider text-accent">Macroeconomics · Unit {id}</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-2">{info.title}</h1>
          <p className="font-body text-muted-foreground mb-8">{info.subtitle}</p>
          <ContentComponent />
        </motion.div>

        <div className="flex justify-between mt-12 pt-6 border-t font-body text-sm">
          {id > 2 ? (
            <Link to={`/macro/${id - 1}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Unit {id - 1}
            </Link>
          ) : (
            <Link to="/micro/1" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Unit 1 (Shared)
            </Link>
          )}
          {id < maxUnit ? (
            <Link to={`/macro/${id + 1}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              Unit {id + 1} <ArrowRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
};

export default MacroUnit;
