import AmandaTip from "../components/AmandaTip";
import SectionAccordion from "../components/SectionAccordion";
import ppcDiagram from "../assets/ppc-diagram.png";
import ppcIdleResources from "../assets/ppc-idle-resources.png";
import compAdvTable from "../assets/comparative-adv-table.png";
import crossMultiplyOutput from "../assets/cross-multiply-output.jpg";
import crossMultiplyInput from "../assets/cross-multiply-input.jpg";

const MicroUnit1Content = () => (
  <div className="space-y-4">
    {/* 1.1 Scarcity */}
    <SectionAccordion title="1.1 Scarcity" defaultOpen>
      <p><strong>Scarcity:</strong> Resources are limited, but human wants are unlimited. This is the fundamental economic problem.</p>
      <p><strong>Economics</strong> is the study of how people make decisions about allocating scarce resources to satisfy their unlimited wants.</p>
      <p>Because resources are scarce, people must make <strong>trade-offs</strong> — giving up one thing to get another.</p>
    </SectionAccordion>

    {/* 1.2 Resource Allocation and Economic Systems */}
    <SectionAccordion title="1.2 Resource Allocation & Economic Systems">
      <h4 className="font-semibold text-primary mb-2">Opportunity Cost</h4>
      <p><strong>Opportunity Cost:</strong> The value of the next best alternative you must give up when making a choice.</p>
      <div className="formula-block">Opportunity Cost = Value of the next best alternative forgone</div>
      <p><strong>Example:</strong> Going to college → the opportunity cost includes the income you could have earned working full-time.</p>
      <table className="w-full text-sm border-collapse my-3">
        <thead><tr className="border-b"><th className="text-left py-2 pr-4">Going to College</th><th className="text-left py-2 pr-4">Benefits</th><th className="text-left py-2">Costs</th></tr></thead>
        <tbody>
          <tr className="border-b"><td className="py-2 pr-4">Intellectual enrichment</td><td className="py-2 pr-4">Tuition</td><td className="py-2">Foregone income</td></tr>
          <tr><td className="py-2 pr-4">Better job opportunities</td><td className="py-2 pr-4">Room & board</td><td className="py-2">Lost work experience</td></tr>
        </tbody>
      </table>

      <h4 className="font-semibold text-primary mb-2 mt-4">Economic Systems</h4>
      <h4 className="font-semibold text-primary mb-2">Traditional Economy</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Based on customs and traditions; answers economic questions through habits</li>
        <li><strong>Advantages:</strong> Preserves culture, environmentally friendly, stable life</li>
        <li><strong>Disadvantages:</strong> Low standard of living, lack of creativity, rigid social roles</li>
        <li><strong>Examples:</strong> Tribal communities in South America, Africa, Asia</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Market (Free) Economy</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Individual producers determine what, how, and for whom to produce</li>
        <li>Private ownership of resources (defining feature)</li>
        <li><strong>Advantages:</strong> Consumer sovereignty, efficient resource allocation</li>
        <li><strong>Disadvantages:</strong> Unfair wealth distribution, income inequality</li>
        <li>Resources allocated by the <strong>price system</strong></li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Command Economy</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Government makes all economic decisions</li>
        <li><strong>Advantages:</strong> Can mobilize resources quickly, reduces inequality</li>
        <li><strong>Disadvantages:</strong> Lack of consumer choice, inefficiency</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Mixed Economy</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Combines market and command elements</li>
        <li><strong>Pro:</strong> Increased efficiency from market incentives</li>
        <li><strong>Con:</strong> Government intervention, higher taxes, less competition</li>
        <li>Most modern economies are mixed</li>
      </ul>
    </SectionAccordion>

    {/* 1.3 Production Possibilities Curve */}
    <SectionAccordion title="1.3 Production Possibilities Curve (PPC)" highYield>
      <p>The PPC shows the maximum combinations of two goods an economy can produce using all its resources efficiently.</p>
      <ul className="list-disc pl-5 space-y-1 my-3">
        <li><strong>On the curve (A, B, C):</strong> Productively efficient (using all resources)</li>
        <li><strong>Inside the curve (D):</strong> Inefficient (underutilization of resources)</li>
        <li><strong>Outside the curve (F):</strong> Impossible / unattainable (given current resources)</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">PPC Shifts</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Outward shift:</strong> Economic growth (more resources, better technology)</li>
        <li><strong>Inward shift:</strong> Loss of resources (natural disaster, war)</li>
      </ul>

      <figure className="mx-auto my-3 w-full max-w-2xl">
        <img src={ppcDiagram} alt="Production Possibilities Curve showing efficient points A, B, C on the curve, inefficient point D inside, and impossible point F outside" className="h-auto w-full rounded-md border border-border" loading="lazy" />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">Production Possibilities Curve (PPC) — points on the curve are efficient, inside is inefficient, outside is impossible</figcaption>
      </figure>

      {/* Worked Example: Inside to On the Curve */}
      <div className="p-4 rounded-xl border-2 border-accent my-4" style={{ background: "hsl(var(--tip-bg))" }}>
        <h4 className="font-semibold text-primary mb-2">📝 Worked Example: From Inside the Curve to On the Curve</h4>
        <figure className="mx-auto my-3 w-full max-w-md">
          <img src={ppcIdleResources} alt="PPC diagram showing points A and B inside/on the curve, and point C outside" className="h-auto w-full rounded-md border border-border" loading="lazy" />
        </figure>
        <p className="font-body text-sm mb-2" style={{ color: "hsl(var(--tip-text))" }}>
          To move from a point <strong>inside</strong> the curve to a point <strong>on</strong> the curve, society needs to <strong>take advantage of and utilize idle resources and technology</strong> — those resources that were previously sitting unused.
        </p>
        <p className="font-body text-sm mb-2" style={{ color: "hsl(var(--tip-text))" }}>
          For example, if the unemployment rate drops (or employment rate rises), firms start hiring previously unemployed workers — putting those "idle resources" to work. The economy moves from an inefficient interior point to an efficient point on the PPC.
        </p>
        <p className="font-body text-sm font-bold" style={{ color: "hsl(var(--tip-text))" }}>
          ⚠️ This is NOT economic growth! The curve itself does not shift. Economic growth means the entire PPC shifts outward (more resources or better technology). Moving from inside to on the curve is simply utilizing existing resources more fully.
        </p>
      </div>

      <AmandaTip>
        A point that produces more capital goods leads to greater economic growth in the future (bigger outward shift of PPC). This is a classic FRQ trap — always explain WHY more capital = future growth!
      </AmandaTip>
    </SectionAccordion>

    {/* 1.4 Comparative Advantage and Trade */}
    <SectionAccordion title="1.4 Comparative & Absolute Advantage" highYield>
      <p><strong>Absolute Advantage:</strong> The ability to produce more of a good using the same resources (or the same amount with fewer resources).</p>
      <p><strong>Comparative Advantage:</strong> The ability to produce a good at a lower opportunity cost than another producer.</p>
      <div className="formula-block">
        Trade is based on COMPARATIVE advantage, not absolute advantage.
      </div>
      <p>Countries/individuals should specialize in producing goods for which they have the <strong>lowest opportunity cost</strong>, then trade.</p>

      {/* Worked Example: Output Table */}
      <div className="p-4 rounded-xl border-2 border-accent my-4" style={{ background: "hsl(var(--tip-bg))" }}>
        <h4 className="font-semibold text-primary mb-2">📝 Worked Example: Output Table (Comparative Advantage)</h4>
        <figure className="mx-auto my-3 w-full max-w-md">
          <img src={compAdvTable} alt="Table showing units of manufactured goods and service goods produced by Country A and Country B" className="h-auto w-full rounded-md border border-border" loading="lazy" />
        </figure>
        <p className="font-body text-sm mb-2" style={{ color: "hsl(var(--tip-text))" }}>
          <strong>Step 1 — Calculate Opportunity Costs:</strong> If Country A uses all its labor to produce 100 units of manufactured goods, it gives up 300 units of service goods.
        </p>
        <div className="formula-block text-sm my-2">
          OC of Manufactured Goods = (Service Goods given up) ÷ (Manufactured Goods produced)
        </div>
        <ul className="list-disc pl-5 space-y-1 text-sm mb-3" style={{ color: "hsl(var(--tip-text))" }}>
          <li><strong>Country A:</strong> OC of Manufactured Goods = 300 / 100 = <strong>3</strong>; OC of Service Goods = 100 / 300 = <strong>1/3</strong></li>
          <li><strong>Country B:</strong> OC of Manufactured Goods = 150 / 75 = <strong>2</strong>; OC of Service Goods = 75 / 150 = <strong>1/2</strong></li>
        </ul>
        <p className="font-body text-sm mb-2" style={{ color: "hsl(var(--tip-text))" }}>
          <strong>Step 2 — Compare:</strong> Country A has the comparative advantage in <strong>Service Goods</strong> (1/3 &lt; 1/2). Country B has the comparative advantage in <strong>Manufactured Goods</strong> (2 &lt; 3).
        </p>
        <p className="font-body text-sm" style={{ color: "hsl(var(--tip-text))" }}>
          Each country should specialize in the good where it has the <strong>lower</strong> opportunity cost, then trade for the other good.
        </p>
      </div>

      {/* Cross-Multiply Trick: Output */}
      <div className="p-4 rounded-xl border-2 border-info my-4" style={{ background: "hsl(var(--info-bg))" }}>
        <h4 className="font-semibold text-primary mb-2">⚡ Quick Trick: Cross-Multiplication Method (for Output Tables)</h4>
        <figure className="mx-auto my-3 w-full max-w-xl">
          <img src={crossMultiplyOutput} alt="Cross-multiplication method for finding comparative advantage in output tables" className="h-auto w-full rounded-md border border-border" loading="lazy" />
        </figure>
        <p className="font-body text-sm mb-2" style={{ color: "hsl(var(--info-text))" }}>
          <strong>How it works:</strong> Cross-multiply diagonally through the table. Whichever product is <strong>larger</strong> tells you which country has the comparative advantage in the good on its corresponding row.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm mb-3" style={{ color: "hsl(var(--info-text))" }}>
          <li>75 × 300 = <strong>22,500</strong></li>
          <li>100 × 150 = <strong>15,000</strong></li>
        </ul>
        <p className="font-body text-sm mb-2" style={{ color: "hsl(var(--info-text))" }}>
          22,500 &gt; 15,000, so the items connected to the larger product have the comparative advantage: <strong>Country B</strong> in Manufactured Goods (75) and <strong>Country A</strong> in Service Goods (300).
        </p>
        <p className="font-body text-sm font-bold" style={{ color: "hsl(var(--info-text))" }}>
          ⚠️ This shortcut is great for MCQs to save time. For FRQs, always show the full opportunity cost calculation!
        </p>
      </div>

      {/* Input Table Trick */}
      <div className="p-4 rounded-xl border-2 border-info my-4" style={{ background: "hsl(var(--info-bg))" }}>
        <h4 className="font-semibold text-primary mb-2">⚡ Input Tables: Flip the Rule!</h4>
        <figure className="mx-auto my-3 w-full max-w-xl">
          <img src={crossMultiplyInput} alt="Cross-multiplication method for finding comparative advantage in input (labor hours) tables" className="h-auto w-full rounded-md border border-border" loading="lazy" />
        </figure>
        <p className="font-body text-sm mb-2" style={{ color: "hsl(var(--info-text))" }}>
          When a table shows <strong>input</strong> (e.g., labor hours needed to produce one unit), the cross-multiplication trick is <strong>reversed</strong>: the <strong>smaller</strong> cross-product indicates the comparative advantage.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm mb-3" style={{ color: "hsl(var(--info-text))" }}>
          <li>15 × 12 = <strong>180</strong></li>
          <li>10 × 12 = <strong>120</strong></li>
        </ul>
        <p className="font-body text-sm" style={{ color: "hsl(var(--info-text))" }}>
          120 &lt; 180, so the items connected to the <strong>smaller</strong> product have the comparative advantage: <strong>Jasminia</strong> in MP3 Players (10) and <strong>Lauraland</strong> in Tablet Computers (12).
        </p>
      </div>

      <AmandaTip>
        To find comparative advantage: calculate the opportunity cost for each producer for each good. Whoever has the LOWER opportunity cost has the comparative advantage in that good. Both parties benefit from trade!
      </AmandaTip>
    </SectionAccordion>

    {/* 1.5 Cost-Benefit Analysis (Positive vs. Normative) */}
    <SectionAccordion title="1.5 Positive vs. Normative Economics">
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Positive economics:</strong> Objective, fact-based statements that can be tested. ("Unemployment is 5%.")</li>
        <li><strong>Normative economics:</strong> Subjective, value-based opinions. ("The government should reduce unemployment.")</li>
      </ul>
    </SectionAccordion>

    {/* 1.6 Marginal Analysis and Consumer Choice */}
    <SectionAccordion title="1.6 Marginal Analysis & Consumer Choice">
      <p><strong>Rational people think at the margin:</strong> They systematically and purposefully do the best they can.</p>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Rational Consumers:</strong> Maximize utility (satisfaction)</li>
        <li><strong>Rational Producers:</strong> Maximize profit</li>
      </ul>
      <div className="formula-block">If MB ≥ MC → Take action! &nbsp;&nbsp;|&nbsp;&nbsp; If MB &lt; MC → Don't do it.</div>

      <div className="p-4 rounded-xl border-2 border-accent my-4" style={{ background: "hsl(var(--tip-bg))" }}>
        <p className="font-body text-sm" style={{ color: "hsl(var(--tip-text))" }}>
          🥟 <strong>Amanda's Dumpling Example:</strong> Think of it this way — I love eating dumplings. When I'm super hungry, the first dumpling gives me maximum satisfaction (high marginal benefit!). But as I keep eating, I gradually feel full, so each additional dumpling gives me less and less satisfaction. That's <strong>diminishing marginal utility</strong> in action! At some point, the marginal benefit of one more dumpling drops below the marginal cost (feeling too stuffed) — and that's when you stop eating.
        </p>
      </div>

      <AmandaTip>
        The marginal analysis rule is one of the most tested concepts on the AP exam. Whenever a question asks "should the firm produce one more unit?" — compare MB and MC!
      </AmandaTip>
    </SectionAccordion>
  </div>
);

export default MicroUnit1Content;
