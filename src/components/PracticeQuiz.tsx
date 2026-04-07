import { useState } from "react";
import { CheckCircle, XCircle, ArrowRight, RotateCcw, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export interface MCQuestion {
  id: number;
  unit: number;
  question: string;
  options: { label: string; text: string }[];
  answer: string;
  explanation: string;
  noteLink?: { path: string; label: string };
  source: string;
}

interface PracticeQuizProps {
  questions: MCQuestion[];
  title: string;
}

const PracticeQuiz = ({ questions, title }: PracticeQuizProps) => {
  const shuffleAndSelect = (qs: MCQuestion[]): MCQuestion[] => {
    // Group by unit
    const byUnit: Record<number, MCQuestion[]> = {};
    qs.forEach(q => {
      if (!byUnit[q.unit]) byUnit[q.unit] = [];
      byUnit[q.unit].push(q);
    });
    const units = Object.keys(byUnit).map(Number).sort((a, b) => a - b);
    const selected: MCQuestion[] = [];
    const perUnit = Math.max(1, Math.floor(20 / units.length));
    const remainder = 20 - perUnit * units.length;
    
    units.forEach((unit, i) => {
      const pool = [...byUnit[unit]].sort(() => Math.random() - 0.5);
      const take = perUnit + (i < remainder ? 1 : 0);
      selected.push(...pool.slice(0, Math.min(take, pool.length)));
    });
    
    // If we still need more, fill from remaining
    if (selected.length < 20) {
      const usedIds = new Set(selected.map(q => q.id));
      const remaining = qs.filter(q => !usedIds.has(q.id)).sort(() => Math.random() - 0.5);
      selected.push(...remaining.slice(0, 20 - selected.length));
    }
    
    return selected.sort(() => Math.random() - 0.5).slice(0, 20);
  };

  const [activeQuestions, setActiveQuestions] = useState<MCQuestion[]>(() => shuffleAndSelect(questions));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answeredCount, setAnsweredCount] = useState(0);

  const q = activeQuestions[currentIdx];

  const handleSelect = (label: string) => {
    if (showResult) return;
    setSelected(label);
  };

  const handleSubmit = () => {
    if (!selected) return;
    setShowResult(true);
    if (selected === q.answer) {
      setScore((s) => s + 1);
    }
    setAnsweredCount((c) => c + 1);
  };

  const handleNext = () => {
    if (currentIdx < activeQuestions.length - 1) {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setActiveQuestions(shuffleAndSelect(questions));
    setCurrentIdx(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setFinished(false);
    setAnsweredCount(0);
  };

  if (finished) {
    const pct = Math.round((score / activeQuestions.length) * 100);
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card border rounded-xl p-8 text-center">
        <h3 className="font-display text-2xl font-bold text-primary mb-4">Quiz Complete! 🎉</h3>
        <p className="font-body text-lg mb-2">
          You scored <strong className="text-primary">{score}/{activeQuestions.length}</strong> ({pct}%)
        </p>
        <p className="font-body text-muted-foreground mb-6">
          {pct >= 80 ? "Excellent work! You're well-prepared. 🔥" : pct >= 60 ? "Good effort! Review the topics you missed. 📖" : "Keep studying — you'll get there! 💪"}
        </p>
        <button onClick={handleRestart} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-body font-medium hover:bg-primary/90 transition-colors">
          <RotateCcw className="w-4 h-4" /> Try Again
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-body font-semibold uppercase tracking-wider text-accent">{title}</span>
        <span className="text-sm font-body text-muted-foreground">
          Question {currentIdx + 1} of {activeQuestions.length} · Score: {score}/{answeredCount}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={q.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-card border rounded-xl p-6">
          <p className="text-xs font-body text-muted-foreground mb-1">Unit {q.unit} · {q.source}</p>
          <p className="font-body text-foreground font-medium mb-4 whitespace-pre-line">{q.question}</p>

          <div className="space-y-2 mb-4">
            {q.options.map((opt) => {
              const isCorrect = opt.label === q.answer;
              const isSelected = opt.label === selected;
              let borderClass = "border-border";
              if (showResult && isCorrect) borderClass = "border-green-500 bg-green-50";
              else if (showResult && isSelected && !isCorrect) borderClass = "border-red-400 bg-red-50";
              else if (isSelected) borderClass = "border-primary bg-primary/5";

              return (
                <button
                  key={opt.label}
                  onClick={() => handleSelect(opt.label)}
                  className={`w-full text-left p-3 rounded-lg border-2 font-body text-sm transition-all ${borderClass} ${!showResult ? "hover:border-primary/50 cursor-pointer" : "cursor-default"}`}
                >
                  <span className="font-semibold mr-2">({opt.label})</span>
                  {opt.text}
                  {showResult && isCorrect && <CheckCircle className="inline w-4 h-4 ml-2 text-green-600" />}
                  {showResult && isSelected && !isCorrect && <XCircle className="inline w-4 h-4 ml-2 text-red-500" />}
                </button>
              );
            })}
          </div>

          {showResult && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-muted/50 border rounded-lg p-4 mb-4">
              <p className="font-body text-sm text-foreground">
                <strong>{selected === q.answer ? "✅ Correct!" : "❌ Incorrect."}</strong> {q.explanation}
              </p>
              {q.noteLink && (
                <Link to={q.noteLink.path} className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2 font-body">
                  📖 Review: {q.noteLink.label}
                </Link>
              )}
            </motion.div>
          )}

          <div className="flex justify-end gap-3">
            {!showResult ? (
              <button onClick={handleSubmit} disabled={!selected} className="px-5 py-2 bg-primary text-primary-foreground rounded-lg font-body text-sm font-medium disabled:opacity-40 hover:bg-primary/90 transition-colors">
                Check Answer
              </button>
            ) : (
              <button onClick={handleNext} className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-lg font-body text-sm font-medium hover:bg-primary/90 transition-colors">
                {currentIdx < activeQuestions.length - 1 ? <>Next <ArrowRight className="w-4 h-4" /></> : "See Results"}
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PracticeQuiz;
