import { incomeSubstitution as model } from "@/data/incomeSubstitution";

const X = (x: number) => 70 + 34 * x;
const Y = (y: number) => 360 - 24 * y;
const curve = (utility: number) => Array.from({ length: 181 }, (_, i) => {
  const x = utility / 13 + (12 - utility / 13) * i / 180;
  return `${i === 0 ? "M" : "L"} ${X(x)} ${Y(utility / x)}`;
}).join(" ");

const IncomeSubstitutionGraph = () => (
  <figure className="my-5" aria-label="Substitution and income effects for a normal good">
    <svg viewBox="0 0 560 455" role="img" aria-labelledby="se-ie-title se-ie-desc" className="w-full max-w-md mx-auto font-body">
      <title id="se-ie-title">A price decrease: substitution effect and income effect</title>
      <desc id="se-ie-desc">Quantity of good X on the horizontal axis and good Y on the vertical axis. When the price of X falls, the budget line pivots outward from the same Y intercept. A is the original choice, B is the compensated choice on the original indifference curve, and C is the final choice on a higher indifference curve. A to B is the substitution effect; B to C is the income effect. Both increase X for this normal-good example.</desc>
      <g stroke="hsl(var(--primary))" strokeWidth="2" fill="none">
        <path d="M 70 35 V 360 H 505" />
        <path d="M 65 43 L 70 35 L 75 43 M 497 355 L 505 360 L 497 365" />
      </g>
      <g fill="hsl(var(--foreground))" fontSize="14">
        <text x="70" y="21">Quantity of good Y</text>
        <text x="390" y="425">Quantity of good X</text>
        <text x="52" y="378">0</text>
        <text x="44" y={Y(12) + 5}>12</text>
        <text x={X(12)} y="380" textAnchor="middle">12</text>
      </g>
      <line x1={X(0)} y1={Y(model.income)} x2={X(model.income / model.oldPrice)} y2={Y(0)} stroke="hsl(var(--primary))" strokeWidth="2.5" />
      <line x1={X(0)} y1={Y(model.income)} x2={X(model.income / model.newPrice)} y2={Y(0)} stroke="hsl(var(--info-border))" strokeWidth="2.5" />
      <line x1={X(0)} y1={Y(model.compensatedIncome)} x2={X(model.compensatedIncome / model.newPrice)} y2={Y(0)} stroke="hsl(var(--info-border))" strokeWidth="2" strokeDasharray="7 5" />
      <path d={curve(model.originalUtility)} fill="none" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
      <path d={curve(model.finalUtility)} fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" />
      <g fontSize="15" fontWeight="700">
        <text x={X(11)} y={Y(model.originalUtility / 11) - 10} fill="hsl(var(--destructive))">U₀</text>
        <text x={X(11)} y={Y(model.finalUtility / 11) - 10} fill="hsl(var(--accent-foreground))">U₁</text>
      </g>
      {[
        { name: "A", quantity: "Q₀", point: model.original, dx: -18, dy: -12 },
        { name: "B", quantity: "Q꜀", point: model.compensated, dx: 10, dy: 19 },
        { name: "C", quantity: "Q₁", point: model.final, dx: 9, dy: -12 },
      ].map(({ name, quantity, point, dx, dy }) => (
        <g key={name}>
          <line x1={X(point.x)} y1={Y(point.y)} x2={X(point.x)} y2="360" stroke="hsl(var(--muted-foreground))" strokeDasharray="4 4" />
          <circle cx={X(point.x)} cy={Y(point.y)} r="4.5" fill="hsl(var(--foreground))" />
          <text x={X(point.x) + dx} y={Y(point.y) + dy} fill="hsl(var(--foreground))" fontSize="16" fontWeight="700">{name}</text>
          <text x={X(point.x)} y="380" fill="hsl(var(--foreground))" fontSize="14" fontWeight="600" textAnchor="middle">{quantity}</text>
        </g>
      ))}
      {[
        { from: model.original.x, to: model.compensated.x, label: "SE" },
        { from: model.compensated.x, to: model.final.x, label: "IE" },
      ].map(({ from, to, label }) => (
        <g key={label} stroke="hsl(var(--primary))" fill="hsl(var(--primary))">
          <line x1={X(from)} y1="404" x2={X(to) - 2} y2="404" strokeWidth="2" />
          <path d={`M ${X(to) - 7} 400 L ${X(to) - 2} 404 L ${X(to) - 7} 408`} fill="none" strokeWidth="2" />
          <text x={X((from + to) / 2)} y="425" textAnchor="middle" stroke="none" fontSize="14" fontWeight="700">{label}</text>
        </g>
      ))}
    </svg>
    <figcaption className="text-sm space-y-2">
      <p className="font-semibold text-primary">Normal good: price of X falls; money income and the price of Y stay fixed.</p>
      <p><strong>Solid navy:</strong> original budget · <strong>Solid blue:</strong> new budget · <strong>Dashed:</strong> compensated budget. U₁ gives higher satisfaction than U₀.</p>
          </figcaption>
  </figure>
);

export default IncomeSubstitutionGraph;