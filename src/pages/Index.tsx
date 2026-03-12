import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, ArrowRight, Sparkles, Lightbulb, Shield, Mail, User } from "lucide-react";

const microUnits = [
  { id: 1, title: "Basic Economic Concepts", desc: "Scarcity, Opportunity Cost, PPC, Economic Systems, Comparative Advantage" },
  { id: 2, title: "Supply & Demand", desc: "Demand & Supply Curves, Elasticity, Market Equilibrium, Price Controls" },
  { id: 3, title: "Costs & Perfect Competition", desc: "Production Costs, Profit Types, Cost Curves, Perfect Competition" },
  { id: 4, title: "Imperfect Competition", desc: "Monopoly, Monopolistic Competition, Oligopoly, Game Theory" },
  { id: 5, title: "Factor Markets", desc: "Labor Markets, MRP, Wage Determination, Monopsony" },
  { id: 6, title: "Market Failure", desc: "Externalities, Public Goods, Income Inequality, Government Intervention" },
];

const macroUnits = [
  { id: 1, title: "Basic Economic Concepts", desc: "Same foundational concepts as Micro Unit 1!", isShared: true },
  { id: 2, title: "Economic Indicators", desc: "Circular Flow, GDP, Unemployment, Inflation, Business Cycles" },
  { id: 3, title: "National Income & Price Determination", desc: "AD-AS Model, Multipliers, Fiscal Policy, Output Gaps" },
  { id: 4, title: "Financial Sector", desc: "Financial Assets, Money & Banking, Money Market, Monetary Policy, Loanable Funds" },
  { id: 5, title: "Long-Run Consequences & Stabilization", desc: "Phillips Curve, Money Neutrality, Economic Growth, National Debt" },
  { id: 6, title: "International Trade & Finance", desc: "Balance of Payments, Exchange Rates, Foreign Exchange Market, Trade Policy" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="container mx-auto px-6 pt-16 pb-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            AP Econ, simplified.
          </h1>
          <p className="font-body text-lg md:text-xl text-accent font-semibold mb-6">
            by Amanda ✨
          </p>
          <div className="max-w-2xl mx-auto font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              No more late-night panic sessions 😴 — these guides are designed to help you actually understand the material and <strong>score a 5</strong>. Grab your copy now while supply is high and the opportunity cost is low! :)
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl font-body text-sm"
            style={{ background: "hsl(var(--tip-bg))", color: "hsl(var(--tip-text))" }}
          >
            <Lightbulb className="w-4 h-4 text-accent flex-shrink-0" />
            <span>Look for <strong>Amanda's Tips</strong> throughout the notes — strategic insights to help you nail the exam!</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Micro Section */}
      <section className="container mx-auto px-6 pb-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <BookOpen className="w-6 h-6 text-accent" />
          <h2 className="font-display text-3xl font-bold text-primary">AP Microeconomics</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {microUnits.map((unit, i) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link to={`/micro/${unit.id}`} className="unit-card block h-full">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold font-body uppercase tracking-wider text-accent">Unit {unit.id}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-primary mb-2">{unit.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{unit.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Macro Section */}
      <section className="container mx-auto px-6 pb-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <TrendingUp className="w-6 h-6 text-accent" />
          <h2 className="font-display text-3xl font-bold text-primary">AP Macroeconomics</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {macroUnits.map((unit, i) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={unit.isShared ? "/micro/1" : `/macro/${unit.id}`}
                className="unit-card block h-full relative"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold font-body uppercase tracking-wider text-accent">Unit {unit.id}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-primary mb-2">{unit.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{unit.desc}</p>
                {unit.isShared && (
                  <div className="mt-3 flex items-start gap-2 p-3 rounded-lg" style={{ background: "hsl(var(--tip-bg))" }}>
                    <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
                    <p className="text-xs font-body leading-relaxed" style={{ color: "hsl(var(--tip-text))" }}>
                      <strong>Did you know?</strong> The core concepts for Unit 1—like Scarcity, Opportunity Cost, and the PPC—are identical for both Micro and Macro! No need to study it twice!
                    </p>
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center font-body text-sm text-muted-foreground space-y-2">
        <p>Made with ❤️ by Amanda X.L. · AP Economics Study Guide</p>
        <p className="flex items-center justify-center gap-1.5">
          <Shield className="w-3.5 h-3.5" />
          © {new Date().getFullYear()} Amanda X.L. All rights reserved.
          {" · "}
          <Link to="/terms" className="underline hover:text-accent transition-colors">Terms of Use</Link>
          {" · "}
          <Link to="/contact" className="inline-flex items-center gap-1 underline hover:text-accent transition-colors">
            <Mail className="w-3.5 h-3.5" /> Contact
          </Link>
          {" · "}
          <Link to="/about" className="inline-flex items-center gap-1 underline hover:text-accent transition-colors">
            <User className="w-3.5 h-3.5" /> About Amanda
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Index;
