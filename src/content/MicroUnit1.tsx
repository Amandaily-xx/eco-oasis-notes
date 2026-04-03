import AmandaTip from "../components/AmandaTip";
import SectionAccordion from "../components/SectionAccordion";
import ppcDiagram from "../assets/ppc-diagram.png";

const MicroUnit1Content = () => (
  <div className="space-y-4">
    <SectionAccordion title="1. Scarcity & Economics" defaultOpen>
      <p><strong>Scarcity:</strong> Resources are limited, but human wants are unlimited. This is the fundamental economic problem.</p>
      <p><strong>Economics</strong> is the study of how people make decisions about allocating scarce resources to satisfy their unlimited wants.</p>
      <p>Because resources are scarce, people must make <strong>trade-offs</strong> — giving up one thing to get another.</p>
    </SectionAccordion>

    <SectionAccordion title="2. Opportunity Cost">
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
    </SectionAccordion>

    <SectionAccordion title="3. Marginal Analysis">
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

    <SectionAccordion title="4. Positive vs. Normative Economics">
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Positive economics:</strong> Objective, fact-based statements that can be tested. ("Unemployment is 5%.")</li>
        <li><strong>Normative economics:</strong> Subjective, value-based opinions. ("The government should reduce unemployment.")</li>
      </ul>
    </SectionAccordion>

    <SectionAccordion title="5. Economic Systems">
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

    <SectionAccordion title="6. Production Possibilities Curve (PPC)" highYield>
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
        <img
          src={ppcDiagram}
          alt="Production Possibilities Curve showing efficient points A, B, C on the curve, inefficient point D inside, and impossible point F outside"
          className="h-auto w-full rounded-md border border-border"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          Production Possibilities Curve (PPC) — points on the curve are efficient, inside is inefficient, outside is impossible
        </figcaption>
      </figure>

      <AmandaTip>
        A point that produces more capital goods leads to greater economic growth in the future (bigger outward shift of PPC). This is a classic FRQ trap — always explain WHY more capital = future growth!
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="7. Comparative & Absolute Advantage">
      <p><strong>Absolute Advantage:</strong> The ability to produce more of a good using the same resources (or the same amount with fewer resources).</p>
      <p><strong>Comparative Advantage:</strong> The ability to produce a good at a lower opportunity cost than another producer.</p>
      <div className="formula-block">
        Trade is based on COMPARATIVE advantage, not absolute advantage.
      </div>
      <p>Countries/individuals should specialize in producing goods for which they have the <strong>lowest opportunity cost</strong>, then trade.</p>
      <AmandaTip>
        To find comparative advantage: calculate the opportunity cost for each producer for each good. Whoever has the LOWER opportunity cost has the comparative advantage in that good. Both parties benefit from trade!
      </AmandaTip>
    </SectionAccordion>
  </div>
);

export default MicroUnit1Content;
