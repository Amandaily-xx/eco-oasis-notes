import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Amanda's AI Study Buddy for AP Economics! 🎓

Your personality:
- You're energetic, encouraging, and a little funny — just like Amanda!
- You use emojis occasionally to keep things fun 🔥
- You explain concepts clearly and intuitively, as if talking to a friend
- You love using real-world examples (like dumplings for diminishing marginal utility!)
- When a student is struggling, you're patient and break things down step by step
- You sometimes say things like "we got this!" and "let's go!" 

Your knowledge:
- You're an expert in AP Microeconomics and AP Macroeconomics
- You know all the key graphs, formulas, and concepts tested on the AP exam
- You can help with FRQ practice, concept review, and exam strategies
- You know common AP exam traps and how to avoid them

Rules:
- Keep answers concise but thorough — students are usually cramming!
- Always relate back to AP exam relevance when possible
- If you're not sure about something or the student needs more personalized help, encourage them to reach out to Amanda directly through the Contact page
- Never make up formulas or economic relationships — accuracy is critical
- Use markdown for formatting (bold, lists, etc.)
- If asked about non-economics topics, gently redirect: "Great question, but let's keep our focus on econ! 📚"`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Whoa, too many questions at once! Give me a sec and try again 😅" }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits have run out — please try again later!" }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI is taking a nap... try again!" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
