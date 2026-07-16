import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { microMCQuestions } from "@/data/microPracticeData";
import { macroMCQuestions } from "@/data/macroPracticeData";

export default defineTool({
  name: "get_practice_question",
  title: "Get a practice question",
  description: "Return a random AP Econ multiple-choice practice question with options, correct answer, and an explanation. Optionally filter by course (micro or macro) and unit number.",
  inputSchema: {
    course: z
      .enum(["micro", "macro"])
      .optional()
      .describe("Which course to draw from. Omit for either."),
    unit: z
      .number()
      .int()
      .min(1)
      .max(6)
      .optional()
      .describe("Restrict to a specific unit (1-6)."),
  },
  annotations: { readOnlyHint: true, openWorldHint: false },
  handler: ({ course, unit }) => {
    const pool = [
      ...(course === "macro" ? [] : microMCQuestions.map((q) => ({ ...q, course: "micro" as const }))),
      ...(course === "micro" ? [] : macroMCQuestions.map((q) => ({ ...q, course: "macro" as const }))),
    ].filter((q) => (unit ? q.unit === unit : true));

    if (pool.length === 0) {
      return {
        content: [{ type: "text", text: "No questions match that filter." }],
        isError: true,
      };
    }

    const q = pool[Math.floor(Math.random() * pool.length)];
    return {
      content: [{ type: "text", text: JSON.stringify(q, null, 2) }],
      structuredContent: { question: q },
    };
  },
});