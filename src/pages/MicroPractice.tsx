import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, BookOpen, PenTool } from "lucide-react";
import PracticeQuiz from "../components/PracticeQuiz";
import FRQPractice from "../components/FRQPractice";
import { microMCQuestions, microFRQQuestions } from "../data/microPracticeData";
import { useState } from "react";

const MicroPractice = () => {
  const [tab, setTab] = useState<"mcq" | "frq" | "resources">("mcq");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-10 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <span className="text-xs font-semibold font-body uppercase tracking-wider text-accent">Microeconomics</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-2">Practice Quizzes</h1>
          <p className="font-body text-muted-foreground mb-6">
            Test your knowledge with College Board-style MCQs and past AP FRQs. Explanations link back to the relevant notes.
          </p>

          {/* Tab Bar */}
          <div className="flex gap-2 mb-8 border-b">
            <button
              onClick={() => setTab("mcq")}
              className={`flex items-center gap-2 px-4 py-2.5 font-body text-sm font-medium border-b-2 transition-colors -mb-px ${
                tab === "mcq" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <BookOpen className="w-4 h-4" /> Multiple Choice
            </button>
            <button
              onClick={() => setTab("frq")}
              className={`flex items-center gap-2 px-4 py-2.5 font-body text-sm font-medium border-b-2 transition-colors -mb-px ${
                tab === "frq" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <PenTool className="w-4 h-4" /> Free Response
            </button>
            <button
              onClick={() => setTab("resources")}
              className={`flex items-center gap-2 px-4 py-2.5 font-body text-sm font-medium border-b-2 transition-colors -mb-px ${
                tab === "resources" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <ExternalLink className="w-4 h-4" /> More Practice
            </button>
          </div>

          {/* MCQ Tab */}
          {tab === "mcq" && (
            <div>
              <div className="info-box mb-6">
                <p className="text-sm font-body">
                  📌 These questions are adapted from the <strong>2012 College Board AP Microeconomics Exam</strong>. After answering, read the explanation and click the link to review the relevant section in the notes.
                </p>
              </div>
              <PracticeQuiz questions={microMCQuestions} title="AP Microeconomics MCQ Practice" />
            </div>
          )}

          {/* FRQ Tab */}
          {tab === "frq" && (
            <div>
              <div className="info-box mb-6">
                <p className="text-sm font-body">
                  📝 These are real past AP Micro FRQs (2022–2023). Type your answer in each box, hit <strong>Submit</strong>, then <strong>Reveal Answer</strong> to compare. FRQ answers are not auto-graded — use them to self-check your reasoning.
                </p>
              </div>
              <div className="amanda-tip mb-6">
                <p className="text-sm font-body">
                  <strong>Amanda's Tip:</strong> The most frequently tested FRQ topics are: <strong>Monopoly</strong>, <strong>Competitive Markets</strong>, <strong>Externalities</strong>, <strong>Factor/Labor Markets</strong>, and <strong>Game Theory</strong>. Focus your practice on these!
                </p>
              </div>
              <FRQPractice questions={microFRQQuestions} />
            </div>
          )}

          {/* Resources Tab */}
          {tab === "resources" && (
            <div className="space-y-4">
              <p className="font-body text-sm text-muted-foreground mb-4">
                Looking for more practice? Here are some excellent external resources:
              </p>
              <a
                href="https://www.reviewecon.com/games-activities/micro-mc-exam"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary">ReviewEcon — Micro MC Exam Practice</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      Interactive multiple-choice practice designed specifically for AP Microeconomics. Great for timed practice.
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.lumisource.io/ap/microeconomics/practice/all"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary">Lumisource — AP Micro Practice</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      Comprehensive practice questions organized by topic with detailed explanations by Lumisource.
                    </p>
                  </div>
                </div>
              </a>
              <div className="amanda-tip mt-6">
                <p className="text-sm font-body">
                  <strong>Amanda's Tip:</strong> The best strategy is to alternate between reading notes and doing practice questions. Don't just read — actively test yourself!
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MicroPractice;
