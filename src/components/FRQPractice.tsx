import { useState } from "react";
import { Eye, EyeOff, Send } from "lucide-react";
import { motion } from "framer-motion";

export interface FRQQuestion {
  id: number;
  year: string;
  type: string;
  topic: string;
  parts: {
    label: string;
    question: string;
    answer: string;
  }[];
}

interface FRQPracticeProps {
  questions: FRQQuestion[];
}

const FRQPractice = ({ questions }: FRQPracticeProps) => {
  const [activeQ, setActiveQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

  const q = questions[activeQ];

  const key = (qId: number, partLabel: string) => `${qId}-${partLabel}`;

  const handleSubmitPart = (partLabel: string) => {
    const k = key(q.id, partLabel);
    if (!answers[k]?.trim()) return;
    setSubmitted((s) => ({ ...s, [k]: true }));
  };

  const handleReveal = (partLabel: string) => {
    const k = key(q.id, partLabel);
    setRevealed((r) => ({ ...r, [k]: !r[k] }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {questions.map((fq, i) => (
          <button
            key={fq.id}
            onClick={() => setActiveQ(i)}
            className={`px-3 py-1.5 rounded-lg text-xs font-body font-medium transition-colors ${
              i === activeQ ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {fq.year} · {fq.topic}
          </button>
        ))}
      </div>

      <motion.div key={q.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card border rounded-xl p-6">
        <div className="mb-4">
          <span className="text-xs font-body font-semibold uppercase tracking-wider text-accent">{q.type} FRQ</span>
          <h3 className="font-display text-lg font-bold text-primary mt-1">{q.year} — {q.topic}</h3>
        </div>

        <div className="space-y-6">
          {q.parts.map((part) => {
            const k = key(q.id, part.label);
            const isSubmitted = submitted[k];
            const isRevealed = revealed[k];

            return (
              <div key={part.label} className="border-l-2 border-accent/30 pl-4">
                <p className="font-body text-sm font-semibold text-foreground mb-1">({part.label})</p>
                <p className="font-body text-sm text-foreground mb-3 whitespace-pre-line">{part.question}</p>

                <textarea
                  value={answers[k] || ""}
                  onChange={(e) => setAnswers((a) => ({ ...a, [k]: e.target.value }))}
                  placeholder="Type your answer here..."
                  className="w-full min-h-[80px] p-3 border rounded-lg font-body text-sm bg-background resize-y focus:outline-none focus:ring-2 focus:ring-primary/30"
                  disabled={isSubmitted}
                />

                <div className="flex gap-2 mt-2">
                  {!isSubmitted ? (
                    <button
                      onClick={() => handleSubmitPart(part.label)}
                      disabled={!answers[k]?.trim()}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground rounded-lg font-body text-xs font-medium disabled:opacity-40 hover:bg-primary/90 transition-colors"
                    >
                      <Send className="w-3 h-3" /> Submit
                    </button>
                  ) : (
                    <button
                      onClick={() => handleReveal(part.label)}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-accent/20 text-accent-foreground rounded-lg font-body text-xs font-medium hover:bg-accent/30 transition-colors"
                    >
                      {isRevealed ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {isRevealed ? "Hide Answer" : "Reveal Answer"}
                    </button>
                  )}
                </div>

                {isRevealed && (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="font-body text-sm text-foreground whitespace-pre-line">
                      <strong>Answer:</strong> {part.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default FRQPractice;
