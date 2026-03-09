import AmandaTip from "../components/AmandaTip";
import SectionAccordion from "../components/SectionAccordion";
import EconGraph from "../components/EconGraph";

const MicroUnit4Content = () => (
  <div className="space-y-4">
    <SectionAccordion title="1. Monopoly" defaultOpen>
      <h4 className="font-semibold text-primary mb-2">Characteristics</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Single producer (the firm IS the market)</li>
        <li>No close substitutes</li>
        <li>High barriers to entry: control of scarce resources, economies of scale, patents, government-created barriers</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Demand & Revenue</h4>
      <p className="mb-2">The monopolist faces the market demand curve (downward-sloping). Can a monopoly charge any price it wants? <strong>No!</strong> It is constrained by the demand curve.</p>
      <p><strong>Price Effect:</strong> To sell more units, the monopolist must lower the price on ALL units sold. This is why MR &lt; P for a monopolist.</p>
      <EconGraph type="monopoly" caption="Monopoly — produces at MR = MC, charges Pf from demand curve, economic profit shaded (DWL shown)" />
      <div className="formula-block">MR curve lies below the demand curve &nbsp;|&nbsp; MR has twice the slope of D</div>
    </SectionAccordion>

    <SectionAccordion title="2. Monopoly vs. Perfect Competition">
      <table className="w-full text-sm border-collapse my-3">
        <thead><tr className="border-b font-semibold"><th className="text-left py-2 pr-3">Feature</th><th className="text-left py-2 pr-3">Perfect Competition</th><th className="text-left py-2">Monopoly</th></tr></thead>
        <tbody>
          <tr className="border-b"><td className="py-2 pr-3">Price</td><td className="py-2 pr-3">P = MC</td><td className="py-2">P &gt; MC</td></tr>
          <tr className="border-b"><td className="py-2 pr-3">Output</td><td className="py-2 pr-3">Higher (Qc)</td><td className="py-2">Lower (Qm)</td></tr>
          <tr className="border-b"><td className="py-2 pr-3">Allocative efficiency</td><td className="py-2 pr-3">Yes (P = MC)</td><td className="py-2">No (P &gt; MC)</td></tr>
          <tr className="border-b"><td className="py-2 pr-3">Productive efficiency</td><td className="py-2 pr-3">Yes (P = ATC min)</td><td className="py-2">No</td></tr>
          <tr><td className="py-2 pr-3">Deadweight loss</td><td className="py-2 pr-3">None</td><td className="py-2">Yes</td></tr>
        </tbody>
      </table>
      <AmandaTip>
        Monopolies produce less and charge more than competitive firms. The monopolist causes deadweight loss because it restricts output below the socially optimal level. Always draw the DWL triangle between MC, D, and Qm!
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="3. Natural Monopoly & Price Regulation">
      <p>A <strong>natural monopoly</strong> exists when one firm can supply the entire market at a lower cost than multiple firms (huge economies of scale).</p>
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li><strong>Socially optimal price (P = MC):</strong> Allocatively efficient, but firm loses money (MC &lt; ATC)</li>
        <li><strong>Fair-return price (P = ATC):</strong> Firm earns zero economic profit, still some DWL</li>
        <li><strong>Unregulated (P = monopoly price):</strong> Maximum DWL</li>
      </ul>
    </SectionAccordion>

    <SectionAccordion title="4. Price Discrimination">
      <p>Charging different prices to different consumers for the same product.</p>
      <h4 className="font-semibold text-primary my-2">Three Conditions Required</h4>
      <ol className="list-decimal pl-5 space-y-1 mb-3">
        <li>Market power (some ability to set price)</li>
        <li>Ability to identify and separate consumer groups by elasticity</li>
        <li>Ability to prevent resale</li>
      </ol>
      <h4 className="font-semibold text-primary my-2">Results of Price Discrimination</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Multiple prices charged</li>
        <li>More output (closer to socially optimal)</li>
        <li>More profit for the firm</li>
        <li>Less deadweight loss</li>
        <li><strong>Perfect price discrimination:</strong> Every consumer pays their maximum willingness to pay → No DWL, but all surplus goes to the producer</li>
      </ul>
      <p className="mt-2"><strong>Examples:</strong> Airlines, movie tickets (senior/student), college tuition (financial aid)</p>
    </SectionAccordion>

    <SectionAccordion title="5. Monopolistic Competition">
      <EconGraph type="monopolistic-competition" caption="Monopolistic Competition (Long Run) — D tangent to ATC, zero economic profit" />
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Many firms, differentiated products</li>
        <li>Free entry and exit in the long run</li>
        <li>Some market power (downward-sloping demand, but more elastic than monopoly)</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Short Run vs. Long Run</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Short run:</strong> Can earn economic profit or loss (like monopoly)</li>
        <li><strong>Long run:</strong> Entry/exit drives economic profit to zero (like perfect competition)</li>
        <li>In LR equilibrium: demand curve is tangent to ATC → zero economic profit</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Inefficiencies</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Excess capacity:</strong> Produces less than the cost-minimizing output</li>
        <li><strong>P &gt; MC:</strong> Allocative inefficiency</li>
      </ul>
      <p className="mt-2"><strong>Product differentiation</strong> through advertising and brand names increases market power and sales.</p>
    </SectionAccordion>

    <SectionAccordion title="6. Oligopoly & Game Theory">
      <p><strong>Oligopoly:</strong> Few large firms dominate the market. Products may be identical or differentiated. High barriers to entry.</p>
      <p className="my-2"><strong>Examples:</strong> Coca-Cola & Pepsi; Boeing & Airbus; US auto industry</p>
      <h4 className="font-semibold text-primary my-2">The Prisoners' Dilemma</h4>
      <p className="mb-2">Shows why it's hard to cooperate even when both parties would benefit.</p>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Dominant Strategy:</strong> The best action regardless of what the other player does</li>
        <li><strong>Nash Equilibrium:</strong> Each player is doing the best they can given the other player's action</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Collusion</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Collusion:</strong> Agreement among firms about quantities or prices</li>
        <li><strong>Cartel:</strong> Group of firms acting as one (like a monopoly)</li>
        <li>Firms have incentive to collude, but also incentive to <strong>cheat</strong> on the agreement</li>
      </ul>
      <AmandaTip>
        For game theory payoff matrices: circle each player's best response to each of the other player's strategies. If two circles land in the same box = Nash Equilibrium. If a player has circles all in one row (or column) = Dominant Strategy.
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="7. Market Structure Summary">
      <table className="w-full text-xs border-collapse my-3">
        <thead><tr className="border-b font-semibold"><th className="text-left py-2 pr-2"></th><th className="text-left py-2 pr-2">Perfect Comp.</th><th className="text-left py-2 pr-2">Monopolistic</th><th className="text-left py-2 pr-2">Oligopoly</th><th className="text-left py-2">Monopoly</th></tr></thead>
        <tbody>
          <tr className="border-b"><td className="py-1.5 pr-2 font-medium"># Firms</td><td className="py-1.5 pr-2">Many</td><td className="py-1.5 pr-2">Many</td><td className="py-1.5 pr-2">Few</td><td className="py-1.5">One</td></tr>
          <tr className="border-b"><td className="py-1.5 pr-2 font-medium">Product</td><td className="py-1.5 pr-2">Identical</td><td className="py-1.5 pr-2">Differentiated</td><td className="py-1.5 pr-2">Either</td><td className="py-1.5">Unique</td></tr>
          <tr className="border-b"><td className="py-1.5 pr-2 font-medium">Price taker?</td><td className="py-1.5 pr-2">Yes</td><td className="py-1.5 pr-2">No</td><td className="py-1.5 pr-2">No</td><td className="py-1.5">No</td></tr>
          <tr className="border-b"><td className="py-1.5 pr-2 font-medium">Entry</td><td className="py-1.5 pr-2">Free</td><td className="py-1.5 pr-2">Free</td><td className="py-1.5 pr-2">Barriers</td><td className="py-1.5">Blocked</td></tr>
          <tr><td className="py-1.5 pr-2 font-medium">LR Econ Profit</td><td className="py-1.5 pr-2">No</td><td className="py-1.5 pr-2">No</td><td className="py-1.5 pr-2">Possible</td><td className="py-1.5">Yes</td></tr>
        </tbody>
      </table>
    </SectionAccordion>
  </div>
);

export default MicroUnit4Content;
