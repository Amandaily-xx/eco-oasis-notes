import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Award, Users, Music, Dumbbell, UtensilsCrossed, BrainCircuit, Trophy, Briefcase } from "lucide-react";
import amanda1 from "../assets/amanda-1.png";
import amanda2 from "../assets/amanda-2.png";
import amanda4 from "../assets/amanda-4.png";
import amanda5 from "../assets/amanda-5.png";
import amandaHobbies from "../assets/amanda-hobbies.png";

const awards = [
  { year: "2025", title: "James McGill Major Entrance Scholarship", detail: "Awarded for academic excellence" },
  { year: "2024", title: "International Economics Olympiad", detail: "Individual Gold Award, Top 5% nationally" },
  { year: "2024", title: "CEMC Euclid Mathematics Competition — University of Waterloo", detail: "Honor Roll, Top 5% globally" },
  { year: "2024", title: "National Economic Competition", detail: "Individual Silver Award nationally" },
];

const experiences = [
  { period: "Jan 2026 – Present", role: "Social Media Coordinator, McGill Food Coalition", detail: "Developed and published weekly digital posters highlighting accessible and no-cost food resources near campus, and managed the coalition's social media account" },
  { period: "Jan 2026 – Present", role: "McGill PHYS 102 Prep Session Advisor" },
  { period: "Sep 2024 – Present", role: "AP Economics Teaching Assistant", detail: "Explaining difficult concepts and supporting the course alongside the main instructor across 9 cohorts" },
  { period: "Aug 2025 – Dec 2025", role: "MATH 180 Peer Note-Sharing Provider — McGill", detail: "Uploaded handwritten lecture notes during Fall 2025 to help peers with exam prep" },
  { period: "Jun 2025 – Dec 2025", role: "Online English Teacher" },
  { period: "May 2026", role: "McGill AeroHacks — Hackathon 🚁", detail: "Built AeroGuide, a software platform that converts drone technology into a comprehensive navigation service for the visually impaired", link: "https://github.com/Amandaily-xx/AeroGuide-Drone-Platform" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-10 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">About Amanda 🎓</h1>

          <div className="flex justify-center mb-8">
            <motion.img
              src={amanda4}
              alt="Amanda cartoon avatar"
              className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4"
              style={{ borderColor: "hsl(var(--accent))" }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
          </div>

          <div className="prose-like font-body text-foreground space-y-4 mb-10">
            <p className="text-lg leading-relaxed">
              Hey there! I'm <strong className="text-accent">Amanda X.L.</strong> — a Stats & CS major with an Econ minor at <strong>McGill University</strong>, starting Fall 2025. Currently tackling CS and… let's just say it's been a journey. But hey, we got this! 🔥
            </p>
            <p className="leading-relaxed">
              These AP Econ notes are pretty close to my heart. Back in my junior year of high school, I created them while preparing for the AP Micro and AP Macro exams. After each unit, I'd put together a set of shared notes and drop them in our class group chat so everyone could study together. My classmates found them super helpful — and honestly, my teacher and friends started calling me the <em>"Economics God"</em> of the class. 😂
            </p>
            <p className="leading-relaxed">
              I've also been an <strong>AP Economics Teaching Assistant</strong> since September 2024. I genuinely enjoy running TA sessions — breaking down tricky concepts and supporting the course alongside the main instructor. I've worked with <strong>9 cohorts</strong> of classes so far!
            </p>
            <p className="leading-relaxed">
              And the result? <strong>Scored a 5 on both AP Micro and AP Macro</strong>, no sweat. So yeah, these notes are battle-tested and student-approved.
            </p>
            <p className="leading-relaxed">
              I'm not trying to brag (okay, maybe a little), but I genuinely believe these notes can help you understand economics the way I did — intuitively, clearly, and without the 2:00 AM panic spiral.
            </p>
            <p className="text-lg font-semibold text-primary">
              So folks, let's get started! 🚀
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { icon: Award, label: "AP Score", value: "5 / 5" },
              { icon: GraduationCap, label: "University", value: "McGill" },
              { icon: Users, label: "Students Helped", value: "200+" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center p-4 rounded-xl border" style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}>
                <Icon className="w-5 h-5 mx-auto mb-2 text-accent" />
                <div className="font-display font-bold text-primary text-lg">{value}</div>
                <div className="text-xs font-body text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>

          {/* Awards & Experience */}
          <h2 className="font-display text-2xl font-bold text-primary mb-4">Awards & Experience 🏆</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Awards */}
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-lg text-accent flex items-center gap-2">
                <Trophy className="w-5 h-5" /> Awards
              </h3>
              {awards.map((a) => (
                <div key={a.title} className="p-3 rounded-xl border" style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}>
                  <span className="text-xs font-body font-semibold text-accent">{a.year}</span>
                  <p className="font-body font-semibold text-sm text-primary">{a.title}</p>
                  <p className="font-body text-xs text-muted-foreground">{a.detail}</p>
                </div>
              ))}
            </div>
            {/* Experience */}
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-lg text-accent flex items-center gap-2">
                <Briefcase className="w-5 h-5" /> Experience
              </h3>
              {experiences.map((e) => (
                <div key={e.role} className="p-3 rounded-xl border" style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}>
                  <span className="text-xs font-body font-semibold text-accent">{e.period}</span>
                  <p className="font-body font-semibold text-sm text-primary">{e.role}</p>
                  {e.detail && <p className="font-body text-xs text-muted-foreground">{e.detail}</p>}
                  {e.link && (
                    <a href={e.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-body font-semibold text-accent hover:underline mt-1">
                      View on GitHub →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies & Interests */}
          <h2 className="font-display text-2xl font-bold text-primary mb-4">Hobbies & Interests 🎯</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <motion.img
              src={amandaHobbies}
              alt="Amanda's hobbies and interests"
              className="w-full rounded-xl shadow-md object-cover"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            />
            <div className="flex flex-col justify-center space-y-4 font-body text-foreground">
              <div className="flex items-start gap-3">
                <BrainCircuit className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-primary">AI & Data Analysis 🤖</p>
                  <p className="text-sm text-muted-foreground">Not a pro or dev yet, but I will be — I hope! 😄 Fascinated by how AI and data can unlock insights, especially when it comes to money. Yeah, I'm very interested in delving into finance and figuring out how to earn it!</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Dumbbell className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-primary">Fitness & Badminton 🏸</p>
                  <p className="text-sm text-muted-foreground">Staying active with gym sessions and intense badminton matches — especially doubles, which I absolutely love! Nothing beats a good rally with a partner to clear the mind after a long study grind.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-primary">Singing & Music 🎶</p>
                  <p className="text-sm text-muted-foreground">When I'm not crunching numbers, you'll find me singing my heart out — I love karaoke and recording songs on the WeSing app. It's honestly the best stress reliever after a long day of econ and code!</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <UtensilsCrossed className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-primary">Food Explorer 🍴</p>
                  <p className="text-sm text-muted-foreground">Big foodie energy — from ramen 🍜 to matcha 🍵 to char siu, cheung fun, and rice noodles. I'm always hunting for the next best bite in Montreal!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <h2 className="font-display text-2xl font-bold text-primary mb-4">Gallery 📸</h2>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { src: amanda1, alt: "Amanda at McGill stickers" },
              { src: amanda2, alt: "McGill Arts Building" },
              { src: amanda5, alt: "Amanda AMD sticker art" },
            ].map(({ src, alt }, i) => (
              <motion.img
                key={alt}
                src={src}
                alt={alt}
                className="w-full rounded-xl shadow-md object-cover aspect-square"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
