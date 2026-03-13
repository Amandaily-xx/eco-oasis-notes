import AmandaTip from "../components/AmandaTip";
import SectionAccordion from "../components/SectionAccordion";
import EconGraph from "../components/EconGraph";

const MicroUnit3Content = () => (
  <div className="space-y-4">
    <SectionAccordion title="1. Types of Profit" defaultOpen>
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

    <SectionAccordion title="2. Short-Run Cost Curves" highYield>
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

    <SectionAccordion title="3. Long-Run Costs & Economies of Scale">
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

    <SectionAccordion title="4. Perfect Competition: Structure" highYield>
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

    <SectionAccordion title="5. Profit Maximization (MR = MC)" highYield>
      <EconGraph type="profit-max-pc" caption="Profit Maximization — firm produces at q₀ where P = MC, profit = rectangle EpAB" />
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>If MR &gt; MC → Produce more (profit increases)</li>
        <li>If MR = MC → Profit maximized</li>
        <li>If MR &lt; MC → Produce less (profit decreases)</li>
      </ul>
      <div className="formula-block">Profit = (P − ATC) × Q</div>
    </SectionAccordion>

    <SectionAccordion title="6. Short-Run & Long-Run Decisions" highYield>
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
    </SectionAccordion>
  </div>
);

export default MicroUnit3Content;
