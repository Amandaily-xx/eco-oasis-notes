import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Award, Users } from "lucide-react";
import amanda1 from "../assets/amanda-1.png";
import amanda2 from "../assets/amanda-2.png";
import amanda3 from "../assets/amanda-3.png";
import amanda4 from "../assets/amanda-4.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-10 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">Meet the Author ✨</h1>

          {/* Hero image */}
          <div className="flex justify-center mb-8">
            <motion.img
              src={amanda3}
              alt="Amanda"
              className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4"
              style={{ borderColor: "hsl(var(--accent))" }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
          </div>

          <div className="prose-like font-body text-foreground space-y-4 mb-10">
            <p className="text-lg leading-relaxed">
              Hey there! I'm <strong className="text-accent">Amanda</strong> — a Statistics & Computer Science major with an Economics minor at <strong>McGill University</strong>, starting Fall 2025. Currently tackling CS and… let's just say it's been a journey. 😅 But hey, we got this!
            </p>
            <p className="leading-relaxed">
              These AP Econ notes are pretty close to my heart. Back in my junior year of high school, I created them while preparing for the AP Micro and AP Macro exams. After each unit, I'd put together a set of shared notes and drop them in our class group chat so everyone could study together. My classmates found them super helpful — and honestly, my teacher and friends started calling me the <em>"Economics God"</em> of the class. 😂
            </p>
            <p className="leading-relaxed">
              And the result? <strong>Scored a 5 on both AP Micro and AP Macro</strong>, no sweat. So yeah, these notes are battle-tested and student-approved.
            </p>
            <p className="leading-relaxed">
              I'm not trying to brag (okay, maybe a little 😏), but I genuinely believe these notes can help you understand economics the way I did — intuitively, clearly, and without the 2:00 AM panic spiral.
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
              { icon: Users, label: "Students Helped", value: "30+" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center p-4 rounded-xl border" style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}>
                <Icon className="w-5 h-5 mx-auto mb-2 text-accent" />
                <div className="font-display font-bold text-primary text-lg">{value}</div>
                <div className="text-xs font-body text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>

          {/* Photo gallery */}
          <h2 className="font-display text-2xl font-bold text-primary mb-4">Gallery 📸</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { src: amanda1, alt: "Amanda at McGill stickers" },
              { src: amanda2, alt: "McGill Arts Building" },
              { src: amanda4, alt: "Amanda AMD stickers" },
              { src: amanda3, alt: "Amanda in Toronto" },
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
