import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, ArrowRight, Sparkles, Lightbulb, Shield, Mail, User, Star, MapPin } from "lucide-react";
import amanda4 from "../assets/amanda-4.png";
import Seo from "../components/Seo";

const microUnits = [
{ id: 1, title: "Basic Economic Concepts", desc: "Scarcity, Opportunity Cost, PPC, Economic Systems, Comparative Advantage" },
{ id: 2, title: "Demand & Supply", desc: "Demand & Supply Curves, Elasticity, Market Equilibrium, Price Controls, International Trade" },
{ id: 3, title: "Costs & Perfect Competition", desc: "Production Costs, Profit Types, Cost Curves, Perfect Competition, Long-Run & Short-Run Decisions" },
{ id: 4, title: "Imperfect Competition", desc: "Monopoly, Natural Monopoly, Price Discrimination, Monopolistic Competition, Oligopoly, Game Theory" },
{ id: 5, title: "Factor Markets", desc: "Factors of Production, Derived Demand, MRP, Wage Determination, Monopsony" },
{ id: 6, title: "Market Failure & Role of Government", desc: "Externalities, Public Goods, Income Inequality, Government Intervention, Types of Tax" }];

const macroUnits = [
{ id: 1, title: "Basic Economic Concepts", desc: "Same foundational concepts as Micro Unit 1!", isShared: true },
{ id: 2, title: "Economic Indicators", desc: "Circular Flow, GDP, Price Indices, Unemployment, Cost of Inflation, Business Cycles" },
{ id: 3, title: "National Income & Price Determination", desc: "Multipliers, AD-AS Model, Long-Run Self-Adjustment, Fiscal Policy, Output Gaps" },
{ id: 4, title: "Financial Sector", desc: "Financial Assets, Money & Banking, Money Supply, Money Market, Monetary Policy, Loanable Funds Market, Crowding Out" },
{ id: 5, title: "Long-Run Consequences & Stabilization", desc: "Phillips Curve, Money Neutrality, Long-Run Economic Growth" },
{ id: 6, title: "International Trade & Finance", desc: "Balance of Payments Accounts, Exchange Rates, Foreign Exchange Market, Trade Policy on Exchange Market" }];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="AP Econ by Amanda — Notes & Practice for Micro and Macro"
        description="Free, plain-English AP Microeconomics and Macroeconomics study notes, graphs, and practice quizzes by Amanda. Score a 5 with confidence."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "AP Econ by Amanda",
            url: "https://amandaaa-xlee30-ap-econ-note.lovable.app/",
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Amanda X.L.",
            jobTitle: "AP Economics Teaching Assistant",
            url: "https://amandaaa-xlee30-ap-econ-note.lovable.app/about",
          },
        ]}
      />
      {/* About Amanda Banner + Contact */}
      <section className="container mx-auto px-6 pt-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-col gap-5 rounded-2xl border p-5 mb-6 items-center justify-start flex sm:flex-row"
          style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}>
          
          <img
            src={amanda4}
            alt="Amanda cartoon avatar"
            className="w-20 h-20 rounded-full object-cover border-2 flex-shrink-0"
            style={{ borderColor: "hsl(var(--accent))" }} />
          
          <div className="flex-1 text-center sm:text-left">
            <p className="font-display font-bold text-primary text-xl">Meet Amanda 🎓</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Stats & CS major, Econ minor · Scored 5 on both AP Micro & Macro 
· AP Econ TA since 2024 · 240+ students helped across 11 cohorts
            </p>
          </div>
          <div className="flex gap-2">
            <Link to="/about" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-body font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              <User className="w-4 h-4" /> About Me
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-body font-semibold border hover:bg-accent/10 transition-colors" style={{ borderColor: "hsl(var(--border))" }}>
              <Mail className="w-4 h-4" /> Contact
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Hero */}
      <section className="container mx-auto px-6 pt-8 pb-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center">
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            AP Econ, simplified.
          </h1>
          <p className="font-body text-lg md:text-xl text-accent font-semibold mb-6">
            by Amanda
          </p>
          <div className="max-w-2xl mx-auto font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              No more late-night panic sessions 😴 — these guides are designed to help you actually understand the material and <strong>score a 5</strong>. Grab your copy now while supply is high and the opportunity cost is low! :)
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-body text-sm"
              style={{ background: "hsl(var(--tip-bg))", color: "hsl(var(--tip-text))" }}>
              
              <Lightbulb className="w-4 h-4 text-accent flex-shrink-0" />
              <span>Look for <strong>Amanda's Tips</strong> throughout the notes — strategic insights to help you nail the exam!</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-body text-sm bg-amber-50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200 border border-amber-200 dark:border-amber-700">
              
              <Star className="w-4 h-4 fill-amber-500 text-amber-500 flex-shrink-0" />
              <span>Sections marked <strong>HIGH YIELD</strong> are the ones I think you'll be tested on the most!</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Micro Section */}
      <section className="container mx-auto px-6 pb-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8">
          
          <BookOpen className="w-6 h-6 text-accent" />
          <h2 className="font-display text-3xl font-bold text-primary">AP Microeconomics</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {microUnits.map((unit, i) =>
          <motion.div
            key={unit.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}>
            
              <Link to={`/micro/${unit.id}`} className="unit-card block h-full">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold font-body uppercase tracking-wider text-accent">Unit {unit.id}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-primary mb-2">{unit.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{unit.desc}</p>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Macro Section */}
      <section className="container mx-auto px-6 pb-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8">
          
          <TrendingUp className="w-6 h-6 text-accent" />
          <h2 className="font-display text-3xl font-bold text-primary">AP Macroeconomics</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {macroUnits.map((unit, i) =>
          <motion.div
            key={unit.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}>
            
              <Link
              to={unit.isShared ? "/micro/1" : `/macro/${unit.id}`}
              className="unit-card block h-full relative">
              
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold font-body uppercase tracking-wider text-accent">Unit {unit.id}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-primary mb-2">{unit.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{unit.desc}</p>
                {unit.isShared &&
              <div className="mt-3 flex items-start gap-2 p-3 rounded-lg" style={{ background: "hsl(var(--tip-bg))" }}>
                    <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
                    <p className="text-xs font-body leading-relaxed" style={{ color: "hsl(var(--tip-text))" }}>
                      <strong>Did you know?</strong> The core concepts for Unit 1—like Scarcity, Opportunity Cost, and the PPC—are identical for both Micro and Macro! No need to study it twice!
                    </p>
                  </div>
              }
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center font-body text-sm text-muted-foreground space-y-3">
        <p className="font-display font-bold text-2xl text-primary tracking-wide">AMD</p>
        <p>Made with ❤️ by Amanda X.L. · AP Economics Study Guide</p>
        <p className="flex items-center justify-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" /> Montreal, Quebec, Canada
        </p>
        <p className="flex flex-wrap items-center justify-center gap-1.5">
          <Link to="/about" className="inline-flex items-center gap-1 underline hover:text-accent transition-colors">
            <User className="w-3.5 h-3.5" /> About Amanda
          </Link>
          {" · "}
          <Link to="/contact" className="inline-flex items-center gap-1 underline hover:text-accent transition-colors">
            <Mail className="w-3.5 h-3.5" /> Contact
          </Link>
          {" · "}
          <Link to="/terms" className="underline hover:text-accent transition-colors">Terms of Use</Link>
        </p>
        <p className="flex items-center justify-center gap-1.5">
          <Shield className="w-3.5 h-3.5" />
          © {new Date().getFullYear()} Amanda X.L. All rights reserved.
        </p>
      </footer>
    </div>);
};

export default Index;
