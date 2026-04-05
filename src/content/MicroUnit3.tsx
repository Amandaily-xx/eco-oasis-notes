import AmandaTip from "../components/AmandaTip";
import SectionAccordion from "../components/SectionAccordion";
import EconGraph from "../components/EconGraph";
import taxTypesExample from "../assets/tax-types-example.jpg";
import firmExitExample from "../assets/firm-exit-example.jpg";

const MicroUnit3Content = () => (
  <div className="space-y-4">
    {/* 3.1 The Production Function */}
    <SectionAccordion title="3.1 The Production Function" defaultOpen highYield>
      <p>The <strong>production function</strong> describes the relationship between inputs (like labor) and the total output produced. Two key concepts emerge from this relationship:</p>

      <h4 className="font-semibold text-primary my-2">Total Product (TP) & Marginal Product (MP)</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Total Product (TP):</strong> The total quantity of output produced by a given number of workers</li>
        <li><strong>Marginal Product (MP):</strong> The additional output produced by hiring one more worker</li>
      </ul>
      <div className="formula-block">MP = ΔTP / ΔL (change in total product ÷ change in labor)</div>

      <EconGraph type="total-marginal-product" caption="Total Product and Marginal Product — MP is the slope of TP" />

      <h4 className="font-semibold text-primary my-2">Key Relationships Between TP and MP</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>MP represents the <strong>slope</strong> of the TP curve</li>
        <li>When MP is <strong>increasing</strong> → TP is increasing at an <strong>increasing</strong> rate</li>
        <li>When MP is <strong>positive but decreasing</strong> → TP is increasing at a <strong>decreasing</strong> rate</li>
        <li>When MP is <strong>zero</strong> → TP is at its <strong>maximum</strong></li>
        <li>When MP is <strong>negative</strong> → TP is <strong>decreasing</strong></li>
      </ul>

      <h4 className="font-semibold text-primary my-2">Average Product (AP)</h4>
      <div className="formula-block">AP = TP / L (total product ÷ number of workers)</div>
      <ul className="list-disc pl-5 space-y-1">
        <li>When MP &gt; AP → AP is <strong>rising</strong></li>
        <li>When MP = AP → AP is at its <strong>maximum</strong></li>
        <li>When MP &lt; AP → AP is <strong>falling</strong></li>
      </ul>

      <AmandaTip>
        The Law of Diminishing Marginal Returns: As you add more and more of a variable input (labor) to a fixed input (capital), eventually each additional worker contributes LESS additional output. This is why MP eventually declines — and it's the foundation for why cost curves are shaped the way they are!
      </AmandaTip>
    </SectionAccordion>

    {/* 3.2 Short-Run Production Costs */}
    <SectionAccordion title="3.2 Short-Run Production Costs" highYield>
      <EconGraph type="short-run-costs" caption="Short-Run Cost Curves — MC intersects AVC and ATC at their minimum points" />
      <h4 className="font-semibold text-primary mb-2">Key Relationships</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>MC = w / MP</strong> (Marginal Cost = wage ÷ Marginal Product)</li>
        <li>Rising MP → Falling MC; Falling MP → Rising MC</li>
        <li>Rising AP → Falling AVC; Falling AP → Rising AVC</li>
        <li><strong>MC intersects AVC and ATC at their minimum points</strong></li>
      </ul>
      <div className="formula-block">AFC = FC / Q &nbsp;&nbsp;|&nbsp;&nbsp; AVC = VC / Q &nbsp;&nbsp;|&nbsp;&nbsp; ATC = TC / Q = AFC + AVC</div>
      <h4 className="font-semibold text-primary my-2">Cost Curve Rules</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>When MC &lt; ATC → ATC is falling</li>
        <li>When MC &gt; ATC → ATC is rising</li>
        <li>Same relationship holds for MC and AVC</li>
        <li>AFC always declines as output increases (spreading fixed costs)</li>
      </ul>
    </SectionAccordion>

    {/* 3.3 Long-Run Production Costs */}
    <SectionAccordion title="3.3 Long-Run Costs & Economies of Scale">
      <EconGraph type="economies-of-scale" caption="Long-Run Average Cost — economies of scale, constant returns, and diseconomies of scale" />
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Economies of Scale:</strong> LRATC decreases as output increases (specialization, bulk buying)</li>
        <li><strong>Constant Returns to Scale:</strong> LRATC stays flat</li>
        <li><strong>Diseconomies of Scale:</strong> LRATC increases as output increases (communication breakdowns, bureaucracy)</li>
        <li><strong>Minimum Efficient Scale:</strong> The smallest output where LRATC is minimized</li>
      </ul>

      <h4 className="font-semibold text-primary my-2">💡 Economies of Scale vs. Increasing Returns to Scale</h4>
      <p className="mb-2">Many students confuse these two concepts — they sound similar (both are "good things"), but they're not the same!</p>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Economies of Scale</strong> refers to the portion of the LRATC curve where long-run average total cost <strong>decreases</strong> as output increases. The key idea: it's about <strong>Long-Run Average Cost</strong>.</li>
        <li><strong>Increasing Returns to Scale</strong> refers to a situation where the percentage increase in <strong>output</strong> is greater than the percentage increase in <strong>inputs</strong> (labor, capital). The key idea: it's about the relationship between <strong>Output and Input</strong>.</li>
      </ul>
      <AmandaTip>
        ⚠️ These two don't always occur at the same time! However, if a firm is experiencing economies of scale, it is very likely (but not guaranteed) also experiencing increasing returns to scale. Remember: economies of scale = LRATC falling; increasing returns to scale = output growing faster than inputs.
      </AmandaTip>
    </SectionAccordion>

    {/* 3.4 Types of Profit */}
    <SectionAccordion title="3.4 Types of Profit">
      <div className="formula-block">Total Profit = Total Revenue − Total Cost = (P × Q) − TC</div>
      <h4 className="font-semibold text-primary my-2">Explicit vs. Implicit Costs</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Explicit costs:</strong> Direct out-of-pocket payments (wages, rent, materials)</li>
        <li><strong>Implicit costs:</strong> Opportunity costs of using your own resources (foregone salary, foregone interest on savings)</li>
      </ul>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Accounting Profit</strong> = TR − Explicit Costs − Depreciation</li>
        <li><strong>Economic Profit</strong> = TR − Explicit Costs − Implicit Costs − Depreciation</li>
        <li><strong>Normal Profit:</strong> Economic profit = 0 (firm covers all costs including opportunity costs)</li>
      </ul>
      <AmandaTip>
        When economists say "profits," they mean ECONOMIC profit. Accounting profit is almost always greater than economic profit because it ignores implicit costs. If economic profit = 0, the firm is still earning enough to stay in business — that's normal profit!
      </AmandaTip>
    </SectionAccordion>

    {/* 3.5 Profit Maximization */}
    <SectionAccordion title="3.5 Profit Maximization (MR = MC)" highYield>
      <EconGraph type="profit-max-pc" caption="Profit Maximization — firm produces at q₀ where P = MC, profit = rectangle EpAB" />
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>If MR &gt; MC → Produce more (profit increases)</li>
        <li>If MR = MC → Profit maximized</li>
        <li>If MR &lt; MC → Produce less (profit decreases)</li>
      </ul>
      <div className="formula-block">Profit = (P − ATC) × Q</div>
    </SectionAccordion>

    {/* 3.6 Short-Run & Long-Run Decisions */}
    <SectionAccordion title="3.6 Firms' Short-Run & Long-Run Decisions" highYield>
      <h4 className="font-semibold text-primary mb-2">Short-Run Shutdown Rule</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>If P ≥ AVC → Continue producing</li>
        <li>If P &lt; AVC → Shut down (can't even cover variable costs)</li>
        <li>The short-run supply curve = MC curve above AVC</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Long-Run Exit/Entry</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>If P &gt; ATC → Economic profit → New firms enter → Supply ↑ → Price ↓</li>
        <li>If P &lt; ATC → Economic loss → Firms exit → Supply ↓ → Price ↑</li>
        <li>If P = ATC → Normal profit → No incentive to enter or exit</li>
      </ul>
      <AmandaTip>
        In long-run equilibrium for perfect competition: P = MC = ATC(min). This means the firm achieves both allocative efficiency (P = MC) and productive efficiency (P = ATC min). This is why perfect competition is considered the "ideal" market structure!
      </AmandaTip>

      {/* Worked Example: Firm Exit */}
      <div className="p-4 rounded-xl border-2 border-accent mt-4" style={{ background: "hsl(var(--tip-bg))" }}>
        <h4 className="font-semibold text-primary mb-2">📝 Worked Example: Firm Exit in a Constant-Cost Industry</h4>
        <p className="text-sm font-body mb-2" style={{ color: "hsl(var(--tip-text))" }}>
          <strong>Question:</strong> A typical firm in a perfectly competitive constant-cost industry is operating with an economic loss in the short run. When the industry returns to long-run equilibrium, what happens to the number of firms, the market price, and the typical firm's quantity?
        </p>
        <p className="text-sm font-body mb-2" style={{ color: "hsl(var(--tip-text))" }}>
          <strong>Logic chain:</strong> Loss → firms find the market unattractive → firms exit → supply of firms decreases (supply curve shifts left) → market price rises → now map the new higher price onto the individual firm's graph (remember, in perfect competition the firm is a price taker!) → the new price line (which is also MR) intersects MC at a higher quantity for the remaining firms.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm font-body" style={{ color: "hsl(var(--tip-text))" }}>
          <li><strong>Number of firms:</strong> Decreases (firms exit due to losses)</li>
          <li><strong>Market price:</strong> Increases (less supply → higher equilibrium price)</li>
          <li><strong>Typical firm's quantity:</strong> Increases (the remaining firm produces more at the new, higher price)</li>
        </ul>
        <figure className="mx-auto my-3 w-full max-w-2xl">
          <img src={firmExitExample} alt="Firm exit and long-run adjustment in perfect competition" className="h-auto w-full rounded-md border border-border" loading="lazy" />
          <figcaption className="mt-2 text-center text-sm text-muted-foreground">Market (left) and Firm (right) — supply shifts left as firms exit, price rises, and each remaining firm's quantity increases</figcaption>
        </figure>
      </div>
    </SectionAccordion>

    {/* 3.7 Perfect Competition */}
    <SectionAccordion title="3.7 Perfect Competition" highYield>
      <EconGraph type="perfect-competition" caption="Perfect Competition — firm is a price taker, D = MR = P is horizontal" />
      <ul className="list-disc pl-5 space-y-1">
        <li>Many buyers and sellers</li>
        <li>Identical (homogeneous) products</li>
        <li>Each firm is a <strong>price taker</strong></li>
        <li>Free entry and exit in the long run</li>
        <li>Demand curve for an individual firm is <strong>perfectly elastic</strong> (horizontal)</li>
      </ul>
      <div className="formula-block">In perfect competition: P = MR = AR = D (for the firm)</div>
    </SectionAccordion>

    {/* Per-Unit Tax vs. Lump-Sum Tax */}
    <SectionAccordion title="3.8 Per-Unit Tax vs. Lump-Sum Tax" highYield>
      <p className="mb-3">Two common types of taxes on firms — they look similar but affect cost curves very differently!</p>

      <h4 className="font-semibold text-primary mb-2">Per-Unit Tax</h4>
      <p className="text-sm mb-2">A per-unit tax charges a fixed amount of tax for <strong>every unit sold</strong>. So every time the firm produces one more unit, its cost goes up by the tax amount.</p>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>This increases <strong>variable cost</strong> → MC shifts up, AVC shifts up, ATC shifts up</li>
        <li>The new MC intersects MR at a lower quantity → <strong>output decreases</strong></li>
        <li>Price charged to consumers <strong>increases</strong> (the firm passes on some of the tax)</li>
      </ul>

      <h4 className="font-semibold text-primary mb-2">Lump-Sum Tax</h4>
      <p className="text-sm mb-2">A lump-sum tax is a <strong>fixed total amount</strong> the firm must pay regardless of how much it produces. It doesn't change with output.</p>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>This is essentially a <strong>fixed cost</strong> 💡 → AFC increases, ATC increases</li>
        <li>But <strong>MC does not change</strong> (since MC depends on variable costs, not fixed costs)</li>
        <li>Since MC is unchanged, the MC = MR intersection stays the same → <strong>price and quantity remain the same</strong></li>
        <li>However, ATC has shifted up → the gap between P and ATC shrinks → <strong>profit decreases</strong></li>
      </ul>
      <div className="formula-block">Per-unit tax: MC↑, AVC↑, ATC↑ → P↑, Q↓ &nbsp;&nbsp;|&nbsp;&nbsp; Lump-sum tax: ATC↑ only → P same, Q same, Profit↓</div>

      <figure className="mx-auto my-3 w-full max-w-2xl">
        <img src={taxTypesExample} alt="Per-unit tax shifts MC up; Lump-sum tax shifts only ATC up" className="h-auto w-full rounded-md border border-border" loading="lazy" />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">Left: Per-unit tax — MC shifts up, P↑ Q↓. Right: Lump-sum tax — only ATC shifts up, P and Q unchanged but profit↓</figcaption>
      </figure>

      <AmandaTip>
        Key takeaway: Per-unit tax affects marginal decisions (MC moves!), while lump-sum tax only affects average cost. This is a classic AP exam distinction — if they say "fixed tax" or "licensing fee," think lump-sum!
      </AmandaTip>
    </SectionAccordion>
  </div>
);

export default MicroUnit3Content;
