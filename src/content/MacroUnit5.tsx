import AmandaTip from "../components/AmandaTip";
import SectionAccordion from "../components/SectionAccordion";
import EconGraph from "../components/EconGraph";

const MacroUnit5Content = () => (
  <div className="space-y-4">
    <SectionAccordion title="1. Policy Interactions in the Short Run" defaultOpen>
      <p>When fiscal and monetary policy are used together, their combined effects can reinforce or offset each other.</p>
      <table className="w-full text-sm border-collapse my-3">
        <thead><tr className="border-b font-semibold"><th className="text-left py-2 pr-3">Combination</th><th className="text-left py-2 pr-3">Output</th><th className="text-left py-2">Interest Rate</th></tr></thead>
        <tbody>
          <tr className="border-b"><td className="py-2 pr-3">Both expansionary</td><td className="py-2 pr-3">↑ (reinforced)</td><td className="py-2">Indeterminate</td></tr>
          <tr className="border-b"><td className="py-2 pr-3">Expansionary fiscal + Contractionary monetary</td><td className="py-2 pr-3">Indeterminate</td><td className="py-2">↑ (reinforced)</td></tr>
          <tr className="border-b"><td className="py-2 pr-3">Contractionary fiscal + Expansionary monetary</td><td className="py-2 pr-3">Indeterminate</td><td className="py-2">↓ (reinforced)</td></tr>
          <tr><td className="py-2 pr-3">Both contractionary</td><td className="py-2 pr-3">↓ (reinforced)</td><td className="py-2">Indeterminate</td></tr>
        </tbody>
      </table>
      <AmandaTip>
        When both policies push in the same direction, the <strong>effect on output is clear</strong> but the interest rate is uncertain. When they conflict, the interest rate effect is clear but output is uncertain. One variable is always indeterminate!
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="2. The Phillips Curve" highYield>
      <h4 className="font-semibold text-primary mb-2">Short-Run Phillips Curve (SRPC)</h4>
      <EconGraph type="phillips-curve" caption="Phillips Curve — SRPC shows short-run inflation/unemployment trade-off; LRPC is vertical at NRU" />
      <p>Shows an <strong>inverse relationship</strong> between inflation and unemployment in the short run.</p>
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li>Increase in AD → movement <strong>up along</strong> the SRPC (higher inflation, lower unemployment)</li>
        <li>Decrease in AD → movement <strong>down along</strong> the SRPC</li>
        <li><strong>Supply shocks</strong> shift the SRPC (e.g., oil price spike shifts SRPC right/up)</li>
      </ul>

      <h4 className="font-semibold text-primary my-2">Long-Run Phillips Curve (LRPC)</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Vertical</strong> at the Natural Rate of Unemployment (NRU)</li>
        <li>In the long run, there is no trade-off between inflation and unemployment</li>
        <li>Any unemployment rate below the NRU leads to ever-accelerating inflation</li>
        <li>The LRPC shows that expansionary policy has limits — unemployment below the NRU cannot be sustained</li>
      </ul>

      <AmandaTip>
        The SRPC shifts when <strong>expected inflation</strong> changes or there's a supply shock. The LRPC shifts when the <strong>NRU</strong> changes (structural changes in the labor market). Don't confuse movements along vs. shifts!
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="3. Money Neutrality & Quantity Theory">
      <h4 className="font-semibold text-primary mb-2">Money Neutrality</h4>
      <p>In the <strong>long run</strong>, changes in money supply do not affect real values (real GDP, real wages, real interest rate). Money only affects <strong>nominal</strong> values (price level, nominal wages).</p>

      <h4 className="font-semibold text-primary my-2">Quantity Theory of Money</h4>
      <div className="formula-block">M × V = P × Y</div>
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li><strong>M:</strong> Money supply</li>
        <li><strong>V:</strong> Velocity of money (assumed constant — reflects spending habits)</li>
        <li><strong>P:</strong> Price level</li>
        <li><strong>Y:</strong> Real GDP (constant in long run at full employment)</li>
      </ul>
      <p>If V and Y are constant: a 1% increase in M → 1% increase in P. Money supply growth drives inflation in the long run.</p>
    </SectionAccordion>

    <SectionAccordion title="4. Long-Run Economic Growth" highYield>
      <EconGraph type="long-run-growth" caption="Three views of long-run growth: LRAS shifts right, PPC shifts outward, real GDP rises over time" />
      <h4 className="font-semibold text-primary mb-2">Measurement</h4>
      <p>Long-run growth is measured by <strong>real GDP per capita</strong>.</p>

      <h4 className="font-semibold text-primary my-2">Sources of Long-Run Growth</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Physical capital / capital stock</li>
        <li>Labor force growth</li>
        <li>Human capital (education, skills, knowledge)</li>
        <li>Technological progress → productivity improvements</li>
      </ul>

      <h4 className="font-semibold text-primary my-2">Aggregate Production Function</h4>
      <div className="formula-block">Real GDP = AF(K, L, R)</div>
      <p className="mt-2">K = Capital, L = Labor, R = Resources. Growth comes from increasing these inputs or improving technology (shifting the function up).</p>

      <h4 className="font-semibold text-primary my-2">Models for Long-Run Growth</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>AD-AS:</strong> LRAS shifts right</li>
        <li><strong>PPC:</strong> Outward shift</li>
        <li><strong>APF:</strong> Production function shifts up</li>
      </ul>

      <h4 className="font-semibold text-primary my-2">Role of Government</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Build infrastructure and invest in education</li>
        <li>Invest in R&D and human capital</li>
        <li>Provide political stability and protect property rights</li>
        <li>Use supply-side policies → promote productivity → shift SRAS & LRAS right</li>
      </ul>
    </SectionAccordion>
  </div>
);

export default MacroUnit5Content;
