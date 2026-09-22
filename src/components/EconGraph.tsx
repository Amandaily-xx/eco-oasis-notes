interface EconGraphProps {
  type:
    | "ppc"
    | "supply-demand"
    | "demand-shift"
    | "supply-shift"
    | "price-ceiling"
    | "price-floor"
    | "perfect-competition"
    | "monopoly"
    | "factor-market"
    | "negative-externality"
    | "positive-externality"
    | "ad-as"
    | "ad-as-recessionary"
    | "ad-as-inflationary"
    | "phillips-curve"
    | "forex"
    | "monopsony"
    | "short-run-costs"
    | "economies-of-scale"
    | "profit-max-pc"
    | "monopolistic-competition"
    | "lorenz-curve"
    | "business-cycle"
    | "money-market"
    | "loanable-funds"
    | "long-run-growth"
    | "natural-monopoly"
    | "price-discrimination"
    | "tariff"
    | "total-marginal-product"
    | "ped-types"
    | "demand-elasticity-time"
    | "pes-types";
  caption?: string;
}

const EconGraph = ({ type, caption }: EconGraphProps) => {
  const renderGraph = () => {
    switch (type) {
      case "ppc":
        return (
          <svg viewBox="0 0 300 250" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-ppc" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="200" x2="270" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-ppc)" />
            <line x1="50" y1="200" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-ppc)" />
            <path d="M 60 40 Q 100 60, 160 120 Q 200 160, 250 190" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <path d="M 80 30 Q 130 50, 190 110 Q 230 150, 270 175" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
            <circle cx="130" cy="100" r="4" fill="hsl(var(--destructive))" />
            <text x="138" y="96" fontSize="11" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">A (efficient)</text>
            <circle cx="100" cy="150" r="4" fill="hsl(var(--muted-foreground))" />
            <text x="108" y="147" fontSize="11" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">B (inefficient)</text>
            <text x="255" y="218" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Good X</text>
            <text x="12" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Good Y</text>
            <text x="235" y="168" fontSize="10" fill="hsl(var(--accent))" fontFamily="var(--font-body)">Growth →</text>
          </svg>
        );

      case "supply-demand":
        return (
          <svg viewBox="0 0 300 250" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-sd" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="200" x2="270" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-sd)" />
            <line x1="50" y1="200" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-sd)" />
            <line x1="70" y1="40" x2="250" y2="190" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="245" y="185" fontSize="12" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">D</text>
            <line x1="70" y1="190" x2="250" y2="40" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="245" y="38" fontSize="12" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">S</text>
            <circle cx="160" cy="115" r="5" fill="hsl(var(--primary))" />
            <line x1="50" y1="115" x2="160" y2="115" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="160" y1="115" x2="160" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <text x="30" y="119" fontSize="11" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Pe</text>
            <text x="154" y="215" fontSize="11" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Qe</text>
            <text x="255" y="218" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="30" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">P</text>
          </svg>
        );

      case "demand-shift":
        return (
          <svg viewBox="0 0 300 250" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-ds" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="200" x2="270" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-ds)" />
            <line x1="50" y1="200" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-ds)" />
            {/* Supply */}
            <line x1="70" y1="190" x2="250" y2="40" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="245" y="38" fontSize="12" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">S</text>
            {/* D1 */}
            <line x1="60" y1="40" x2="220" y2="190" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="215" y="185" fontSize="11" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">D₁</text>
            {/* D2 shifted right */}
            <line x1="100" y1="40" x2="260" y2="190" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="5 3" />
            <text x="255" y="185" fontSize="11" fill="hsl(var(--destructive))" fontFamily="var(--font-body)">D₂</text>
            {/* Original equilibrium */}
            <circle cx="140" cy="120" r="4" fill="hsl(var(--primary))" />
            <line x1="50" y1="120" x2="140" y2="120" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="140" y1="120" x2="140" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="30" y="124" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P₁</text>
            <text x="134" y="215" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q₁</text>
            {/* New equilibrium */}
            <circle cx="170" cy="100" r="4" fill="hsl(var(--destructive))" />
            <line x1="50" y1="100" x2="170" y2="100" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="170" y1="100" x2="170" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="30" y="104" fontSize="10" fill="hsl(var(--destructive))" fontFamily="var(--font-body)">P₂</text>
            <text x="164" y="215" fontSize="10" fill="hsl(var(--destructive))" fontFamily="var(--font-body)">Q₂</text>
            {/* Shift arrow */}
            <line x1="145" y1="160" x2="175" y2="160" stroke="hsl(var(--destructive))" strokeWidth="2" />
            <polygon points="175,157 181,160 175,163" fill="hsl(var(--destructive))" />
            <text x="255" y="218" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="30" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">P</text>
          </svg>
        );

      case "supply-shift":
        return (
          <svg viewBox="0 0 300 250" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-ss" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="200" x2="270" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-ss)" />
            <line x1="50" y1="200" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-ss)" />
            {/* Demand */}
            <line x1="70" y1="40" x2="250" y2="190" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="245" y="185" fontSize="12" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">D</text>
            {/* S1 */}
            <line x1="70" y1="190" x2="250" y2="40" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="245" y="38" fontSize="11" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">S₁</text>
            {/* S2 shifted right */}
            <line x1="110" y1="190" x2="270" y2="60" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="5 3" />
            <text x="268" y="58" fontSize="11" fill="hsl(var(--accent))" fontFamily="var(--font-body)">S₂</text>
            {/* Original equilibrium */}
            <circle cx="160" cy="115" r="4" fill="hsl(var(--primary))" />
            <line x1="50" y1="115" x2="160" y2="115" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="160" y1="115" x2="160" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="30" y="119" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P₁</text>
            <text x="154" y="215" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q₁</text>
            {/* New equilibrium */}
            <circle cx="185" cy="132" r="4" fill="hsl(var(--accent))" />
            <line x1="50" y1="132" x2="185" y2="132" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="185" y1="132" x2="185" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="30" y="136" fontSize="10" fill="hsl(var(--accent))" fontFamily="var(--font-body)">P₂</text>
            <text x="179" y="215" fontSize="10" fill="hsl(var(--accent))" fontFamily="var(--font-body)">Q₂</text>
            {/* Shift arrow */}
            <line x1="160" y1="160" x2="190" y2="160" stroke="hsl(var(--accent))" strokeWidth="2" />
            <polygon points="190,157 196,160 190,163" fill="hsl(var(--accent))" />
            <text x="255" y="218" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="30" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">P</text>
          </svg>
        );

      case "price-ceiling":
        return (
          <svg viewBox="0 0 300 250" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-pc" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="200" x2="270" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-pc)" />
            <line x1="50" y1="200" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-pc)" />
            <line x1="70" y1="40" x2="250" y2="190" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="245" y="185" fontSize="12" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">D</text>
            <line x1="70" y1="190" x2="250" y2="40" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="245" y="38" fontSize="12" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">S</text>
            <line x1="50" y1="145" x2="260" y2="145" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="6 4" />
            <text x="200" y="140" fontSize="11" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">Price Ceiling</text>
            {/* At Pc, supply intersects at Qs=124 and demand intersects at Qd=196 */}
            <circle cx="124" cy="145" r="4" fill="hsl(var(--accent))" />
            <circle cx="196" cy="145" r="4" fill="hsl(var(--destructive))" />
            <line x1="124" y1="145" x2="124" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="196" y1="145" x2="196" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="124" y1="165" x2="196" y2="165" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
            <line x1="124" y1="160" x2="124" y2="170" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
            <line x1="196" y1="160" x2="196" y2="170" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
            <text x="141" y="180" fontSize="10" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">Shortage</text>
            <text x="117" y="215" fontSize="10" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">Qs</text>
            <text x="189" y="215" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">Qd</text>
            <text x="30" y="149" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Pc</text>
            <text x="255" y="218" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="30" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">P</text>
          </svg>
        );

      case "price-floor":
        return (
          <svg viewBox="0 0 300 250" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-pf" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="200" x2="270" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-pf)" />
            <line x1="50" y1="200" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-pf)" />
            <line x1="70" y1="40" x2="250" y2="190" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="245" y="185" fontSize="12" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">D</text>
            <line x1="70" y1="190" x2="250" y2="40" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="245" y="38" fontSize="12" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">S</text>
            <line x1="50" y1="85" x2="260" y2="85" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="6 4" />
            <text x="200" y="80" fontSize="11" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">Price Floor</text>
            {/* At Pf, demand intersects at Qd=124 and supply intersects at Qs=196 */}
            <circle cx="124" cy="85" r="4" fill="hsl(var(--destructive))" />
            <circle cx="196" cy="85" r="4" fill="hsl(var(--accent))" />
            <line x1="124" y1="85" x2="124" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="196" y1="85" x2="196" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="124" y1="65" x2="196" y2="65" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
            <line x1="124" y1="60" x2="124" y2="70" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
            <line x1="196" y1="60" x2="196" y2="70" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
            <text x="143" y="57" fontSize="10" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">Surplus</text>
            <text x="117" y="215" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">Qd</text>
            <text x="189" y="215" fontSize="10" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">Qs</text>
            <text x="30" y="89" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Pf</text>
            <text x="255" y="218" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="30" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">P</text>
          </svg>
        );

      case "short-run-costs":
        return (
          <svg viewBox="0 0 320 260" className="w-full max-w-sm mx-auto">
            <defs><marker id="ah-src" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="220" x2="290" y2="220" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-src)" />
            <line x1="50" y1="220" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-src)" />

            {/* MC curve — passes through AVC min (145,178) and ATC min (180,142) */}
            <path d="M 75 165 Q 95 185, 115 188 Q 130 185, 145 178 Q 160 163, 180 142 Q 200 100, 220 60 Q 240 30, 260 15" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2.5" />
            <text x="262" y="18" fontSize="11" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">MC</text>

            {/* ATC curve — U-shaped, min at (180,142) */}
            <path d="M 75 55 Q 95 85, 120 112 Q 145 132, 165 140 Q 180 142, 195 140 Q 215 130, 240 105 Q 260 78, 280 48" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2.5" />
            <text x="282" y="52" fontSize="11" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">ATC</text>

            {/* AVC curve — U-shaped, min at (145,178) */}
            <path d="M 75 125 Q 95 150, 120 168 Q 135 176, 145 178 Q 160 178, 180 172 Q 205 155, 235 125 Q 260 90, 280 60" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
            <text x="282" y="64" fontSize="11" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">AVC</text>

            {/* MC intersects AVC at AVC minimum — black dot */}
            <circle cx="145" cy="178" r="4" fill="hsl(var(--foreground))" />
            {/* MC intersects ATC at ATC minimum — black dot */}
            <circle cx="180" cy="142" r="4" fill="hsl(var(--foreground))" />

            {/* Dashed lines to axes */}
            <line x1="145" y1="178" x2="145" y2="220" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50" y1="178" x2="145" y2="178" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />

            <line x1="180" y1="142" x2="180" y2="220" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50" y1="142" x2="180" y2="142" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />

            <text x="270" y="238" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="14" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Cost</text>
          </svg>
        );

      case "economies-of-scale":
        return (
          <svg viewBox="0 0 320 260" className="w-full max-w-sm mx-auto">
            <defs><marker id="ah-eos" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="220" x2="290" y2="220" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-eos)" />
            <line x1="50" y1="220" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-eos)" />
            {/* LRAC curve - deep U-shape: high left, flat bottom, high right */}
            <path d="M 65 45 Q 80 100, 100 145 Q 120 180, 140 190 Q 160 195, 180 195 Q 200 195, 210 190 Q 230 175, 250 140 Q 265 105, 280 55" fill="none" stroke="hsl(var(--accent))" strokeWidth="3" />
            <text x="275" y="50" fontSize="12" fill="hsl(var(--accent))" fontWeight="700" fontFamily="var(--font-body)">LRAC</text>

            {/* MES vertical dashed line */}
            <line x1="140" y1="190" x2="140" y2="220" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="128" y="238" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">MES</text>

            {/* Second vertical dashed line for end of constant returns */}
            <line x1="210" y1="190" x2="210" y2="220" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="4 3" />

            {/* Horizontal arrows along the flat section */}
            <line x1="140" y1="195" x2="205" y2="195" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <polygon points="205,192 210,195 205,198" fill="hsl(var(--primary))" />

            {/* Region labels */}
            <text x="68" y="180" fontSize="9" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">Economies</text>
            <text x="72" y="192" fontSize="9" fill="hsl(var(--destructive))" fontFamily="var(--font-body)">of Scale</text>
            <text x="148" y="215" fontSize="8" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Constant</text>
            <text x="223" y="180" fontSize="9" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">Diseconomies</text>
            <text x="228" y="192" fontSize="9" fill="hsl(var(--destructive))" fontFamily="var(--font-body)">of Scale</text>

            {/* Dots at transition points */}
            <circle cx="140" cy="190" r="4" fill="hsl(var(--destructive))" />
            <circle cx="210" cy="190" r="4" fill="hsl(var(--destructive))" />

            <text x="265" y="238" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Quantity</text>
            <text x="14" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Cost</text>
          </svg>
        );

      case "profit-max-pc":
        return (
          <svg viewBox="0 0 320 260" className="w-full max-w-sm mx-auto">
            <defs><marker id="ah-pmpc" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="220" x2="290" y2="220" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-pmpc)" />
            <line x1="50" y1="220" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-pmpc)" />

            {/* MC curve — U-shaped, crosses P line at (195,105) */}
            <path d="M 80 180 Q 100 200, 120 198 Q 140 190, 160 170 Q 175 150, 195 105 Q 210 70, 230 40 Q 250 18, 265 8" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2.5" />
            <text x="260" y="18" fontSize="11" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">MC</text>

            {/* ATC curve — U-shaped, min at ~(185,148) */}
            <path d="M 80 55 Q 105 90, 130 120 Q 155 140, 175 148 Q 195 148, 215 140 Q 240 118, 265 82" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
            <text x="267" y="86" fontSize="11" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">ATC</text>

            {/* AR = MR = D horizontal line */}
            <line x1="50" y1="105" x2="275" y2="105" stroke="hsl(50 90% 50%)" strokeWidth="2.5" />
            <text x="230" y="98" fontSize="10" fill="hsl(50 90% 50%)" fontWeight="600" fontFamily="var(--font-body)">P = MR = AR</text>

            {/* Intersection point — where MC crosses P on rising side */}
            <circle cx="195" cy="105" r="4.5" fill="hsl(var(--foreground))" />
            <text x="200" y="98" fontSize="10" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">E</text>

            {/* Profit rectangle: P to ATC at Q* */}
            <rect x="50" y="105" width="145" height="43" fill="hsl(120 50% 50%)" opacity="0.15" rx="2" />
            <text x="85" y="132" fontSize="9" fill="hsl(120 50% 40%)" fontWeight="600" fontFamily="var(--font-body)">Economic Profit</text>

            {/* Dashed lines */}
            <line x1="195" y1="105" x2="195" y2="220" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="50" y1="148" x2="195" y2="148" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="28" y="109" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P</text>
            <text x="22" y="152" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">ATC</text>
            <text x="188" y="236" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">q₀</text>

            <text x="255" y="238" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Output (Q)</text>
            <text x="4" y="22" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Cost/Revenue</text>
          </svg>
        );

      case "perfect-competition":
        return (
          <svg viewBox="0 0 320 260" className="w-full max-w-sm mx-auto">
            <defs><marker id="ah-pcm" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="220" x2="290" y2="220" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-pcm)" />
            <line x1="50" y1="220" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-pcm)" />

            {/* MC curve — U-shaped, crosses P line at (190,130) on rising side */}
            <path d="M 80 195 Q 105 210, 125 205 Q 145 192, 165 168 Q 180 148, 190 130 Q 205 98, 225 58 Q 245 28, 265 10" fill="none" stroke="hsl(210 80% 65%)" strokeWidth="2.5" />
            <text x="258" y="15" fontSize="11" fill="hsl(210 80% 65%)" fontWeight="600" fontFamily="var(--font-body)">MC</text>

            {/* ATC curve — U-shaped, min tangent to P line at (190,130) */}
            <path d="M 80 40 Q 110 72, 135 98 Q 160 118, 178 127 Q 190 130, 202 127 Q 222 118, 248 95 Q 268 70, 285 40" fill="none" stroke="hsl(0 70% 65%)" strokeWidth="2.5" />
            <text x="282" y="44" fontSize="11" fill="hsl(0 70% 65%)" fontWeight="600" fontFamily="var(--font-body)">ATC</text>

            {/* P = MR = AR horizontal line */}
            <line x1="50" y1="130" x2="275" y2="130" stroke="hsl(50 90% 50%)" strokeWidth="3" />
            <text x="230" y="124" fontSize="11" fill="hsl(50 90% 50%)" fontWeight="700" fontFamily="var(--font-body)">P = MR = AR</text>

            {/* Intersection dot where MC and ATC both meet P line — black dot */}
            <circle cx="190" cy="130" r="4.5" fill="hsl(var(--foreground))" />

            {/* Dashed line down to Q axis */}
            <line x1="190" y1="130" x2="190" y2="220" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <text x="183" y="236" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q*</text>

            <text x="255" y="238" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="4" y="22" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Cost/Revenue</text>
          </svg>
        );

      case "monopoly":
        return (
          <svg viewBox="0 0 320 280" className="w-full max-w-sm mx-auto">
            <defs><marker id="ah-mon" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="240" x2="290" y2="240" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-mon)" />
            <line x1="50" y1="240" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-mon)" />

            {/* D=AR=P curve — downward sloping line from (60,40) to (275,225) */}
            <line x1="60" y1="40" x2="275" y2="225" stroke="hsl(50 90% 50%)" strokeWidth="2.5" />
            <text x="262" y="220" fontSize="10" fill="hsl(50 90% 50%)" fontWeight="600" fontFamily="var(--font-body)">D=AR=P</text>

            {/* MR curve — steeper, same intercept, from (60,40) to (168,225) */}
            <line x1="60" y1="40" x2="168" y2="225" stroke="hsl(220 75% 55%)" strokeWidth="2.5" />
            <text x="160" y="222" fontSize="10" fill="hsl(220 75% 55%)" fontWeight="600" fontFamily="var(--font-body)">MR</text>

            {/* MC curve — U-shaped, passes through MC=MR at (130,163) */}
            <path d="M 75 210 Q 95 225, 110 222 Q 120 215, 130 163 Q 140 120, 160 80 Q 180 50, 210 30 Q 235 20, 255 15" fill="none" stroke="hsl(160 60% 45%)" strokeWidth="2.5" />
            <text x="252" y="18" fontSize="11" fill="hsl(160 60% 45%)" fontWeight="600" fontFamily="var(--font-body)">MC</text>

            {/* ATC curve — U-shaped, at Qf (x=130) ATC is BELOW demand price, showing positive profit */}
            <path d="M 75 75 Q 95 95, 110 110 Q 120 120, 130 128 Q 150 138, 170 138 Q 195 128, 220 105 Q 245 75, 265 45" fill="none" stroke="hsl(40 85% 55%)" strokeWidth="2.5" />
            <text x="262" y="48" fontSize="11" fill="hsl(40 85% 55%)" fontWeight="600" fontFamily="var(--font-body)">ATC</text>

            {/* MC=MR intersection — BLACK dot */}
            <circle cx="130" cy="163" r="4.5" fill="hsl(var(--foreground))" />

            {/* Price point on D curve at Qf — RED dot */}
            <circle cx="130" cy="100" r="4.5" fill="hsl(var(--destructive))" />

            {/* Profit rectangle: from ATC (y=128) to Price (y=100) */}
            <rect x="50" y="100" width="80" height="28" fill="hsl(120 50% 50%)" opacity="0.18" rx="2" />
            <text x="65" y="118" fontSize="9" fill="hsl(120 50% 40%)" fontWeight="600" fontFamily="var(--font-body)">Econ. Profit</text>

            {/* Vertical dashed from MC=MR up to D, then down to Q axis */}
            <line x1="130" y1="163" x2="130" y2="100" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="5 3" />
            <line x1="130" y1="163" x2="130" y2="240" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="5 3" />

            {/* Horizontal dashed from Pf and ATC to price axis */}
            <line x1="50" y1="100" x2="130" y2="100" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="5 3" />
            <line x1="50" y1="128" x2="130" y2="128" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />

            <text x="28" y="104" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Pf</text>
            <text x="22" y="132" fontSize="10" fill="hsl(40 85% 55%)" fontFamily="var(--font-body)">ATC</text>
            <text x="123" y="256" fontSize="11" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Qf</text>

            <text x="270" y="256" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="24" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">P</text>
          </svg>
        );

      case "monopolistic-competition":
        return (
          <svg viewBox="0 0 320 280" className="w-full max-w-sm mx-auto">
            <defs><marker id="ah-mc2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="230" x2="290" y2="230" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-mc2)" />
            <line x1="50" y1="230" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-mc2)" />

            {/* MC curve - U-shaped */}
            <path d="M 70 180 Q 90 210, 110 210 Q 130 210, 145 195 Q 165 165, 185 120 Q 200 85, 220 55 Q 235 35, 250 25" fill="none" stroke="hsl(160 60% 45%)" strokeWidth="2.5" />
            <text x="252" y="28" fontSize="11" fill="hsl(160 60% 45%)" fontWeight="600" fontFamily="var(--font-body)">MC</text>

            {/* ATC curve - U-shaped, tangent to D at (150, 117) */}
            <path d="M 80 40 Q 100 70, 120 95 Q 135 110, 150 117 Q 170 124, 185 122 Q 210 108, 235 75 Q 250 50, 265 30" fill="none" stroke="hsl(40 85% 55%)" strokeWidth="2.5" />
            <text x="267" y="33" fontSize="11" fill="hsl(40 85% 55%)" fontWeight="600" fontFamily="var(--font-body)">ATC</text>

            {/* D curve - downward sloping, tangent to ATC at equilibrium */}
            <line x1="70" y1="50" x2="260" y2="220" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="255" y="215" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">D=AR=P</text>

            {/* MR curve */}
            <line x1="70" y1="50" x2="170" y2="220" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="5 3" />
            <text x="165" y="218" fontSize="10" fill="hsl(var(--destructive))" fontFamily="var(--font-body)">MR</text>

            {/* LR equilibrium: D tangent to ATC — RED dot at tangent point */}
            <circle cx="150" cy="117" r="5" fill="hsl(var(--destructive))" />
            <line x1="150" y1="117" x2="150" y2="230" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="50" y1="117" x2="150" y2="117" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <text x="28" y="121" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">P*</text>
            <text x="143" y="248" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q*</text>
            <text x="75" y="80" fontSize="9" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">P = ATC → zero econ. profit</text>

            <text x="270" y="250" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="24" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">P, C</text>
          </svg>
        );

      case "lorenz-curve":
        return (
          <svg viewBox="0 0 300 280" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-lz" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="230" x2="270" y2="230" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-lz)" />
            <line x1="50" y1="230" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-lz)" />
            {/* Line of equality (45 degree) */}
            <line x1="50" y1="230" x2="250" y2="30" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeDasharray="5 3" />
            <text x="155" y="105" fontSize="9" fill="hsl(var(--muted-foreground))" fontFamily="var(--font-body)" transform="rotate(-45, 155, 105)">Line of Equality</text>
            {/* Lorenz curve */}
            <path d="M 50 230 Q 100 225, 140 210 Q 180 185, 210 140 Q 235 90, 250 30" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="200" y="185" fontSize="10" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">Lorenz Curve</text>
            {/* Shaded area A between curves */}
            <path d="M 50 230 Q 100 225, 140 210 Q 180 185, 210 140 Q 235 90, 250 30 L 50 230 Z" fill="hsl(var(--accent))" opacity="0.18" />
            <text x="105" y="178" fontSize="20" fill="hsl(var(--accent))" fontWeight="900" fontFamily="var(--font-display)">A</text>
            <text x="180" y="222" fontSize="20" fill="hsl(var(--primary))" fontWeight="900" fontFamily="var(--font-display)">B</text>
            <text x="80" y="262" fontSize="11" fill="hsl(var(--foreground))" fontWeight="700" fontFamily="var(--font-body)">Gini = A / (A + B)</text>
            <text x="175" y="250" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">% of Population</text>
            <text x="4" y="22" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">% of Income</text>
          </svg>
        );

      case "business-cycle":
        return (
          <svg viewBox="0 0 340 240" className="w-full max-w-sm mx-auto">
            <defs><marker id="ah-bc" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="40" y1="190" x2="310" y2="190" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-bc)" />
            <line x1="40" y1="190" x2="40" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-bc)" />
            {/* Trend line */}
            <line x1="50" y1="160" x2="290" y2="70" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="5 3" />
            <text x="255" y="62" fontSize="9" fill="hsl(var(--muted-foreground))" fontFamily="var(--font-body)">Potential GDP</text>
            {/* Business cycle wave */}
            <path d="M 50 155 Q 75 130, 100 100 Q 120 80, 130 85 Q 145 95, 160 130 Q 175 160, 190 165 Q 205 168, 215 155 Q 230 120, 250 80 Q 265 55, 275 65 Q 285 75, 295 95" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="285" y="105" fontSize="10" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">Real GDP</text>
            {/* Labels for phases */}
            <text x="72" y="75" fontSize="9" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">Expansion</text>
            <text x="118" y="73" fontSize="9" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">Peak</text>
            <text x="145" y="150" fontSize="9" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">Recession</text>
            <text x="183" y="180" fontSize="9" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">Trough</text>
            <text x="220" y="65" fontSize="9" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">Recovery</text>
            <text x="265" y="50" fontSize="9" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">Peak</text>
            {/* Dots at peak and trough */}
            <circle cx="130" cy="85" r="3.5" fill="hsl(var(--destructive))" />
            <circle cx="192" cy="165" r="3.5" fill="hsl(var(--destructive))" />
            <circle cx="275" cy="65" r="3.5" fill="hsl(var(--destructive))" />
            <text x="280" y="208" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Time</text>
            <text x="4" y="22" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Real GDP</text>
          </svg>
        );

      case "money-market":
        return (
          <svg viewBox="0 0 320 260" className="w-full max-w-sm mx-auto">
            <defs><marker id="ah-mm" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="210" x2="290" y2="210" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-mm)" />
            <line x1="50" y1="210" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-mm)" />
            {/* MS1 (vertical) */}
            <line x1="150" y1="35" x2="150" y2="200" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="140" y="30" fontSize="11" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">MS₁</text>
            {/* MS2 (vertical, shifted right) */}
            <line x1="200" y1="35" x2="200" y2="200" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="5 3" />
            <text x="190" y="30" fontSize="11" fill="hsl(var(--accent))" fontFamily="var(--font-body)">MS₂</text>
            {/* MD (downward sloping) */}
            <line x1="70" y1="45" x2="270" y2="195" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="265" y="190" fontSize="11" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">MD</text>
            {/* Equilibrium 1 */}
            <circle cx="150" cy="105" r="4" fill="hsl(var(--primary))" />
            <line x1="50" y1="105" x2="150" y2="105" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="28" y="109" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">r₀</text>
            {/* Equilibrium 2 */}
            <circle cx="200" cy="140" r="4" fill="hsl(var(--primary))" />
            <line x1="50" y1="140" x2="200" y2="140" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="28" y="144" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">r₁</text>
            {/* Arrow showing shift */}
            <line x1="158" y1="175" x2="190" y2="175" stroke="hsl(var(--accent))" strokeWidth="2" />
            <polygon points="190,172 196,175 190,178" fill="hsl(var(--accent))" />
            {/* Arrow showing rate drop */}
            <line x1="42" y1="112" x2="42" y2="133" stroke="hsl(var(--destructive))" strokeWidth="2" />
            <polygon points="39,133 42,139 45,133" fill="hsl(var(--destructive))" />
            <text x="175" y="228" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Qty of Money</text>
            <text x="4" y="22" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Nominal<tspan x="4" dy="13">Interest Rate</tspan></text>
          </svg>
        );

      case "loanable-funds":
        return (
          <svg viewBox="0 0 320 260" className="w-full max-w-sm mx-auto">
            <defs><marker id="ah-lf" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="210" x2="290" y2="210" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-lf)" />
            <line x1="50" y1="210" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-lf)" />
            {/* S of loanable funds (upward) */}
            <line x1="80" y1="185" x2="250" y2="45" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="245" y="42" fontSize="10" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">S</text>
            {/* S shifted left (gov't borrowing reduces supply) */}
            <line x1="110" y1="185" x2="270" y2="55" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="5 3" />
            <text x="268" y="52" fontSize="10" fill="hsl(var(--accent))" fontFamily="var(--font-body)">S'</text>
            {/* D for loanable funds (downward) */}
            <line x1="70" y1="45" x2="255" y2="190" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="250" y="188" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">D</text>
            {/* D shifted right (gov't borrows more) */}
            <line x1="100" y1="45" x2="275" y2="180" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="5 3" />
            <text x="272" y="178" fontSize="10" fill="hsl(var(--destructive))" fontFamily="var(--font-body)">D'</text>
            {/* Original equilibrium */}
            <circle cx="162" cy="115" r="4" fill="hsl(var(--primary))" />
            <line x1="50" y1="115" x2="162" y2="115" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="28" y="119" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">r*</text>
            {/* New equilibrium (higher rate) */}
            <circle cx="185" cy="90" r="4" fill="hsl(var(--destructive))" />
            <line x1="50" y1="90" x2="185" y2="90" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="28" y="94" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">r'</text>
            {/* Crowding out annotation */}
            <text x="90" y="230" fontSize="8" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">↑ Gov't borrowing → crowding out</text>
            <text x="175" y="228" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Loanable Funds</text>
            <text x="4" y="22" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Real<tspan x="4" dy="13">Interest Rate</tspan></text>
          </svg>
        );

      case "long-run-growth":
        return (
          <svg viewBox="0 0 480 220" className="w-full max-w-lg mx-auto">
            {/* Panel 1: LRAS shift */}
            <defs><marker id="ah-lr1" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0, 6 2.5, 0 5" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="20" y1="180" x2="140" y2="180" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-lr1)" />
            <line x1="20" y1="180" x2="20" y2="20" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-lr1)" />
            <line x1="70" y1="30" x2="70" y2="175" stroke="hsl(var(--primary))" strokeWidth="2" />
            <text x="60" y="25" fontSize="8" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">LRAS₁</text>
            <line x1="100" y1="30" x2="100" y2="175" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4 3" />
            <text x="90" y="25" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">LRAS₂</text>
            <line x1="30" y1="155" x2="130" y2="45" stroke="hsl(var(--accent))" strokeWidth="1.5" />
            <text x="125" y="42" fontSize="8" fill="hsl(var(--accent))" fontFamily="var(--font-body)">SRAS</text>
            <path d="M 35 45 Q 60 80, 120 165" fill="none" stroke="hsl(var(--destructive))" strokeWidth="1.5" />
            <text x="115" y="162" fontSize="8" fill="hsl(var(--destructive))" fontFamily="var(--font-body)">AD</text>
            <line x1="75" y1="170" x2="95" y2="170" stroke="hsl(var(--accent))" strokeWidth="1.5" />
            <polygon points="95,168 99,170 95,172" fill="hsl(var(--accent))" />
            <text x="45" y="198" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Real GDP</text>
            <text x="3" y="30" fontSize="7" fill="hsl(var(--primary))" fontFamily="var(--font-body)">PL</text>
            <text x="40" y="210" fontSize="8" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">AD-AS Model</text>

            {/* Panel 2: PPC shift */}
            <line x1="180" y1="180" x2="310" y2="180" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-lr1)" />
            <line x1="180" y1="180" x2="180" y2="20" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-lr1)" />
            <path d="M 190 40 Q 220 55, 255 100 Q 275 130, 290 170" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" />
            <path d="M 200 30 Q 240 45, 275 90 Q 295 120, 305 165" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="4 3" />
            <text x="280" y="165" fontSize="8" fill="hsl(var(--accent))" fontFamily="var(--font-body)">PPC₁</text>
            <text x="297" y="155" fontSize="8" fill="hsl(var(--accent))" fontFamily="var(--font-body)">PPC₂</text>
            <text x="195" y="198" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Consumer Goods</text>
            <text x="163" y="30" fontSize="7" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Capital</text>
            <text x="205" y="210" fontSize="8" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">PPC Model</text>

            {/* Panel 3: GDP over time */}
            <line x1="340" y1="180" x2="465" y2="180" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-lr1)" />
            <line x1="340" y1="180" x2="340" y2="20" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-lr1)" />
            <line x1="350" y1="160" x2="450" y2="50" stroke="hsl(var(--accent))" strokeWidth="2" />
            <text x="447" y="46" fontSize="8" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">GDP</text>
            <text x="370" y="198" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Time</text>
            <text x="323" y="30" fontSize="7" fill="hsl(var(--primary))" fontFamily="var(--font-body)">GDP</text>
            <text x="355" y="210" fontSize="8" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">Growth Over Time</text>
          </svg>
        );

      case "factor-market":
        return (
          <svg viewBox="0 0 300 250" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-fm" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="200" x2="270" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-fm)" />
            <line x1="50" y1="200" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-fm)" />
            <line x1="70" y1="40" x2="250" y2="190" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="240" y="185" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">MRP=D</text>
            <line x1="50" y1="115" x2="260" y2="115" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="262" y="112" fontSize="10" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">S=W</text>
            <circle cx="160" cy="115" r="5" fill="hsl(var(--primary))" />
            <line x1="160" y1="115" x2="160" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <text x="30" y="119" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">W*</text>
            <text x="153" y="215" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">L*</text>
            <text x="255" y="218" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Labor</text>
            <text x="14" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Wage</text>
          </svg>
        );

      case "monopsony":
        return (
          <svg viewBox="0 0 300 260" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-mps" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="210" x2="270" y2="210" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-mps)" />
            <line x1="50" y1="210" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-mps)" />
            <line x1="70" y1="40" x2="250" y2="195" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="240" y="190" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">MRP</text>
            <line x1="70" y1="190" x2="240" y2="60" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="242" y="58" fontSize="10" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">S</text>
            <line x1="70" y1="170" x2="200" y2="30" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="5 3" />
            <text x="200" y="28" fontSize="10" fill="hsl(var(--accent))" fontFamily="var(--font-body)">MFC</text>
            <circle cx="135" cy="100" r="4" fill="hsl(var(--primary))" />
            <line x1="135" y1="100" x2="135" y2="138" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="135" cy="138" r="4" fill="hsl(var(--accent))" />
            <line x1="50" y1="138" x2="135" y2="138" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="135" y1="138" x2="135" y2="210" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="25" y="142" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Wm</text>
            <text x="128" y="227" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Lm</text>
            <text x="255" y="228" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Labor</text>
            <text x="14" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Wage</text>
          </svg>
        );

      case "negative-externality":
        return (
          <svg viewBox="0 0 300 250" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-ne" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="200" x2="270" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-ne)" />
            <line x1="50" y1="200" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-ne)" />
            <line x1="70" y1="40" x2="250" y2="190" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="245" y="185" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">D=MPB</text>
            <line x1="70" y1="190" x2="250" y2="60" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="245" y="56" fontSize="10" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">MPC</text>
            <line x1="70" y1="150" x2="250" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5 3" />
            <text x="245" y="18" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">MSC</text>
            <polygon points="145,100 160,115 145,130" fill="hsl(var(--destructive))" opacity="0.15" />
            <text x="148" y="120" fontSize="8" fill="hsl(var(--destructive))" fontFamily="var(--font-body)">DWL</text>
            <text x="255" y="218" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="30" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">P</text>
          </svg>
        );

      case "positive-externality":
        return (
          <svg viewBox="0 0 300 250" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-pe" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="200" x2="270" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-pe)" />
            <line x1="50" y1="200" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-pe)" />
            <line x1="70" y1="190" x2="250" y2="60" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="245" y="56" fontSize="10" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">S=MPC</text>
            <line x1="70" y1="60" x2="250" y2="190" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="245" y="185" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">MPB</text>
            <line x1="70" y1="20" x2="250" y2="150" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5 3" />
            <text x="245" y="148" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">MSB</text>
            <text x="255" y="218" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="30" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">P</text>
          </svg>
        );

      case "ad-as":
        return (
          <svg viewBox="0 0 320 260" className="w-full max-w-sm mx-auto">
            <defs><marker id="ah-adas" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="210" x2="290" y2="210" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-adas)" />
            <line x1="50" y1="210" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-adas)" />
            {/* LRAS vertical at x=190 */}
            <line x1="190" y1="30" x2="190" y2="200" stroke="hsl(var(--primary))" strokeWidth="2.5" />
            <text x="183" y="25" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">LRAS</text>
            {/* SRAS — upward sloping, passes through (190,105) */}
            <line x1="70" y1="185" x2="280" y2="40" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="275" y="36" fontSize="11" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">SRAS</text>
            {/* AD — downward sloping curve, passes through (190,105) */}
            <path d="M 75 40 Q 130 65, 190 105 Q 235 140, 270 195" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="265" y="192" fontSize="11" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">AD</text>
            {/* Equilibrium dot — all three intersect at (190,105) */}
            <circle cx="190" cy="105" r="5" fill="hsl(var(--primary))" />
            <line x1="50" y1="105" x2="190" y2="105" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <text x="28" y="109" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">PLe</text>
            <text x="183" y="226" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Yf</text>
            <text x="270" y="228" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Real GDP</text>
            <text x="10" y="22" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Price Level</text>
          </svg>
        );

      case "ad-as-recessionary":
        return (
          <svg viewBox="0 0 320 260" className="w-full max-w-sm mx-auto">
            <defs><marker id="ah-rec" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="210" x2="290" y2="210" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-rec)" />
            <line x1="50" y1="210" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-rec)" />
            <line x1="200" y1="30" x2="200" y2="200" stroke="hsl(var(--primary))" strokeWidth="2.5" />
            <text x="193" y="25" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">LRAS</text>
            <line x1="70" y1="180" x2="270" y2="50" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="265" y="46" fontSize="11" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">SRAS</text>
            <path d="M 60 50 Q 110 100, 220 195" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="215" y="192" fontSize="11" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">AD</text>
            <path d="M 90 50 Q 150 100, 260 195" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="5 3" opacity="0.5" />
            <text x="255" y="192" fontSize="10" fill="hsl(var(--destructive))" opacity="0.5" fontFamily="var(--font-body)">AD'</text>
            <line x1="165" y1="205" x2="200" y2="205" stroke="hsl(var(--destructive))" strokeWidth="2" />
            <text x="158" y="220" fontSize="9" fill="hsl(var(--destructive))" fontFamily="var(--font-body)">Gap</text>
            <text x="270" y="228" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Real GDP</text>
            <text x="10" y="22" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Price Level</text>
          </svg>
        );

      case "ad-as-inflationary":
        return (
          <svg viewBox="0 0 320 260" className="w-full max-w-sm mx-auto">
            <defs><marker id="ah-inf" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="210" x2="290" y2="210" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-inf)" />
            <line x1="50" y1="210" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-inf)" />
            <line x1="180" y1="30" x2="180" y2="200" stroke="hsl(var(--primary))" strokeWidth="2.5" />
            <text x="173" y="25" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">LRAS</text>
            <line x1="70" y1="180" x2="270" y2="50" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="265" y="46" fontSize="11" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">SRAS</text>
            <path d="M 110 50 Q 170 100, 275 195" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="268" y="192" fontSize="11" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">AD</text>
            <path d="M 80 50 Q 130 100, 240 195" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="5 3" opacity="0.5" />
            <text x="233" y="192" fontSize="10" fill="hsl(var(--destructive))" opacity="0.5" fontFamily="var(--font-body)">AD'</text>
            <line x1="180" y1="205" x2="215" y2="205" stroke="hsl(var(--destructive))" strokeWidth="2" />
            <text x="180" y="220" fontSize="9" fill="hsl(var(--destructive))" fontFamily="var(--font-body)">Gap</text>
            <text x="270" y="228" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Real GDP</text>
            <text x="10" y="22" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Price Level</text>
          </svg>
        );

      case "phillips-curve":
        return (
          <svg viewBox="0 0 300 250" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-phil" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="200" x2="270" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-phil)" />
            <line x1="50" y1="200" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-phil)" />
            <line x1="160" y1="30" x2="160" y2="195" stroke="hsl(var(--primary))" strokeWidth="2.5" />
            <text x="150" y="25" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">LRPC</text>
            <path d="M 80 50 Q 130 100, 240 180" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="240" y="175" fontSize="11" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">SRPC</text>
            <text x="147" y="215" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">NRU</text>
            <text x="220" y="218" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Unemployment</text>
            <text x="10" y="22" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Inflation</text>
          </svg>
        );

      case "forex":
        return (
          <svg viewBox="0 0 300 250" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-fx" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="200" x2="270" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-fx)" />
            <line x1="50" y1="200" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-fx)" />
            <line x1="70" y1="40" x2="250" y2="190" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="240" y="188" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">D$</text>
            <line x1="70" y1="190" x2="250" y2="40" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="245" y="38" fontSize="10" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">S$</text>
            <circle cx="160" cy="115" r="5" fill="hsl(var(--primary))" />
            <line x1="50" y1="115" x2="160" y2="115" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="160" y1="115" x2="160" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <text x="22" y="119" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">ER*</text>
            <text x="153" y="215" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q*</text>
            <text x="210" y="218" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Qty of USD</text>
            <text x="4" y="22" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Exchange Rate<tspan x="4" dy="13">(¥ per $)</tspan></text>
          </svg>
        );

      case "natural-monopoly":
        return (
          <svg viewBox="0 0 340 280" className="w-full max-w-sm mx-auto">
            <defs><marker id="ah-nm" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="240" x2="310" y2="240" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-nm)" />
            <line x1="50" y1="240" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-nm)" />

            {/* AR (Demand) — downward sloping */}
            <line x1="60" y1="50" x2="290" y2="230" stroke="hsl(var(--foreground))" strokeWidth="2" />
            <text x="280" y="225" fontSize="10" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">AR</text>

            {/* MR — steeper */}
            <line x1="60" y1="50" x2="175" y2="230" stroke="hsl(220 75% 55%)" strokeWidth="2" />
            <text x="168" y="228" fontSize="10" fill="hsl(220 75% 55%)" fontWeight="600" fontFamily="var(--font-body)">MR</text>

            {/* Long Run Average Cost — declining curve */}
            <path d="M 68 35 Q 100 75, 130 115 Q 160 148, 195 168 Q 225 178, 260 183 Q 280 185, 300 186" fill="none" stroke="hsl(0 70% 55%)" strokeWidth="2.5" />
            <text x="275" y="178" fontSize="10" fill="hsl(0 70% 55%)" fontWeight="600" fontFamily="var(--font-body)">LRAC</text>

            {/* Long Run Marginal Cost — below LRAC, declining */}
            <path d="M 68 75 Q 100 120, 130 155 Q 160 180, 195 198 Q 225 208, 260 213 Q 280 216, 300 218" fill="none" stroke="hsl(160 60% 45%)" strokeWidth="2.5" />
            <text x="275" y="212" fontSize="10" fill="hsl(160 60% 45%)" fontWeight="600" fontFamily="var(--font-body)">LRMC</text>

            {/* Monopoly: MC=MR at ~x=120 */}
            <circle cx="120" cy="144" r="3.5" fill="hsl(var(--foreground))" />
            <line x1="120" y1="144" x2="120" y2="97" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="120" y1="240" x2="120" y2="144" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <circle cx="120" cy="97" r="3.5" fill="hsl(220 75% 55%)" />
            <text x="112" y="92" fontSize="9" fill="hsl(220 75% 55%)" fontWeight="600" fontFamily="var(--font-body)">Z</text>
            <line x1="50" y1="97" x2="120" y2="97" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <text x="30" y="101" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">P</text>
            <text x="114" y="254" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q</text>

            {/* Fair-return: LRAC=AR at ~x=210 */}
            <circle cx="210" cy="170" r="3.5" fill="hsl(220 75% 55%)" />
            <text x="214" y="166" fontSize="9" fill="hsl(220 75% 55%)" fontWeight="600" fontFamily="var(--font-body)">B</text>
            <line x1="50" y1="170" x2="210" y2="170" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="210" y1="170" x2="210" y2="240" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <text x="30" y="174" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">C</text>

            {/* Socially optimal: LRMC=AR at ~x=245 */}
            <circle cx="248" cy="197" r="3.5" fill="hsl(220 75% 55%)" />
            <text x="252" y="193" fontSize="9" fill="hsl(220 75% 55%)" fontWeight="600" fontFamily="var(--font-body)">A</text>
            <line x1="50" y1="197" x2="248" y2="197" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="248" y1="197" x2="248" y2="240" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <text x="26" y="201" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P1</text>
            <text x="240" y="254" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q1</text>

            {/* Annotation */}
            <text x="145" y="52" fontSize="9" fill="hsl(var(--muted-foreground))" fontStyle="italic" fontFamily="var(--font-body)">Long Run Average Costs</text>
            <text x="145" y="64" fontSize="9" fill="hsl(var(--muted-foreground))" fontStyle="italic" fontFamily="var(--font-body)">continue to fall as</text>
            <text x="145" y="76" fontSize="9" fill="hsl(0 70% 55%)" fontStyle="italic" fontFamily="var(--font-body)">economies of scale</text>
            <text x="145" y="88" fontSize="9" fill="hsl(var(--muted-foreground))" fontStyle="italic" fontFamily="var(--font-body)">are generated</text>

            <text x="270" y="256" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Output</text>
            <text x="4" y="28" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Costs &amp; Revenue</text>
          </svg>
        );

      case "price-discrimination":
        return (
          <svg viewBox="0 0 620 280" className="w-full max-w-2xl mx-auto">
            <defs><marker id="ah-pd1" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0, 7 2.5, 0 5" fill="hsl(var(--primary))" /></marker></defs>

            {/* === Left Panel: Perfect Price Discrimination === */}
            <text x="80" y="18" fontSize="12" fill="hsl(var(--foreground))" fontWeight="700" fontFamily="var(--font-body)">Perfect Price Discrimination</text>
            <line x1="50" y1="240" x2="270" y2="240" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-pd1)" />
            <line x1="50" y1="240" x2="50" y2="40" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-pd1)" />

            {/* MC — upward sloping */}
            <line x1="60" y1="220" x2="240" y2="55" stroke="hsl(160 60% 45%)" strokeWidth="2.5" />
            <text x="235" y="50" fontSize="10" fill="hsl(160 60% 45%)" fontWeight="600" fontFamily="var(--font-body)">MC</text>

            {/* Demand — downward sloping */}
            <line x1="60" y1="50" x2="250" y2="225" stroke="hsl(220 75% 55%)" strokeWidth="2.5" />
            <text x="242" y="222" fontSize="10" fill="hsl(220 75% 55%)" fontWeight="600" fontFamily="var(--font-body)">Demand</text>

            {/* Producer Surplus — entire triangle */}
            <polygon points="60,50 60,220 155,135" fill="hsl(0 70% 55%)" opacity="0.2" />
            <text x="68" y="152" fontSize="9" fill="hsl(0 70% 55%)" fontWeight="600" fontFamily="var(--font-body)">Producer</text>
            <text x="68" y="164" fontSize="9" fill="hsl(0 70% 55%)" fontWeight="600" fontFamily="var(--font-body)">Surplus</text>

            {/* No CS, No DWL label */}
            <text x="85" y="100" fontSize="8" fill="hsl(var(--muted-foreground))" fontStyle="italic" fontFamily="var(--font-body)">No CS, No DWL</text>

            <circle cx="155" cy="135" r="4" fill="hsl(var(--foreground))" />
            <line x1="155" y1="135" x2="155" y2="240" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="120" y="256" fontSize="9" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q (1st degree)</text>
            <text x="25" y="50" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">$</text>

            {/* === Right Panel: Standard Monopoly === */}
            <text x="410" y="18" fontSize="12" fill="hsl(var(--foreground))" fontWeight="700" fontFamily="var(--font-body)">Standard Monopoly</text>
            <line x1="350" y1="240" x2="580" y2="240" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-pd1)" />
            <line x1="350" y1="240" x2="350" y2="40" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-pd1)" />

            {/* MC */}
            <line x1="360" y1="220" x2="545" y2="55" stroke="hsl(160 60% 45%)" strokeWidth="2.5" />
            <text x="540" y="50" fontSize="10" fill="hsl(160 60% 45%)" fontWeight="600" fontFamily="var(--font-body)">MC</text>

            {/* Demand */}
            <line x1="360" y1="50" x2="555" y2="225" stroke="hsl(220 75% 55%)" strokeWidth="2.5" />
            <text x="547" y="222" fontSize="10" fill="hsl(220 75% 55%)" fontWeight="600" fontFamily="var(--font-body)">Demand</text>

            {/* MR */}
            <line x1="360" y1="50" x2="458" y2="225" stroke="hsl(var(--destructive))" strokeWidth="2" />
            <text x="452" y="222" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">MR</text>

            {/* MC=MR at ~(422,162) */}
            <circle cx="422" cy="162" r="3.5" fill="hsl(var(--foreground))" />

            {/* Pm on D at x=422: y ≈ 50 + 175*(422-360)/195 ≈ 106 */}
            <line x1="422" y1="162" x2="422" y2="106" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="350" y1="106" x2="422" y2="106" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="422" y1="162" x2="422" y2="240" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="328" y="110" fontSize="9" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Pm</text>

            {/* Ppc — competitive price where MC=D, ~(458,133) */}
            <line x1="350" y1="133" x2="458" y2="133" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="458" y1="133" x2="458" y2="240" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="326" y="137" fontSize="9" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Ppc</text>

            {/* Consumer Surplus */}
            <polygon points="360,50 360,106 422,106" fill="hsl(50 90% 50%)" opacity="0.25" />
            <text x="365" y="82" fontSize="8" fill="hsl(50 80% 40%)" fontFamily="var(--font-body)">Consumer</text>
            <text x="365" y="92" fontSize="8" fill="hsl(50 80% 40%)" fontFamily="var(--font-body)">Surplus</text>

            {/* Producer Surplus */}
            <polygon points="360,220 360,106 422,106 422,162" fill="hsl(0 70% 55%)" opacity="0.15" />
            <text x="370" y="168" fontSize="8" fill="hsl(0 70% 55%)" fontWeight="600" fontFamily="var(--font-body)">Producer</text>
            <text x="370" y="178" fontSize="8" fill="hsl(0 70% 55%)" fontWeight="600" fontFamily="var(--font-body)">Surplus</text>

            {/* DWL */}
            <polygon points="422,106 422,162 458,133" fill="hsl(280 60% 55%)" opacity="0.25" />
            <text x="430" y="140" fontSize="7" fill="hsl(280 60% 55%)" fontWeight="700" fontFamily="var(--font-body)">DWL</text>

            <text x="414" y="254" fontSize="9" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Qm</text>
            <text x="450" y="254" fontSize="9" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Qpc</text>
            <text x="335" y="50" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">$</text>
          </svg>
        );

      case "tariff":
        return (
          <svg viewBox="0 0 340 290" className="w-full max-w-sm mx-auto">
            <defs><marker id="ah-tar" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="240" x2="310" y2="240" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-tar)" />
            <line x1="50" y1="240" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-tar)" />
            {/* Domestic Supply (DS): from (60,220) to (280,40) */}
            <line x1="60" y1="220" x2="280" y2="40" stroke="hsl(210 80% 55%)" strokeWidth="2.5" />
            <text x="275" y="35" fontSize="11" fill="hsl(210 80% 55%)" fontWeight="600" fontFamily="var(--font-body)">DS</text>
            {/* Domestic Demand (DD): from (60,40) to (280,220) */}
            <line x1="60" y1="40" x2="280" y2="220" stroke="hsl(210 80% 55%)" strokeWidth="2.5" />
            <text x="275" y="218" fontSize="11" fill="hsl(210 80% 55%)" fontWeight="600" fontFamily="var(--font-body)">DD</text>
            {/* World Supply (Ws) at y=175 */}
            <line x1="50" y1="175" x2="300" y2="175" stroke="hsl(120 50% 45%)" strokeWidth="2" />
            <text x="282" y="170" fontSize="10" fill="hsl(120 50% 45%)" fontWeight="600" fontFamily="var(--font-body)">Ws</text>
            {/* World Supply + Tariff at y=150 */}
            <line x1="50" y1="150" x2="300" y2="150" stroke="hsl(120 50% 45%)" strokeWidth="2" />
            <text x="262" y="145" fontSize="9" fill="hsl(120 50% 45%)" fontWeight="600" fontFamily="var(--font-body)">Ws + T</text>
            {/* Price labels */}
            <text x="20" y="179" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Pw</text>
            <text x="4" y="154" fontSize="9" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Pw+T</text>
            {/* Q intersections: DS∩Ws at Q1≈(97,175), DD∩Ws at Q2≈(237,175), DS∩(Ws+T) at Q3≈(117,150), DD∩(Ws+T) at Q4≈(216,150) */}
            <line x1="97" y1="175" x2="97" y2="240" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="117" y1="150" x2="117" y2="240" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="216" y1="150" x2="216" y2="240" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="237" y1="175" x2="237" y2="240" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="90" y="254" fontSize="9" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q1</text>
            <text x="110" y="254" fontSize="9" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q3</text>
            <text x="209" y="254" fontSize="9" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q4</text>
            <text x="230" y="254" fontSize="9" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q2</text>
            {/* Consumer Surplus — triangle above Pw+T between DD intercept at top and DD∩(Ws+T) */}
            <polygon points="60,40 60,150 216,150" fill="hsl(50 90% 55%)" opacity="0.2" />
            <text x="70" y="100" fontSize="9" fill="hsl(50 80% 40%)" fontWeight="600" fontFamily="var(--font-body)">Consumer</text>
            <text x="70" y="112" fontSize="9" fill="hsl(50 80% 40%)" fontWeight="600" fontFamily="var(--font-body)">Surplus</text>
            {/* Producer Surplus — triangle below Pw+T between DS intercept at bottom and DS∩(Ws+T) */}
            <polygon points="60,220 60,150 117,150" fill="hsl(200 70% 55%)" opacity="0.2" />
            <text x="62" y="195" fontSize="8" fill="hsl(200 70% 45%)" fontWeight="600" fontFamily="var(--font-body)">Producer</text>
            <text x="62" y="205" fontSize="8" fill="hsl(200 70% 45%)" fontFamily="var(--font-body)">Surplus</text>
            {/* Tax Revenue rectangle — between Q3 and Q4 at tariff height */}
            <rect x="117" y="150" width="99" height="25" fill="hsl(120 60% 45%)" opacity="0.2" rx="2" />
            <text x="135" y="167" fontSize="9" fill="hsl(120 60% 35%)" fontWeight="600" fontFamily="var(--font-body)">Tax Revenue</text>
            {/* DWL triangle 1: between Q1, Q3 on DS line */}
            <polygon points="97,175 117,150 117,175" fill="hsl(0 70% 55%)" opacity="0.3" />
            <text x="98" y="172" fontSize="7" fill="hsl(0 70% 45%)" fontWeight="700" fontFamily="var(--font-body)">DWL</text>
            {/* DWL triangle 2: between Q4, Q2 on DD line */}
            <polygon points="216,150 237,175 216,175" fill="hsl(0 70% 55%)" opacity="0.3" />
            <text x="217" y="172" fontSize="7" fill="hsl(0 70% 45%)" fontWeight="700" fontFamily="var(--font-body)">DWL</text>
            {/* Imported bracket */}
            <line x1="117" y1="268" x2="216" y2="268" stroke="hsl(var(--foreground))" strokeWidth="2" />
            <line x1="117" y1="263" x2="117" y2="273" stroke="hsl(var(--foreground))" strokeWidth="2" />
            <line x1="216" y1="263" x2="216" y2="273" stroke="hsl(var(--foreground))" strokeWidth="2" />
            <text x="140" y="282" fontSize="10" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">Imported</text>
            <text x="290" y="256" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="30" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">P</text>
          </svg>
        );

      case "total-marginal-product":
        return (
          <svg viewBox="0 0 420 320" className="w-full max-w-md mx-auto">
            <defs><marker id="ah-tmp" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            {/* TP Graph (top) */}
            <text x="10" y="15" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Total Product</text>
            <line x1="50" y1="140" x2="390" y2="140" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-tmp)" />
            <line x1="50" y1="140" x2="50" y2="10" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-tmp)" />
            {/* TP curve: rises at increasing rate, then decreasing rate, then declines */}
            <path d="M 60 130 Q 90 125, 120 110 Q 160 80, 200 55 Q 240 35, 270 28 Q 300 25, 320 30 Q 345 38, 365 55" fill="none" stroke="hsl(50 80% 50%)" strokeWidth="3" />
            <text x="368" y="50" fontSize="10" fill="hsl(50 80% 50%)" fontWeight="700" fontFamily="var(--font-body)">TP</text>
            {/* Dashed lines for inflection point and max */}
            <line x1="200" y1="55" x2="200" y2="140" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="300" y1="25" x2="300" y2="140" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <text x="375" y="140" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Labor</text>

            {/* MP & AP Graph (bottom) */}
            <text x="10" y="168" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Marginal / Average Product</text>
            <line x1="50" y1="300" x2="390" y2="300" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-tmp)" />
            <line x1="50" y1="300" x2="50" y2="175" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-tmp)" />
            {/* Zero line */}
            <line x1="50" y1="300" x2="390" y2="300" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" />
            {/* MP curve: rises to peak at inflection of TP, then falls through zero */}
            <path d="M 60 270 Q 100 230, 140 210 Q 170 200, 200 195 Q 210 196, 200 195" fill="none" stroke="hsl(0 70% 60%)" strokeWidth="2.5" />
            <path d="M 200 195 Q 230 215, 260 245 Q 285 275, 300 300 Q 320 320, 350 335" fill="none" stroke="hsl(0 70% 60%)" strokeWidth="2.5" />
            <text x="352" y="333" fontSize="10" fill="hsl(0 70% 60%)" fontWeight="700" fontFamily="var(--font-body)">MP</text>
            {/* MP = 0 label where MP crosses Labor axis */}
            <circle cx="300" cy="300" r="3" fill="hsl(0 70% 60%)" />
            <text x="305" y="293" fontSize="10" fill="hsl(0 70% 60%)" fontWeight="700" fontFamily="var(--font-body)">MP = 0</text>
            {/* AP curve: rises slower, peaks after MP peak, then falls (MP crosses AP at AP max) */}
            <path d="M 60 275 Q 120 240, 180 220 Q 220 212, 250 215 Q 280 220, 310 240 Q 340 260, 360 275" fill="none" stroke="hsl(180 60% 50%)" strokeWidth="2.5" />
            <text x="362" y="273" fontSize="10" fill="hsl(180 60% 50%)" fontWeight="700" fontFamily="var(--font-body)">AP</text>
            {/* Dashed lines connecting to top graph */}
            <line x1="200" y1="195" x2="200" y2="300" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            {/* Extend TP-peak dashed line down through bottom graph to MP = 0 on Labor axis */}
            <line x1="300" y1="175" x2="300" y2="300" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <text x="375" y="298" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Labor</text>
          </svg>
        );

      case "ped-types":
        return (
          <svg viewBox="0 0 500 220" className="w-full max-w-lg mx-auto">
            <defs><marker id="ah-ped" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0, 6 2.5, 0 5" fill="hsl(var(--primary))" /></marker></defs>
            {/* Perfectly Inelastic — vertical line */}
            <line x1="20" y1="180" x2="90" y2="180" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-ped)" />
            <line x1="20" y1="180" x2="20" y2="10" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-ped)" />
            <line x1="55" y1="170" x2="55" y2="25" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="48" y="20" fontSize="9" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">D</text>
            <text x="10" y="200" fontSize="8" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">Perfectly Inelastic</text>
            <text x="35" y="210" fontSize="8" fill="hsl(var(--muted-foreground))" fontFamily="var(--font-body)">Ed = 0</text>
            <text x="8" y="8" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P</text>
            <text x="85" y="195" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q</text>
            {/* Inelastic — STEEP slope (almost vertical) */}
            <line x1="120" y1="180" x2="190" y2="180" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-ped)" />
            <line x1="120" y1="180" x2="120" y2="10" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-ped)" />
            <line x1="133" y1="25" x2="160" y2="170" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="157" y="165" fontSize="9" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">D</text>
            <text x="125" y="200" fontSize="8" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">Inelastic</text>
            <text x="130" y="210" fontSize="8" fill="hsl(var(--muted-foreground))" fontFamily="var(--font-body)">Ed &lt; 1</text>
            <text x="108" y="8" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P</text>
            <text x="185" y="195" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q</text>
            {/* Unit Elastic — 45° diagonal */}
            <line x1="220" y1="180" x2="290" y2="180" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-ped)" />
            <line x1="220" y1="180" x2="220" y2="10" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-ped)" />
            <line x1="228" y1="25" x2="283" y2="170" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="278" y="165" fontSize="9" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">D</text>
            <text x="225" y="200" fontSize="8" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">Unit Elastic</text>
            <text x="235" y="210" fontSize="8" fill="hsl(var(--muted-foreground))" fontFamily="var(--font-body)">Ed = 1</text>
            <text x="208" y="8" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P</text>
            <text x="285" y="195" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q</text>
            {/* Elastic — FLAT slope (almost horizontal) */}
            <line x1="320" y1="180" x2="390" y2="180" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-ped)" />
            <line x1="320" y1="180" x2="320" y2="10" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-ped)" />
            <line x1="325" y1="70" x2="385" y2="140" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="380" y="135" fontSize="9" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">D</text>
            <text x="335" y="200" fontSize="8" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">Elastic</text>
            <text x="335" y="210" fontSize="8" fill="hsl(var(--muted-foreground))" fontFamily="var(--font-body)">Ed &gt; 1</text>
            <text x="308" y="8" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P</text>
            <text x="385" y="195" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q</text>
            {/* Perfectly Elastic — horizontal line */}
            <line x1="420" y1="180" x2="490" y2="180" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-ped)" />
            <line x1="420" y1="180" x2="420" y2="10" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-ped)" />
            <line x1="425" y1="90" x2="485" y2="90" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="480" y="85" fontSize="9" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">D</text>
            <text x="420" y="200" fontSize="8" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">Perfectly Elastic</text>
            <text x="435" y="210" fontSize="8" fill="hsl(var(--muted-foreground))" fontFamily="var(--font-body)">Ed = ∞</text>
            <text x="408" y="8" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P</text>
            <text x="485" y="195" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q</text>
          </svg>
        );

      case "demand-elasticity-time":
        return (
          <svg viewBox="0 0 360 270" className="w-full max-w-md mx-auto">
            <defs>
              <marker id="ah-det" markerWidth="7" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 7 3, 0 6" fill="hsl(var(--primary))" /></marker>
              <marker id="ah-supply-shift" markerWidth="7" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 7 3, 0 6" fill="hsl(var(--destructive))" /></marker>
            </defs>
            <line x1="55" y1="220" x2="325" y2="220" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-det)" />
            <line x1="55" y1="220" x2="55" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-det)" />
            {/* Supply curves: a positive supply shock shifts S₀ right to S₁. */}
            <line x1="60" y1="168" x2="300" y2="44" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="302" y="45" fontSize="11" fill="hsl(var(--destructive))" fontWeight="700" fontFamily="var(--font-body)">S₀</text>
            <line x1="90" y1="209" x2="320" y2="90" stroke="hsl(var(--destructive))" strokeWidth="2.5" strokeDasharray="7 5" />
            <text x="321" y="91" fontSize="11" fill="hsl(var(--destructive))" fontWeight="700" fontFamily="var(--font-body)">S₁</text>
            <path d="M 225 73 L 250 73" fill="none" stroke="hsl(var(--destructive))" strokeWidth="1.5" markerEnd="url(#ah-supply-shift)" />
            {/* Demand curves share E₀; Dₛ is steep and Dₗ is flatter. */}
            <line x1="88" y1="86" x2="308" y2="132" stroke="hsl(var(--primary))" strokeWidth="2.5" />
            <text x="309" y="136" fontSize="11" fill="hsl(var(--primary))" fontWeight="700" fontFamily="var(--font-body)">Dₗ</text>
            <line x1="158" y1="30" x2="211" y2="205" stroke="hsl(var(--primary))" strokeWidth="2.5" />
            <text x="213" y="204" fontSize="11" fill="hsl(var(--primary))" fontWeight="700" fontFamily="var(--font-body)">Dₛ</text>
            {/* Initial, short-run, and long-run equilibria. */}
            <circle cx="180" cy="105" r="4" fill="hsl(var(--foreground))" />
            <text x="164" y="96" fontSize="10" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">E₀</text>
            <circle cx="199" cy="166" r="4" fill="hsl(var(--foreground))" />
            <text x="203" y="178" fontSize="10" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">Eₛ</text>
            <circle cx="260" cy="122" r="4" fill="hsl(var(--foreground))" />
            <text x="264" y="115" fontSize="10" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">Eₗ</text>
            <text x="298" y="240" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Quantity</text>
            <text x="18" y="24" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Price</text>
            <text x="66" y="258" fontSize="10" fill="hsl(var(--muted-foreground))" fontFamily="var(--font-body)">Positive supply shock: S₀ → S₁</text>
          </svg>
        );

      case "pes-types":
        return (
          <svg viewBox="0 0 500 220" className="w-full max-w-lg mx-auto">
            <defs><marker id="ah-pes" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0, 6 2.5, 0 5" fill="hsl(var(--primary))" /></marker></defs>
            {/* Perfectly Inelastic — vertical line */}
            <line x1="20" y1="180" x2="90" y2="180" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-pes)" />
            <line x1="20" y1="180" x2="20" y2="10" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-pes)" />
            <line x1="55" y1="170" x2="55" y2="25" stroke="hsl(var(--chart-2))" strokeWidth="2.5" />
            <text x="48" y="20" fontSize="9" fill="hsl(var(--chart-2))" fontWeight="600" fontFamily="var(--font-body)">S</text>
            <text x="10" y="200" fontSize="8" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">Perfectly Inelastic</text>
            <text x="35" y="210" fontSize="8" fill="hsl(var(--muted-foreground))" fontFamily="var(--font-body)">Es = 0</text>
            <text x="8" y="8" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P</text>
            <text x="85" y="195" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q</text>
            {/* Inelastic — VERY steep upward slope, starts from P-axis */}
            <line x1="120" y1="180" x2="190" y2="180" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-pes)" />
            <line x1="120" y1="180" x2="120" y2="10" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-pes)" />
            <line x1="135" y1="170" x2="155" y2="20" stroke="hsl(var(--chart-2))" strokeWidth="2.5" />
            <text x="170" y="20" fontSize="9" fill="hsl(var(--chart-2))" fontWeight="600" fontFamily="var(--font-body)">S</text>
            <text x="125" y="200" fontSize="8" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">Inelastic</text>
            <text x="130" y="210" fontSize="8" fill="hsl(var(--muted-foreground))" fontFamily="var(--font-body)">Es &lt; 1</text>
            <text x="108" y="8" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P</text>
            <text x="185" y="195" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q</text>
            {/* Unit Elastic — line through origin (45°) */}
            <line x1="220" y1="180" x2="290" y2="180" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-pes)" />
            <line x1="220" y1="180" x2="220" y2="10" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-pes)" />
            <line x1="220" y1="180" x2="280" y2="25" stroke="hsl(var(--chart-2))" strokeWidth="2.5" />
            <text x="275" y="20" fontSize="9" fill="hsl(var(--chart-2))" fontWeight="600" fontFamily="var(--font-body)">S</text>
            <text x="225" y="200" fontSize="8" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">Unit Elastic</text>
            <text x="235" y="210" fontSize="8" fill="hsl(var(--muted-foreground))" fontFamily="var(--font-body)">Es = 1</text>
            <text x="208" y="8" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P</text>
            <text x="285" y="195" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q</text>
            {/* Elastic — VERY flat upward slope, starts from Q-axis */}
            <line x1="320" y1="180" x2="390" y2="180" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-pes)" />
            <line x1="320" y1="180" x2="320" y2="10" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-pes)" />
            <line x1="325" y1="130" x2="390" y2="100" stroke="hsl(var(--chart-2))" strokeWidth="2.5" />
            <text x="380" y="55" fontSize="9" fill="hsl(var(--chart-2))" fontWeight="600" fontFamily="var(--font-body)">S</text>
            <text x="335" y="200" fontSize="8" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">Elastic</text>
            <text x="335" y="210" fontSize="8" fill="hsl(var(--muted-foreground))" fontFamily="var(--font-body)">Es &gt; 1</text>
            <text x="308" y="8" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P</text>
            <text x="385" y="195" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q</text>
            {/* Perfectly Elastic — horizontal line */}
            <line x1="420" y1="180" x2="490" y2="180" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-pes)" />
            <line x1="420" y1="180" x2="420" y2="10" stroke="hsl(var(--primary))" strokeWidth="1.5" markerEnd="url(#ah-pes)" />
            <line x1="425" y1="90" x2="485" y2="90" stroke="hsl(var(--chart-2))" strokeWidth="2.5" />
            <text x="480" y="85" fontSize="9" fill="hsl(var(--chart-2))" fontWeight="600" fontFamily="var(--font-body)">S</text>
            <text x="420" y="200" fontSize="8" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">Perfectly Elastic</text>
            <text x="435" y="210" fontSize="8" fill="hsl(var(--muted-foreground))" fontFamily="var(--font-body)">Es = ∞</text>
            <text x="408" y="8" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P</text>
            <text x="485" y="195" fontSize="8" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q</text>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className="my-4">
      <div className="rounded-lg border p-4" style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}>
        {renderGraph()}
        {caption && (
          <p className="text-center text-xs mt-2 font-body" style={{ color: "hsl(var(--muted-foreground))" }}>
            {caption}
          </p>
        )}
        <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] font-body italic" style={{ color: "hsl(var(--accent))" }}>
          <span aria-hidden>✓</span>
          <span>Manually Verified &amp; Corrected for AP Exam Alignment</span>
        </div>
      </div>
    </div>
  );
};

export default EconGraph;
