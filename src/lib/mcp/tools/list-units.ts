import { defineTool } from "@lovable.dev/mcp-js";

const UNITS = {
  micro: [
    { unit: 1, title: "Basic Economic Concepts", path: "/micro/1" },
    { unit: 2, title: "Demand & Supply", path: "/micro/2" },
    { unit: 3, title: "Production, Costs & Perfect Competition", path: "/micro/3" },
    { unit: 4, title: "Imperfect Competition", path: "/micro/4" },
    { unit: 5, title: "Factor Markets", path: "/micro/5" },
    { unit: 6, title: "Market Failure & Government", path: "/micro/6" },
  ],
  macro: [
    { unit: 1, title: "Basic Economic Concepts (shared with Micro Unit 1)", path: "/micro/1" },
    { unit: 2, title: "Economic Indicators", path: "/macro/2" },
    { unit: 3, title: "National Income & AD-AS", path: "/macro/3" },
    { unit: 4, title: "Financial Sector", path: "/macro/4" },
    { unit: 5, title: "Long-Run Consequences of Stabilization Policies", path: "/macro/5" },
    { unit: 6, title: "International Trade & Finance", path: "/macro/6" },
  ],
};

export default defineTool({
  name: "list_units",
  title: "List AP Econ units",
  description: "List all AP Microeconomics and AP Macroeconomics units covered on this study site, with their titles and page paths.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(UNITS, null, 2) }],
    structuredContent: UNITS,
  }),
});