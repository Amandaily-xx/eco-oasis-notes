import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/xintong.lee0130@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `AP Econ Notes — Message from ${name}`,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-10 max-w-2xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">Contact</h1>
          <p className="font-body text-muted-foreground mb-8">
            Found a mistake in the notes? Have a question about a concept? I'd love to hear from you! 💬
          </p>

          <div className="rounded-xl border p-6 mb-8" style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}>
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-5 h-5 text-accent" />
              <a
                href="mailto:xintong.lee0130@gmail.com"
                className="font-body text-primary hover:text-accent transition-colors underline"
              >
                xintong.lee0130@gmail.com
              </a>
            </div>

            {status === "sent" ? (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <p className="font-body text-sm">Message sent successfully! I'll get back to you soon 😊</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-body font-medium text-foreground mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border text-sm font-body bg-background text-foreground"
                    style={{ borderColor: "hsl(var(--border))" }}
                    placeholder="e.g. Alex"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-body font-medium text-foreground mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={200}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border text-sm font-body bg-background text-foreground"
                    style={{ borderColor: "hsl(var(--border))" }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-body font-medium text-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    maxLength={2000}
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border text-sm font-body bg-background text-foreground resize-none"
                    style={{ borderColor: "hsl(var(--border))" }}
                    placeholder="Report a mistake, ask a question, or just say hi!"
                  />
                </div>
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm font-body">
                    <AlertCircle className="w-4 h-4" />
                    Something went wrong. Please try again or email directly.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-body text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                <p className="text-xs font-body text-muted-foreground">
                  Your message will be sent directly to Amanda — no need to open your email app!
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
