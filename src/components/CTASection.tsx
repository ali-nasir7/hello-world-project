import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.45_0.06_155_/_0.06),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-light tracking-tight text-foreground md:text-5xl">
          Invest in a Longer,
          <br />
          <span className="text-gradient font-normal">Healthier Life</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground md:text-lg">
          Take the first step toward optimized health and longevity with
          personalized concierge medicine.
        </p>
        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
