import AmandaTip from "../components/AmandaTip";
import SectionAccordion from "../components/SectionAccordion";

const MicroUnit6Content = () => (
  <div className="space-y-4">
    <SectionAccordion title="1. Types of Goods" defaultOpen>
      <table className="w-full text-sm border-collapse my-3">
        <thead><tr className="border-b font-semibold"><th className="text-left py-2 pr-3"></th><th className="text-left py-2 pr-3">Excludable</th><th className="text-left py-2">Non-Excludable</th></tr></thead>
        <tbody>
          <tr className="border-b"><td className="py-2 pr-3 font-medium">Rival</td><td className="py-2 pr-3">Private Goods (apples, cars)</td><td className="py-2">Common Resources (fish in the ocean)</td></tr>
          <tr><td className="py-2 pr-3 font-medium">Non-Rival</td><td className="py-2 pr-3">Club Goods (streaming, software)</td><td className="py-2">Public Goods (national defense, street lights)</td></tr>
        </tbody>
      </table>
    </SectionAccordion>

    <SectionAccordion title="2. Externalities — Introduction">
      <p><strong>Externality:</strong> The uncompensated impact of one person's actions on the well-being of a bystander.</p>
      <div className="formula-block">
        MSC = MPC + MEC &nbsp;&nbsp;|&nbsp;&nbsp; MSB = MPB + MEB
      </div>
      <p>If there is <strong>no externality</strong>: MSC = MPC and MSB = MPB → market is allocatively efficient.</p>
    </SectionAccordion>

    <SectionAccordion title="3. Negative Externalities">
      <h4 className="font-semibold text-primary mb-2">Negative Production Externality</h4>
      <p>A firm's production harms bystanders (pollution). MSC &gt; MPC → <strong>Overproduction</strong>.</p>
      <p><strong>Solutions:</strong> Corrective (Pigouvian) tax, cap-and-trade, regulation, Coasian bargaining</p>
      
      <h4 className="font-semibold text-primary my-2">Negative Consumption Externality</h4>
      <p>Individual consumption harms others. MSB &lt; MPB → <strong>Overconsumption</strong>.</p>
      <p><strong>Demerit goods:</strong> Tobacco, alcohol, gambling, single-use plastics</p>
      <p><strong>Solutions:</strong> Indirect tax, education & awareness, legislation</p>

      <AmandaTip>
        The "Tragedy of the Commons" applies to common resources (rival + non-excludable). Because no one owns them, they get overused. Example: overfishing. The solution often involves property rights or government regulation.
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="4. Positive Externalities">
      <h4 className="font-semibold text-primary mb-2">Positive Production Externality</h4>
      <p>A firm's production benefits bystanders. MSC &lt; MPC → <strong>Underproduction</strong>.</p>
      <p><strong>Solutions:</strong> Subsidy to producers, direct government provision</p>

      <h4 className="font-semibold text-primary my-2">Positive Consumption Externality</h4>
      <p>Individual consumption benefits others. MSB &gt; MPB → <strong>Underconsumption</strong>.</p>
      <p><strong>Merit goods:</strong> Education, healthcare, vaccines</p>
      <p><strong>Solutions:</strong> Education/awareness, subsidy, legislation, direct provision</p>
    </SectionAccordion>

    <SectionAccordion title="5. Public Goods & Free-Rider Problem">
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Non-excludable & non-rival</strong> in consumption</li>
        <li><strong>Free-rider problem:</strong> People can benefit without paying → markets won't provide them</li>
        <li>Solution: Government provision funded by taxes</li>
      </ul>
    </SectionAccordion>

    <SectionAccordion title="6. Solutions to Externalities">
      <h4 className="font-semibold text-primary mb-2">Private-Sector Solutions</h4>
      <p><strong>Coase Theorem:</strong> With well-defined property rights and low transaction costs, private bargaining can achieve the socially optimal outcome regardless of who holds the property rights.</p>
      
      <h4 className="font-semibold text-primary my-2">Public-Sector Solutions</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Corrective taxation:</strong> Tax equal to the marginal external cost</li>
        <li><strong>Quantity regulation:</strong> Government limits use of harmful chemicals</li>
        <li><strong>Tradable permits:</strong> Cap-and-trade programs</li>
        <li>Education and awareness campaigns</li>
      </ul>
    </SectionAccordion>

    <SectionAccordion title="7. Income & Wealth Inequality">
      <h4 className="font-semibold text-primary mb-2">Key Concepts</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Poverty threshold:</strong> Minimum annual income considered adequate for basic needs</li>
        <li><strong>Poverty rate:</strong> % of population below the poverty threshold</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Causes of Inequality</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li>Differences in marginal productivity & wages</li>
        <li>Education gaps</li>
        <li>Market power differences (unions)</li>
        <li>Discrimination</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Measurement</h4>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <li><strong>Lorenz Curve:</strong> Shows cumulative % of income vs. cumulative % of population</li>
        <li><strong>Gini Coefficient:</strong> 0 = perfect equality; 1 = perfect inequality</li>
      </ul>
      <h4 className="font-semibold text-primary mb-2">Antipoverty Programs</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Means-tested programs:</strong> Only for those below a certain income level</li>
        <li><strong>Monetary transfers:</strong> Cash assistance</li>
        <li><strong>In-kind benefits:</strong> Goods and services (food stamps, housing assistance)</li>
      </ul>
    </SectionAccordion>
  </div>
);

export default MicroUnit6Content;
