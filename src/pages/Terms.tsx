import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-body text-sm mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-7 h-7 text-accent" />
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary">Terms of Use</h1>
        </div>

        <div className="prose font-body text-muted-foreground space-y-6 text-sm leading-relaxed">
          <p className="text-base text-foreground font-medium">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <section className="concept-block space-y-3">
            <h2 className="font-display text-xl font-bold text-primary">1. Copyright & Ownership</h2>
            <p>All content on this website — including but not limited to text, study guides, notes, graphics, tips, and design — is the original work of <strong>Amanda</strong> and is protected under copyright law. © {new Date().getFullYear()} Amanda. All rights reserved.</p>
          </section>

          <section className="concept-block space-y-3">
            <h2 className="font-display text-xl font-bold text-primary">2. Permitted Use</h2>
            <p>You may access and use these materials for <strong>personal, non-commercial study purposes only</strong>. You may not:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Copy, reproduce, or redistribute any content without written permission</li>
              <li>Upload or share these materials on other websites or platforms</li>
              <li>Sell, license, or commercially exploit any part of this content</li>
              <li>Claim authorship of any materials found on this site</li>
            </ul>
          </section>

          <section className="concept-block space-y-3">
            <h2 className="font-display text-xl font-bold text-primary">3. Attribution</h2>
            <p>If you reference or quote any content from this site (with permission), you must provide clear attribution to <strong>Amanda's AP Economics Study Guide</strong> with a link back to this website.</p>
          </section>

          <section className="concept-block space-y-3">
            <h2 className="font-display text-xl font-bold text-primary">4. Disclaimer</h2>
            <p>These study materials are provided as supplementary educational resources. While every effort is made to ensure accuracy, this content is not affiliated with or endorsed by the College Board® or AP® program. AP® is a registered trademark of the College Board.</p>
          </section>

          <section className="concept-block space-y-3">
            <h2 className="font-display text-xl font-bold text-primary">5. Enforcement</h2>
            <p>Unauthorized use of these materials may result in a takedown request (DMCA) or other legal action. If you believe content has been used without authorization, please contact Amanda directly.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;