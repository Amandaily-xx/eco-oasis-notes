import AmandaTip from "../components/AmandaTip";
import SectionAccordion from "../components/SectionAccordion";

const MicroUnit2Content = () => (
  <div className="space-y-4">
    <SectionAccordion title="1. Demand" defaultOpen>
      <p><strong>Law of Demand:</strong> As price increases, quantity demanded decreases (and vice versa), ceteris paribus.</p>
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
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Set BELOW equilibrium to be effective (binding)</li>
        <li>Creates a <strong>shortage</strong> (Qd &gt; Qs)</li>
        <li>Example: rent control</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Price Floor (Minimum Price)</h4>
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
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Consumer Surplus (CS):</strong> Area below the demand curve and above the equilibrium price</li>
        <li><strong>Producer Surplus (PS):</strong> Area above the supply curve and below the equilibrium price</li>
        <li><strong>Total Economic Surplus = CS + PS</strong> (maximized at equilibrium)</li>
        <li><strong>Deadweight Loss (DWL):</strong> The loss of total surplus that occurs when the market is not at equilibrium</li>
      </ul>
    </SectionAccordion>
  </div>
);

export default MicroUnit2Content;
