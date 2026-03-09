import AmandaTip from "../components/AmandaTip";
import SectionAccordion from "../components/SectionAccordion";
import EconGraph from "../components/EconGraph";

const MacroUnit6Content = () => (
  <div className="space-y-4">
    <SectionAccordion title="1. Balance of Payments (BOP)" defaultOpen>
      <p>The Balance of Payments records all international transactions between a country's residents and the rest of the world.</p>
      <p className="my-2"><strong>General rule:</strong> Total credits + total debits = 0. A credit in one country is a debit in another.</p>

      <h4 className="font-semibold text-primary my-2">Structure of BOP</h4>
      <table className="w-full text-sm border-collapse my-3">
        <thead><tr className="border-b font-semibold"><th className="text-left py-2 pr-3">Account</th><th className="text-left py-2">What It Includes</th></tr></thead>
        <tbody>
          <tr className="border-b"><td className="py-2 pr-3 font-medium">Current Account (CA)</td><td className="py-2">Exports & imports of goods/services, factor income (wages, dividends, interest), net international transfer payments</td></tr>
          <tr className="border-b"><td className="py-2 pr-3 font-medium">Financial Account (FA)</td><td className="py-2">Net purchases/sales of financial assets (stocks, bonds, real estate) — capital flows</td></tr>
          <tr><td className="py-2 pr-3 font-medium">Capital Account</td><td className="py-2">Transfers of assets not accounted for in the FA (debt forgiveness, non-financial assets)</td></tr>
        </tbody>
      </table>

      <h4 className="font-semibold text-primary my-2">Key Relationships</h4>
      <div className="formula-block">CA + Capital & Financial Account (CFA) = 0 &nbsp;&nbsp;→&nbsp;&nbsp; CA = −CFA</div>
      <ul className="list-disc pl-5 space-y-1 mt-3">
        <li>If CA has a surplus → CFA has a deficit (and vice versa)</li>
        <li>Net foreign capital inflow → country is a <strong>net debtor</strong></li>
        <li>Net foreign capital outflow → country is a <strong>net creditor</strong></li>
      </ul>

      <AmandaTip>
        The U.S. typically runs a current account deficit (imports &gt; exports) and a financial account surplus (foreign money flows in to buy U.S. assets). They must always balance!
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="2. Exchange Rates">
      <p>An <strong>exchange rate</strong> is the price of one currency in terms of another.</p>
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li><strong>Appreciation:</strong> Currency becomes more valuable (buys more foreign currency)</li>
        <li><strong>Depreciation:</strong> Currency becomes less valuable (buys less foreign currency)</li>
      </ul>

      <h4 className="font-semibold text-primary my-2">Winners & Losers from Depreciation (e.g., USD depreciates vs. peso)</h4>
      <table className="w-full text-sm border-collapse my-3">
        <thead><tr className="border-b font-semibold"><th className="text-left py-2 pr-3">Gainers</th><th className="text-left py-2">Losers</th></tr></thead>
        <tbody>
          <tr><td className="py-2 pr-3">U.S. exporters</td><td className="py-2">U.S. importers</td></tr>
          <tr><td className="py-2 pr-3">Mexican importers</td><td className="py-2">Mexican exporters</td></tr>
          <tr><td className="py-2 pr-3">Holders of Mexican pesos</td><td className="py-2">U.S. investors abroad</td></tr>
        </tbody>
      </table>
    </SectionAccordion>

    <SectionAccordion title="3. The Foreign Exchange Market">
      <p>Currency is traded in the foreign exchange (forex) market. The exchange rate is determined by <strong>supply and demand</strong>.</p>
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li><strong>Demand for USD:</strong> Foreigners wanting to buy U.S. goods, services, or assets</li>
        <li><strong>Supply of USD:</strong> Americans wanting to buy foreign goods, services, or assets</li>
      </ul>

      <h4 className="font-semibold text-primary my-2">Demand Shifters for a Currency</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Demand for domestic goods & services</li>
        <li>Relative price levels between countries</li>
        <li>Foreign national income (income ↑ → imports from us ↑ → demand for our currency ↑)</li>
        <li>Foreign consumers' preferences</li>
        <li>Relative interest rates (higher domestic rates attract foreign investment)</li>
      </ul>

      <h4 className="font-semibold text-primary my-2">Supply Shifters</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Tariffs on imports → reduce supply of domestic currency in forex market</li>
        <li>Domestic demand for foreign goods & assets</li>
      </ul>
    </SectionAccordion>

    <SectionAccordion title="4. Exchange Rates & Capital Flows">
      <p>International capital flows connect the loanable funds market and the foreign exchange market.</p>
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li>Higher real interest rate in a country → attracts foreign capital inflow</li>
        <li>Capital inflow → increased demand for that country's currency → appreciation</li>
        <li>Capital outflow → increased supply of that country's currency → depreciation</li>
      </ul>
      <AmandaTip>
        This is the key chain: Interest rate differential → capital flows → exchange rate changes → net exports change. It connects the money market, loanable funds market, and forex market all together!
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="5. Exchange Rates & Policy Effects">
      <h4 className="font-semibold text-primary mb-2">Expansionary Fiscal Policy (under floating exchange rates)</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Gov't spending ↑ → AD ↑ → price level ↑ → domestic goods become more expensive → exports ↓, imports ↑</li>
        <li>Budget deficit ↑ → borrowing ↑ → real interest rate ↑ → attracts foreign capital → currency appreciates</li>
        <li>Appreciation further reduces net exports, partially offsetting the fiscal expansion</li>
      </ul>

      <h4 className="font-semibold text-primary my-2">Expansionary Monetary Policy (under floating exchange rates)</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>MS ↑ → interest rate ↓ → capital outflow → currency depreciates</li>
        <li>Depreciation → exports ↑, imports ↓ → net exports ↑ → AD ↑ (reinforces the expansion)</li>
      </ul>

      <AmandaTip>
        Notice the contrast! Expansionary fiscal policy causes currency <strong>appreciation</strong> (through higher interest rates attracting capital), which partially <strong>offsets</strong> the AD increase. Expansionary monetary policy causes currency <strong>depreciation</strong>, which <strong>reinforces</strong> the AD increase through improved net exports!
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="6. Effects of Exchange Rate Changes">
      <ul className="list-disc pl-5 space-y-1">
        <li>Currency <strong>appreciates</strong> → domestic purchasing power ↑ → imports ↑, exports ↓ → net exports ↓ → AD ↓</li>
        <li>Currency <strong>depreciates</strong> → domestic purchasing power ↓ → imports ↓, exports ↑ → net exports ↑ → AD ↑</li>
      </ul>
      <div className="formula-block mt-3">
        GDP = C + I + G + (X − M) &nbsp;&nbsp;→&nbsp;&nbsp; Net exports (X − M) directly affect AD
      </div>
    </SectionAccordion>
  </div>
);

export default MacroUnit6Content;
