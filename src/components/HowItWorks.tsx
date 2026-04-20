import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <MessageCircle size={24} />,
    title: "Consultation",
    description:
      "Begin with an in-depth health assessment and one-on-one consultation.",
  },
  {
    icon: <ClipboardList size={24} />,
    title: "Personalized Plan",
    description:
      "Receive a custom longevity and wellness plan built around your biomarkers.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Ongoing Optimization",
    description:
      "Continuous monitoring and adjustments to keep you at peak performance.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-primary/80">
            THE PROCESS
          </p>
          <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl">
            How It Works
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {step.icon}
              </div>
              <span className="mb-1 text-xs font-medium tracking-[0.2em] text-muted-foreground/60">
                STEP {i + 1}
              </span>
              <h3 className="mb-2 text-lg font-medium tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
