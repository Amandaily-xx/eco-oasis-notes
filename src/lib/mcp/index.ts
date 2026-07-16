import { defineMcp } from "@lovable.dev/mcp-js";
import listUnits from "./tools/list-units";
import listResources from "./tools/list-resources";
import getPracticeQuestion from "./tools/get-practice-question";

export default defineMcp({
  name: "ap-econ-by-amanda-mcp",
  title: "AP Econ by Amanda",
  version: "0.1.0",
  instructions:
    "Tools for the AP Econ by Amanda study site. Use `list_units` to see all AP Micro and Macro units, `list_resources` to see curated study resources, and `get_practice_question` to fetch a random multiple-choice practice question (optionally filtered by course and unit).",
  tools: [listUnits, listResources, getPracticeQuestion],
});