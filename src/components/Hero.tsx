import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function MagneticButton({
  children,
  className,
  to,
}: {
  children: React.ReactNode;
  className?: string;
  to: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = e.clientX - rect.left - rect.width / 2;
    const cy = e.clientY - rect.top - rect.height / 2;
    x.set(cx * 0.15);
    y.set(cy * 0.15);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <Link to={to as any} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero-gradient px-6">
      {/* Subtle decorative circles */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-3xl" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 text-xs font-semibold tracking-[0.3em] text-primary/80 md:text-sm"
        >
          CONCIERGE MEDICINE
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Optimize Your Health.
          <br />
          <span className="text-gradient font-normal">Extend Your Life.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:mt-8 md:text-lg"
        >
          Personalized concierge medicine designed for longevity, performance,
          and total wellness.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-12"
        >
          <MagneticButton
            to="/contact"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            Book Consultation
          </MagneticButton>
          <MagneticButton
            to="/services"
            className="rounded-full border border-border bg-card/50 px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-card hover:shadow-md"
          >
            Explore Services
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
