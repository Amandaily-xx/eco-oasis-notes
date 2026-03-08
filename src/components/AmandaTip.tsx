import { Lightbulb } from "lucide-react";

interface AmandaTipProps {
  children: React.ReactNode;
}

const AmandaTip = ({ children }: AmandaTipProps) => (
  <div className="amanda-tip flex gap-3">
    <Lightbulb className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--tip-border))" }} />
    <div>
      <span className="font-display font-semibold text-sm block mb-1">Amanda's Tip</span>
      <div className="text-sm leading-relaxed font-body">{children}</div>
    </div>
  </div>
);

export default AmandaTip;
