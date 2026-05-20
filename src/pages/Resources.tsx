import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Youtube, GraduationCap, BookOpen, BrainCircuit, ClipboardList, Sparkles } from "lucide-react";
import Seo from "../components/Seo";
import jacobCliffordImg from "../assets/resource-jacob-clifford.png";
import reviewEconImg from "../assets/resource-reviewecon.png";
import krugmanImg from "../assets/resource-krugman.png";
import barronsImg from "../assets/resource-barrons.png";

const resources = [
  {
    icon: Youtube,
    image: jacobCliffordImg,
    title: "Jacob Clifford (YouTube)",
    tag: "Highly Recommended ⭐",
    description:
      "When I was in high school, I always watched Jacob Clifford — and I can't recommend him enough! He covers every unit for both AP Micro and Macro. Just make sure you watch the latest versions of his videos, as there are older ones floating around too.",
    link: "https://www.youtube.com/@JacobAClifford",
    linkLabel: "Visit Channel",
  },
  {
    icon: Youtube,
    image: reviewEconImg,
    title: "ReviewEcon (YouTube + Website)",
    tag: "Great for Concept Clarity",
    description:
      'ReviewEcon is excellent at explaining concepts — he goes at a steady pace so you can really absorb the material. He also has a fantastic website with videos breaking down every problem. Honestly, these two channels (Jacob Clifford and ReviewEcon) are like the "monopoly" of the AP Econ YouTube market — they\'re probably the only ones covering all sections across all units! (Sorry if I\'m missing other great channels!)',
    link: "https://www.reviewecon.com/",
    linkLabel: "Visit ReviewEcon.com",
  },
  {
    icon: GraduationCap,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/College_Board_Acorn_logo.svg",
    title: "College Board (AP Classroom)",
    tag: "Most Exam-Like Practice",
    description:
      "This is where you registered for your exams and where your teachers distribute homework and assignments. The resources here are the most similar to the actual exam in terms of format, difficulty, and wording — that's guaranteed! There are FRQs with solutions for you to practice, and from the teacher's side, there are hundreds of MCQs for all units and around 8–9 FRQs available. I remembered doing tons of questions and the printed booklet was so thick and heavy! Don't be afraid to ask your teacher for more resources and practice! 😄",
    link: "https://apclassroom.collegeboard.org/",
    linkLabel: "Go to AP Classroom",
  },
  {
    icon: ClipboardList,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Khan_Academy_logo_%282018%29.svg",
    title: "Khan Academy — AP Micro & Macro",
    tag: "Quick Section Quizzes",
    description:
      "Khan Academy offers nice MCQ questions for you to practice after each small section, plus quizzes to test your understanding. Personally, I think the questions are a bit easier compared to the actual exam — but I might be wrong! Everyone has their own experience, and it's still great supplemental practice.",
    link: "https://www.khanacademy.org/economics-finance-domain/ap-macroeconomics",
    linkLabel: "Visit Khan Academy",
  },
  {
    icon: BookOpen,
    image: krugmanImg,
    title: "Textbook: Krugman's Economics for the AP Course (4th Edition)",
    tag: "The Classic Textbook 📖",
    description:
      "This is the textbook I used when I was learning AP Econ. I think I was the only person who actually read the modules before class — haha! I like to preview concepts beforehand. Honestly, you can just follow along with your teacher and the College Board syllabus since some sections in this textbook won't be tested. But it's always a plus to know more! Pro tip: if there's an online e-book available, don't buy the hardcopy — it's way more expensive. I got lucky because my school had leftover copies from previous students! 😄",
  },
  {
    icon: ClipboardList,
    image: barronsImg,
    title: "Barron's AP Microeconomics / Macroeconomics",
    tag: "Popular Practice Book",
    description:
      "I saw many of my classmates using this one — it's really popular among AP students! It has notes and key concepts for all units along with practice questions for each unit. I didn't buy it myself, but it's definitely a solid resource if you want extra structured practice.",
  },
  {
    icon: BrainCircuit,
    title: "Use AI to Generate Practice Questions!",
    tag: "Modern Study Hack 🤖",
    description:
      "You can always ask AI (like ChatGPT or Claude) to generate practice questions for you! Just make sure you provide the specific topics from the AP syllabus — otherwise you might end up struggling with concepts that aren't even on the exam. That said, I always recommend knowing more than the minimum! The more you know, the more confident you'll feel on exam day.",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="AP Econ Resources — Videos, Books & AI Tools"
        description="Curated AP Microeconomics and Macroeconomics resources: Jacob Clifford, ReviewEcon, ACDC Leadership, recommended books, and AI study tools."
        path="/resources"
      />
      <div className="container mx-auto px-6 py-10 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">Resources 📚</h1>
          <p className="font-body text-muted-foreground mb-8">
            Here are the resources I personally used or recommend for acing AP Micro & Macro. Hope they help you as much as they helped me!
          </p>

          <div className="space-y-6">
            {resources.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl border p-5"
                style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}
              >
                <div className="flex items-start gap-4">
                  {r.image ? (
                    <img
                      src={r.image}
                      alt={`${r.title} logo`}
                      loading="lazy"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                      className="w-14 h-14 rounded-md object-contain bg-background border p-1 shrink-0"
                      style={{ borderColor: "hsl(var(--border))" }}
                    />
                  ) : (
                    <r.icon className="w-6 h-6 text-accent mt-1 shrink-0" />
                  )}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-display font-semibold text-lg text-primary">{r.title}</h3>
                      <span className="text-xs font-body font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent">{r.tag}</span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-2">{r.description}</p>
                    {r.link && (
                      <a
                        href={r.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-accent hover:underline"
                      >
                        <Sparkles className="w-3.5 h-3.5" /> {r.linkLabel} →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 p-5 rounded-xl text-center" style={{ background: "hsl(var(--tip-bg))" }}>
            <p className="font-body text-sm" style={{ color: "hsl(var(--tip-text))" }}>
              💡 <strong>Amanda's Tip:</strong> Don't just passively read or watch — actively practice with MCQs and FRQs after each unit. That's how you really lock in the concepts!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;
