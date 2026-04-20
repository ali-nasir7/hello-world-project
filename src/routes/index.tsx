import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import HowItWorks from "../components/HowItWorks";
import PricingCard from "../components/PricingCard";
import CTASection from "../components/CTASection";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Activity, FlaskConical, Droplets, Scale } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    title: "Longevity Consultation",
    description: "Comprehensive health assessment focused on extending healthspan and optimizing biological age.",
    icon: <Activity size={22} />,
  },
  {
    title: "Biomarker Lab Testing",
    description: "Advanced diagnostic panels tracking 100+ biomarkers for precise, data-driven health optimization.",
    icon: <FlaskConical size={22} />,
  },
  {
    title: "IV Therapy",
    description: "Custom intravenous nutrient protocols for recovery, energy, immune support, and cellular repair.",
    icon: <Droplets size={22} />,
  },
  {
    title: "Weight Loss Programs",
    description: "Medically supervised weight management combining peptide therapy, nutrition, and metabolic science.",
    icon: <Scale size={22} />,
  },
];

const tiers = [
  {
    tier: "BASIC",
    price: "$299",
    period: "/month",
    features: [
      "Quarterly health assessment",
      "Basic biomarker panel",
      "Wellness plan",
      "Email support",
    ],
  },
  {
    tier: "PREMIUM",
    price: "$599",
    period: "/month",
    highlighted: true,
    features: [
      "Monthly health assessment",
      "Comprehensive biomarker panel",
      "Personalized longevity plan",
      "IV therapy sessions",
      "Priority support",
      "Wellness coach access",
    ],
  },
  {
    tier: "ELITE",
    price: "$999",
    period: "/month",
    features: [
      "Unlimited consultations",
      "Full biomarker & genetic panel",
      "Custom longevity protocol",
      "Weekly IV therapy",
      "24/7 concierge access",
      "Quarterly retreat access",
    ],
  },
];

function Index() {
  return (
    <>
      <Hero />

      {/* Services Preview */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="OUR SERVICES"
            title="Precision Wellness Solutions"
            subtitle="Evidence-based treatments tailored to your unique biology and goals."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Membership Preview */}
      <section className="bg-secondary/20 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            label="MEMBERSHIP"
            title="Choose Your Path"
            subtitle="Exclusive membership tiers designed for every stage of your wellness journey."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((t, i) => (
              <PricingCard key={t.tier} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            label="OUR TEAM"
            title="Led by Experts"
            subtitle="A physician-led team dedicated to redefining what healthcare can be."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                name: "Dr. Umar",
                role: "Founder & Medical Director",
                description:
                  "Board-certified physician specializing in longevity medicine, with over 15 years of experience in personalized health optimization.",
              },
              {
                name: "Wellness Coach",
                role: "Performance & Nutrition Coach",
                description:
                  "Certified wellness coach focused on integrating lifestyle, nutrition, and recovery protocols into your daily routine.",
              },
            ].map((member, i) => (
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
                <div className="mb-4 h-16 w-16 rounded-2xl bg-primary/10" />
                <h3 className="text-lg font-medium tracking-tight text-foreground">
                  {member.name}
                </h3>
                <p className="mb-3 text-xs font-medium tracking-wide text-primary">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {member.description}
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
