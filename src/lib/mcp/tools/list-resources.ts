import { defineTool } from "@lovable.dev/mcp-js";

const RESOURCES = {
  youtube: [
    { name: "Jacob Clifford (ACDC Econ)", note: "Best-known AP Econ YouTuber; concise unit summaries and exam cram videos." },
    { name: "ReviewEcon (John Kessler)", note: "Free practice questions, graphs, and unit reviews aligned to the CED." },
    { name: "Khan Academy — AP Economics", note: "Structured lessons and practice for both Micro and Macro." },
  ],
  books: [
    { name: "Krugman's Economics for the AP Course (4th Edition)", note: "Comprehensive textbook aligned to the College Board CED." },
    { name: "Barron's AP Microeconomics / Macroeconomics", note: "Popular review book with full-length practice tests." },
  ],
  official: [
    { name: "College Board — AP Classroom", note: "Official Course and Exam Description (CED), FRQ archives, and scoring guidelines." },
  ],
};

export default defineTool({
  name: "list_resources",
  title: "List study resources",
  description: "List curated AP Economics study resources (YouTube channels, books, and official College Board materials) recommended on this site.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(RESOURCES, null, 2) }],
    structuredContent: RESOURCES,
  }),
});