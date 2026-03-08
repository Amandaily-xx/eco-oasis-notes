import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SectionAccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const SectionAccordion = ({ title, children, defaultOpen = false }: SectionAccordionProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="concept-block">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="font-display font-semibold text-lg text-primary">{title}</h3>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
