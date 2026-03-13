import AmandaTip from "../components/AmandaTip";
import SectionAccordion from "../components/SectionAccordion";
import EconGraph from "../components/EconGraph";

const MicroUnit5Content = () => (
  <div className="space-y-4">
    <SectionAccordion title="1. The Four Factors of Production" defaultOpen highYield>
      <table className="w-full text-sm border-collapse my-3">
        <thead><tr className="border-b font-semibold"><th className="text-left py-2 pr-3">Factor</th><th className="text-left py-2 pr-3">Definition</th><th className="text-left py-2">Payment</th></tr></thead>
        <tbody>
          <tr className="border-b"><td className="py-2 pr-3 font-medium">Land</td><td className="py-2 pr-3">All natural resources used to produce goods/services</td><td className="py-2">Rent</td></tr>
          <tr className="border-b"><td className="py-2 pr-3 font-medium">Capital</td><td className="py-2 pr-3">Man-made resources used to create other goods (machines, buildings)</td><td className="py-2">Interest</td></tr>
          <tr className="border-b"><td className="py-2 pr-3 font-medium">Labor</td><td className="py-2 pr-3">Effort a person devotes to a task for pay</td><td className="py-2">Wages</td></tr>
          <tr><td className="py-2 pr-3 font-medium">Entrepreneurship</td><td className="py-2 pr-3">Leaders who combine other factors to create goods/services</td><td className="py-2">Profit</td></tr>
        </tbody>
      </table>
      <p><strong>Human Capital:</strong> Skills and knowledge gained through education and experience.</p>
      <AmandaTip>
        This is so important — memorize it by heart! Know the four factors and their payments cold. The AP exam loves to test: "Which factor of production earns interest?" → Capital.
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="2. Demand for Labor (MRP)" highYield>
      <p>The demand for labor is a <strong>derived demand</strong> — it depends on the demand for the product the labor produces.</p>
      <div className="formula-block">MRP = MP × MR &nbsp;&nbsp;|&nbsp;&nbsp; In perfect competition: MRP = MP × P = VMP</div>
      <h4 className="font-semibold text-primary my-2">Hiring Decision Rule</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>If MRP &gt; Wage → Hire more workers</li>
        <li>If MRP = Wage → Optimal hiring</li>
        <li>If MRP &lt; Wage → Hire fewer workers</li>
      </ul>
      <EconGraph type="factor-market" caption="Competitive Factor Market — firm hires where MRP = Wage" />
      <p className="mt-2">The <strong>MRP curve</strong> IS the individual firm's labor demand curve. It slopes downward due to <strong>diminishing marginal returns</strong>.</p>
    </SectionAccordion>

    <SectionAccordion title="3. Supply of Labor & Equilibrium">
      <p>Workers trade off between <strong>leisure</strong> and <strong>work</strong>.</p>
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li><strong>Substitution effect:</strong> Wage ↑ → cost of leisure ↑ → work more</li>
        <li><strong>Income effect:</strong> Wage ↑ → richer → want more leisure → work less</li>
      </ul>
      <p>In a <strong>perfectly competitive labor market</strong>, each firm is too small to affect the wage. The firm's labor supply curve is <strong>horizontal</strong> at the market wage. MFC = Wage.</p>
    </SectionAccordion>

    <SectionAccordion title="4. Labor Market Changes">
      <h4 className="font-semibold text-primary mb-2">Minimum Wage</h4>
      <p>If set above equilibrium wage: creates a <strong>surplus of labor</strong> (unemployment). Workers want to work but firms hire fewer workers.</p>
      <h4 className="font-semibold text-primary my-2">Labor Demand Shifters</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Change in price/demand of the product → MRP shifts</li>
        <li>Change in productivity (technology, education)</li>
        <li>Change in supply of other factors (substitutes/complements)</li>
      </ul>
      <h4 className="font-semibold text-primary my-2">Labor Supply Shifters</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Population changes (birth rate, immigration)</li>
        <li>Changes in preferences and social norms</li>
        <li>Changes in opportunities in other markets</li>
        <li>Changes in wealth/non-labor income</li>
      </ul>
    </SectionAccordion>

    <SectionAccordion title="5. Cost-Minimization Rule">
      <div className="formula-block">MP_L / w = MP_K / r</div>
      <p>The firm minimizes cost when the marginal product per dollar spent is equal across all inputs.</p>
      <p>If MP_L / w &gt; MP_K / r → Hire more labor, use less capital.</p>
      <AmandaTip>
        This rule is like the utility-maximizing rule (MU/P) but for production! If you get more "bang per buck" from labor than capital, shift spending toward labor until they equalize.
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="6. Monopsony" highYield>
      <p>A <strong>monopsony</strong> is a market with only ONE buyer of labor (single employer in a town).</p>
      <EconGraph type="monopsony" caption="Monopsony — hires at MRP = MFC but pays lower wage from supply curve" />
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li>The monopsonist faces an upward-sloping labor supply curve</li>
        <li>MFC &gt; Wage (to hire one more worker, must raise wage for ALL workers)</li>
        <li>Hires at MRP = MFC, but pays the LOWER wage from the supply curve</li>
        <li>Result: <strong>Lower employment and lower wages</strong> than in a competitive market</li>
      </ul>
    </SectionAccordion>
  </div>
);

export default MicroUnit5Content;
