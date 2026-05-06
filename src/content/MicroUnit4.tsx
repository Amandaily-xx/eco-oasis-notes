import AmandaTip from "../components/AmandaTip";
import SectionAccordion from "../components/SectionAccordion";
import EconGraph from "../components/EconGraph";
import gameTheoryExample from "../assets/game-theory-example.jpg";
import naturalMonopolyLoss from "../assets/natural-monopoly-loss.jpg";

const MicroUnit4Content = () => (
  <div className="space-y-4">
    <SectionAccordion title="1. Monopoly" defaultOpen highYield>
      <h4 className="font-semibold text-primary mb-2">Characteristics</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Single producer (the firm IS the market)</li>
        <li>No close substitutes</li>
        <li>High barriers to entry: control of scarce resources, economies of scale, patents, government-created barriers</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Demand & Revenue</h4>
      <p className="mb-2">The monopolist faces the market demand curve (downward-sloping). Can a monopoly charge any price it wants? <strong>No!</strong> It is constrained by the demand curve.</p>
      <p><strong>Price Effect:</strong> To sell more units, the monopolist must lower the price on ALL units sold. This is why MR &lt; P for a monopolist.</p>
      <EconGraph type="monopoly" caption="Monopoly — produces at MR = MC (black dot), charges Pf from demand curve (red dot). Green area = economic profit (P > ATC)." />
      <div className="formula-block">MR curve lies below the demand curve &nbsp;|&nbsp; MR has twice the slope of D</div>
    </SectionAccordion>

    <div className="p-4 rounded-xl border-2 border-accent mb-4" style={{ background: "hsl(var(--tip-bg))" }}>
      <p className="font-body font-semibold text-sm" style={{ color: "hsl(var(--tip-text))" }}>
        ⭐ <strong>KEY RULE:</strong> MC always intersects with the minimum point of ATC and AVC, whether in perfect competition, monopoly, or monopolistic competition (short & long run)!
      </p>
    </div>

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

    <SectionAccordion title="3. Natural Monopoly & Price Regulation" highYield>
      <p>A <strong>natural monopoly</strong> exists when one firm can supply the entire market at a lower cost than multiple firms (huge economies of scale).</p>
      <EconGraph type="natural-monopoly" caption="Natural Monopoly — LRAC continues to decline; P = monopoly price, C = fair-return (P=ATC), P1 = socially optimal (P=MC)" />
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li><strong>Unregulated (P):</strong> Monopoly price at Z — maximum DWL, lowest output Q</li>
        <li><strong>Fair-return price (C = ATC):</strong> At point B — firm earns zero economic profit, still some DWL</li>
        <li><strong>Socially optimal price (P1 = MC):</strong> At point A — allocatively efficient, but firm loses money (MC &lt; ATC)</li>
      </ul>

      {/* Natural Monopoly Loss Explanation */}
      <div className="p-4 rounded-xl border-2 border-accent mt-4" style={{ background: "hsl(var(--tip-bg))" }}>
        <h4 className="font-semibold text-primary mb-2">📝 Why Does P = MC Cause Losses in a Natural Monopoly?</h4>
        <p className="text-sm font-body mb-2" style={{ color: "hsl(var(--tip-text))" }}>
          In a natural monopoly, ATC keeps declining because of massive fixed costs. The key insight: <strong>marginal willingness to pay is essentially marginal benefit, which is represented by the demand curve.</strong>
        </p>
        <p className="text-sm font-body mb-2" style={{ color: "hsl(var(--tip-text))" }}>
          When the government sets P = MC, look at where the demand curve intersects MC — at that quantity, MB = MC, which achieves <strong>allocative efficiency</strong>.
        </p>
        <p className="text-sm font-body mb-2" style={{ color: "hsl(var(--tip-text))" }}>
          But here's the problem: because of the enormous fixed costs, ATC is <strong>always above MC</strong> in a natural monopoly (you can see it clearly in the graph). So even though P = MC is the "ideal" price, the firm is selling each unit below its average total cost → <strong>economic loss</strong> (the red shaded area).
        </p>
        <p className="text-sm font-body" style={{ color: "hsl(var(--tip-text))" }}>
          That's why the government often needs to <strong>subsidize</strong> natural monopolies or use the fair-return price (P = ATC) as a compromise.
        </p>
        <figure className="mx-auto my-3 w-full max-w-2xl">
          <img src={naturalMonopolyLoss} alt="Natural monopoly graph showing ATC always above MC, with loss area when P = MC" className="h-auto w-full rounded-md border border-border" loading="lazy" />
          <figcaption className="mt-2 text-center text-sm text-muted-foreground">Natural Monopoly — when P = MC (allocative efficiency), P is below ATC, creating an economic loss (red area)</figcaption>
        </figure>
      </div>
    </SectionAccordion>

    <SectionAccordion title="4. Price Discrimination" highYield>
      <p>Charging different prices to different consumers for the same product.</p>
      <h4 className="font-semibold text-primary my-2">Three Conditions Required</h4>
      <ol className="list-decimal pl-5 space-y-1 mb-3">
        <li>Market power (some ability to set price)</li>
        <li>Ability to identify and separate consumer groups by elasticity</li>
        <li>Ability to prevent resale</li>
      </ol>

      <h4 className="font-semibold text-primary my-2">Standard (Third-Degree) vs. Perfect (First-Degree)</h4>
      <EconGraph type="price-discrimination" caption="Left: Perfect price discrimination — all surplus goes to producer, no DWL. Right: Standard monopoly — CS, PS, and DWL." />

      <h4 className="font-semibold text-primary my-2">Results of Price Discrimination</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Standard (3rd degree):</strong> Different prices for different groups (e.g., student vs. adult tickets)</li>
        <li><strong>Perfect (1st degree):</strong> Every consumer pays their maximum willingness to pay</li>
        <li>More output produced (closer to socially optimal)</li>
        <li>More profit for the firm</li>
        <li><strong>Perfect discrimination:</strong> No DWL, but ALL surplus goes to the producer — consumer surplus = 0</li>
      </ul>
      <p className="mt-2"><strong>Examples:</strong> Airlines, movie tickets (senior/student), college tuition (financial aid)</p>
    </SectionAccordion>

    <SectionAccordion title="5. Monopolistic Competition" highYield>
      <h4 className="font-semibold text-primary mb-2">Short Run (same structure as monopoly)</h4>
      <p className="mb-2 text-sm">In the short run, a monopolistically competitive firm behaves like a monopolist — it can earn economic profit (or loss). The graph is the same as the monopoly graph: produce where MR = MC, charge price from the demand curve.</p>
      <EconGraph type="monopoly" caption="Monopolistic Competition (Short Run) — same as monopoly; firm earns positive economic profit (green area)" />
      <h4 className="font-semibold text-primary my-2">Long Run (zero economic profit)</h4>
      <p className="mb-2 text-sm">In the long run, entry/exit drives economic profit to zero. The demand curve shifts until it is tangent to ATC — profit = 0.</p>
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

      <div className="amanda-tip mt-4">
        <p className="text-sm font-body">
          <strong>Amanda's Tip — Elasticity ↔ Differentiation:</strong> The more <em>differentiated</em> a monopolistically competitive firm's product is, the <strong>less elastic</strong> (steeper) its demand curve.
        </p>
        <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
          <li><strong>Highly differentiated</strong> (unique brand, few close substitutes) → consumers are not very price-sensitive → demand is more <strong>inelastic</strong>.</li>
          <li><strong>Less differentiated</strong> (many similar rivals) → consumers easily switch when price rises → demand is more <strong>elastic</strong>.</li>
        </ul>
        <p className="text-sm mt-2">
          So a firm's demand becomes <strong>least elastic</strong> when the number of rivals producing differentiated products <em>decreases</em> (fewer close substitutes), and <strong>most elastic</strong> when more rivals offer similar products.
        </p>
      </div>
    </SectionAccordion>

    <SectionAccordion title="6. Oligopoly & Game Theory" highYield>
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

      {/* Game Theory Worked Example */}
      <div className="p-4 rounded-xl border-2 border-accent mt-4" style={{ background: "hsl(var(--tip-bg))" }}>
        <h4 className="font-semibold text-primary mb-2">📝 Worked Example: Finding Dominant Strategy & Nash Equilibrium</h4>
        <figure className="mx-auto my-3 w-full max-w-2xl">
          <img src={gameTheoryExample} alt="Game theory payoff matrix — North vs South, maintain vs increase output" className="h-auto w-full rounded-md border border-border" loading="lazy" />
          <figcaption className="mt-2 text-center text-sm text-muted-foreground">Payoff matrix: North (rows) vs. South (columns) — Maintain or Increase output</figcaption>
        </figure>
        <p className="text-sm font-body mb-2" style={{ color: "hsl(var(--tip-text))" }}>
          <strong>How to find the Dominant Strategy:</strong> A dominant strategy is the action a player will <em>always</em> choose, no matter what the other player does. Look at each player one at a time:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm font-body mb-3" style={{ color: "hsl(var(--tip-text))" }}>
          <li><strong>North's perspective:</strong> If South maintains → North gets 15 (maintain) vs. 30 (increase) → increase is better. If South increases → North gets 15 (maintain) vs. 27 (increase) → increase is still better. So North's dominant strategy is <strong>Increase</strong>.</li>
          <li><strong>South's perspective:</strong> If North maintains → South gets 30 (maintain) vs. 45 (increase) → increase is better. If North increases → South gets 26 (maintain) vs. 28 (increase) → increase is still better. So South's dominant strategy is <strong>Increase</strong>.</li>
        </ul>
        <p className="text-sm font-body mb-2" style={{ color: "hsl(var(--tip-text))" }}>
          <strong>Nash Equilibrium:</strong> Since both players choose "Increase," we look at the cell where both increase → <strong>(27, 28)</strong>. This is also the Nash Equilibrium because neither player wants to switch:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm font-body" style={{ color: "hsl(var(--tip-text))" }}>
          <li>If South switches to "Maintain," South's payoff drops from 28 → 26. South won't switch.</li>
          <li>If North switches to "Maintain," North's payoff drops from 27 → 15. North won't switch.</li>
          <li>Since neither player has an incentive to change, <strong>(27, 28) is the Nash Equilibrium</strong> — a stable point where everyone is doing their best given the other's choice.</li>
        </ul>
      </div>
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
