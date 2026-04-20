import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { MapPin, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — LivLong MD" },
      { name: "description", content: "Get in touch with LivLong MD. Book a consultation or ask us about our longevity and wellness programs." },
      { property: "og:title", content: "Contact — LivLong MD" },
      { property: "og:description", content: "Book a consultation or reach out to our concierge medicine team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-hero-gradient px-6 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            label="GET IN TOUCH"
            title="Start Your Journey"
            subtitle="Ready to optimize your health? Reach out and we'll guide you through the next steps."
          />
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <h3 className="mb-6 text-xl font-medium tracking-tight text-foreground">
              Contact Information
            </h3>
            <div className="flex flex-col gap-5">
              {[
                { icon: <Mail size={18} />, label: "livlongmd.com" },
                { icon: <Phone size={18} />, label: "123" },
                { icon: <MapPin size={18} />, label: "abc" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] text-foreground/80">
                HOURS
              </p>
              <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                <span>Monday – Friday: 8:00 AM – 6:00 PM</span>
                <span>Saturday: 9:00 AM – 2:00 PM</span>
                <span>Sunday: Closed</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            {submitted ? (
              <div className="glass-card flex flex-col items-center justify-center rounded-2xl p-12 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  Message Sent
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you for reaching out. We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card flex flex-col gap-5 rounded-2xl p-8">
                <div>
                  <label className="mb-1.5 block text-xs font-medium tracking-wide text-foreground/80">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium tracking-wide text-foreground/80">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium tracking-wide text-foreground/80">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                    placeholder="Tell us about your health goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
