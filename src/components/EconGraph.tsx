interface EconGraphProps {
  type: 
    | "ppc"
    | "supply-demand"
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
    | "monopsony";
  caption?: string;
}

const EconGraph = ({ type, caption }: EconGraphProps) => {
  const renderGraph = () => {
    switch (type) {
      case "ppc":
        return (
          <svg viewBox="0 0 300 250" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-ppc" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            {/* Axes */}
            <line x1="50" y1="200" x2="270" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-ppc)" />
            <line x1="50" y1="200" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-ppc)" />
            {/* PPC curve */}
            <path d="M 60 40 Q 100 60, 160 120 Q 200 160, 250 190" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            {/* Shifted PPC (dashed) */}
            <path d="M 80 30 Q 130 50, 190 110 Q 230 150, 270 175" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
            {/* Points */}
            <circle cx="130" cy="100" r="4" fill="hsl(var(--destructive))" />
            <text x="138" y="96" fontSize="11" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">A (efficient)</text>
            <circle cx="100" cy="150" r="4" fill="hsl(var(--muted-foreground))" />
            <text x="108" y="147" fontSize="11" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">B (inefficient)</text>
            {/* Labels */}
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
            {/* Demand */}
            <line x1="70" y1="40" x2="250" y2="190" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="245" y="185" fontSize="12" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">D</text>
            {/* Supply */}
            <line x1="70" y1="190" x2="250" y2="40" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="245" y="38" fontSize="12" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">S</text>
            {/* Equilibrium */}
            <circle cx="160" cy="115" r="5" fill="hsl(var(--primary))" />
            <line x1="50" y1="115" x2="160" y2="115" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="160" y1="115" x2="160" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <text x="30" y="119" fontSize="11" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Pe</text>
            <text x="154" y="215" fontSize="11" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Qe</text>
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
            {/* Price ceiling line */}
            <line x1="50" y1="145" x2="260" y2="145" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="6 4" />
            <text x="200" y="140" fontSize="11" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">Price Ceiling</text>
            {/* Shortage bracket */}
            <line x1="102" y1="145" x2="102" y2="155" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
            <line x1="218" y1="145" x2="218" y2="155" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
            <line x1="102" y1="155" x2="218" y2="155" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
            <text x="140" y="170" fontSize="10" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">Shortage</text>
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
            {/* Price floor line */}
            <line x1="50" y1="85" x2="260" y2="85" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="6 4" />
            <text x="200" y="80" fontSize="11" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">Price Floor</text>
            {/* Surplus bracket */}
            <line x1="102" y1="85" x2="102" y2="75" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
            <line x1="218" y1="85" x2="218" y2="75" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
            <line x1="102" y1="75" x2="218" y2="75" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
            <text x="142" y="70" fontSize="10" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">Surplus</text>
            <text x="30" y="89" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Pf</text>
            <text x="255" y="218" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="30" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">P</text>
          </svg>
        );

      case "perfect-competition":
        return (
          <svg viewBox="0 0 300 250" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-pcm" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="200" x2="270" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-pcm)" />
            <line x1="50" y1="200" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-pcm)" />
            {/* D = MR = P (horizontal) */}
            <line x1="50" y1="100" x2="260" y2="100" stroke="hsl(var(--destructive))" strokeWidth="2" />
            <text x="262" y="104" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">D=MR=P</text>
            {/* MC curve (U-shaped rising) */}
            <path d="M 80 170 Q 100 190, 120 160 Q 150 100, 180 60 Q 200 30, 230 20" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="225" y="18" fontSize="11" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">MC</text>
            {/* ATC curve */}
            <path d="M 80 140 Q 120 80, 160 75 Q 200 80, 240 120" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
            <text x="242" y="124" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">ATC</text>
            {/* AVC curve */}
            <path d="M 80 175 Q 120 120, 160 110 Q 200 115, 240 150" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="242" y="154" fontSize="10" fill="hsl(var(--muted-foreground))" fontFamily="var(--font-body)">AVC</text>
            {/* Profit-max point */}
            <circle cx="157" cy="100" r="4" fill="hsl(var(--primary))" />
            <line x1="157" y1="100" x2="157" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <text x="148" y="215" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q*</text>
            {/* Profit area */}
            <rect x="80" y="76" width="77" height="24" fill="hsl(var(--accent))" opacity="0.15" rx="2" />
            <text x="95" y="92" fontSize="9" fill="hsl(var(--accent))" fontFamily="var(--font-body)">Econ. Profit</text>
            <text x="255" y="218" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="24" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">P, C</text>
          </svg>
        );

      case "monopoly":
        return (
          <svg viewBox="0 0 300 260" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-mon" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="210" x2="270" y2="210" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-mon)" />
            <line x1="50" y1="210" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-mon)" />
            {/* Demand (downward) */}
            <line x1="60" y1="40" x2="260" y2="200" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="255" y="195" fontSize="11" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">D</text>
            {/* MR (steeper downward) */}
            <line x1="60" y1="40" x2="160" y2="200" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="5 3" />
            <text x="155" y="198" fontSize="11" fill="hsl(var(--destructive))" fontFamily="var(--font-body)">MR</text>
            {/* MC curve */}
            <path d="M 80 185 Q 100 195, 115 170 Q 140 110, 170 70 Q 195 40, 220 25" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="222" y="24" fontSize="11" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">MC</text>
            {/* ATC */}
            <path d="M 80 155 Q 120 90, 155 85 Q 200 90, 240 130" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
            <text x="242" y="134" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">ATC</text>
            {/* MR=MC point */}
            <circle cx="120" cy="130" r="4" fill="hsl(var(--primary))" />
            {/* Up to demand for price */}
            <line x1="120" y1="130" x2="120" y2="73" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="120" cy="73" r="4" fill="hsl(var(--destructive))" />
            <line x1="50" y1="73" x2="120" y2="73" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="120" y1="130" x2="120" y2="210" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="28" y="77" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Pm</text>
            <text x="113" y="227" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Qm</text>
            {/* DWL area hint */}
            <polygon points="120,73 120,130 170,105" fill="hsl(var(--destructive))" opacity="0.12" />
            <text x="130" y="108" fontSize="8" fill="hsl(var(--destructive))" fontFamily="var(--font-body)">DWL</text>
            <text x="255" y="228" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="24" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">P, C</text>
          </svg>
        );

      case "factor-market":
        return (
          <svg viewBox="0 0 300 250" className="w-full max-w-xs mx-auto">
            <defs><marker id="ah-fm" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="200" x2="270" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-fm)" />
            <line x1="50" y1="200" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-fm)" />
            {/* MRP = D (downward) */}
            <line x1="70" y1="40" x2="250" y2="190" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="240" y="185" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">MRP=D</text>
            {/* S = MFC (horizontal in perfect comp) */}
            <line x1="50" y1="115" x2="260" y2="115" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="262" y="112" fontSize="10" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">S=W</text>
            {/* Equilibrium */}
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
            {/* MRP = D */}
            <line x1="70" y1="40" x2="250" y2="195" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="240" y="190" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">MRP</text>
            {/* S (upward) */}
            <line x1="70" y1="190" x2="240" y2="60" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="242" y="58" fontSize="10" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">S</text>
            {/* MFC (steeper upward) */}
            <line x1="70" y1="170" x2="200" y2="30" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="5 3" />
            <text x="200" y="28" fontSize="10" fill="hsl(var(--accent))" fontFamily="var(--font-body)">MFC</text>
            {/* MRP=MFC intersection */}
            <circle cx="135" cy="100" r="4" fill="hsl(var(--primary))" />
            {/* Down to S for wage */}
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
            {/* D = MPB */}
            <line x1="70" y1="40" x2="250" y2="190" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="245" y="185" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">D=MPB</text>
            {/* MPC (private supply) */}
            <line x1="70" y1="190" x2="250" y2="60" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="245" y="56" fontSize="10" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">MPC</text>
            {/* MSC (above MPC) */}
            <line x1="70" y1="150" x2="250" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5 3" />
            <text x="245" y="18" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">MSC</text>
            {/* DWL shading */}
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
            {/* S = MPC */}
            <line x1="70" y1="190" x2="250" y2="60" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="245" y="56" fontSize="10" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">S=MPC</text>
            {/* MPB (private demand) */}
            <line x1="70" y1="60" x2="250" y2="190" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="245" y="185" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">MPB</text>
            {/* MSB (above MPB) */}
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
            {/* LRAS */}
            <line x1="190" y1="30" x2="190" y2="200" stroke="hsl(var(--primary))" strokeWidth="2.5" />
            <text x="183" y="25" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">LRAS</text>
            {/* SRAS */}
            <line x1="70" y1="180" x2="270" y2="50" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="265" y="46" fontSize="11" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">SRAS</text>
            {/* AD */}
            <path d="M 80 50 Q 140 100, 260 195" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="255" y="192" fontSize="11" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">AD</text>
            {/* Equilibrium */}
            <circle cx="190" cy="112" r="5" fill="hsl(var(--primary))" />
            <line x1="50" y1="112" x2="190" y2="112" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <text x="28" y="116" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">PLe</text>
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
            {/* LRAS */}
            <line x1="200" y1="30" x2="200" y2="200" stroke="hsl(var(--primary))" strokeWidth="2.5" />
            <text x="193" y="25" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">LRAS</text>
            {/* SRAS */}
            <line x1="70" y1="180" x2="270" y2="50" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="265" y="46" fontSize="11" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">SRAS</text>
            {/* AD (left of LRAS) */}
            <path d="M 60 50 Q 110 100, 220 195" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="215" y="192" fontSize="11" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">AD</text>
            {/* AD shifted right (dashed) */}
            <path d="M 90 50 Q 150 100, 260 195" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="5 3" opacity="0.5" />
            <text x="255" y="192" fontSize="10" fill="hsl(var(--destructive))" opacity="0.5" fontFamily="var(--font-body)">AD'</text>
            {/* Gap annotation */}
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
            {/* LRAS */}
            <line x1="180" y1="30" x2="180" y2="200" stroke="hsl(var(--primary))" strokeWidth="2.5" />
            <text x="173" y="25" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">LRAS</text>
            {/* SRAS */}
            <line x1="70" y1="180" x2="270" y2="50" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="265" y="46" fontSize="11" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">SRAS</text>
            {/* AD (right of LRAS) */}
            <path d="M 110 50 Q 170 100, 275 195" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="268" y="192" fontSize="11" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">AD</text>
            {/* AD shifted left (dashed) */}
            <path d="M 80 50 Q 130 100, 240 195" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="5 3" opacity="0.5" />
            <text x="233" y="192" fontSize="10" fill="hsl(var(--destructive))" opacity="0.5" fontFamily="var(--font-body)">AD'</text>
            {/* Gap */}
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
            {/* LRPC (vertical) */}
            <line x1="160" y1="30" x2="160" y2="195" stroke="hsl(var(--primary))" strokeWidth="2.5" />
            <text x="150" y="25" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">LRPC</text>
            {/* SRPC */}
            <path d="M 80 50 Q 130 100, 240 180" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="240" y="175" fontSize="11" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">SRPC</text>
            {/* NRU label */}
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
            {/* Demand for USD */}
            <line x1="70" y1="40" x2="250" y2="190" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="240" y="188" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">D$</text>
            {/* Supply of USD */}
            <line x1="70" y1="190" x2="250" y2="40" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="245" y="38" fontSize="10" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">S$</text>
            {/* Equilibrium */}
            <circle cx="160" cy="115" r="5" fill="hsl(var(--primary))" />
            <line x1="50" y1="115" x2="160" y2="115" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="160" y1="115" x2="160" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <text x="22" y="119" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">ER*</text>
            <text x="153" y="215" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q*</text>
            <text x="210" y="218" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Qty of USD</text>
            <text x="4" y="22" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Exchange Rate<tspan x="4" dy="13">(¥ per $)</tspan></text>
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
      </div>
    </div>
  );
};

export default EconGraph;
