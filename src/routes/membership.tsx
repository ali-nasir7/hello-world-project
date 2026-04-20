import { createFileRoute } from "@tanstack/react-router";
import PricingCard from "../components/PricingCard";
import CTASection from "../components/CTASection";
import SectionHeading from "../components/SectionHeading";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — LivLong MD" },
      { name: "description", content: "Exclusive membership tiers designed for every stage of your wellness journey. Choose Basic, Premium, or Elite." },
      { property: "og:title", content: "Membership — LivLong MD" },
      { property: "og:description", content: "Join LivLong MD with a membership designed for your wellness goals." },
    ],
  }),
  component: MembershipPage,
});

const tiers = [
  {
    tier: "BASIC",
    price: "$299",
    period: "/month",
    features: [
      "Quarterly health assessment",
      "Basic biomarker panel (40+ markers)",
      "Personalized wellness plan",
      "Email support (48hr response)",
      "Digital health dashboard",
    ],
  },
  {
    tier: "PREMIUM",
    price: "$599",
    period: "/month",
    highlighted: true,
    features: [
      "Monthly health assessment",
      "Comprehensive biomarker panel (80+ markers)",
      "Personalized longevity protocol",
      "Monthly IV therapy session",
      "Priority support (same-day)",
      "Wellness coach access",
      "Quarterly genetic review",
    ],
  },
  {
    tier: "ELITE",
    price: "$999",
    period: "/month",
    features: [
      "Unlimited consultations",
      "Full biomarker & genetic panel (100+ markers)",
      "Custom longevity protocol",
      "Weekly IV therapy sessions",
      "24/7 concierge physician access",
      "Quarterly wellness retreat",
      "Executive health screening",
      "Family member discount",
    ],
  },
];

function MembershipPage() {
  return (
    <>
      <section className="bg-hero-gradient px-6 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            label="MEMBERSHIP"
            title="Invest in Your Longevity"
            subtitle="Choose a membership tier that matches your health goals and commitment to optimal wellness."
          />
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <PricingCard key={t.tier} {...t} index={i} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
