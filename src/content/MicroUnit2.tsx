import AmandaTip from "../components/AmandaTip";
import SectionAccordion from "../components/SectionAccordion";
import EconGraph from "../components/EconGraph";
import surplusDiagram from "../assets/surplus-diagram.png";

const MicroUnit2Content = () => (
  <div className="space-y-4">
    <SectionAccordion title="1. Demand" defaultOpen>
      <p><strong>Law of Demand:</strong> As price increases, quantity demanded decreases (and vice versa), ceteris paribus.</p>
      <EconGraph type="demand-shift" caption="Demand Shift — D₁ to D₂ (increase in demand shifts right: P↑, Q↑)" />
      <h4 className="font-semibold text-primary my-2">Why does the demand curve slope downward?</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Diminishing Marginal Utility:</strong> Each additional unit consumed provides less satisfaction</li>
        <li><strong>Substitution Effect:</strong> Price ↑ → consumers switch to substitutes → Qd ↓</li>
        <li><strong>Income Effect:</strong> Price ↑ → purchasing power ↓ → Qd ↓</li>
      </ul>
      <h4 className="font-semibold text-primary my-2">Change in Quantity Demanded vs. Change in Demand</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Change in Qd:</strong> Movement ALONG the curve (caused by price change only)</li>
        <li><strong>Change in Demand:</strong> SHIFT of the entire curve</li>
      </ul>
      <h4 className="font-semibold text-primary my-2">Demand Shifters (TRIBE)</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>T</strong>astes & preferences</li>
        <li><strong>R</strong>elated goods (substitutes ↑P → D↑; complements ↑P → D↓)</li>
        <li><strong>I</strong>ncome (normal goods: income↑ → D↑; inferior goods: income↑ → D↓)</li>
        <li><strong>B</strong>uyer expectations</li>
        <li><strong>E</strong>xpected number of buyers</li>
      </ul>
    </SectionAccordion>

    <SectionAccordion title="2. Supply">
      <p><strong>Law of Supply:</strong> As price increases, quantity supplied increases (and vice versa).</p>
      <EconGraph type="supply-shift" caption="Supply Shift — S₁ to S₂ (increase in supply shifts right: P↓, Q↑)" />
      <h4 className="font-semibold text-primary my-2">Supply Shifters</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Input/resource prices</li>
        <li>Technology</li>
        <li>Number of sellers</li>
        <li>Expectations of future prices</li>
        <li>Government policies (taxes, subsidies, regulations)</li>
      </ul>
    </SectionAccordion>

    <SectionAccordion title="3. Market Equilibrium">
      <EconGraph type="supply-demand" caption="Supply & Demand — equilibrium where S meets D" />
      <p>Equilibrium occurs where supply meets demand: <strong>Qs = Qd</strong>.</p>
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li><strong>Surplus (excess supply):</strong> Price is above equilibrium → Qs &gt; Qd → price falls</li>
        <li><strong>Shortage (excess demand):</strong> Price is below equilibrium → Qd &gt; Qs → price rises</li>
      </ul>
      <h4 className="font-semibold text-primary my-2">Simultaneous Shifts</h4>
      <p>When both supply and demand shift simultaneously, either the new equilibrium price OR quantity will be ambiguous (indeterminate).</p>
    </SectionAccordion>

    <SectionAccordion title="4. Price Elasticity of Demand">
      <div className="formula-block">Ed = |%ΔQd / %ΔP|</div>
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li><strong>Elastic (Ed &gt; 1):</strong> Quantity responds more than proportionally to price</li>
        <li><strong>Unit elastic (Ed = 1):</strong> Total revenue is maximized at this point</li>
        <li><strong>Inelastic (Ed &lt; 1):</strong> Quantity responds less than proportionally</li>
        <li><strong>Perfectly elastic (Ed = ∞):</strong> Horizontal demand curve</li>
        <li><strong>Perfectly inelastic (Ed = 0):</strong> Vertical demand curve</li>
      </ul>
      <h4 className="font-semibold text-primary my-2">Total Revenue Test</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Elastic: Price ↑ → TR ↓ (quantity effect dominates)</li>
        <li>Inelastic: Price ↑ → TR ↑ (price effect dominates)</li>
      </ul>
      <AmandaTip>
        Remember: elasticity varies along a linear demand curve! The top half is elastic, the midpoint is unit elastic, and the bottom half is inelastic. Slope ≠ elasticity!
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="5. Government Intervention: Price Controls">
      <h4 className="font-semibold text-primary mb-2">Price Ceiling (Maximum Price)</h4>
      <EconGraph type="price-ceiling" caption="Price Ceiling — set below equilibrium, creates a shortage" />
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Set BELOW equilibrium to be effective (binding)</li>
        <li>Creates a <strong>shortage</strong> (Qd &gt; Qs)</li>
        <li>Example: rent control</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Price Floor (Minimum Price)</h4>
      <EconGraph type="price-floor" caption="Price Floor — set above equilibrium, creates a surplus" />
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Set ABOVE equilibrium to be effective (binding)</li>
        <li>Creates a <strong>surplus</strong> (Qs &gt; Qd)</li>
        <li>Example: minimum wage</li>
      </ul>
      <p>Both price controls create <strong>deadweight loss</strong> (loss of economic efficiency).</p>
      <h4 className="font-semibold text-primary my-2">Quantity Controls (Quotas)</h4>
      <p>Government limits the quantity that can be sold. If binding (quota &lt; Qe), creates deadweight loss and raises the price buyers pay while lowering the price sellers receive.</p>
    </SectionAccordion>

    <SectionAccordion title="6. Consumer & Producer Surplus">
      <figure className="mx-auto my-3 w-full max-w-2xl">
        <img
          src={surplusDiagram}
          alt="Supply and demand graph showing consumer surplus above equilibrium price and producer surplus below equilibrium price"
          className="h-auto w-full rounded-md border border-border"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          Consumer surplus (CS) and producer surplus (PS) at equilibrium
        </figcaption>
      </figure>

      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Consumer Surplus (CS):</strong> Area below the demand curve and above the equilibrium price</li>
        <li><strong>Producer Surplus (PS):</strong> Area above the supply curve and below the equilibrium price</li>
        <li><strong>Total Economic Surplus = CS + PS</strong> (maximized at equilibrium)</li>
        <li><strong>Deadweight Loss (DWL):</strong> The loss of total surplus that occurs when the market is not at equilibrium</li>
      </ul>
    </SectionAccordion>

    <SectionAccordion title="7. International Trade">
      <p>Countries trade based on <strong>comparative advantage</strong> — each country specializes in goods they produce at a lower opportunity cost.</p>
      <h4 className="font-semibold text-primary my-2">Key Terms</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>World Price (Pw):</strong> The price at which a good is traded internationally</li>
        <li><strong>If Pw &lt; domestic price:</strong> Country imports the good (domestic consumers benefit, producers lose)</li>
        <li><strong>If Pw &gt; domestic price:</strong> Country exports the good (domestic producers benefit, consumers lose)</li>
      </ul>
      <h4 className="font-semibold text-primary my-2">Effects of Free Trade</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Importing: CS increases, PS decreases, but <strong>net gain in total surplus</strong></li>
        <li>Exporting: PS increases, CS decreases, but <strong>net gain in total surplus</strong></li>
        <li>Free trade increases overall welfare — the gains to winners exceed losses to losers</li>
      </ul>
      <h4 className="font-semibold text-primary my-2">Arguments For & Against Trade</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>For:</strong> Lower prices, more variety, efficiency gains, economic growth</li>
        <li><strong>Against:</strong> Job displacement, infant industry protection, national security, environmental concerns</li>
      </ul>
    </SectionAccordion>

    <SectionAccordion title="8. Tariffs vs. Taxes">
      <EconGraph type="tariff" caption="Tariff on imports — raises price from Pw to Pw+Tariff, creates DWL and tax revenue" />
      <h4 className="font-semibold text-primary my-2">Tariffs</h4>
      <p className="mb-2">A <strong>tariff</strong> is a tax on imported goods.</p>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Raises price from Pw to Pw + Tariff</li>
        <li>Domestic production increases (Q1 → Q3) — domestic producers benefit</li>
        <li>Domestic consumption decreases (Q2 → Q4) — consumers lose</li>
        <li>Imports decrease (from Q1→Q2 to Q3→Q4)</li>
        <li>Government earns <strong>tax revenue</strong> = tariff × quantity imported</li>
        <li>Creates <strong>two DWL triangles</strong> (production inefficiency + consumption loss)</li>
      </ul>

      <h4 className="font-semibold text-primary my-2">Tariff vs. Excise Tax</h4>
      <table className="w-full text-sm border-collapse my-3">
        <thead><tr className="border-b font-semibold"><th className="text-left py-2 pr-3">Feature</th><th className="text-left py-2 pr-3">Tariff</th><th className="text-left py-2">Excise Tax</th></tr></thead>
        <tbody>
          <tr className="border-b"><td className="py-2 pr-3">Applied to</td><td className="py-2 pr-3">Imports only</td><td className="py-2">All units (domestic + imported)</td></tr>
          <tr className="border-b"><td className="py-2 pr-3">Effect on price</td><td className="py-2 pr-3">Raises import price only</td><td className="py-2">Raises price for all units</td></tr>
          <tr className="border-b"><td className="py-2 pr-3">Domestic producers</td><td className="py-2 pr-3">Protected (gain market share)</td><td className="py-2">Also taxed (no protection)</td></tr>
          <tr className="border-b"><td className="py-2 pr-3">Government revenue</td><td className="py-2 pr-3">Yes</td><td className="py-2">Yes (usually more)</td></tr>
          <tr><td className="py-2 pr-3">DWL</td><td className="py-2 pr-3">Two triangles</td><td className="py-2">One triangle (larger)</td></tr>
        </tbody>
      </table>

      <AmandaTip>
        Tariffs protect domestic producers at the expense of consumers. The key difference from a regular tax: tariffs only apply to imports, giving domestic firms a competitive advantage. On the AP exam, always identify the two DWL triangles in tariff problems!
      </AmandaTip>
    </SectionAccordion>
  </div>
);

export default MicroUnit2Content;
