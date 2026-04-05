import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import MicroUnit1Content from "../content/MicroUnit1";
import MicroUnit2Content from "../content/MicroUnit2";
import MicroUnit3Content from "../content/MicroUnit3";
import MicroUnit4Content from "../content/MicroUnit4";
import MicroUnit5Content from "../content/MicroUnit5";
import MicroUnit6Content from "../content/MicroUnit6";


const unitInfo: Record<number, { title: string; subtitle: string }> = {
  1: { title: "Basic Economic Concepts", subtitle: "Scarcity, Resource Allocation, PPC, Comparative Advantage, Marginal Analysis" },
  2: { title: "Demand & Supply", subtitle: "Demand & Supply, Elasticity (PED & PES), Market Equilibrium, Price Controls, International Trade" },
  3: { title: "Production Costs & Perfect Competition", subtitle: "Production Function, Cost Curves, Profit Types, Profit Maximization, Competitive Markets" },
  4: { title: "Imperfect Competition", subtitle: "Monopoly, Natural Monopoly, Price Discrimination, Monopolistic Competition, Oligopoly & Game Theory" },
  5: { title: "Factor Markets", subtitle: "Factors of Production, Derived Demand, MRP, Wage Determination & Monopsony" },
  6: { title: "Market Failure & Role of Government", subtitle: "Externalities, Public Goods, Income Inequality, Types of Tax" },
};

const contentMap: Record<number, React.FC> = {
  1: MicroUnit1Content,
  2: MicroUnit2Content,
  3: MicroUnit3Content,
  4: MicroUnit4Content,
  5: MicroUnit5Content,
  6: MicroUnit6Content,
};

const MicroUnit = () => {
  const { unitId } = useParams();
  const id = Number(unitId);
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
          <span className="text-xs font-semibold font-body uppercase tracking-wider text-accent">Microeconomics · Unit {id}</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-2">{info.title}</h1>
          <p className="font-body text-muted-foreground mb-8">{info.subtitle}</p>

          {id === 1 && (
            <div className="info-box mb-8">
              <p className="text-sm font-body">
                📌 This unit is shared between <strong>AP Micro</strong> and <strong>AP Macro</strong>. Study it once, use it for both exams!
              </p>
            </div>
          )}

          <ContentComponent />
        </motion.div>

        <div className="flex justify-between mt-12 pt-6 border-t font-body text-sm">
          {id > 1 ? (
            <Link to={`/micro/${id - 1}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Unit {id - 1}
            </Link>
          ) : <div />}
          {id < 6 ? (
            <Link to={`/micro/${id + 1}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              Unit {id + 1} <ArrowRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>
      </div>
      
    </div>
  );
};

export default MicroUnit;
