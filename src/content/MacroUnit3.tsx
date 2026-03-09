import AmandaTip from "../components/AmandaTip";
import SectionAccordion from "../components/SectionAccordion";
import EconGraph from "../components/EconGraph";

const MacroUnit3Content = () => (
  <div className="space-y-4">
    <SectionAccordion title="Three Macro Objectives" defaultOpen>
      <ol className="list-decimal pl-5 space-y-1">
        <li><strong>Promote economic growth</strong> (Real GDP per capita = Real GDP / Population)</li>
        <li><strong>Stabilize the price level</strong> (control inflation)</li>
        <li><strong>Improve employment</strong> (reduce unemployment)</li>
      </ol>
    </SectionAccordion>

    <SectionAccordion title="1. Aggregate Demand (AD)">
      <p>The total spending on domestic goods and services at each price level.</p>
      <div className="formula-block">AD = C + I + G + (X − M) = Real GDP</div>
      <h4 className="font-semibold text-primary my-2">Why AD Slopes Downward</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Real Wealth Effect:</strong> Price level ↑ → real value of assets ↓ → consumption ↓ → AD ↓</li>
        <li><strong>Interest Rate Effect:</strong> Price level ↑ → people need more money for transactions → interest rates ↑ → investment & consumption ↓ → AD ↓</li>
        <li><strong>Exchange Rate Effect:</strong> Price level ↑ → domestic goods more expensive → exports ↓, imports ↑ → net exports ↓ → AD ↓</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">AD Shifters</h4>
      <p className="font-semibold mb-1">Factors affecting Consumption (C):</p>
      <ul className="list-disc pl-5 space-y-1 mb-2">
        <li>Wealth/income changes, income tax changes, consumer expectations, interest rates</li>
      </ul>
      <p className="font-semibold mb-1">Factors affecting Investment (I):</p>
      <ul className="list-disc pl-5 space-y-1 mb-2">
        <li>Business expectations, interest rates, unplanned inventory changes</li>
      </ul>
      <p className="font-semibold mb-1">Factors affecting Government Spending (G):</p>
      <ul className="list-disc pl-5 space-y-1 mb-2">
        <li>Government expenditure decisions</li>
      </ul>
      <p className="font-semibold mb-1">Factors affecting Net Exports (X−M):</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Exchange rate changes (depreciation → NX ↑ → AD right)</li>
      </ul>
      <AmandaTip>
        When the domestic currency depreciates (loses value), foreign goods become more expensive for us (imports ↓) and our goods become cheaper for foreigners (exports ↑). Net exports increase, shifting AD right. Think of it this way: if USD depreciates, Americans can't afford as many imports, but Europeans find American products cheaper!
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="2. Multipliers">
      <div className="formula-block">MPC + MPS = 1</div>
      <div className="formula-block">Spending Multiplier = 1 / (1 − MPC) = 1 / MPS</div>
      <div className="formula-block">Tax Multiplier = −MPC / (1 − MPC)</div>
      <p className="my-2"><strong>MPC (Marginal Propensity to Consume):</strong> The fraction of each additional dollar of income that is spent on consumption.</p>
      <p><strong>MPS (Marginal Propensity to Save):</strong> The fraction saved.</p>
      <AmandaTip>
        Government spending has a BIGGER multiplier effect than tax cuts of the same size. Why? A $100 increase in government spending goes directly into the economy. A $100 tax cut first gets split between spending and saving — only the MPC portion enters the economy immediately. This is why the spending multiplier is always larger than the (absolute value of the) tax multiplier.
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="3. Short-Run Aggregate Supply (SRAS)">
      <p>In the short run, wages and input prices are <strong>"sticky"</strong> — they don't adjust immediately to price level changes.</p>
      <div className="formula-block">Profit = Price Level − Input Costs (sticky in SR)</div>
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li>Price level ↑ → profit ↑ → output ↑ → unemployment ↓ → inflation</li>
        <li>Price level ↓ → profit ↓ → output ↓ → unemployment ↑ → deflation</li>
        <li><strong>In the short run, there is a trade-off between inflation and unemployment</strong></li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">SRAS Shifters</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Changes in input costs (energy prices, nominal wages)</li>
        <li>Changes in labor productivity (technology)</li>
        <li>Government policy (deregulation, subsidies)</li>
        <li>Inflationary expectations (expected inflation ↑ → wages demanded ↑ → costs ↑ → SRAS left)</li>
      </ul>
      <AmandaTip>
        If workers expect higher inflation, they'll demand higher wages to maintain their purchasing power. This raises firms' costs and shifts SRAS left. It's a self-fulfilling prophecy: expecting inflation can actually cause it!
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="4. Long-Run Aggregate Supply (LRAS)">
      <p>In the long run, all input prices are <strong>fully flexible</strong>. LRAS is <strong>vertical</strong> at potential output (Yf).</p>
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li>At Yf: Unemployment = Natural rate (cyclical unemployment = 0)</li>
        <li>Price level changes do NOT affect long-run output</li>
        <li><strong>No trade-off between inflation and unemployment in the long run</strong></li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">LRAS Shifters (Same as PPC Shifters!)</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Change in quantity of resources (land, labor, capital)</li>
        <li>Change in quality of resources (education, training)</li>
        <li>Change in technology</li>
      </ul>
    </SectionAccordion>

    <SectionAccordion title="5. The AD-AS Model">
      <EconGraph type="ad-as" caption="Long-run equilibrium — AD, SRAS, and LRAS intersect at full employment (Yf)" />
      <h4 className="font-semibold text-primary mb-2">AD Shocks</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Negative AD shock:</strong> AD shifts left → output ↓, price level ↓, unemployment ↑</li>
        <li><strong>Positive AD shock:</strong> AD shifts right → output ↑, price level ↑ (demand-pull inflation), unemployment ↓</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">SRAS Shocks</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Positive SRAS shock:</strong> SRAS shifts right → output ↑, price level ↓, unemployment ↓</li>
        <li><strong>Negative SRAS shock:</strong> SRAS shifts left → output ↓, price level ↑ (cost-push inflation), unemployment ↑</li>
      </ul>
      <AmandaTip>
        <strong>Stagflation</strong> = inflation + falling output + rising unemployment. This is the worst-case scenario for an economy and happens when there's a negative supply shock (like an oil crisis). SRAS shifts left → prices go up AND output goes down simultaneously. There's no easy policy fix!
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="6. Output Gaps & Solutions">
      <h4 className="font-semibold text-primary mb-2">Recessionary Gap (Actual &lt; Potential)</h4>
      <EconGraph type="ad-as-recessionary" caption="Recessionary gap — AD is left of LRAS; expansionary policy shifts AD right" />
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Expansionary fiscal policy:</strong> ↑G or ↓Taxes → AD shifts right</li>
        <li><strong>Automatic stabilizers:</strong> Unemployment benefits kick in → disposable income ↑ → AD right</li>
        <li><strong>Long-run self-adjustment:</strong> Workers accept lower wages → SRAS shifts right</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Inflationary Gap (Actual &gt; Potential)</h4>
      <EconGraph type="ad-as-inflationary" caption="Inflationary gap — AD is right of LRAS; contractionary policy shifts AD left" />
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Contractionary fiscal policy:</strong> ↓G or ↑Taxes → AD shifts left</li>
        <li><strong>Automatic stabilizers:</strong> Higher income taxes collected → disposable income ↓ → AD left</li>
        <li><strong>Long-run self-adjustment:</strong> Workers demand higher wages → SRAS shifts left</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Fiscal Policy Challenges (3 Time Lags)</h4>
      <ol className="list-decimal pl-5 space-y-1">
        <li><strong>Recognition Lag:</strong> Takes time to identify the problem</li>
        <li><strong>Administrative Lag:</strong> Congress takes time to pass legislation</li>
        <li><strong>Operational Lag:</strong> Spending takes time to implement</li>
      </ol>
      <AmandaTip>
        Automatic stabilizers (income taxes, unemployment insurance) work WITHOUT government action — they "automatically" dampen economic swings. But they're not strong enough to prevent recessions entirely; they just soften the blow. Discretionary fiscal policy (changing G or T on purpose) requires Congress to act, which is slower.
      </AmandaTip>
    </SectionAccordion>
  </div>
);

export default MacroUnit3Content;
