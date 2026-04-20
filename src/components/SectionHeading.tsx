import { motion } from "framer-motion";

export default function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 text-center"
    >
      <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-primary/80">
        {label}
      </p>
      <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
