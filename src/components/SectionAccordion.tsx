import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SectionAccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  highYield?: boolean;
}

const SectionAccordion = ({ title, children, defaultOpen = false, highYield = false }: SectionAccordionProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="concept-block">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-2">
          <h3 className="font-display font-semibold text-lg text-primary">{title}</h3>
          {highYield && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-200 dark:border-amber-700" title="High-yield section — frequently tested on the AP exam!">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              HIGH YIELD
            </span>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pt-4 font-body text-sm leading-relaxed space-y-3">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionAccordion;
