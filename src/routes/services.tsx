import { createFileRoute } from "@tanstack/react-router";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import SectionHeading from "../components/SectionHeading";
import {
  Activity,
  FlaskConical,
  Droplets,
  Scale,
  Brain,
  Heart,
  Dna,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — LivLong MD" },
      { name: "description", content: "Explore our precision wellness services: longevity consultations, biomarker testing, IV therapy, weight loss, and more." },
      { property: "og:title", content: "Services — LivLong MD" },
      { property: "og:description", content: "Explore our precision wellness services designed for optimal longevity and performance." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Longevity Consultation",
    description: "Comprehensive health assessment focused on extending healthspan, optimizing biological age, and building a personalized longevity roadmap.",
    icon: <Activity size={22} />,
  },
  {
    title: "Biomarker Lab Testing",
    description: "Advanced diagnostic panels tracking 100+ biomarkers including hormones, metabolic markers, and inflammatory indicators.",
    icon: <FlaskConical size={22} />,
  },
  {
    title: "IV Therapy",
    description: "Custom intravenous nutrient protocols for recovery, energy, immune support, and deep cellular repair.",
    icon: <Droplets size={22} />,
  },
  {
    title: "Weight Loss Programs",
    description: "Medically supervised weight management combining peptide therapy, nutrition science, and metabolic optimization.",
    icon: <Scale size={22} />,
  },
  {
    title: "Cognitive Enhancement",
    description: "Brain health optimization through neurofeedback, nootropic protocols, and cognitive performance testing.",
    icon: <Brain size={22} />,
  },
  {
    title: "Cardiovascular Health",
    description: "Advanced cardiac screening, vascular health assessment, and preventive cardiology protocols.",
    icon: <Heart size={22} />,
  },
  {
    title: "Genetic Analysis",
    description: "Whole genome sequencing and pharmacogenomic testing to personalize your treatment protocols.",
    icon: <Dna size={22} />,
  },
  {
    title: "Performance Optimization",
    description: "Peak performance protocols for executives and athletes including hormone optimization and recovery science.",
    icon: <Zap size={22} />,
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-hero-gradient px-6 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            label="WHAT WE OFFER"
            title="Precision Wellness Services"
            subtitle="Evidence-based treatments and diagnostics tailored to your unique biology, goals, and lifestyle."
          />
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
