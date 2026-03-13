import AmandaTip from "../components/AmandaTip";
import SectionAccordion from "../components/SectionAccordion";
import EconGraph from "../components/EconGraph";

const MacroUnit4Content = () => (
  <div className="space-y-4">
    <SectionAccordion title="1. Financial Assets" defaultOpen>
      <h4 className="font-semibold text-primary mb-2">Assets vs. Liabilities</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Asset:</strong> What you own (physical, intangible, or financial)</li>
        <li><strong>Liability:</strong> What you owe (car loan, mortgage, credit card balance)</li>
        <li><strong>Equity</strong> = Assets − Liabilities</li>
      </ul>
      <p className="mb-2">A <strong>loan</strong> is an asset for the lender (creditor) and a liability for the borrower (debtor).</p>

      <h4 className="font-semibold text-primary my-2">Types of Financial Assets</h4>
      <table className="w-full text-sm border-collapse my-3">
        <thead><tr className="border-b font-semibold"><th className="text-left py-2 pr-3">Asset</th><th className="text-left py-2 pr-3">Risk</th><th className="text-left py-2">Liquidity</th></tr></thead>
        <tbody>
          <tr className="border-b"><td className="py-2 pr-3 font-medium">Cash & Equivalents</td><td className="py-2 pr-3">Lowest</td><td className="py-2">Highest</td></tr>
          <tr className="border-b"><td className="py-2 pr-3 font-medium">Bonds</td><td className="py-2 pr-3">Medium (default risk)</td><td className="py-2">Medium</td></tr>
          <tr><td className="py-2 pr-3 font-medium">Stocks</td><td className="py-2 pr-3">Highest (default + bankruptcy)</td><td className="py-2">Medium</td></tr>
        </tbody>
      </table>

      <h4 className="font-semibold text-primary my-2">Bonds</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>A bond is an interest-bearing asset representing a loan to a company or government</li>
        <li>Types: T-Bills (≤1 year), Treasury Notes (2–10 years), Treasury Bonds (30 years)</li>
        <li>Higher default risk → must pay higher interest rate to attract investors</li>
      </ul>
      <div className="formula-block">Interest rate ↑ → Price of previously issued bonds ↓ (inverse relationship)</div>

      <h4 className="font-semibold text-primary my-2">Stocks</h4>
      <p>A stock represents ownership of a company. For the owner it's an asset; for the issuer it's a liability.</p>

      <AmandaTip>
        The opportunity cost of holding cash is the interest you could have earned! When interest rates rise, people shift from cash to bonds/savings → money demand falls. This is the key link between the money market and financial assets.
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="2. Financial System & Intermediaries">
      <p>The financial system reduces <strong>transaction costs</strong>, <strong>financial risk</strong>, and provides <strong>liquidity</strong>.</p>
      <h4 className="font-semibold text-primary my-2">Financial Intermediaries</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Mutual Funds:</strong> Pool money from many investors to buy a diversified portfolio of stocks/bonds, reducing individual risk through diversification</li>
        <li><strong>Banks:</strong> Accept deposits (liquid assets) and use those funds to finance borrowers' investments (illiquid assets)</li>
      </ul>
      <h4 className="font-semibold text-primary my-2">Banking Concepts</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Demand deposits:</strong> Funds that can be withdrawn at any time (checking, savings accounts)</li>
        <li><strong>FDIC:</strong> Guarantees individual deposits up to $250,000</li>
        <li>Banks face a <strong>mismatch problem</strong>: they lend long-term but depositors can withdraw anytime</li>
      </ul>
    </SectionAccordion>

    <SectionAccordion title="3. Interest Rates">
      <div className="formula-block">Real Interest Rate = Nominal Interest Rate − Inflation Rate</div>
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li><strong>Nominal interest rate:</strong> The stated rate actually paid for a loan</li>
        <li><strong>Real interest rate:</strong> Adjusted for inflation — reflects true purchasing power</li>
        <li>If actual inflation &gt; expected → borrowers gain at expense of lenders</li>
        <li>If actual inflation &lt; expected → lenders gain at expense of borrowers</li>
      </ul>
      <AmandaTip>
        Fixed interest rate holders are hurt by unexpected inflation because it erodes the real value of their money. That's why many loans use flexible rates that adjust with inflation!
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="4. Money & Banking">
      <h4 className="font-semibold text-primary mb-2">Functions of Money</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Medium of Exchange:</strong> Used to trade for goods/services</li>
        <li><strong>Store of Value:</strong> Holds purchasing power over time (weakened by inflation)</li>
        <li><strong>Unit of Account:</strong> A measure used to set prices and make economic calculations</li>
      </ul>

      <h4 className="font-semibold text-primary my-2">Types of Money</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Commodity money:</strong> Has intrinsic value (e.g., gold coins)</li>
        <li><strong>Commodity-backed money:</strong> No intrinsic value but convertible to a commodity</li>
        <li><strong>Fiat money:</strong> Value comes entirely from government decree (modern currency)</li>
      </ul>

      <h4 className="font-semibold text-primary my-2">Measuring Money Supply</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>M0 (Monetary Base):</strong> Currency in circulation + bank reserves</li>
        <li><strong>M1:</strong> Currency in circulation + demand deposits + other liquid deposits (no CDs)</li>
        <li><strong>M2:</strong> M1 + savings deposits + small time deposits + money market funds</li>
      </ul>

      <h4 className="font-semibold text-primary my-2">Money Creation (Money Multiplier)</h4>
      <div className="formula-block">
        Money Multiplier = 1 / Required Reserve Ratio &nbsp;&nbsp;|&nbsp;&nbsp; Max ΔMS = Initial Deposit × Money Multiplier
      </div>
    </SectionAccordion>

    <SectionAccordion title="5. Money Market" highYield>
      <p>The money market is where the "good" being traded is money, and the price is the <strong>nominal interest rate (NIR)</strong>.</p>
      <h4 className="font-semibold text-primary my-2">Money Demand Curve</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Slopes downward: NIR ↑ → opportunity cost of holding cash ↑ → quantity of money demanded ↓</li>
        <li><strong>Shifters:</strong> Aggregate price level, real GDP, technology (online payments), regulation</li>
      </ul>
      <h4 className="font-semibold text-primary my-2">Money Supply Curve</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Vertical</strong> — set by the central bank, independent of the interest rate</li>
        <li>Shifts via monetary policy tools</li>
      </ul>
      <p><strong>Equilibrium:</strong> Where MS intersects MD, determining the equilibrium NIR.</p>
    </SectionAccordion>

    <SectionAccordion title="6. Monetary Policy" highYield>
      <EconGraph type="money-market" caption="Money Market — MS shifts right (expansionary), nominal interest rate falls from r₀ to r₁" />
      <p>The <strong>Federal Reserve</strong> has a dual mandate: <strong>maximum employment</strong> and <strong>price stability</strong> (targeting ~2% inflation).</p>

      <h4 className="font-semibold text-primary my-2">Monetary Policy Tools</h4>
      <table className="w-full text-sm border-collapse my-3">
        <thead><tr className="border-b font-semibold"><th className="text-left py-2 pr-3">Tool</th><th className="text-left py-2 pr-3">Expansionary</th><th className="text-left py-2">Contractionary</th></tr></thead>
        <tbody>
          <tr className="border-b"><td className="py-2 pr-3 font-medium">Open Market Operations (OMO)</td><td className="py-2 pr-3">Buy gov't bonds → MS ↑ → NIR ↓</td><td className="py-2">Sell gov't bonds → MS ↓ → NIR ↑</td></tr>
          <tr className="border-b"><td className="py-2 pr-3 font-medium">Discount Rate</td><td className="py-2 pr-3">Lower DR → banks borrow more → MS ↑</td><td className="py-2">Raise DR → banks borrow less → MS ↓</td></tr>
          <tr className="border-b"><td className="py-2 pr-3 font-medium">Reserve Requirement</td><td className="py-2 pr-3">Lower RR → more lending → MS ↑</td><td className="py-2">Raise RR → less lending → MS ↓</td></tr>
          <tr><td className="py-2 pr-3 font-medium">Administered Rates (IORB)</td><td className="py-2 pr-3">Lower rates → encourages lending</td><td className="py-2">Raise rates → discourages lending</td></tr>
        </tbody>
      </table>

      <h4 className="font-semibold text-primary my-2">Transmission Mechanism</h4>
      <div className="formula-block">
        Recessionary gap: MS ↑ → NIR ↓ → Investment ↑ → AD ↑ → Output & Employment ↑
      </div>
      <div className="formula-block mt-2">
        Inflationary gap: MS ↓ → NIR ↑ → Investment ↓ → AD ↓ → Price Level ↓
      </div>

      <AmandaTip>
        In an <strong>ample reserves</strong> regime (what the Fed currently uses), OMO doesn't significantly change the FFR. Instead, the Fed adjusts <strong>administered rates</strong> (like IORB) to move the federal funds rate. Know which tools work under which regime!
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="7. The Loanable Funds Market" highYield>
      <EconGraph type="loanable-funds" caption="Loanable Funds Market — gov't borrowing shifts D right/S left, crowding out raises real interest rate" />
      <p>The loanable funds market brings together savers (lenders) and borrowers. The price is the <strong>real interest rate</strong>.</p>
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li><strong>Demand for loanable funds:</strong> Inversely related to real interest rate (borrowers want cheap loans)</li>
        <li><strong>Supply of loanable funds:</strong> Positively related to real interest rate (savers want high returns)</li>
      </ul>

      <h4 className="font-semibold text-primary my-2">Supply Shifters</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Changes in private savings behavior</li>
        <li>Changes in public savings (government budget deficit ↑ → supply ↓)</li>
        <li>Changes in capital flows (more foreign inflow → supply ↑)</li>
      </ul>

      <h4 className="font-semibold text-primary my-2">Demand Shifters</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Changes in borrowing by consumers/businesses</li>
        <li>Changes in anticipated rate of return on investment</li>
        <li>Investment tax credits → demand ↑</li>
      </ul>

      <h4 className="font-semibold text-primary my-2">The Crowding-Out Effect</h4>
      <p>When the government runs a deficit and borrows in the loanable funds market:</p>
      <div className="formula-block">
        Gov't deficit ↑ → Demand for loanable funds ↑ → Real interest rate ↑ → Private investment ↓ → AD partially offset
      </div>
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li><strong>Budget deficit:</strong> Government spending &gt; tax revenue in a single year</li>
        <li><strong>National debt:</strong> The sum of all past budget deficits minus surpluses</li>
        <li>Deficits increase the debt; surpluses decrease it</li>
      </ul>
      <p>This means expansionary fiscal policy is <strong>less effective</strong> than it appears because higher government borrowing "crowds out" private investment.</p>

      <AmandaTip>
        Crowding out is why the actual AD shift from fiscal policy is smaller than the simple multiplier suggests. The government borrows more → interest rates rise → businesses invest less. It's a partial offset, not a complete cancellation! Don't confuse the money market with the loanable funds market! The money market uses the <strong>nominal</strong> interest rate and deals with short-term liquidity. The loanable funds market uses the <strong>real</strong> interest rate and deals with long-term saving and investment.
      </AmandaTip>
    </SectionAccordion>
  </div>
);

export default MacroUnit4Content;
