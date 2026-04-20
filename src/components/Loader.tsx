import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-hero-gradient"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl font-light tracking-[0.2em] text-foreground/90 md:text-4xl">
              LIVLONG
            </h1>
            <span className="text-xs font-medium tracking-[0.3em] text-muted-foreground">
              MD
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="h-[1px] w-48 overflow-hidden bg-border">
              <motion.div
                className="h-full bg-primary/60"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground/60">
              {progress < 100 ? "LOADING" : "WELCOME"}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
