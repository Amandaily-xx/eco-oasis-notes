import AmandaTip from "../components/AmandaTip";
import SectionAccordion from "../components/SectionAccordion";
import EconGraph from "../components/EconGraph";
import progressiveTax from "../assets/progressive-tax.png";
import regressiveTax from "../assets/regressive-tax.png";

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

    <SectionAccordion title="3. Negative Externalities" highYield>
      <h4 className="font-semibold text-primary mb-2">Negative Production Externality</h4>
      <EconGraph type="negative-externality" caption="Negative Production Externality — MSC > MPC, market overproduces" />
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

    <SectionAccordion title="4. Positive Externalities" highYield>
      <EconGraph type="positive-externality" caption="Positive Consumption Externality — MSB > MPB, market underconsumes" />
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

    <SectionAccordion title="6. Solutions to Externalities" highYield>
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

    <SectionAccordion title="7. Types of Taxes" highYield>
      <p>Understanding the different types of taxes is essential — <strong>progressive tax</strong> is one of the most frequently tested topics in the MCQ section!</p>

      <h4 className="font-semibold text-primary my-2">❗ Progressive Tax</h4>
      <p className="mb-2">A progressive tax collects a <strong>higher percentage</strong> of income from high-income earners and a <strong>lower percentage</strong> from low-income earners. This type of tax promotes <strong>greater income equality</strong>.</p>
      <figure className="mx-auto my-3 w-full max-w-md">
        <img src={progressiveTax} alt="Progressive tax table showing higher-income families paying a higher percentage of income in tax" className="h-auto w-full rounded-md border border-border" loading="lazy" />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">Progressive Tax — higher income → higher tax rate</figcaption>
      </figure>

      <h4 className="font-semibold text-primary my-2">❗ Regressive Tax</h4>
      <p className="mb-2">A regressive tax is the opposite: it collects a <strong>lower percentage</strong> of income from high-income earners and a <strong>higher percentage</strong> from low-income earners. This type of tax makes income distribution <strong>more unequal</strong>.</p>
      <p className="mb-2"><strong>Example:</strong> Consider a rich person and a poor person both buying the same $5 drink. The $5 represents a tiny fraction of the rich person's income but a much larger fraction of the poor person's income. <strong>Sales tax</strong> is the most common example of a regressive tax.</p>
      <figure className="mx-auto my-3 w-full max-w-md">
        <img src={regressiveTax} alt="Regressive tax table showing higher-income families paying a lower percentage of income in tax" className="h-auto w-full rounded-md border border-border" loading="lazy" />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">Regressive Tax — higher income → lower tax rate</figcaption>
      </figure>

      <h4 className="font-semibold text-primary my-2">❗ Proportional Tax</h4>
      <p>A proportional (flat) tax collects the <strong>same percentage</strong> of income from everyone, regardless of whether their income is high or low. The tax rate remains constant no matter the size of the tax base.</p>

      <AmandaTip>
        On the AP exam, if they show you a table of income and tax amounts, calculate the <strong>percentage of income paid in tax</strong> for each group. If the percentage goes UP with income → progressive. If it goes DOWN → regressive. If it stays the SAME → proportional. Progressive tax is tested the most!
      </AmandaTip>
    </SectionAccordion>

    <SectionAccordion title="8. Income & Wealth Inequality">
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
      <EconGraph type="lorenz-curve" caption="Lorenz Curve — the further from the line of equality, the greater the inequality (Gini = A/(A+B))" />
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
