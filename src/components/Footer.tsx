import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-light tracking-[0.15em] text-foreground">
                LIVLONG
              </span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-primary">
                MD
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Personalized concierge medicine designed for longevity,
              performance, and total wellness.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.15em] text-foreground/80">
              NAVIGATE
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { to: "/" as const, label: "Home" },
                { to: "/services" as const, label: "Services" },
                { to: "/membership" as const, label: "Membership" },
                { to: "/about" as const, label: "About" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.15em] text-foreground/80">
              SERVICES
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                "Longevity Consultation",
                "Biomarker Testing",
                "IV Therapy",
                "Weight Loss",
              ].map((s) => (
                <span key={s} className="text-sm text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.15em] text-foreground/80">
              CONTACT
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <span>hello@livlongmd.com</span>
              <span>(555) 123-4567</span>
              <span>Beverly Hills, CA</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6">
          <p className="text-center text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} LivLong MD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
