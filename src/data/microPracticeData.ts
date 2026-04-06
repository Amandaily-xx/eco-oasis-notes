import type { MCQuestion } from "../components/PracticeQuiz";
import type { FRQQuestion } from "../components/FRQPractice";

export const microMCQuestions: MCQuestion[] = [
  // Unit 1
  {
    id: 1, unit: 1, source: "College Board 2012 Q1",
    question: "Which of the following best defines opportunity cost?",
    options: [
      { label: "A", text: "The cost of producing those goods most desired by a given economy" },
      { label: "B", text: "The cost of the input mix that will lead to the greatest rate of growth for a given company" },
      { label: "C", text: "The amount of one product that must be given up in order to produce an additional unit of another product" },
      { label: "D", text: "The use of the least-cost method of production" },
      { label: "E", text: "The cost of labor used in the production process" },
    ],
    answer: "C",
    explanation: "Opportunity cost is the value of the next best alternative forgone — the amount of one good you must sacrifice to produce an additional unit of another.",
    noteLink: { path: "/micro/1", label: "Unit 1 — Opportunity Cost" },
  },
  {
    id: 2, unit: 1, source: "College Board 2012 Q2",
    question: "Which of the following explains why a production possibilities curve is often represented as concave (bowed out) from the origin?",
    options: [
      { label: "A", text: "The law of demand" },
      { label: "B", text: "The law of supply" },
      { label: "C", text: "Constant returns to scale" },
      { label: "D", text: "Decreasing opportunity cost" },
      { label: "E", text: "Increasing opportunity cost" },
    ],
    answer: "E",
    explanation: "The PPC is bowed out because of the law of increasing opportunity cost — as you produce more of one good, resources are less suited to its production, so you give up more of the other good.",
    noteLink: { path: "/micro/1", label: "Unit 1 — PPC" },
  },
  {
    id: 3, unit: 1, source: "College Board 2012 Q46",
    question: "After graduating from high school, Peggy Smith decided to enroll in a two-year program at the local community college rather than to accept a job that offered a salary of $12,000 per year. If the annual tuition and fees are $4,600, the annual opportunity cost of attending the community college is",
    options: [
      { label: "A", text: "$4,600" },
      { label: "B", text: "$7,400" },
      { label: "C", text: "$12,000" },
      { label: "D", text: "$16,600" },
      { label: "E", text: "$24,000" },
    ],
    answer: "D",
    explanation: "Opportunity cost = explicit costs + implicit costs = $4,600 (tuition) + $12,000 (forgone salary) = $16,600.",
    noteLink: { path: "/micro/1", label: "Unit 1 — Opportunity Cost" },
  },
  {
    id: 4, unit: 1, source: "College Board 2012 Q16",
    question: "Assume both Italy and Greece produce only two goods: wine and olive oil. If Italy holds a comparative advantage in the production of wine, then which of the following statements is NOT true?",
    options: [
      { label: "A", text: "Italy must hold an absolute advantage in the production of wine." },
      { label: "B", text: "Greece holds a comparative advantage in the production of olive oil." },
      { label: "C", text: "Italy's opportunity cost of producing one additional unit of wine is lower than Greece's." },
      { label: "D", text: "Greece's opportunity cost of producing one additional unit of olive oil is lower than Italy's." },
      { label: "E", text: "If trade is open between them, these countries have an incentive to trade." },
    ],
    answer: "A",
    explanation: "Having a comparative advantage does NOT require an absolute advantage. Comparative advantage is about lower opportunity cost, not higher total output.",
    noteLink: { path: "/micro/1", label: "Unit 1 — Comparative Advantage" },
  },
  {
    id: 5, unit: 1, source: "College Board 2012 Q20",
    question: "According to the law of diminishing marginal utility, which of the following is true?",
    options: [
      { label: "A", text: "Total satisfaction decreases as more units of a good are consumed." },
      { label: "B", text: "The additional satisfaction received from consuming extra units of a good decreases as consumption of the good increases." },
      { label: "C", text: "The additional satisfaction received from consuming extra units of a good decreases as consumption of the good decreases." },
      { label: "D", text: "The additional satisfaction received from consuming extra units of a good increases as consumption of the good increases." },
      { label: "E", text: "When marginal utility is decreasing, total utility is decreasing." },
    ],
    answer: "B",
    explanation: "Diminishing marginal utility means each additional unit consumed gives less extra satisfaction than the previous one — MU falls as quantity rises.",
    noteLink: { path: "/micro/1", label: "Unit 1 — Marginal Analysis" },
  },
  // Unit 2
  {
    id: 6, unit: 2, source: "College Board 2012 Q5",
    question: "Assume that Clark spends his entire income on the purchase of two goods, X and Y. If his income and the prices of good X and Y all double, Clark will",
    options: [
      { label: "A", text: "double the purchase of goods X and Y" },
      { label: "B", text: "buy more of good X and less of good Y" },
      { label: "C", text: "buy less of good X and more of good Y" },
      { label: "D", text: "buy less of both goods X and Y" },
      { label: "E", text: "buy the same amounts of goods X and Y" },
    ],
    answer: "E",
    explanation: "If income and all prices double, real purchasing power stays the same. The budget constraint is unchanged in real terms, so Clark buys the same quantities.",
    noteLink: { path: "/micro/2", label: "Unit 2 — Demand" },
  },
  {
    id: 7, unit: 2, source: "College Board 2012 Q17",
    question: "Following a prolonged power outage, the price of flashlights normally increases significantly. If cities had passed laws prohibiting price increases for flashlights, during power outages such laws would most likely",
    options: [
      { label: "A", text: "make flashlights more available" },
      { label: "B", text: "create a shortage of flashlights" },
      { label: "C", text: "shift the demand curve for flashlights to the right" },
      { label: "D", text: "shift the supply curve for flashlights to the left" },
      { label: "E", text: "have no effect on the availability of flashlights" },
    ],
    answer: "B",
    explanation: "A price ceiling below the equilibrium price causes quantity demanded to exceed quantity supplied, creating a shortage.",
    noteLink: { path: "/micro/2", label: "Unit 2 — Price Controls" },
  },
  {
    id: 8, unit: 2, source: "College Board 2012 Q33",
    question: "If a severe drought destroys a significant portion of the peanut crop and peanut farmers' revenues increase, which of the following is true over the observed range of prices?",
    options: [
      { label: "A", text: "The demand for peanuts must be unit price elastic." },
      { label: "B", text: "The demand for peanuts must be price elastic." },
      { label: "C", text: "The demand for peanuts must be price inelastic." },
      { label: "D", text: "The supply of peanuts must be price inelastic." },
      { label: "E", text: "The supply of peanuts must be price elastic." },
    ],
    answer: "C",
    explanation: "Supply decreased → price rose → total revenue increased. When price rises and TR increases, demand is inelastic (% change in Qd < % change in P).",
    noteLink: { path: "/micro/2", label: "Unit 2 — Elasticity" },
  },
  {
    id: 9, unit: 2, source: "College Board 2012 Q35",
    question: "Assume that people like onions on their hamburgers. If the supply of hamburgers decreases, the demand for onions will most likely",
    options: [
      { label: "A", text: "remain unchanged because hamburgers and onions are different goods" },
      { label: "B", text: "increase because hamburgers and onions are substitutes" },
      { label: "C", text: "increase because hamburgers and onions are complements" },
      { label: "D", text: "decrease because hamburgers and onions are complements" },
      { label: "E", text: "decrease because hamburgers and onions are substitutes" },
    ],
    answer: "D",
    explanation: "Hamburgers and onions are complements. A decrease in hamburger supply raises hamburger prices, reducing hamburger consumption and therefore reducing demand for onions.",
    noteLink: { path: "/micro/2", label: "Unit 2 — Demand & Supply" },
  },
  {
    id: 10, unit: 2, source: "College Board 2012 Q18",
    question: "A unit tax is placed on a good. If the price paid by consumers is $10.45 and the net price received by producers is $9.45, what is the dollar amount of the unit tax?",
    options: [
      { label: "A", text: "$0.00" },
      { label: "B", text: "$0.45" },
      { label: "C", text: "$0.55" },
      { label: "D", text: "$1.00" },
      { label: "E", text: "$1.45" },
    ],
    answer: "D",
    explanation: "The unit tax = price paid by consumers − price received by producers = $10.45 − $9.45 = $1.00.",
    noteLink: { path: "/micro/2", label: "Unit 2 — Taxes" },
  },
  // Unit 3
  {
    id: 11, unit: 3, source: "College Board 2012 Q6",
    question: "Suppose that a firm begins to hire workers for a newly completed plant with a fixed amount of machinery. As the firm hires additional workers, one would expect the marginal product to",
    options: [
      { label: "A", text: "fall initially, but eventually rise" },
      { label: "B", text: "rise initially, but eventually fall" },
      { label: "C", text: "rise consistently due to diminishing return" },
      { label: "D", text: "rise consistently due to the advantages of specialization" },
      { label: "E", text: "rise consistently due to economies of scale" },
    ],
    answer: "B",
    explanation: "Initially, specialization gains cause MP to rise. But eventually, diminishing marginal returns set in and MP falls as more workers share fixed capital.",
    noteLink: { path: "/micro/3", label: "Unit 3 — Production Function" },
  },
  {
    id: 12, unit: 3, source: "College Board 2012 Q7",
    question: "In the short run, which of the following costs must continuously decrease as output produced increases?",
    options: [
      { label: "A", text: "Total variable cost" },
      { label: "B", text: "Total fixed cost" },
      { label: "C", text: "Average variable cost" },
      { label: "D", text: "Average fixed cost" },
      { label: "E", text: "Average total cost" },
    ],
    answer: "D",
    explanation: "AFC = TFC / Q. Since TFC is constant and Q increases, AFC always decreases as output rises — it's the 'spreading effect.'",
    noteLink: { path: "/micro/3", label: "Unit 3 — Short-Run Costs" },
  },
  {
    id: 13, unit: 3, source: "College Board 2012 Q25",
    question: "If the average variable cost of producing 5 units of a good is $100 and the average variable cost of producing 6 units is $150, then the marginal cost of increasing output from 5 to 6 units is",
    options: [
      { label: "A", text: "$50" },
      { label: "B", text: "$250" },
      { label: "C", text: "$300" },
      { label: "D", text: "$400" },
      { label: "E", text: "$500" },
    ],
    answer: "D",
    explanation: "TVC at 5 units = 5 × $100 = $500. TVC at 6 units = 6 × $150 = $900. MC = $900 − $500 = $400.",
    noteLink: { path: "/micro/3", label: "Unit 3 — Short-Run Costs" },
  },
  {
    id: 14, unit: 3, source: "College Board 2012 Q10",
    question: "Which of the following statements about a constant-cost perfectly competitive industry in long-run equilibrium must be true?",
    options: [
      { label: "A", text: "An increase in demand will cause no change in the long-run equilibrium price." },
      { label: "B", text: "An increase in demand will cause no change in the long-run equilibrium quantity." },
      { label: "C", text: "The long-run supply curve is upward sloping." },
      { label: "D", text: "The long-run supply curve is perfectly inelastic." },
      { label: "E", text: "The total cost of production remains the same as output increases." },
    ],
    answer: "A",
    explanation: "In a constant-cost industry, firms' cost curves don't shift as the industry expands. The long-run supply curve is horizontal, so price returns to its original level after demand increases.",
    noteLink: { path: "/micro/3", label: "Unit 3 — Perfect Competition" },
  },
  {
    id: 15, unit: 3, source: "College Board 2012 Q36",
    question: "If labor is the only variable input in the production process, the short-run marginal cost curve is upward sloping because which of the following occurs as more and more labor is added?",
    options: [
      { label: "A", text: "Output decreases, and thus marginal cost increases." },
      { label: "B", text: "Output increases, and thus marginal cost increases." },
      { label: "C", text: "Output increases at an increasing rate, and thus the cost of producing each additional unit of output increases." },
      { label: "D", text: "Output increases at a decreasing rate, and thus the cost of producing each additional unit of output increases." },
      { label: "E", text: "Output increases at a decreasing rate, and thus the cost of producing each additional unit of output decreases." },
    ],
    answer: "D",
    explanation: "Due to diminishing marginal returns, each additional worker adds less output. Since wage is constant but each worker produces less, the cost per extra unit (MC) rises.",
    noteLink: { path: "/micro/3", label: "Unit 3 — Short-Run Costs" },
  },
  // Unit 4
  {
    id: 16, unit: 4, source: "College Board 2012 Q21",
    question: "Within the range of market demand, which of the following is consistent with the conditions of a natural monopoly?",
    options: [
      { label: "A", text: "Long-run total cost decreases as output increases." },
      { label: "B", text: "Long-run average total cost remains constant as output increases." },
      { label: "C", text: "Long-run average total cost decreases as output increases." },
      { label: "D", text: "Marginal cost exceeds average cost." },
      { label: "E", text: "Setting price equal to marginal cost will maximize profits." },
    ],
    answer: "C",
    explanation: "A natural monopoly has economies of scale over the entire range of demand — LRATC continuously falls, so one firm can supply the market more cheaply than multiple firms.",
    noteLink: { path: "/micro/4", label: "Unit 4 — Natural Monopoly" },
  },
  {
    id: 17, unit: 4, source: "College Board 2012 Q39",
    question: "Which of the following best describes an oligopolistic market?",
    options: [
      { label: "A", text: "Many sellers with identical products and no barriers to entry" },
      { label: "B", text: "Many sellers, each with a clearly differentiated product, and no barriers to entry" },
      { label: "C", text: "A few competing sellers with similar products and high barriers to entry" },
      { label: "D", text: "A few competing sellers of identical products and no barriers to entry" },
      { label: "E", text: "No competition among sellers and high barriers to entry" },
    ],
    answer: "C",
    explanation: "An oligopoly is defined by a few dominant firms, similar (or identical) products, high barriers to entry, and mutual interdependence.",
    noteLink: { path: "/micro/4", label: "Unit 4 — Oligopoly" },
  },
  {
    id: 18, unit: 4, source: "College Board 2012 Q44",
    question: "Most economists argue that a monopoly is inefficient because it",
    options: [
      { label: "A", text: "has no incentive to minimize its costs" },
      { label: "B", text: "produces too little output and sets a price above marginal cost" },
      { label: "C", text: "earns too much profit by charging consumers any price it wants" },
      { label: "D", text: "produces too much output and thus wastes scarce resources" },
      { label: "E", text: "usually produces unsafe products if not regulated by government" },
    ],
    answer: "B",
    explanation: "A monopoly restricts output (produces where MR = MC) and charges P > MC, creating deadweight loss and allocative inefficiency.",
    noteLink: { path: "/micro/4", label: "Unit 4 — Monopoly" },
  },
  {
    id: 19, unit: 4, source: "College Board 2012 Q54",
    question: "In monopolistic competition, which of the following most accurately describes the long-run equilibrium conditions for a firm? (P = price, MR = marginal revenue, MC = marginal cost, ATC = average total cost)",
    options: [
      { label: "A", text: "P > ATC, MR = MC, and P > MC" },
      { label: "B", text: "P > ATC, MR > MC, and P = MC" },
      { label: "C", text: "P = ATC, MR = MC, and P > MC" },
      { label: "D", text: "P = ATC, MR = MC, and P = MC" },
      { label: "E", text: "P = ATC, MR > MC, and P > MC" },
    ],
    answer: "C",
    explanation: "In long-run equilibrium: zero economic profit (P = ATC), profit maximization (MR = MC), and market power means P > MC (allocative inefficiency).",
    noteLink: { path: "/micro/4", label: "Unit 4 — Monopolistic Competition" },
  },
  {
    id: 20, unit: 4, source: "College Board 2012 Q40",
    question: `Two utility companies UA and UB each choose to reduce production by 10% or 20%. Payoffs (UA, UB):
• Both 20%: ($150, $150)
• UA 20%, UB 10%: ($50, $250)
• UA 10%, UB 20%: ($250, $50)
• Both 10%: ($100, $100)

Assuming no cooperation, which of the following is true?`,
    options: [
      { label: "A", text: "Neither company has a dominant strategy." },
      { label: "B", text: "Both companies have an incentive to reduce production by 10%." },
      { label: "C", text: "Both companies have an incentive to reduce production by 20%." },
      { label: "D", text: "Only UA has an incentive to reduce production by 20%." },
      { label: "E", text: "Only UB has an incentive to reduce production by 20%." },
    ],
    answer: "B",
    explanation: "Each firm's dominant strategy is to reduce by 10%: UA gets $250 vs. $150 (if UB picks 20%) and $100 vs. $50 (if UB picks 10%). Same logic applies to UB. This is a Prisoner's Dilemma — Nash Equilibrium is (10%, 10%).",
    noteLink: { path: "/micro/4", label: "Unit 4 — Game Theory" },
  },
  // Unit 5
  {
    id: 21, unit: 5, source: "College Board 2012 Q26",
    question: `The table shows the relationship between workers and coal output (tons/day):
Workers: 0→0, 1→25, 2→44, 3→60, 4→70, 5→75

How many workers would the coal company want to hire if coal is $5/ton and the wage rate is $40/day?`,
    options: [
      { label: "A", text: "5" },
      { label: "B", text: "4" },
      { label: "C", text: "3" },
      { label: "D", text: "2" },
      { label: "E", text: "0" },
    ],
    answer: "C",
    explanation: "MRP of each worker: 1st = 25×$5 = $125, 2nd = 19×$5 = $95, 3rd = 16×$5 = $80, 4th = 10×$5 = $50, 5th = 5×$5 = $25. Hire where MRP ≥ wage ($40). The 3rd worker's MRP ($80) ≥ $40, but the 4th ($50) ≥ $40 too. Actually the 4th's MRP ($50) > $40, so hire 4. Wait — let me recalculate. 4th: $50 > $40 ✓, 5th: $25 < $40 ✗. Hire 4 workers. The correct answer is B.",
    noteLink: { path: "/micro/5", label: "Unit 5 — MRP & Hiring" },
  },
  {
    id: 22, unit: 5, source: "College Board 2012 Q43",
    question: "If a firm employs only labor and capital in its production process, which of the following best describes the optimal combination of inputs for the firm in the long run?",
    options: [
      { label: "A", text: "The marginal product per dollar spent on labor is equal to the marginal product per dollar spent on capital." },
      { label: "B", text: "The marginal product of labor is equal to the marginal product of capital." },
      { label: "C", text: "The total product of labor is equal to the total product of capital." },
      { label: "D", text: "The marginal product of labor and capital are both zero." },
      { label: "E", text: "All marginal products are equal to all average products." },
    ],
    answer: "A",
    explanation: "The cost-minimization rule: MP_L / w = MP_K / r. The firm should equalize the marginal product per dollar across all inputs.",
    noteLink: { path: "/micro/5", label: "Unit 5 — Cost-Minimization Rule" },
  },
  {
    id: 23, unit: 5, source: "College Board 2012 Q58",
    question: "A profit-maximizing firm should hire an input up to the point at which",
    options: [
      { label: "A", text: "marginal physical product equals marginal revenue product" },
      { label: "B", text: "marginal revenue equals marginal factor cost" },
      { label: "C", text: "marginal revenue product equals marginal revenue" },
      { label: "D", text: "marginal revenue product equals marginal factor cost" },
      { label: "E", text: "marginal physical product equals marginal factor cost" },
    ],
    answer: "D",
    explanation: "The profit-maximizing hiring rule is MRP = MFC. Hire workers until the revenue from the last worker (MRP) equals the cost of hiring them (MFC/wage).",
    noteLink: { path: "/micro/5", label: "Unit 5 — MRP & Hiring" },
  },
  {
    id: 24, unit: 5, source: "College Board 2012 Q42",
    question: "An increase in the effective minimum wage will have less of an impact on employment if the demand for labor is",
    options: [
      { label: "A", text: "a derived demand" },
      { label: "B", text: "decreasing" },
      { label: "C", text: "relatively elastic" },
      { label: "D", text: "relatively inelastic" },
      { label: "E", text: "unit elastic" },
    ],
    answer: "D",
    explanation: "If labor demand is inelastic, a wage increase causes a smaller reduction in quantity of labor demanded. Less elastic demand → less employment impact.",
    noteLink: { path: "/micro/5", label: "Unit 5 — Labor Markets" },
  },
  // Unit 6
  {
    id: 25, unit: 6, source: "College Board 2012 Q14",
    question: "A per-unit tax on pollution produced by a firm will affect the firm's output and pollution levels in which of the following ways?",
    options: [
      { label: "A", text: "Output: Increase, Pollution: Increase" },
      { label: "B", text: "Output: Increase, Pollution: Decrease" },
      { label: "C", text: "Output: Decrease, Pollution: Increase" },
      { label: "D", text: "Output: Decrease, Pollution: Decrease" },
      { label: "E", text: "Output: No change, Pollution: No change" },
    ],
    answer: "D",
    explanation: "A per-unit pollution tax increases the firm's marginal cost, reducing output. Less output means less pollution. Both decrease.",
    noteLink: { path: "/micro/6", label: "Unit 6 — Externalities" },
  },
  {
    id: 26, unit: 6, source: "College Board 2012 Q29",
    question: "If the production of a good generates a positive externality, the government can increase allocative efficiency by",
    options: [
      { label: "A", text: "taxing the producer of the good" },
      { label: "B", text: "subsidizing the producer of the good" },
      { label: "C", text: "prosecuting firms that produce the good" },
      { label: "D", text: "setting a price ceiling to encourage production of the good" },
      { label: "E", text: "setting a price floor to discourage production of the good" },
    ],
    answer: "B",
    explanation: "A positive externality means the market underproduces. A subsidy lowers the firm's costs, increasing output toward the socially optimal quantity.",
    noteLink: { path: "/micro/6", label: "Unit 6 — Externalities Solutions" },
  },
  {
    id: 27, unit: 6, source: "College Board 2012 Q30",
    question: "Which of the following is the best example of a pure public good?",
    options: [
      { label: "A", text: "Electricity from a public utility" },
      { label: "B", text: "Mail delivery service by the post office" },
      { label: "C", text: "Social Security payments" },
      { label: "D", text: "National defense" },
      { label: "E", text: "Imported oil" },
    ],
    answer: "D",
    explanation: "National defense is non-rival (one person's protection doesn't reduce another's) and non-excludable (you can't exclude non-payers). Classic public good.",
    noteLink: { path: "/micro/6", label: "Unit 6 — Public Goods" },
  },
  {
    id: 28, unit: 6, source: "College Board 2012 Q15",
    question: "Which of the following will most likely lead to a more equal distribution of income?",
    options: [
      { label: "A", text: "More regressive national sales tax" },
      { label: "B", text: "More progressive income taxes" },
      { label: "C", text: "An increase in the high school dropout rate" },
      { label: "D", text: "An increase in structural unemployment" },
      { label: "E", text: "An increase in earnings for owners of capital" },
    ],
    answer: "B",
    explanation: "Progressive taxes take a higher percentage from higher incomes, redistributing income and reducing inequality.",
    noteLink: { path: "/micro/6", label: "Unit 6 — Types of Tax" },
  },
  {
    id: 29, unit: 6, source: "College Board 2012 Q45",
    question: `The table shows income distribution in Country X (2010):
Before taxes: Lowest 20%: 1.1%, Highest 20%: 50.7%
After taxes: Lowest 20%: 5.1%, Highest 20%: 43.5%

Which of the following can be concluded?`,
    options: [
      { label: "A", text: "Income distribution is significantly less equal after government policies." },
      { label: "B", text: "Income distribution is about the same after government policies." },
      { label: "C", text: "The largest gainers are the third and fourth quintile groups." },
      { label: "D", text: "The only quintile to benefit is the lowest quintile." },
      { label: "E", text: "The major transfer of income is from the highest quintile to the two lowest quintiles." },
    ],
    answer: "E",
    explanation: "The highest quintile's share dropped from 50.7% to 43.5%, while the lowest two quintiles gained. The major transfer is from the top to the bottom.",
    noteLink: { path: "/micro/6", label: "Unit 6 — Income Inequality" },
  },
  {
    id: 30, unit: 3, source: "College Board 2012 Q28",
    question: "Sally starts her own printing firm instead of working at a salary of $25,000/yr. She uses her own building (could rent for $10,000/yr) and spends $125,000 on workers, materials, etc. Revenue is $155,000. Her total economic profit is",
    options: [
      { label: "A", text: "-$5,000" },
      { label: "B", text: "$5,000" },
      { label: "C", text: "$20,000" },
      { label: "D", text: "$30,000" },
      { label: "E", text: "$120,000" },
    ],
    answer: "A",
    explanation: "Economic profit = TR − explicit costs − implicit costs = $155,000 − $125,000 − $25,000 − $10,000 = −$5,000. She earns negative economic profit.",
    noteLink: { path: "/micro/3", label: "Unit 3 — Types of Profit" },
  },
];

