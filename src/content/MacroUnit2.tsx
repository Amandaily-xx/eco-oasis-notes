import AmandaTip from "../components/AmandaTip";
import SectionAccordion from "../components/SectionAccordion";
import EconGraph from "../components/EconGraph";

const MacroUnit2Content = () => (
  <div className="space-y-4">
    <SectionAccordion title="1. The Circular Flow Model" defaultOpen>
      <h4 className="font-semibold text-primary mb-2">Three Markets</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Product market:</strong> Where goods and services are bought and sold</li>
        <li><strong>Factor market:</strong> Where resources (especially capital and labor) are bought and sold</li>
        <li><strong>Financial market:</strong> Channels private savings into investment spending and government borrowing</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Four Sectors</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Households:</strong> Disposable income = Income + Government transfers − Taxes = Consumption + Savings</li>
        <li><strong>Government:</strong> Budget balance = Tax revenue − (Purchases + Transfers). Deficit if negative, surplus if positive.</li>
        <li><strong>Firms:</strong> Production = C + I + G + NX. Investment = spending on new capital + changes in inventories.</li>
        <li><strong>Rest of World:</strong> Net exports = Exports − Imports. Positive = trade surplus; Negative = trade deficit.</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Injections & Leakages</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Injections:</strong> Investment + Government Expenditure + Exports</li>
        <li><strong>Leakages:</strong> Savings + Taxes + Imports</li>
      </ul>
      <AmandaTip>
        Injections are money flowing INTO the domestic economy, while leakages are money flowing OUT. They correspond to each other: savings funds investment, taxes fund government spending, and imports are offset by exports.
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="2. Gross Domestic Product (GDP)">
      <p><strong>GDP:</strong> The market value of all <strong>final</strong> goods and services produced <strong>within a country</strong> in a given period.</p>
      <h4 className="font-semibold text-primary my-2">What's NOT included?</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Illegal goods, home production, financial transactions (stocks, bonds, transfers)</li>
        <li>Intermediate goods (to avoid double-counting)</li>
        <li>Used goods, foreign-produced goods</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Three Approaches to Calculating GDP</h4>
      <div className="formula-block">Expenditure: GDP = C + I + G + (X − M)</div>
      <div className="formula-block">Income: GDP = Wages + Interest + Rent + Profit</div>
      <div className="formula-block">Value-Added: Sum of value added at each stage of production</div>
      <h4 className="font-semibold text-primary my-2">Nominal vs. Real GDP</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Nominal GDP:</strong> Valued at current-year prices (not adjusted for inflation)</li>
        <li><strong>Real GDP:</strong> Valued at constant base-year prices (adjusted for inflation)</li>
      </ul>
      <div className="formula-block">GDP Deflator = (Nominal GDP / Real GDP) × 100</div>
    </SectionAccordion>

    <SectionAccordion title="3. Unemployment">
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Labor force</strong> = Employed + Unemployed (actively looking for work)</li>
        <li><strong>Unemployment rate</strong> = Unemployed / Labor force</li>
        <li><strong>Labor force participation rate</strong> = Labor force / Population (age ≥ 16)</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Types of Unemployment</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Frictional:</strong> Between jobs, graduates seeking first job — short-term, normal</li>
        <li><strong>Structural:</strong> Skills mismatch, industry changes — longer-term</li>
        <li><strong>Cyclical:</strong> Due to economic downturns/recessions</li>
        <li><strong>Seasonal:</strong> Demand shifts by season (not counted in the "big three")</li>
      </ul>
      <div className="formula-block">Natural Rate of Unemployment = Frictional + Structural</div>
      <div className="formula-block">Actual Unemployment = Natural + Cyclical</div>
      <AmandaTip>
        When a country is at its natural rate of unemployment, it's at "full employment" — but this does NOT mean zero unemployment! There's always some frictional and structural unemployment. Full employment = cyclical unemployment is zero.
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="4. Inflation & Price Indices">
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Inflation:</strong> A sustained increase in the general price level → money loses purchasing power</li>
        <li><strong>Deflation:</strong> A sustained decrease in the general price level → money gains purchasing power</li>
        <li><strong>Disinflation:</strong> Prices still rising, but at a slower rate</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">CPI Calculation</h4>
      <ol className="list-decimal pl-5 space-y-1 mb-3">
        <li>Fix a market basket (set of goods bought by typical consumer)</li>
        <li>Find current prices</li>
        <li>Compute basket cost = Σ(quantity × price)</li>
        <li>CPI = (Cost in current year / Cost in base year) × 100</li>
        <li>Inflation rate = (CPI₂ − CPI₁) / CPI₁</li>
      </ol>
      <h4 className="font-semibold text-primary mb-2">CPI Limitations</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Substitution bias:</strong> Fixed basket doesn't account for consumers switching to cheaper alternatives → overstates inflation</li>
        <li><strong>Unmeasured quality changes:</strong> Product improvements not captured</li>
        <li><strong>New goods:</strong> Basket doesn't include newly invented products</li>
      </ul>
      <p><strong>PPI (Producer Price Index):</strong> Measures prices from the producer's perspective. Often an "early warning" of inflation changes.</p>
    </SectionAccordion>

    <SectionAccordion title="5. Costs of Inflation">
      <h4 className="font-semibold text-primary mb-2">Expected Costs</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Shoe-leather costs:</strong> Increased transaction costs as people try to spend money before it loses value</li>
        <li><strong>Menu costs:</strong> Costs of changing listed prices</li>
        <li><strong>Unit-of-account costs:</strong> Money becomes a less reliable unit of measurement</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Unexpected Costs</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Winners:</strong> Borrowers (repay with less valuable money), those with flexible income</li>
        <li><strong>Losers:</strong> Lenders (receive less valuable money), people on fixed incomes, retirees with fixed pensions, landlords with fixed-rate leases</li>
      </ul>
      <AmandaTip>
        The key logic: When inflation rises unexpectedly, the purchasing power of money falls. Lenders receive repayment in dollars that are worth less than expected → lenders lose, borrowers win. Anyone locked into a fixed nominal payment gets hurt by unexpected inflation.
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="6. Business Cycles">
      <EconGraph type="business-cycle" caption="Business Cycle — expansion, peak, recession, trough around potential GDP trend" />
      <h4 className="font-semibold text-primary mb-2">Four Stages</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Expansion:</strong> Output ↑, employment ↑, income ↑</li>
        <li><strong>Peak:</strong> Maximum output reached</li>
        <li><strong>Recession/Depression:</strong> Output ↓, employment ↓, income ↓</li>
        <li><strong>Trough:</strong> Lowest point of output</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Output Gaps</h4>
      <div className="formula-block">Output Gap = Potential Output − Actual Output</div>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Inflationary gap:</strong> Actual &gt; Potential (economy overheating)</li>
        <li><strong>Recessionary gap:</strong> Actual &lt; Potential (economy underperforming)</li>
      </ul>
      <AmandaTip>
        At potential output, the economy is on the LRAS line — this is where unemployment equals the natural rate. It's like being on the PPC: all resources are fully and efficiently employed.
      </AmandaTip>
    </SectionAccordion>
  </div>
);

export default MacroUnit2Content;
