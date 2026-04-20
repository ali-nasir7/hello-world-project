import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

interface PricingCardProps {
  tier: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  index: number;
}

export default function PricingCard({
  tier,
  price,
  period,
  features,
  highlighted = false,
  index,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative flex flex-col rounded-2xl p-8 transition-shadow duration-500 hover:shadow-lg ${
        highlighted
          ? "border border-primary/20 bg-primary/[0.04] shadow-md"
          : "glass-card"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[10px] font-semibold tracking-[0.15em] text-primary-foreground">
          POPULAR
        </span>
      )}

      <div className="mb-6">
        <h3 className="text-sm font-semibold tracking-[0.1em] text-muted-foreground">
          {tier}
        </h3>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-4xl font-light tracking-tight text-foreground">
            {price}
          </span>
          <span className="text-sm text-muted-foreground">{period}</span>
        </div>
      </div>

      <div className="mb-8 flex flex-1 flex-col gap-3">
        {features.map((f) => (
          <div key={f} className="flex items-start gap-2.5">
            <Check
              size={15}
              className="mt-0.5 shrink-0 text-primary"
            />
            <span className="text-sm text-muted-foreground">{f}</span>
          </div>
        ))}
      </div>

      <Link
        to="/contact"
        className={`w-full rounded-full py-3 text-center text-sm font-medium transition-all duration-300 ${
          highlighted
            ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
            : "border border-border bg-card text-foreground hover:bg-accent hover:shadow-md"
        }`}
      >
        Get Started
      </Link>
    </motion.div>
  );
}
