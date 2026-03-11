import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`AP Econ Notes — Message from ${name}`);
    const body = encodeURIComponent(`From: ${name}\n\n${message}`);
    window.location.href = `mailto:xintong.lee0130@gmail.com?subject=${subject}&body=${body}`;
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
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-body text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
                Send via Email
              </button>
              <p className="text-xs font-body text-muted-foreground">
                This will open your default email app with the message pre-filled.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
