import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import CTASection from "../components/CTASection";
import SectionHeading from "../components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — LivLong MD" },
      { name: "description", content: "Meet the physician-led team behind LivLong MD. Redefining healthcare through longevity medicine and personalized wellness." },
      { property: "og:title", content: "About — LivLong MD" },
      { property: "og:description", content: "Meet the team redefining healthcare through longevity medicine." },
    ],
  }),
  component: AboutPage,
});

const team = [
  {
    name: "Dr. Umar",
    role: "Founder & Medical Director",
    bio: "Board-certified physician with over 15 years of experience specializing in longevity medicine, functional health, and precision diagnostics. Dr. Umar founded LivLong MD to bridge the gap between traditional medicine and cutting-edge wellness science.",
  },
  {
    name: "Wellness Coach",
    role: "Performance & Nutrition Coach",
    bio: "Certified wellness and performance coach dedicated to integrating evidence-based lifestyle, nutrition, and recovery protocols. Specializing in helping high-performers optimize their daily routines for sustained energy and longevity.",
  },
];

const values = [
  {
    title: "Precision",
    description: "Every protocol is tailored to your unique biomarkers, genetics, and lifestyle — never one-size-fits-all.",
  },
  {
    title: "Partnership",
    description: "We work alongside you as a dedicated health partner, not just a provider you see once a year.",
  },
  {
    title: "Prevention",
    description: "We believe the best medicine is preventive. We optimize health before problems arise.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="bg-hero-gradient px-6 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            label="ABOUT US"
            title="Redefining Healthcare"
            subtitle="LivLong MD was founded on the belief that healthcare should be proactive, personalized, and focused on extending healthspan — not just treating illness."
          />
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading label="OUR PHILOSOPHY" title="What We Believe" />
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="text-center"
              >
                <h3 className="mb-2 text-lg font-medium tracking-tight text-foreground">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/20 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            label="OUR TEAM"
            title="Led by Experts"
            subtitle="A physician-led team dedicated to your optimal health."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="mb-5 h-20 w-20 rounded-2xl bg-primary/10" />
                <h3 className="text-lg font-medium tracking-tight text-foreground">
                  {member.name}
                </h3>
                <p className="mb-3 text-xs font-medium tracking-wide text-primary">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