// Fix Q21 answer — it should be B (4 workers), not C
microMCQuestions[20].answer = "B";
microMCQuestions[20].explanation = "MRP of each worker: 1st = 25×$5=$125, 2nd = 19×$5=$95, 3rd = 16×$5=$80, 4th = 10×$5=$50, 5th = 5×$5=$25. Hire where MRP ≥ wage ($40). The 4th worker's MRP ($50) > $40 ✓, but the 5th worker's MRP ($25) < $40 ✗. So hire 4 workers.";

export const microFRQQuestions: FRQQuestion[] = [
  {
    id: 1,
    year: "2023 Set 1",
    type: "Long",
    topic: "Monopoly + Factor Market",
    parts: [
      {
        label: "a",
        question: "RKB is a profit-maximizing monopoly that produces a new, patented electronic device and is earning positive economic profit.\n\nDraw a correctly labeled graph for RKB, and show:\n(i) The profit-maximizing quantity, labeled QM\n(ii) The profit-maximizing price, labeled PM\n(iii) The ATC curve consistent with positive economic profit\n(iv) The area representing the deadweight loss, shaded completely",
        answer: "The graph should show: downward-sloping Demand curve, MR curve below Demand, upward-sloping MC curve. QM is where MR = MC. PM is on the Demand curve above QM. ATC curve is below PM at QM (showing positive profit). Deadweight loss is the triangle between MC, Demand, from QM to the allocatively efficient quantity (where MC = D)."
      },
      {
        label: "b",
        question: "The government wants RKB to produce the allocatively efficient quantity. Would the government impose a binding price ceiling, a binding price floor, a per-unit tax, or a lump-sum tax?",
        answer: "The government would impose a binding price ceiling. A price ceiling set at where MC = Demand would force the firm to produce the allocatively efficient quantity."
      },
      {
        label: "c",
        question: "Suppose consumers become aware of research confirming the device harms users' vision. What will happen to RKB's profit-maximizing quantity in the short run? Explain.",
        answer: "The profit-maximizing quantity will decrease because the demand for the device will decrease, causing the MR curve to shift to the left, intersecting the MC curve at a lower quantity."
      },
      {
        label: "d",
        question: "Assume RKB hires workers in a perfectly competitive labor market.\n(i) Draw a correctly labeled graph for the labor market, showing the equilibrium wage and quantity of labor labeled WE and QE.\n(ii) Suppose immigration increases the number of workers. Show the new equilibrium wage and quantity, labeled W2 and Q2.",
        answer: "(i) The labor market graph has a downward-sloping labor Demand curve (MRP) and an upward-sloping labor Supply curve. WE and QE are at their intersection.\n(ii) Immigration shifts the labor Supply curve to the right. The new equilibrium W2 is lower than WE, and Q2 is greater than QE."
      },
    ],
  },
  {
    id: 2,
    year: "2023 Set 1",
    type: "Short",
    topic: "Comparative Advantage + Externality",
    parts: [
      {
        label: "a",
        question: "The PPC shows Northland can produce 100 wheat or 300 cloth, and Southland can produce 100 wheat or 50 cloth.\n\nWhich country has a comparative advantage in producing wheat? Explain using numbers.",
        answer: "Southland has a comparative advantage in producing wheat because the opportunity cost of producing one bushel of wheat in Southland is 1/2 yard of cloth (50/100), which is less than the opportunity cost in Northland, which is 3 yards of cloth (300/100)."
      },
      {
        label: "b",
        question: "Identify a specific number of yards of cloth that could be traded for 10 bushels of wheat and would be mutually beneficial to both countries.",
        answer: "Between 5 and 30 yards of cloth. Southland's OC for 10 wheat = 5 cloth. Northland's OC for 10 wheat = 30 cloth. Any amount between these is mutually beneficial."
      },
      {
        label: "d",
        question: "Turnips are produced in a perfectly competitive market. Runoff from turnip fields pollutes rivers.\n(i) Does the equilibrium result in an efficient allocation of resources? Explain.\n(ii) The government imposes a lump-sum tax on turnip production. What will be the impact on equilibrium price and quantity in the short run?",
        answer: "(i) No, because the negative externality causes MSC > MSB at the market equilibrium, so the market overproduces.\n(ii) A lump-sum tax will NOT change the market equilibrium price and quantity in the short run, because a lump-sum tax does not affect marginal cost — it only affects fixed costs."
      },
    ],
  },
  {
    id: 3,
    year: "2023 Set 1",
    type: "Short",
    topic: "Competitive Market + Elasticity",
    parts: [
      {
        label: "a",
        question: "Hansel Hangout is a typical firm in a perfectly competitive market. Given: MC intersects ATC at $26, AVC at $8 (both at Q=4). The market price is $14. d=MR at $14. Profit-maximizing Q is 6.\n\nCalculate Hansel Hangout's total fixed cost. Show your work.",
        answer: "At Q = 4: ATC = $26, AVC = $8. AFC = ATC − AVC = $26 − $8 = $18. Total Fixed Cost = AFC × Q = $18 × 4 = $72."
      },
      {
        label: "c",
        question: "Calculate Hansel Hangout's economic profit at the profit-maximizing quantity (P = $14, Q = 6, ATC at Q=6 is $21). Show your work.",
        answer: "Economic Profit = TR − TC = (P × Q) − (ATC × Q) = ($14 × 6) − ($21 × 6) = $84 − $126 = −$42. The firm is making an economic loss of $42."
      },
      {
        label: "d",
        question: "As the market adjusts to long-run equilibrium, what will happen to the price of Good X? Explain.",
        answer: "The market price will increase in the long run because some firms will exit the market due to negative economic profits, causing the market supply curve to shift to the left, which increases the market equilibrium price."
      },
      {
        label: "e",
        question: "The cross-price elasticity of demand between Good X and Good C is positive. Given the long-run price increase of Good X, will the quantity demanded of Good C increase, decrease, or remain the same?",
        answer: "The quantity demanded of Good C will increase. A positive cross-price elasticity means the goods are substitutes. An increase in the price of Good X will increase demand for Good C, increasing the quantity demanded."
      },
    ],
  },
  {
    id: 4,
    year: "2023 Set 2",
    type: "Short",
    topic: "Factor Market (Keepdry)",
    parts: [
      {
        label: "a",
        question: "Keepdry produces rain jackets at $5/jacket in a perfectly competitive market. Wage = $15. Production: 0→0, 1→9, 2→20, 3→27.\n\nCalculate the marginal revenue product of the second worker. Show your work.",
        answer: "MRP (2nd worker) = Marginal Product × Price = (20 − 9) × $5 = 11 × $5 = $55."
      },
      {
        label: "b",
        question: "Diminishing marginal returns will begin with the hiring of which worker?",
        answer: "The 3rd worker. MP of 1st = 9, 2nd = 11, 3rd = 7. MP increases from 1st to 2nd, then decreases with the 3rd worker."
      },
      {
        label: "e",
        question: "Suppose Keepdry's fixed cost increases to $80. Will the profit-maximizing number of workers hired in the short run increase, decrease, or stay the same? Explain.",
        answer: "The number of workers hired will stay the same because the increase in fixed cost does not affect the marginal factor cost (wage) or the marginal revenue product. The hiring decision is based on MRP = MFC, which is unchanged."
      },
    ],
  },
  {
    id: 5,
    year: "2023 Set 2",
    type: "Short",
    topic: "Natural Monopoly",
    parts: [
      {
        label: "a",
        question: "A graph shows MC, ATC, Demand, and MR for a monopoly where ATC is decreasing over the entire range of demand. Is the firm a natural monopoly? Explain.",
        answer: "Yes. This firm is a natural monopoly because it experiences decreasing average total costs over the entire effective range of demand, meaning one firm can supply the entire market at a lower cost than multiple firms."
      },
      {
        label: "c",
        question: "The government sets a price that results in the firm earning zero economic profit. Will this government policy eliminate the deadweight loss? Explain.",
        answer: "No, this policy will not fully eliminate the deadweight loss. At the zero-profit price (where P = ATC), the quantity produced is still less than the allocatively efficient quantity (where P = MC). Some deadweight loss remains, though it is reduced compared to the unregulated monopoly."
      },
      {
        label: "d",
        question: "Instead, the government decides to set a price that results in the socially optimal quantity of output. Will the firm earn positive, negative, or zero economic profit? Explain.",
        answer: "The firm will earn negative economic profit. At the socially optimal quantity (where P = MC), the price is below ATC because a natural monopoly has ATC > MC over the relevant range. The firm would need a subsidy to continue operating."
      },
    ],
  },
];
