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
    | "monopsony"
    | "short-run-costs"
    | "economies-of-scale"
    | "profit-max-pc"
    | "monopolistic-competition"
    | "lorenz-curve"
    | "business-cycle"
    | "money-market"
    | "loanable-funds"
    | "long-run-growth";
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
            <line x1="50" y1="85" x2="260" y2="85" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="6 4" />
            <text x="200" y="80" fontSize="11" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">Price Floor</text>
            <line x1="102" y1="85" x2="102" y2="75" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
            <line x1="218" y1="85" x2="218" y2="75" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
            <line x1="102" y1="75" x2="218" y2="75" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
            <text x="142" y="70" fontSize="10" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">Surplus</text>
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

            {/* MC curve - starts from bottom-left, dips slightly, then rises steeply */}
            <path d="M 70 180 Q 90 200, 110 195 Q 130 190, 145 175 Q 165 145, 185 105 Q 205 65, 230 35" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2.5" />
            <text x="232" y="32" fontSize="11" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">MC</text>

            {/* ATC curve - U-shaped, starts high, dips to minimum, rises */}
            <path d="M 70 70 Q 85 100, 110 130 Q 135 155, 155 155 Q 175 155, 195 145 Q 215 130, 240 105 Q 260 80, 275 60" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2.5" />
            <text x="277" y="64" fontSize="11" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">ATC</text>

            {/* AVC curve - U-shaped, below ATC, starts lower, dips to minimum, rises */}
            <path d="M 70 140 Q 90 165, 115 180 Q 135 188, 150 188 Q 170 188, 190 178 Q 210 165, 235 140 Q 255 115, 275 90" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
            <text x="277" y="94" fontSize="11" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">AVC</text>

            {/* MC intersects AVC at AVC minimum */}
            <circle cx="148" cy="188" r="3.5" fill="hsl(var(--primary))" />
            {/* MC intersects ATC at ATC minimum */}
            <circle cx="170" cy="155" r="3.5" fill="hsl(var(--primary))" />

            {/* Dashed lines to P1/Q1 (AVC min) and P2/Q2 (ATC min) */}
            <line x1="148" y1="188" x2="148" y2="220" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50" y1="188" x2="148" y2="188" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="30" y="192" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P1</text>
            <text x="142" y="235" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q1</text>

            <line x1="170" y1="155" x2="170" y2="220" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50" y1="155" x2="170" y2="155" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 3" />
            <text x="30" y="159" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P2</text>
            <text x="164" y="235" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q2</text>

            <text x="270" y="238" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="14" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">£</text>
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

            {/* MC curve - U-shaped */}
            <path d="M 80 60 Q 100 120, 125 160 Q 145 185, 160 185 Q 175 185, 190 165 Q 210 130, 230 80 Q 245 45, 260 25" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2.5" />
            <text x="262" y="28" fontSize="11" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">MC</text>

            {/* AR = MR = D horizontal line */}
            <line x1="50" y1="110" x2="275" y2="110" stroke="hsl(var(--foreground))" strokeWidth="2" />
            <text x="230" y="105" fontSize="10" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">AR = MR = D</text>

            {/* Intersection point E */}
            <circle cx="192" cy="110" r="4" fill="hsl(var(--primary))" />
            <text x="195" y="105" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">E</text>

            {/* Dashed line down to Q axis */}
            <line x1="192" y1="110" x2="192" y2="220" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />

            {/* Maximum Profit label */}
            <text x="100" y="90" fontSize="11" fill="hsl(var(--foreground))" fontWeight="600" fontFamily="var(--font-body)">Maximum Profit</text>

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

            {/* MC curve - U-shaped, starts high-left, dips, rises steeply */}
            <path d="M 75 60 Q 95 120, 120 155 Q 140 175, 155 175 Q 170 175, 185 155 Q 205 120, 225 70 Q 240 35, 255 20" fill="none" stroke="hsl(210 80% 65%)" strokeWidth="2.5" />
            <text x="248" y="18" fontSize="11" fill="hsl(210 80% 65%)" fontWeight="600" fontFamily="var(--font-body)">MC</text>

            {/* AC curve - U-shaped, wider and shallower than MC */}
            <path d="M 75 80 Q 95 120, 120 145 Q 145 160, 165 160 Q 185 160, 205 148 Q 230 125, 260 85" fill="none" stroke="hsl(0 70% 65%)" strokeWidth="2.5" />
            <text x="262" y="89" fontSize="11" fill="hsl(0 70% 65%)" fontWeight="600" fontFamily="var(--font-body)">AC</text>

            {/* P = MR = AR horizontal line (yellow) */}
            <line x1="50" y1="130" x2="275" y2="130" stroke="hsl(50 90% 50%)" strokeWidth="3" />
            <text x="245" y="125" fontSize="11" fill="hsl(50 90% 50%)" fontWeight="700" fontFamily="var(--font-body)">P = MR = AR</text>

            {/* Q1 dashed line at intersection */}
            <line x1="160" y1="130" x2="160" y2="220" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <circle cx="160" cy="130" r="4" fill="hsl(var(--primary))" />
            <text x="153" y="238" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q1</text>

            <text x="255" y="238" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="4" y="22" fontSize="10" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Cost/Revenue</text>
          </svg>
        );

      case "monopoly":
        return (
          <svg viewBox="0 0 320 280" className="w-full max-w-sm mx-auto">
            <defs><marker id="ah-mon" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="230" x2="290" y2="230" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-mon)" />
            <line x1="50" y1="230" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-mon)" />

            {/* MC curve - U-shaped, green/teal */}
            <path d="M 70 180 Q 90 210, 110 210 Q 130 210, 145 195 Q 165 165, 185 120 Q 200 85, 220 55 Q 235 35, 250 25" fill="none" stroke="hsl(160 60% 45%)" strokeWidth="2.5" />
            <text x="252" y="28" fontSize="11" fill="hsl(160 60% 45%)" fontWeight="600" fontFamily="var(--font-body)">MC</text>

            {/* ATC curve - U-shaped, orange/yellow */}
            <path d="M 70 70 Q 90 110, 115 140 Q 140 165, 160 168 Q 180 168, 200 158 Q 225 138, 250 105 Q 265 80, 275 60" fill="none" stroke="hsl(40 85% 55%)" strokeWidth="2.5" />
            <text x="272" y="55" fontSize="11" fill="hsl(40 85% 55%)" fontWeight="600" fontFamily="var(--font-body)">ATC</text>

            {/* Demand curve D=AR=P - downward sloping, yellow */}
            <line x1="60" y1="35" x2="275" y2="215" stroke="hsl(50 90% 50%)" strokeWidth="2.5" />
            <text x="260" y="210" fontSize="10" fill="hsl(50 90% 50%)" fontWeight="600" fontFamily="var(--font-body)">D=AR=P</text>

            {/* MR curve - steeper downward, blue */}
            <line x1="60" y1="35" x2="175" y2="225" stroke="hsl(220 75% 55%)" strokeWidth="2.5" />
            <text x="170" y="222" fontSize="10" fill="hsl(220 75% 55%)" fontWeight="600" fontFamily="var(--font-body)">MR</text>

            {/* MR=MC intersection point */}
            <circle cx="140" cy="170" r="4" fill="hsl(var(--primary))" />
            {/* Go up to demand curve for Pf */}
            <line x1="140" y1="170" x2="140" y2="90" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="5 3" />
            <circle cx="140" cy="90" r="4" fill="hsl(var(--destructive))" />
            {/* Horizontal to price axis */}
            <line x1="50" y1="90" x2="140" y2="90" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="5 3" />
            {/* Vertical down to Q axis */}
            <line x1="140" y1="170" x2="140" y2="230" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="5 3" />

            <text x="28" y="94" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Pf</text>
            <text x="133" y="248" fontSize="11" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Qf</text>

            {/* Economic profit shaded area */}
            <rect x="50" y="90" width="90" height="40" fill="hsl(80 60% 50%)" opacity="0.25" rx="2" />
            <text x="62" y="115" fontSize="9" fill="hsl(80 60% 40%)" fontWeight="600" fontFamily="var(--font-body)">Economic Profit</text>

            <text x="270" y="250" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
            <text x="24" y="22" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">P</text>
          </svg>
        );

      case "monopolistic-competition":
        return (
          <svg viewBox="0 0 320 270" className="w-full max-w-sm mx-auto">
            <defs><marker id="ah-mc2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" /></marker></defs>
            <line x1="50" y1="220" x2="290" y2="220" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-mc2)" />
            <line x1="50" y1="220" x2="50" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#ah-mc2)" />
            {/* D (downward, more elastic than monopoly) */}
            <line x1="70" y1="50" x2="270" y2="210" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="260" y="205" fontSize="10" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">D, AR</text>
            {/* MR */}
            <line x1="70" y1="50" x2="175" y2="210" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="5 3" />
            <text x="170" y="208" fontSize="10" fill="hsl(var(--destructive))" fontFamily="var(--font-body)">MR</text>
            {/* MC curve */}
            <path d="M 85 195 C 110 215, 135 205, 150 190 C 165 170, 185 140, 205 105 C 225 70, 240 45, 260 30" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="262" y="31" fontSize="11" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">MC</text>
            {/* ATC curve (U-shape) */}
            <path d="M 85 95 Q 135 245, 165 175 Q 210 140, 255 125" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
            <text x="257" y="129" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">ATC</text>
            {/* LR equilibrium: D tangent to ATC */}
            <circle cx="150" cy="112" r="4" fill="hsl(var(--primary))" />
            <line x1="150" y1="112" x2="150" y2="220" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="50" y1="112" x2="150" y2="112" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
            <text x="28" y="116" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">P*</text>
            <text x="143" y="237" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">Q*</text>
            <text x="75" y="80" fontSize="8" fill="hsl(var(--accent))" fontFamily="var(--font-body)">P = ATC → zero econ. profit</text>
            <text x="270" y="238" fontSize="12" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">Q</text>
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
            <path d="M 50 230 Q 100 225, 140 210 Q 180 185, 210 140 Q 235 90, 250 30 L 50 230 Z" fill="hsl(var(--accent))" opacity="0.12" />
            <text x="110" y="175" fontSize="10" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">A</text>
            <text x="175" y="218" fontSize="10" fill="hsl(var(--primary))" fontFamily="var(--font-body)">B</text>
            <text x="90" y="260" fontSize="9" fill="hsl(var(--foreground))" fontFamily="var(--font-body)">Gini = A / (A + B)</text>
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
            <line x1="190" y1="30" x2="190" y2="200" stroke="hsl(var(--primary))" strokeWidth="2.5" />
            <text x="183" y="25" fontSize="11" fill="hsl(var(--primary))" fontWeight="600" fontFamily="var(--font-body)">LRAS</text>
            <line x1="70" y1="180" x2="270" y2="50" stroke="hsl(var(--accent))" strokeWidth="2.5" />
            <text x="265" y="46" fontSize="11" fill="hsl(var(--accent))" fontWeight="600" fontFamily="var(--font-body)">SRAS</text>
            <path d="M 80 50 Q 140 100, 260 195" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2.5" />
            <text x="255" y="192" fontSize="11" fill="hsl(var(--destructive))" fontWeight="600" fontFamily="var(--font-body)">AD</text>
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
